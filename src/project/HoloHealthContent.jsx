import React from 'react';

const NOTION_URL =
  'https://app.notion.com/p/HoloHealth-Iconography-Visual-System-3c23e6c896238027a77ef87eeb315a85';

export default function HoloHealthCaseStudyRetro() {
  return (
    <div className="holo-window">
      <main className="holo-case-study">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="holo-hero">
          <div className="holo-container">

            <div className="holo-eyebrow mono-font">
              <span className="holo-dot" />
              HoloHealth — Iconography &amp; Visual System
            </div>

            <h1 className="reading-heading">
              Building a visual language for a
              growing veterinary health platform
            </h1>

            <p className="holo-hero-description reading-font">
              I led the visual direction and production of
              HoloHealth&apos;s iconography system, working directly
              with the founder and directing another designer
              throughout the project.
            </p>

            <div className="holo-meta-grid">
              <Meta label="Role">Creative / Design Lead</Meta>
              <Meta label="Studio">Conania</Meta>
              <Meta label="Timeline">Apr 2025 — Jun 2026</Meta>
              <Meta label="Scope">2,500+ icons</Meta>
              <Meta label="Credits">Founder · Designer · 2D Animator</Meta>
            </div>

          </div>
        </section>


        {/* =========================================
            LIVE WEBSITE
        ========================================= */}

        <section className="holo-section holo-section-tight">
          <div className="holo-container">
            <MediaPlaceholder
              type="video"
              label="LIVE HOLOHEALTH WEBSITE"
              description="Show the iconography being used naturally throughout the product."
            />
          </div>
        </section>


        {/* =========================================
            01 — MORE THAN MAKING ICONS
        ========================================= */}

        <section className="holo-section">
          <div className="holo-container">

            <SectionIntro number="01" title="More than making icons" />

            <div className="holo-two-column">
              <div>
                <p className="reading-font">
                  HoloHealth needed a visual language for a
                  growing veterinary health platform.
                </p>
                <p className="reading-font">
                  When we started, there was no established
                  iconography system yet — only references from
                  the founder and a large set of concepts to
                  translate.
                </p>
              </div>

              <PullQuote tone="green">
                The challenge was to make unfamiliar information{' '}
                <strong className="reading-heading">
                  clear, consistent, and scalable
                </strong>{' '}
                while working at a fast pace.
              </PullQuote>
            </div>

            <MediaPlaceholder
              label="ICON COLLAGE"
              description="30–50 selected icons showing the range of the system."
              tags={[
                'Animals',
                'Anatomy',
                'Conditions',
                'Behavior',
                'Medication',
                'Devices',
                'Services',
              ]}
            />

          </div>
        </section>


        {/* =========================================
            02 — DOMAIN
        ========================================= */}

        <section className="holo-section holo-section-gray">
          <div className="holo-container">

            <SectionIntro number="02" title="The domain was part of the design problem" />

            <div className="holo-two-column">
              <div>
                <p className="reading-font">
                  Veterinary health was a domain I wasn&apos;t
                  deeply familiar with.
                </p>
                <p className="reading-font">
                  Some concepts were highly specific to certain
                  species, breeds, conditions, or clinical
                  contexts. Others were terms that weren&apos;t
                  immediately obvious visually.
                </p>
              </div>

              <MediaPlaceholder
                label="COMPLEX / UNFAMILIAR ICONS"
                description="Show 6–9 icons representing some of the more complex or unfamiliar concepts."
                compact
              />
            </div>

            <div className="holo-process-callout reading-heading">
              <span>Understand</span>
              <span className="holo-arrow">→</span>
              <span>simplify</span>
              <span className="holo-arrow">→</span>
              <span>visualize</span>
            </div>

            <p className="holo-centered-text reading-font">
              Before designing an icon, we often had to
              understand{' '}
              <strong className="reading-heading">
                what the concept actually meant
              </strong>{' '}
              and what information mattered visually.
            </p>

          </div>
        </section>


        {/* =========================================
            03 — MY ROLE
        ========================================= */}

        <section className="holo-section">
          <div className="holo-container">

            <SectionIntro
              number="03"
              title="My role"
              subtitle="I led the system, not just the production."
            />

            <div className="holo-two-column">
              <p className="reading-font">
                Through Conania, I worked directly with the
                founder to establish the initial visual
                direction and develop the first master icons.
              </p>
              <p className="reading-font">
                Once approved, another designer handled most
                of the production while I focused on{' '}
                <strong className="reading-heading">
                  direction, review, problem solving, timeline,
                  and client communication.
                </strong>
              </p>
            </div>

            <Workflow />

            <MediaPlaceholder
              label="MASTER ICONS"
              description="The first master icons that established the direction for production."
            />

          </div>
        </section>


        {/* =========================================
            04 — VISUAL LANGUAGE
        ========================================= */}

        <section className="holo-section holo-section-dark">
          <div className="holo-container">

            <SectionIntro
              number="04"
              title="Building the visual language"
              subtitle="A small set of decisions designed to scale."
              dark
            />

            <p className="holo-dark-intro reading-font">
              The system wasn&apos;t built around a long list of
              formal rules.
            </p>
            <p className="holo-dark-intro reading-font">
              Instead, we established a small set of recurring
              visual decisions that could scale across very
              different concepts.
            </p>

            <SystemPrinciple number="01" title="Form" subtitle="Outline + fill">
              <p className="reading-font">
                Outlined forms created a shared foundation
                across animals, anatomy, objects, and medical
                concepts. Filled areas could then highlight
                specific information.
              </p>
              <MediaPlaceholder label="FORM EXAMPLES" description="Show 4–6 close-up icons." compact dark />
            </SystemPrinciple>

            <SystemPrinciple number="02" title="Color carries meaning">
              <p className="reading-font">
                Color wasn&apos;t only decorative. It became a
                visual cue for{' '}
                <strong className="reading-heading">
                  conditions, states, and functional meaning
                </strong>{' '}
                depending on the context.
              </p>
              <ColorScale />
            </SystemPrinciple>

            <SystemPrinciple number="03" title="One language, many contexts">
              <p className="reading-font">
                The same visual logic had to work across very
                different subjects.
              </p>
              <CategoryStrip />
            </SystemPrinciple>

          </div>
        </section>


        {/* =========================================
            05 — SCALE
        ========================================= */}

        <section className="holo-section">
          <div className="holo-container">

            <SectionIntro number="05" title="From masters to 2,500+" />

            <div className="holo-two-column">
              <p className="reading-font">
                Once the direction was approved, the problem
                changed.
              </p>

              <PullQuote tone="blue">
                It was no longer:
                <br />
                <strong className="reading-heading">
                  “What should this style look like?”
                </strong>
                <br /><br />
                It became:
                <br />
                <strong className="reading-heading">
                  “How do we keep making new things without
                  losing the language?”
                </strong>
              </PullQuote>
            </div>

            <ScaleDiagram />

            <MediaPlaceholder
              label="MASTER → PRODUCTION BATCH"
              description="Show how master icons evolved into production batches."
            />

            <p className="holo-body-wide reading-font">
              The master icons became references for production
              while I reviewed deliveries and stepped in
              whenever a concept needed a different visual
              solution.
            </p>

          </div>
        </section>


        {/* =========================================
            06 — SPEED
        ========================================= */}

        <section className="holo-section holo-section-gray">
          <div className="holo-container">

            <SectionIntro number="06" title="Designing at speed" />

            <div className="holo-two-column">
              <p className="reading-font">
                The project moved quickly and the library kept
                growing.
              </p>

              <div>
                <PullQuote tone="green">
                  At that scale, consistency wasn&apos;t about
                  making every icon identical.
                </PullQuote>
                <p className="reading-font">
                  It was about knowing{' '}
                  <strong className="reading-heading">
                    which decisions should stay fixed
                  </strong>{' '}
                  and where the system could flex.
                </p>
              </div>
            </div>

            <BatchGrid />

          </div>
        </section>


        {/* =========================================
            07 — SYSTEM IN USE
        ========================================= */}

        <section className="holo-section">
          <div className="holo-container">

            <SectionIntro number="07" title="A system in use" />

            <p className="holo-body-wide reading-font">
              The icons weren&apos;t created as an isolated asset
              library. They became part of HoloHealth&apos;s
              actual product experience.
            </p>

            <MediaPlaceholder
              type="video"
              label="LIVE HOLOHEALTH WEBSITE"
              description="Show the iconography in context."
            />

          </div>
        </section>


        {/* =========================================
            08 — OUTCOME
        ========================================= */}

        <section className="holo-section holo-section-dark">
          <div className="holo-container">

            <SectionIntro
              number="08"
              title="2,500+ icons later"
              subtitle="A visual language built to scale."
              dark
            />

            <div className="holo-stat-grid">
              <Stat value="2,500+" label="icons" />
              <Stat value="1" label="shared visual language" />
              <Stat value="Multiple" label="species, conditions, states & use cases" />
              <Stat value="Cross-functional" label="design → animation" />
            </div>

            <MediaPlaceholder
              label="FINAL ICON GRID"
              description="Show 50–100 strongest icons. Prioritize variety and consistency."
              dark
            />

          </div>
        </section>


        {/* =========================================
            09 — REFLECTION
        ========================================= */}

        <section className="holo-section holo-final">
          <div className="holo-container holo-final-container">

            <SectionIntro number="09" title="Beyond the icon" />

            <div className="holo-final-copy">
              <p className="reading-font">
                HoloHealth changed how I think about my own
                visual practice.
              </p>
              <p className="reading-font">
                After years of relying heavily on visual
                intuition, I started recognizing the systems
                underneath it —{' '}
                <strong className="reading-heading">
                  patterns, constraints, decisions, and ways of
                  working that another designer could follow.
                </strong>
              </p>
              <p className="reading-font">
                That made me increasingly interested in what
                happens beyond the visual layer:{' '}
                <strong className="reading-heading">
                  how systems work, how people interact with
                  them, and eventually how to build them.
                </strong>
              </p>
            </div>

            <a
              href={NOTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="holo-notion-link ui-font"
            >
              Open original case study ↗
            </a>

          </div>
        </section>

      </main>

      <div className="holo-statusbar">
        <div className="holo-status-item ui-font">
          HoloHealth — Iconography &amp; Visual System
        </div>
        <div className="holo-status-item holo-status-ready ui-font">
          Ready
        </div>
      </div>

      <style>{`
        :root {
          --holo-blue: #3867d6;
          --holo-green: #20bf6b;
          --holo-red: #eb3b5a;
        }

        .holo-window {
          width: 100%;
          min-height: 520px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #c0c0c0;
          color: #000;
          border: 2px solid;
          border-color: #fff #808080 #808080 #fff;
          box-sizing: border-box;
        }

        .holo-window *,
        .holo-window *::before,
        .holo-window *::after {
          box-sizing: border-box;
        }

        .holo-window p {
          margin: 0 0 20px;
        }

        .holo-window strong {
          font-weight: 700;
        }




        /* =========================================
           CASE STUDY BODY
        ========================================= */

        .holo-case-study {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          overflow-x: hidden;
          background: #fff;
          scroll-behavior: smooth;
        }

        .holo-container {
          width: min(1100px, calc(100% - 48px));
          margin: 0 auto;
        }


        /* =========================================
           HERO
        ========================================= */

        .holo-hero {
          padding: 64px 0 56px;
          background: #f4f4f2;
          border-bottom: 1px solid #999;
        }

        .holo-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          color: #555;
          font-size: 11px;
          line-height: 16px;
        }

        .holo-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--holo-green);
        }

        .holo-hero h1 {
          max-width: 880px;
          margin: 0;
          color: #080808;
          font-size: clamp(30px, 4.6vw, 52px);
          line-height: 1.08;
        }

        .holo-hero-description {
          max-width: 680px;
          margin: 28px 0 0;
          color: #333;
          font-size: 16px;
          line-height: 26px;
        }

        .holo-meta-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
          margin-top: 44px;
          padding-top: 20px;
          border-top: 1px solid #999;
        }

        .holo-meta-label {
          display: block;
          margin-bottom: 6px;
          color: #666;
          font-size: 10px;
          line-height: 14px;
          text-transform: uppercase;
        }

        .holo-meta-grid strong {
          display: block;
          font-size: 13px;
          line-height: 18px;
        }


        /* =========================================
           SECTIONS
        ========================================= */

        .holo-section {
          padding: 72px 0;
        }

        .holo-section-tight {
          padding: 40px 0;
        }

        .holo-section-gray {
          background: #f3f3f1;
        }

        .holo-section-dark {
          background: #101010;
          color: #fff;
        }

        .holo-section-dark p {
          color: #ccc;
        }

        .holo-section-dark strong {
          color: #fff;
        }

        .holo-final {
          padding: 88px 0;
          background: #f4f4f2;
        }

        .holo-final-container {
          max-width: 900px;
        }


        /* =========================================
           SECTION INTRO
        ========================================= */

        .holo-section-intro {
          margin-bottom: 46px;
        }

        .holo-section-number {
          display: block;
          margin-bottom: 10px;
          color: #777;
          font-size: 11px;
        }

        .holo-section-dark .holo-section-number {
          color: #888;
        }

        .holo-section-intro h2 {
          max-width: 800px;
          margin: 0;
          color: #000;
          font-size: clamp(24px, 3.2vw, 38px);
          line-height: 1.1;
        }

        .holo-section-dark .holo-section-intro h2 {
          color: #fff;
        }

        .holo-section-subtitle {
          margin: 12px 0 0;
          color: #555;
          font-size: 15px;
          line-height: 24px;
        }

        .holo-section-dark .holo-section-subtitle {
          color: #aaa;
        }


        /* =========================================
           BODY
        ========================================= */

        .holo-two-column {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 60px;
          align-items: start;
        }

        .holo-two-column p,
        .holo-body-wide {
          max-width: 620px;
          color: #333;
          font-size: 15px;
          line-height: 25px;
        }

        .holo-section-dark .holo-two-column p,
        .holo-section-dark .holo-body-wide {
          color: #ccc;
        }

        .holo-centered-text {
          max-width: 660px;
          margin: 30px auto 0 !important;
          color: #555;
          text-align: center;
          font-size: 14px;
          line-height: 23px;
        }


        /* =========================================
           PULL QUOTE
        ========================================= */

        .holo-pullquote {
          margin: 0;
          padding-left: 20px;
          border-left: 3px solid #000;
          color: #222;
          font-size: 17px;
          line-height: 27px;
        }

        .holo-pullquote-blue {
          border-left-color: var(--holo-blue);
        }

        .holo-pullquote-green {
          border-left-color: var(--holo-green);
        }

        .holo-section-dark .holo-pullquote {
          border-left-color: #fff;
          color: #fff;
        }


        /* =========================================
           MEDIA
        ========================================= */

        .holo-media {
          width: 100%;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 48px;
          padding: 36px;
          background:
            linear-gradient(135deg, #eeeeec 25%, #e6e6e4 25%, #e6e6e4 50%, #eeeeec 50%, #eeeeec 75%, #e6e6e4 75%);
          background-size: 22px 22px;
          border: 1px solid #999;
          text-align: center;
        }

        .holo-media.compact {
          min-height: 220px;
          margin-top: 0;
        }

        .holo-media-dark {
          background:
            linear-gradient(135deg, #181818 25%, #151515 25%, #151515 50%, #181818 50%, #181818 75%, #151515 75%);
          background-size: 22px 22px;
          border-color: #333;
        }

        .holo-media-label {
          padding: 8px 11px;
          background: #fff;
          color: #111;
          border: 1px solid #999;
          font-size: 11px;
          line-height: 14px;
        }

        .holo-media-dark .holo-media-label {
          background: #222;
          color: #fff;
          border-color: #555;
        }

        .holo-media-description {
          max-width: 480px;
          margin: 13px 0 0;
          color: #666;
          font-size: 11px;
          line-height: 16px;
        }

        .holo-media-dark .holo-media-description {
          color: #aaa;
        }

        .holo-media-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
          margin-top: 16px;
        }

        .holo-media-tag {
          padding: 5px 8px;
          background: #fff;
          border: 1px solid #999;
          font-size: 10px;
        }


        /* =========================================
           PROCESS
        ========================================= */

        .holo-process-callout {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 60px;
          font-size: 19px;
        }

        .holo-arrow {
          color: #999;
        }


        /* =========================================
           WORKFLOW
        ========================================= */

        .holo-workflow {
          display: flex;
          flex-wrap: wrap;
          margin: 56px 0 0;
          border-top: 1px solid #999;
          border-left: 1px solid #999;
        }

        .holo-workflow-node {
          flex: 1 1 130px;
          min-height: 74px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          background: #fff;
          border-right: 1px solid #999;
          border-bottom: 1px solid #999;
          text-align: center;
          font-size: 11px;
          color: #333;
        }


        /* =========================================
           SYSTEM
        ========================================= */

        .holo-system-principle {
          padding: 44px 0;
          border-top: 1px solid #333;
        }

        .holo-system-heading {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }

        .holo-system-number {
          color: #888;
          font-size: 11px;
        }

        .holo-system-heading h3 {
          margin: 0;
          color: #fff;
          font-size: 24px;
          line-height: 1.1;
        }

        .holo-system-heading h4 {
          margin: 6px 0 0;
          color: #aaa;
          font-size: 14px;
          font-weight: 400;
        }

        .holo-system-content {
          margin-left: 72px;
        }

        .holo-system-content p {
          max-width: 620px;
          font-size: 15px;
          line-height: 25px;
        }


        /* =========================================
           COLOR
        ========================================= */

        .holo-color-scale {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 36px;
          border: 1px solid #333;
        }

        .holo-color {
          min-height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 16px;
        }

        .holo-color-blue { background: var(--holo-blue); }
        .holo-color-green { background: var(--holo-green); }
        .holo-color-red { background: var(--holo-red); }

        .holo-color-name {
          color: rgba(255,255,255,.75);
          font-size: 10px;
        }

        .holo-color-value {
          margin-top: 4px;
          color: #fff;
          font-size: 19px;
          font-weight: 700;
        }


        /* =========================================
           CATEGORY
        ========================================= */

        .holo-category-strip {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          margin-top: 32px;
          border: 1px solid #333;
        }

        .holo-category {
          min-height: 110px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 12px;
          border-right: 1px solid #333;
        }

        .holo-category:last-child { border-right: 0; }

        .holo-category-icon {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #aaa;
          font-size: 24px;
        }

        .holo-category-name {
          color: #777;
          font-size: 9px;
        }


        /* =========================================
           SCALE
        ========================================= */

        .holo-scale {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 48px;
        }

        .holo-scale-step {
          min-height: 130px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px;
          background: #fafafa;
          border: 1px solid #999;
        }

        .holo-scale-number {
          color: #777;
          font-size: 10px;
        }

        .holo-scale-title {
          margin-top: 8px;
          font-size: 19px;
          font-weight: 700;
        }

        .holo-scale-description {
          margin-top: 6px;
          color: #777;
          font-size: 10px;
        }


        /* =========================================
           BATCH
        ========================================= */

        .holo-batch-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 48px;
        }

        .holo-batch {
          min-height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px;
          background: #fff;
          border: 1px solid #999;
        }

        .holo-batch-number {
          color: #777;
          font-size: 10px;
        }

        .holo-batch-icons {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 5px;
        }

        .holo-batch-icon {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eee;
          color: #555;
          font-size: 11px;
        }

        .holo-batch-footer {
          font-size: 10px;
        }


        /* =========================================
           STATS
        ========================================= */

        .holo-stat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin: 48px 0;
          border-top: 1px solid #333;
          border-bottom: 1px solid #333;
        }

        .holo-stat {
          min-height: 130px;
          padding: 20px;
          border-right: 1px solid #333;
        }

        .holo-stat:last-child { border-right: 0; }

        .holo-stat-value {
          color: #fff;
          font-size: 26px;
          line-height: 1;
          font-weight: 700;
        }

        .holo-stat-label {
          margin-top: 12px;
          color: #999;
          font-size: 10px;
          line-height: 14px;
        }


        /* =========================================
           FINAL
        ========================================= */

        .holo-final-copy p {
          margin: 0 0 24px;
          color: #333;
          font-size: 18px;
          line-height: 29px;
        }

        .holo-notion-link {
          display: inline-block;
          margin-top: 30px;
          padding: 10px 15px;
          background: #000;
          color: #fff;
          border: 2px solid #000;
          text-decoration: none;
          font-size: 12px;
        }

        .holo-notion-link:hover {
          background: #fff;
          color: #000;
        }


        /* =========================================
           STATUS BAR
        ========================================= */

        .holo-statusbar {
          flex: 0 0 23px;
          height: 23px;
          display: flex;
          gap: 4px;
          padding: 2px 4px;
          background: #c0c0c0;
        }

        .holo-status-item {
          display: flex;
          align-items: center;
          padding: 0 6px;
          border-top: 1px solid #808080;
          border-left: 1px solid #808080;
          border-right: 1px solid #fff;
          border-bottom: 1px solid #fff;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 11px;
        }

        .holo-status-ready {
          width: 100px;
        }


        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 900px) {
          .holo-container { width: min(100% - 32px, 1100px); }
          .holo-meta-grid { grid-template-columns: repeat(2, 1fr); }
          .holo-two-column { grid-template-columns: 1fr; gap: 32px; }
          .holo-workflow { grid-template-columns: 1fr; }
          .holo-system-content { margin-left: 0; }
        }

        @media (max-width: 700px) {
          .holo-hero { padding: 48px 0 40px; }
          .holo-section { padding: 56px 0; }
          .holo-hero h1 { font-size: 34px; }
          .holo-meta-grid { grid-template-columns: 1fr; }
          .holo-category-strip { grid-template-columns: repeat(3, 1fr); }
          .holo-scale, .holo-batch-grid { grid-template-columns: 1fr; }
          .holo-stat-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 520px) {
          .holo-container { width: calc(100% - 24px); }
          .holo-category-strip, .holo-color-scale, .holo-stat-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}


/* =========================================
   META
========================================= */

function Meta({ label, children }) {
  return (
    <div>
      <span className="holo-meta-label ui-font">{label}</span>
      <strong className="reading-heading">{children}</strong>
    </div>
  );
}


/* =========================================
   SECTION INTRO
========================================= */

function SectionIntro({ number, title, subtitle, dark = false }) {
  return (
    <div className="holo-section-intro">
      <span className="holo-section-number mono-font">{number}</span>
      <h2 className="reading-heading">{title}</h2>
      {subtitle && <p className="holo-section-subtitle reading-font">{subtitle}</p>}
    </div>
  );
}


/* =========================================
   PULL QUOTE
========================================= */

function PullQuote({ children, tone = 'default' }) {
  const toneClass =
    tone === 'blue' ? 'holo-pullquote-blue'
    : tone === 'green' ? 'holo-pullquote-green'
    : '';

  return (
    <blockquote className={`holo-pullquote reading-font ${toneClass}`}>
      {children}
    </blockquote>
  );
}


/* =========================================
   MEDIA PLACEHOLDER
========================================= */

function MediaPlaceholder({
  type = 'image',
  label,
  description,
  tags = [],
  compact = false,
  dark = false,
}) {
  return (
    <div
      className={[
        'holo-media',
        compact ? 'compact' : '',
        dark ? 'holo-media-dark' : '',
      ].filter(Boolean).join(' ')}
    >
      <div className="holo-media-label mono-font">
        {type === 'video' ? '▶ ' : '▧ '}
        {label}
      </div>

      {description && (
        <p className="holo-media-description reading-font">{description}</p>
      )}

      {tags.length > 0 && (
        <div className="holo-media-tags">
          {tags.map((tag) => (
            <span key={tag} className="holo-media-tag mono-font">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}


/* =========================================
   WORKFLOW
========================================= */

function Workflow() {
  const steps = [
    'Founder',
    'Visual Direction',
    'Master Icons',
    'Approval',
    'Designer Production',
    'Review & Direction',
    'Final Assets',
  ];

  return (
    <div className="holo-workflow">
      {steps.map((step) => (
        <div key={step} className="holo-workflow-node ui-font">{step}</div>
      ))}
    </div>
  );
}


/* =========================================
   SYSTEM PRINCIPLE
========================================= */

function SystemPrinciple({ number, title, subtitle, children }) {
  return (
    <div className="holo-system-principle">
      <div className="holo-system-heading">
        <span className="holo-system-number mono-font">{number}</span>
        <div>
          <h3 className="reading-heading">{title}</h3>
          {subtitle && <h4 className="reading-font">{subtitle}</h4>}
        </div>
      </div>
      <div className="holo-system-content">{children}</div>
    </div>
  );
}


/* =========================================
   COLOR SCALE
========================================= */

function ColorScale() {
  return (
    <div className="holo-color-scale">
      <div className="holo-color holo-color-blue">
        <span className="holo-color-name mono-font">BLUE</span>
        <span className="holo-color-value reading-heading">Low</span>
      </div>
      <div className="holo-color holo-color-green">
        <span className="holo-color-name mono-font">GREEN</span>
        <span className="holo-color-value reading-heading">Normal</span>
      </div>
      <div className="holo-color holo-color-red">
        <span className="holo-color-name mono-font">RED</span>
        <span className="holo-color-value reading-heading">High / Critical</span>
      </div>
    </div>
  );
}


/* =========================================
   CATEGORY STRIP
========================================= */

function CategoryStrip() {
  const categories = [
    ['ANIMAL', '◉'],
    ['ANATOMY', '◇'],
    ['CONDITION', '△'],
    ['MEDICATION', '＋'],
    ['DEVICE', '□'],
    ['SERVICE', '✦'],
  ];

  return (
    <div className="holo-category-strip">
      {categories.map(([name, icon]) => (
        <div key={name} className="holo-category">
          <div className="holo-category-icon">{icon}</div>
          <div className="holo-category-name mono-font">{name}</div>
        </div>
      ))}
    </div>
  );
}


/* =========================================
   SCALE DIAGRAM
========================================= */

function ScaleDiagram() {
  const steps = [
    { number: '01', title: 'MASTER', description: '6–9 icons' },
    { number: '02', title: 'PRODUCTION', description: '20–100 icons' },
    { number: '03', title: 'SYSTEM', description: '2,500+ icons' },
  ];

  return (
    <div className="holo-scale">
      {steps.map((step) => (
        <div key={step.number} className="holo-scale-step">
          <span className="holo-scale-number mono-font">{step.number}</span>
          <span className="holo-scale-title reading-heading">{step.title}</span>
          <span className="holo-scale-description mono-font">{step.description}</span>
        </div>
      ))}
    </div>
  );
}


/* =========================================
   BATCH GRID
========================================= */

function BatchGrid() {
  const batches = ['Batch 01', 'Batch 02', 'Batch 03', 'Batch 04'];

  return (
    <div className="holo-batch-grid">
      {batches.map((batch, batchIndex) => (
        <div key={batch} className="holo-batch">
          <span className="holo-batch-number mono-font">{batch}</span>
          <div className="holo-batch-icons">
            {Array.from({ length: 10 }).map((_, index) => (
              <span key={index} className="holo-batch-icon">
                {['◉', '◇', '△', '＋', '□'][(index + batchIndex) % 5]}
              </span>
            ))}
          </div>
          <span className="holo-batch-footer mono-font">XX icons</span>
        </div>
      ))}
    </div>
  );
}


/* =========================================
   STAT
========================================= */

function Stat({ value, label }) {
  return (
    <div className="holo-stat">
      <div className="holo-stat-value reading-heading">{value}</div>
      <div className="holo-stat-label mono-font">{label}</div>
    </div>
  );
}