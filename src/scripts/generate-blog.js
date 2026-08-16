import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const ARTICLES_DIR = path.resolve('src/blog/articles');
const OUTPUT_DIR = path.resolve('dist/blog');

const BLOG_CSS_SOURCE = path.resolve('src/blog/blog.css');
const BLOG_CSS_OUTPUT = path.join(OUTPUT_DIR, 'blog.css');

const SITE_URL = 'https://perdanakun.com';

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

    return {
      ...data,
      content,
      html: marked.parse(content),
    };
  });
}

/**
 * Generate individual article page
 */
function generateArticle(article) {
  const articleDir = path.join(OUTPUT_DIR, article.slug);
  const outputPath = path.join(articleDir, 'index.html');

  fs.mkdirSync(articleDir, { recursive: true });

  const title = escapeHtml(article.title);
  const description = escapeHtml(article.description);
  const date = escapeHtml(article.date);
  const slug = encodeURIComponent(article.slug);

  const canonicalUrl = `${SITE_URL}/blog/${slug}/`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>${title} — Perdana Kurniawan Arta</title>

  <meta
    name="description"
    content="${description}"
  />

  <meta
    name="author"
    content="Perdana Kurniawan Arta"
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

    <div class="blog-titlebar">
      <span class="blog-titlebar-title">
        ${title}
      </span>

      <div class="blog-titlebar-buttons">
        <span class="blog-titlebar-button">_</span>
        <span class="blog-titlebar-button">□</span>
        <span class="blog-titlebar-button">×</span>
      </div>
    </div>

    <div class="blog-content">

      <a
        class="blog-back"
        href="/blog/"
      >
        ← Back to Writing
      </a>

      <article>

        <header>
          <h1>${title}</h1>

          <div class="blog-meta">
            <time datetime="${date}">
              ${date}
            </time>
          </div>
        </header>

        <div>
          ${article.html}
        </div>

      </article>

    </div>

  </main>
</body>
</html>`;

  fs.writeFileSync(outputPath, html);

  console.log(`Generated: /blog/${article.slug}/`);
}

/**
 * Generate blog index
 */
function generateBlogIndex(articles) {
  const outputPath = path.join(OUTPUT_DIR, 'index.html');

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const articleList = sortedArticles
    .map((article) => {
      return `
        <article class="blog-card">

          <h2>
            <a href="/blog/${article.slug}/">
              ${escapeHtml(article.title)}
            </a>
          </h2>

          <div class="blog-meta">
            <time datetime="${escapeHtml(article.date)}">
              ${escapeHtml(article.date)}
            </time>
          </div>

          <p>
            ${escapeHtml(article.description)}
          </p>

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

  <title>Writing — Perdana Kurniawan Arta</title>

  <meta
    name="description"
    content="Writing about design, technology, development, and the web."
  />

  <meta
    name="author"
    content="Perdana Kurniawan Arta"
  />

  <link
    rel="canonical"
    href="${SITE_URL}/blog/"
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:title"
    content="Writing — Perdana Kurniawan Arta"
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

  <meta
    name="twitter:card"
    content="summary"
  />

  <meta
    name="twitter:title"
    content="Writing — Perdana Kurniawan Arta"
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

    <div class="blog-titlebar">
      <span class="blog-titlebar-title">
        Writing.exe
      </span>

      <div class="blog-titlebar-buttons">
        <span class="blog-titlebar-button">_</span>
        <span class="blog-titlebar-button">□</span>
        <span class="blog-titlebar-button">×</span>
      </div>
    </div>

    <div class="blog-content">

      <header>
        <h1>Writing</h1>

        <p>
          Thoughts, experiments, and notes about design,
          technology, and building for the web.
        </p>
      </header>

      <section class="blog-article-list">
        ${articleList}
      </section>

    </div>

  </main>
</body>
</html>`;

  fs.writeFileSync(outputPath, html);

  console.log('Generated: /blog/');
}

/**
 * Copy blog stylesheet
 */
function copyBlogStylesheet() {
  if (!fs.existsSync(BLOG_CSS_SOURCE)) {
    throw new Error(
      `Blog stylesheet not found: ${BLOG_CSS_SOURCE}`
    );
  }

  fs.copyFileSync(
    BLOG_CSS_SOURCE,
    BLOG_CSS_OUTPUT
  );

  console.log('Copied: /blog/blog.css');
}

/**
 * Generate sitemap
 *
 * This generates dist/blog/sitemap-blog.xml.
 *
 * The main public sitemap can then reference this sitemap.
 */
function generateBlogSitemap(articles) {
  const outputPath = path.join(
    OUTPUT_DIR,
    'sitemap-blog.xml'
  );

  const urls = [
    {
      loc: `${SITE_URL}/blog/`,
      lastmod: new Date().toISOString().split('T')[0],
    },

    ...articles.map((article) => ({
      loc: `${SITE_URL}/blog/${encodeURIComponent(article.slug)}/`,
      lastmod: article.date,
    })),
  ];

  const urlEntries = urls
    .map(
      ({ loc, lastmod }) => `
  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
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

  fs.writeFileSync(outputPath, sitemap);

  console.log('Generated: /blog/sitemap-blog.xml');
}

/**
 * Main build process
 */
function main() {
  const articles = getArticles();

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  copyBlogStylesheet();

  articles.forEach(generateArticle);

  generateBlogIndex(articles);

  generateBlogSitemap(articles);

  console.log(
    `Generated ${articles.length} article(s).`
  );
}

main();
