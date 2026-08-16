import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const ARTICLES_DIR = path.resolve('src/blog/articles');
const OUTPUT_DIR = path.resolve('dist/blog');

const BLOG_CSS_SOURCE = path.resolve('src/blog/blog.css');
const BLOG_CSS_OUTPUT = path.join(OUTPUT_DIR, 'blog.css');

const SITE_URL = 'https://perdanakun.com';

const AUTHOR_NAME = 'Perdana Kurniawan Arta';


/**
 * Escape text for safe HTML output
 */
function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


/**
 * Escape text for XML
 */
function escapeXml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}


/**
 * Create a URL-friendly ID from a heading
 *
 * Example:
 *
 * "Why I'm writing"
 * ->
 * "why-im-writing"
 */
function slugifyHeading(value = '') {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[`*_~]/g, '')
    .replace(/&/g, 'and')
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}


/**
 * Extract article headings from Markdown
 *
 * We intentionally use only h2/h3 headings
 * for the article navigation.
 *
 * The Markdown H1 remains the article title.
 */
function getArticleHeadings(content = '') {
  const headings = [];
  const usedIds = new Set();

  const lines = String(content).split(/\r?\n/);

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+?)\s*#*\s*$/);

    if (!match) {
      continue;
    }

    const level = match[1].length;

    let text = match[2]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_~`]/g, '')
      .trim();

    if (!text) {
      continue;
    }

    let id = slugifyHeading(text);

    if (!id) {
      continue;
    }

    /*
     * Prevent duplicate IDs.
     *
     * Example:
     *
     * ## Introduction
     * ## Introduction
     *
     * becomes:
     *
     * introduction
     * introduction-2
     */
    const baseId = id;
    let counter = 2;

    while (usedIds.has(id)) {
      id = `${baseId}-${counter}`;
      counter += 1;
    }

    usedIds.add(id);

    headings.push({
      level,
      text,
      id,
    });
  }

  return headings;
}


/**
 * Add IDs to generated Markdown headings
 *
 * marked generates:
 *
 * <h2>Why I'm writing</h2>
 *
 * We transform that into:
 *
 * <h2 id="why-im-writing">Why I'm writing</h2>
 *
 * This makes the automatically generated TOC
 * work using normal HTML anchors.
 */
function addHeadingIds(html, headings) {
  let headingIndex = 0;

  return html.replace(
    /<h([23])>([\s\S]*?)<\/h\1>/g,
    (fullMatch, level, innerHtml) => {
      if (!headings[headingIndex]) {
        return fullMatch;
      }

      const heading = headings[headingIndex];

      headingIndex += 1;

      return `<h${level} id="${escapeHtml(
        heading.id
      )}">${innerHtml}</h${level}>`;
    }
  );
}


/**
 * Generate article table of contents
 */
function generateArticleToc(headings) {
  if (!headings.length) {
    return `
      <aside class="blog-sidebar blog-sidebar-empty">
        <div class="blog-sidebar-title">
          INDEX
        </div>

        <p class="blog-sidebar-empty-text">
          No sections
        </p>
      </aside>
    `;
  }

  const items = headings
    .map((heading, index) => {
      const number = String(index + 1).padStart(2, '0');

      return `
        <li class="blog-toc-item blog-toc-item-level-${heading.level}">
          <a
            class="blog-toc-link"
            href="#${escapeHtml(heading.id)}"
          >
            <span class="blog-toc-number">
              ${number}
            </span>

            <span class="blog-toc-text">
              ${escapeHtml(heading.text)}
            </span>
          </a>
        </li>
      `;
    })
    .join('\n');

  return `
    <aside class="blog-sidebar">

      <div class="blog-sidebar-title">
        INDEX
      </div>

      <nav
        class="blog-toc"
        aria-label="Article sections"
      >
        <ol class="blog-toc-list">
          ${items}
        </ol>
      </nav>

    </aside>
  `;
}


/**
 * Read all Markdown articles
 */
function getArticles() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith('.md'));

  return files.map((file) => {
    const filePath = path.join(ARTICLES_DIR, file);
    const source = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(source);

    if (!data.title) {
      throw new Error(`Missing title in ${file}`);
    }

    if (!data.description) {
      throw new Error(`Missing description in ${file}`);
    }

    if (!data.date) {
      throw new Error(`Missing date in ${file}`);
    }

    if (!data.slug) {
      throw new Error(`Missing slug in ${file}`);
    }

    const headings = getArticleHeadings(content);

    const parsedHtml = marked.parse(content);

    const html = addHeadingIds(
      parsedHtml,
      headings
    );

    return {
      ...data,
      content,
      html,
      headings,
    };
  });
}


/**
 * Generate individual article page
 */
function generateArticle(article) {
  const articleDir = path.join(
    OUTPUT_DIR,
    article.slug
  );

  const outputPath = path.join(
    articleDir,
    'index.html'
  );

  fs.mkdirSync(articleDir, {
    recursive: true,
  });

  const title = escapeHtml(article.title);
  const description = escapeHtml(
    article.description
  );
  const date = escapeHtml(article.date);

  const slug = encodeURIComponent(
    article.slug
  );

  const canonicalUrl =
    `${SITE_URL}/blog/${slug}/`;

  const articleToc =
    generateArticleToc(article.headings);

  const tagsHtml = Array.isArray(article.tags)
    ? `
      <div
        class="blog-tags"
        aria-label="Article topics"
      >
        ${article.tags
          .map(
            (tag) => `
              <span class="blog-tag">
                ${escapeHtml(tag)}
              </span>
            `
          )
          .join('')}
      </div>
    `
    : '';

  const html = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>${title} — ${AUTHOR_NAME}</title>

  <meta
    name="description"
    content="${description}"
  />

  <meta
    name="author"
    content="${AUTHOR_NAME}"
  />

  <link
    rel="canonical"
    href="${canonicalUrl}"
  />

  <!-- Open Graph -->

  <meta
    property="og:type"
    content="article"
  />

  <meta
    property="og:title"
    content="${title}"
  />

  <meta
    property="og:description"
    content="${description}"
  />

  <meta
    property="og:url"
    content="${canonicalUrl}"
  />

  <meta
    property="og:site_name"
    content="Perdana's Computer"
  />

  <!-- Twitter -->

  <meta
    name="twitter:card"
    content="summary"
  />

  <meta
    name="twitter:title"
    content="${title}"
  />

  <meta
    name="twitter:description"
    content="${description}"
  />

  <link
    rel="stylesheet"
    href="/blog/blog.css"
  />
</head>


<body>

  <main class="blog-window">


    <!-- =================================================
         MACINTOSH WINDOW TITLE BAR
         ================================================= -->

    <div class="blog-titlebar">

      <span class="blog-titlebar-title">
        ${title}
      </span>

      <div class="blog-titlebar-buttons">

        <span
          class="blog-titlebar-button"
          aria-hidden="true"
        >
          _
        </span>

        <span
          class="blog-titlebar-button"
          aria-hidden="true"
        >
          □
        </span>

        <span
          class="blog-titlebar-button"
          aria-hidden="true"
        >
          ×
        </span>

      </div>

    </div>


    <!-- =================================================
         ARTICLE CONTENT
         ================================================= -->

    <div class="blog-content">


      <div class="blog-layout">


        <!-- =================================================
             ARTICLE NAVIGATION
             ================================================= -->

        ${articleToc}


        <!-- =================================================
             MAIN ARTICLE
             ================================================= -->

        <article
          class="blog-article"
        >


          <!-- Back -->

          <a
            class="blog-back"
            href="/blog/"
          >
            ← Writing
          </a>


          <!-- Article header -->

          <header
            class="blog-post-header"
          >

            <div class="blog-post-author">

              <span
                class="blog-post-avatar"
                aria-hidden="true"
              >
                P
              </span>

              <div
                class="blog-post-author-info"
              >

                <strong>
                  ${AUTHOR_NAME}
                </strong>

                <time
                  datetime="${date}"
                >
                  ${date}
                </time>

              </div>

            </div>


            <h1>
              ${title}
            </h1>


            <p
              class="blog-description"
            >
              ${description}
            </p>


            ${tagsHtml}


          </header>


          <!-- Article body -->

          <div
            class="blog-article-content"
          >

            ${article.html}

          </div>


          <!-- Article footer -->

          <footer
            class="blog-post-footer"
          >

            <div
              class="blog-post-actions"
              aria-hidden="true"
            >

              <span>♡</span>
              <span>↩</span>
              <span>↗</span>

            </div>

            <p>
              End of article.
            </p>

          </footer>


        </article>


      </div>


    </div>


  </main>

</body>

</html>`;

  fs.writeFileSync(
    outputPath,
    html
  );

  console.log(
    `Generated: /blog/${article.slug}/`
  );
}


/**
 * Generate blog index
 */
function generateBlogIndex(articles) {
  const outputPath = path.join(
    OUTPUT_DIR,
    'index.html'
  );

  const sortedArticles = [...articles].sort(
    (a, b) =>
      new Date(b.date) -
      new Date(a.date)
  );

  const articleList = sortedArticles
    .map((article) => {

      const tagsHtml =
        Array.isArray(article.tags)
          ? `
            <div class="blog-tags">
              ${article.tags
                .slice(0, 3)
                .map(
                  (tag) => `
                    <span class="blog-tag">
                      ${escapeHtml(tag)}
                    </span>
                  `
                )
                .join('')}
            </div>
          `
          : '';

      return `
        <article class="blog-card">


          <div class="blog-card-author">

            <span
              class="blog-card-avatar"
              aria-hidden="true"
            >
              P
            </span>

            <div>

              <strong>
                ${AUTHOR_NAME}
              </strong>

              <time
                datetime="${escapeHtml(
                  article.date
                )}"
              >
                ${escapeHtml(
                  article.date
                )}
              </time>

            </div>

          </div>


          <h2>

            <a
              href="/blog/${encodeURIComponent(
                article.slug
              )}/"
            >
              ${escapeHtml(
                article.title
              )}
            </a>

          </h2>


          <p>
            ${escapeHtml(
              article.description
            )}
          </p>


          ${tagsHtml}


          <div
            class="blog-card-actions"
            aria-hidden="true"
          >

            <span>♡</span>
            <span>↩</span>
            <span>↗</span>

          </div>


        </article>
      `;
    })
    .join('\n');


  const html = `<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>
    Writing — ${AUTHOR_NAME}
  </title>

  <meta
    name="description"
    content="Writing about design, technology, development, and the web."
  />

  <meta
    name="author"
    content="${AUTHOR_NAME}"
  />

  <link
    rel="canonical"
    href="${SITE_URL}/blog/"
  />


  <!-- Open Graph -->

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:title"
    content="Writing — ${AUTHOR_NAME}"
  />

  <meta
    property="og:description"
    content="Writing about design, technology, development, and the web."
  />

  <meta
    property="og:url"
    content="${SITE_URL}/blog/"
  />

  <meta
    property="og:site_name"
    content="Perdana's Computer"
  />


  <!-- Twitter -->

  <meta
    name="twitter:card"
    content="summary"
  />

  <meta
    name="twitter:title"
    content="Writing — ${AUTHOR_NAME}"
  />

  <meta
    name="twitter:description"
    content="Writing about design, technology, development, and the web."
  />


  <link
    rel="stylesheet"
    href="/blog/blog.css"
  />

</head>


<body>

  <main class="blog-window">


    <!-- =================================================
         WINDOW TITLE BAR
         ================================================= -->

    <div class="blog-titlebar">

      <span class="blog-titlebar-title">
        Writing.exe
      </span>

      <div class="blog-titlebar-buttons">

        <span
          class="blog-titlebar-button"
          aria-hidden="true"
        >
          _
        </span>

        <span
          class="blog-titlebar-button"
          aria-hidden="true"
        >
          □
        </span>

        <span
          class="blog-titlebar-button"
          aria-hidden="true"
        >
          ×
        </span>

      </div>

    </div>


    <!-- =================================================
         BLOG HOME
         ================================================= -->

    <div class="blog-content">


      <header
        class="blog-home-header"
      >

        <p
          class="blog-home-eyebrow"
        >
          Perdana's Journal
        </p>

        <h1>
          Journey of Discovery
        </h1>

        <p>
Notes on design, code, and everything in between. </p>

      </header>


      <section
        class="blog-article-list"
        aria-label="Articles"
      >

        ${articleList}

      </section>


    </div>


  </main>

</body>

</html>`;

  fs.writeFileSync(
    outputPath,
    html
  );

  console.log(
    'Generated: /blog/'
  );
}


/**
 * Copy blog stylesheet
 */
function copyBlogStylesheet() {

  if (!fs.existsSync(
    BLOG_CSS_SOURCE
  )) {
    throw new Error(
      `Blog stylesheet not found: ${BLOG_CSS_SOURCE}`
    );
  }

  fs.copyFileSync(
    BLOG_CSS_SOURCE,
    BLOG_CSS_OUTPUT
  );

  console.log(
    'Copied: /blog/blog.css'
  );
}


/**
 * Generate sitemap
 *
 * This generates:
 *
 * dist/blog/sitemap-blog.xml
 *
 * The main public sitemap can then
 * reference this sitemap.
 */
function generateBlogSitemap(
  articles
) {

  const outputPath = path.join(
    OUTPUT_DIR,
    'sitemap-blog.xml'
  );

  const urls = [

    {
      loc: `${SITE_URL}/blog/`,
      lastmod:
        new Date()
          .toISOString()
          .split('T')[0],
    },

    ...articles.map(
      (article) => ({
        loc:
          `${SITE_URL}/blog/${encodeURIComponent(
            article.slug
          )}/`,

        lastmod:
          article.date,
      })
    ),

  ];


  const urlEntries = urls
    .map(
      ({ loc, lastmod }) => `
  <url>

    <loc>
      ${escapeXml(loc)}
    </loc>

    <lastmod>
      ${escapeXml(lastmod)}
    </lastmod>

  </url>`
    )
    .join('');


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${urlEntries}
</urlset>
`;


  fs.writeFileSync(
    outputPath,
    sitemap
  );

  console.log(
    'Generated: /blog/sitemap-blog.xml'
  );
}


/**
 * Main build process
 */
function main() {

  const articles =
    getArticles();

  fs.mkdirSync(
    OUTPUT_DIR,
    {
      recursive: true,
    }
  );

  copyBlogStylesheet();

  articles.forEach(
    generateArticle
  );

  generateBlogIndex(
    articles
  );

  generateBlogSitemap(
    articles
  );

  console.log(
    `Generated ${articles.length} article(s).`
  );
}


main();