import React from 'react';

import holohealthGif from '../assets/images/case-study/holohealth.gif';
import holohealthGif4 from '../assets/images/case-study/holohealth4.gif';
import holohealthGif5 from '../assets/images/case-study/holohealth5.gif';

const NOTION_URL =
  'https://app.notion.com/p/HoloHealth-Iconography-Visual-System-3c23e6c896238027a77ef87eeb315a85';

export default function HoloHealthCaseStudyRetro() {
  return (
    <div className="casestudy-window">
      <main className="casestudy">

     {/* =========================================
    HERO
========================================= */}

<section className="casestudy-hero">
  <div className="casestudy-container">

    <div className="casestudy-eyebrow">
      <span className="casestudy-dot" />

      <span className="casestudy-mono-muted">
        HoloHealth — Iconography &amp; Visual System
      </span>
    </div>

    <h1 className="casestudy-hero-title">
      Building a Visual Language for Veterinary Health
    </h1>

    <div className="casestudy-hero-media">
      <img
        src={holohealthGif}
        alt="HoloHealth website"
        className="casestudy-hero-image"
      />
    </div>

    <div className="casestudy-meta-grid">
      <Meta label="Role">
        Creative / Design Lead
      </Meta>

      <Meta label="Client">
        HoloHealth
      </Meta>

      <Meta label="Scope">
        2,500+ icons
      </Meta>

      <Meta label="Focus">
        Visual System
      </Meta>

      <Meta label="Timeline">
        Apr 2025 — Jun 2026
      </Meta>
    </div>

  </div>
</section>


{/* =========================================
    01 — OVERVIEW
========================================= */}

<section className="casestudy-section">
  <div className="casestudy-container">

    <SectionIntro
      number="Overview"
      title="Veterinary health is a visual problem."
    />

    <div className="casestudy-two-column">

      <div className="casestudy-copy">

        <p className="casestudy-body">
          HoloHealth needed to communicate a large range of
          veterinary concepts through visuals — from species and
          anatomy to conditions, medication, devices, and services.
        </p>

        <p className="casestudy-body">
          The challenge wasn't simply drawing the icons.
          It was creating a visual language that could keep
          working as the product and its library grew.
        </p>

      </div>

      <PullQuote tone="green">
        Make unfamiliar information{' '}
        <strong>
          recognizable, consistent, and scalable.
        </strong>
      </PullQuote>

    </div>

    <MediaPlaceholder
      label="THE LIBRARY"
      description="A selection of icons showing the breadth of the system."
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
    02 — STARTING POINT
========================================= */}

<section className="casestudy-section casestudy-section-gray">
  <div className="casestudy-container">

    <SectionIntro
      number="Starting Point"
      title="The product had a direction. The visual system didn't."
    />

    <div className="casestudy-two-column">

      <div className="casestudy-copy">

        <p className="casestudy-body">
          HoloHealth started without an established iconography
          system. The founder provided visual references, and I
          translated those references into an initial direction.
        </p>

        <p className="casestudy-body">
          I developed the first master icons, refined the direction
          with the founder, and used the approved work as the
          foundation for the larger library.
        </p>

      </div>

      <MediaPlaceholder
        label="FIRST MASTER ICONS"
        description="Show 6–9 early icons that established the visual direction."
        compact
      />

    </div>

    <div className="casestudy-process-callout">
      <span>Understand</span>
      <span className="casestudy-arrow">→</span>
      <span>simplify</span>
      <span className="casestudy-arrow">→</span>
      <span>visualize</span>
    </div>

    <p className="casestudy-centered-text">
      Many concepts were unfamiliar. Before drawing them,
      we first had to understand what they represented and
      what information needed to survive the simplification.
    </p>

  </div>
</section>


{/* =========================================
    03 — ROLE
========================================= */}

<section className="casestudy-section">
  <div className="casestudy-container">

    <SectionIntro
      number="My Role"
      title="I wasn't drawing every icon. I was directing the system."
      subtitle="Creative direction, production, review, and client communication."
    />

    <div className="casestudy-two-column">

      <p className="casestudy-body">
        Through Conania, I worked directly with the founder to
        establish the initial visual direction and develop the
        master icons used as production references.
      </p>

      <p className="casestudy-body">
        Once the direction was approved, another designer handled
        most of the production. I focused on{' '}
        <strong>
          direction, review, problem solving, timeline,
          and communication with the client.
        </strong>
      </p>

    </div>

    <Workflow />

    <MediaPlaceholder
      label="MASTER ICONS"
      description="The approved masters that became references for production."
    />

  </div>
</section>


{/* =========================================
    04 — VISUAL LANGUAGE
========================================= */}

<section className="casestudy-section casestudy-section-dark">
  <div className="casestudy-container">

    <SectionIntro
      number="Visual Language"
      title="A few rules. Thousands of possible combinations."
      subtitle="The system relied on recurring visual decisions rather than a large rulebook."
      dark
    />

    <div className="casestudy-dark-intro">

      <p className="casestudy-body">
        We didn't begin with a formal design system document.
      </p>

      <p className="casestudy-body">
        Instead, the visual language emerged through a small set
        of decisions that could be repeated across very different
        veterinary concepts.
      </p>

    </div>


    <SystemPrinciple
      number="01"
      title="Form"
      subtitle="Outline + fill"
    >

      <p className="casestudy-body">
        Outlined forms created a common structure across animals,
        anatomy, objects, and medical concepts. Filled areas were
        then used to emphasize specific information.
      </p>

      <MediaPlaceholder
        label="FORM"
        description="Show 4–6 close-up icons demonstrating outline and fill."
        compact
        dark
      />

    </SystemPrinciple>


    <SystemPrinciple
      number="02"
      title="Color"
      subtitle="Meaning through visual state"
    >

      <p className="casestudy-body">
        Color became another layer of information. Depending on
        the context, different colors could communicate states,
        conditions, or functional meaning.
      </p>

      <ColorScale />

    </SystemPrinciple>


    <SystemPrinciple
      number="03"
      title="Consistency"
      subtitle="One language across many subjects"
    >

      <p className="casestudy-body">
        The same visual logic had to survive very different
        subjects — from animals and anatomy to medication,
        devices, and services.
      </p>

      <CategoryStrip />

    </SystemPrinciple>

  </div>
</section>


{/* =========================================
    05 — SCALING
========================================= */}

<section className="casestudy-section">
  <div className="casestudy-container">

    <SectionIntro
      number="Scaling"
      title="Then the library started growing."
    />

    <div className="casestudy-two-column">

      <p className="casestudy-body">
        After the first direction was approved, production moved
        from exploration into repetition — with batches ranging
        from roughly 20 to 100 icons at a time.
      </p>

      <PullQuote tone="blue">

        The question changed from{' '}
        <strong>
          “What should this icon look like?”
        </strong>

        <br />
        <br />

        to{' '}

        <strong>
          “Does this still belong to the same language?”
        </strong>

      </PullQuote>

    </div>

    <ScaleDiagram />

    <MediaPlaceholder
      label="MASTER → PRODUCTION"
      description="Show how a small set of master icons informed larger production batches."
    />

    <p className="casestudy-body-wide">
      The masters became visual references for the production
      designer. I reviewed deliveries, resolved inconsistencies,
      and stepped in when a concept needed a different approach.
    </p>

  </div>
</section>


{/* =========================================
    06 — DESIGNING AT SPEED
========================================= */}

<section className="casestudy-section casestudy-section-gray">
  <div className="casestudy-container">

    <SectionIntro
      number="Working at Scale"
      title="Speed changed the way we made decisions."
    />

    <div className="casestudy-two-column">

      <p className="casestudy-body">
        The project was fast-paced, and the subject matter kept
        expanding. Some concepts were straightforward. Others
        required research before they could be simplified into an
        icon.
      </p>

      <div>

        <PullQuote tone="green">
          Consistency didn't mean making every icon identical.
        </PullQuote>

        <p className="casestudy-body casestudy-followup">
          It meant knowing{' '}
          <strong>
            what should remain consistent and where the system
            could flex.
          </strong>
        </p>

      </div>

    </div>

    <BatchGrid />

  </div>
</section>


{/* =========================================
    07 — IN CONTEXT
========================================= */}

<section className="casestudy-section">
  <div className="casestudy-container">

    <SectionIntro
      number="In Context"
      title="The system left the canvas."
    />

    <p className="casestudy-body-wide">
      These icons were created to become part of HoloHealth's
      actual product experience — not just an isolated asset
      library.
    </p>

    <MediaPlaceholder
      type="video"
      label="LIVE HOLOHEALTH WEBSITE"
      description="Show the iconography being used in the product."
    />

  </div>
</section>


{/* =========================================
    08 — OUTCOME
========================================= */}

<section className="casestudy-section casestudy-section-dark">
  <div className="casestudy-container">

    <SectionIntro
      number="Outcome"
      title="2,500+ icons. One visual language."
      subtitle="A production system that could keep expanding."
      dark
    />

    <div className="casestudy-stat-grid">

      <Stat
        value="2,500+"
        label="icons produced"
      />

      <Stat
        value="1"
        label="shared visual language"
      />

      <Stat
        value="Multiple"
        label="species, conditions, states & use cases"
      />

      <Stat
        value="Cross-functional"
        label="design → animation"
      />

    </div>

    <MediaPlaceholder
      label="FINAL ICON LIBRARY"
      description="Show 50–100 of the strongest icons. Prioritize variety, consistency, and range."
      dark
    />

  </div>
</section>


{/* =========================================
    09 — REFLECTION
========================================= */}

<section className="casestudy-section casestudy-final">
  <div className="casestudy-container casestudy-final-container">

    <SectionIntro
      number="Reflection"
      title="The project changed what I wanted to design next."
    />

    <div className="casestudy-final-copy">

      <p className="casestudy-final-paragraph">
        For years, I relied heavily on visual intuition.
        HoloHealth made me more aware of the systems underneath it.
      </p>

      <p className="casestudy-final-paragraph">
        Patterns, constraints, reusable decisions, and ways of
        working that another designer could understand and continue.
      </p>

      <p className="casestudy-final-paragraph">
        That became an important step in my transition from
        <strong>
          {' '}making visual assets
        </strong>
        {' '}toward understanding{' '}
        <strong>
          how design systems work, how people use them,
          and eventually how to build them.
        </strong>
      </p>

    </div>

    <a
      href={NOTION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="casestudy-notion-link"
    >
      Open original case study ↗
    </a>

  </div>
</section>

      </main>


      {/* =========================================
          STATUS BAR
      ========================================= */}

      <div className="casestudy-statusbar">

        <div className="casestudy-status-item">
          HoloHealth — Iconography &amp; Visual System
        </div>

        <div className="casestudy-status-item casestudy-status-ready">
          Ready
        </div>

      </div>


      <style>{`

        /* =====================================================
           DESIGN SYSTEM BRIDGE
           
           Typography is provided globally by the existing
           Case Study Font System.
           ===================================================== */

        .casestudy-window {

          /* ---------------------------------------------------
             COLOR
             --------------------------------------------------- */

          --cs-color-black: #000;
          --cs-color-white: #fff;

          --cs-color-ink: #111;
          --cs-color-text: #333;
          --cs-color-muted: #555;
          --cs-color-subtle: #666;
          --cs-color-faint: #777;
          --cs-color-border: #999;

          --cs-color-gray-50: #fafafa;
          --cs-color-gray-100: #f4f4f2;
          --cs-color-gray-150: #f3f3f1;
          --cs-color-gray-200: #eee;
          --cs-color-gray-300: #e6e6e4;
          --cs-color-gray-400: #c0c0c0;

          --cs-color-blue: #3867d6;
          --cs-color-green: #20bf6b;
          --cs-color-red: #eb3b5a;

          --cs-color-dark: #101010;
          --cs-color-dark-100: #151515;
          --cs-color-dark-200: #181818;
          --cs-color-dark-border: #333;
          --cs-color-dark-text: #ccc;
          --cs-color-dark-muted: #aaa;
          --cs-color-dark-subtle: #888;


          /* ---------------------------------------------------
             SEMANTIC COLORS
             --------------------------------------------------- */

          --cs-surface-page: var(--cs-color-white);
          --cs-surface-subtle: var(--cs-color-gray-100);
          --cs-surface-muted: var(--cs-color-gray-150);
          --cs-surface-card: var(--cs-color-gray-50);

          --cs-surface-dark: var(--cs-color-dark);
          --cs-surface-dark-pattern-a: var(--cs-color-dark-200);
          --cs-surface-dark-pattern-b: var(--cs-color-dark-100);

          --cs-text-primary: var(--cs-color-ink);
          --cs-text-secondary: var(--cs-color-text);
          --cs-text-muted: var(--cs-color-muted);
          --cs-text-subtle: var(--cs-color-subtle);

          --cs-text-on-dark: var(--cs-color-white);
          --cs-text-on-dark-secondary: var(--cs-color-dark-text);
          --cs-text-on-dark-muted: var(--cs-color-dark-muted);

          --cs-border-default: var(--cs-color-border);
          --cs-border-light: var(--cs-color-gray-300);
          --cs-border-dark: var(--cs-color-dark-border);

          --cs-accent-primary: var(--cs-color-blue);
          --cs-accent-success: var(--cs-color-green);
          --cs-accent-critical: var(--cs-color-red);


          /* ---------------------------------------------------
             SPACING
             --------------------------------------------------- */

          --cs-space-1: 4px;
          --cs-space-2: 6px;
          --cs-space-3: 8px;
          --cs-space-4: 10px;
          --cs-space-5: 12px;
          --cs-space-6: 13px;
          --cs-space-7: 15px;
          --cs-space-8: 16px;
          --cs-space-9: 18px;
          --cs-space-10: 20px;
          --cs-space-11: 24px;
          --cs-space-12: 28px;
          --cs-space-13: 30px;
          --cs-space-14: 32px;
          --cs-space-15: 36px;
          --cs-space-16: 40px;
          --cs-space-17: 44px;
          --cs-space-18: 48px;
          --cs-space-19: 56px;
          --cs-space-20: 60px;
          --cs-space-21: 64px;
          --cs-space-22: 72px;
          --cs-space-23: 88px;


          /* ---------------------------------------------------
             LAYOUT
             --------------------------------------------------- */

          --cs-container-max: 1100px;
          --cs-container-gutter: 48px;

          --cs-column-gap: 60px;
          --cs-column-gap-mobile: 32px;

          --cs-final-max: 900px;
          --cs-copy-max: 620px;
          --cs-quote-max: 600px;
          --cs-lead-max: 680px;


          /* ---------------------------------------------------
             BORDER
             --------------------------------------------------- */

          --cs-border-width: 1px;
          --cs-window-border-width: 2px;


          /* ---------------------------------------------------
             COMPONENT SIZES
             --------------------------------------------------- */

          --cs-media-height: 320px;
          --cs-media-height-compact: 220px;

          --cs-scale-height: 130px;
          --cs-category-height: 110px;
          --cs-batch-height: 160px;
          --cs-stat-height: 130px;

          --cs-status-height: 23px;


          /* ---------------------------------------------------
             WINDOW
             --------------------------------------------------- */

          --cs-window-bg: var(--cs-color-gray-400);
          --cs-window-text: var(--cs-color-black);
        }


        /* =====================================================
           BASE
           ===================================================== */

        .casestudy-window {
          width: 100%;
          min-height: 520px;

          display: flex;
          flex-direction: column;

          overflow: hidden;

          background: var(--cs-window-bg);
          color: var(--cs-window-text);

          border: var(--cs-window-border-width) solid;
          border-color:
            var(--cs-color-white)
            #808080
            #808080
            var(--cs-color-white);

          box-sizing: border-box;
        }

        .casestudy-window *,
        .casestudy-window *::before,
        .casestudy-window *::after {
          box-sizing: border-box;
        }

        .casestudy-window p {
          margin: 0 0 var(--cs-space-10);
        }

        .casestudy-window strong {
          font-weight: 700;
        }


        /* =====================================================
           MAIN
           ===================================================== */

        .casestudy {
          flex: 1;
          min-height: 0;

          overflow-y: auto;
          overflow-x: hidden;

          background: var(--cs-surface-page);

          scroll-behavior: smooth;
        }

        .casestudy-container {
          width: min(
            var(--cs-container-max),
            calc(100% - var(--cs-container-gutter))
          );

          margin: 0 auto;
        }


        /* =====================================================
           TYPOGRAPHY
           
           Uses the existing global font system:
           
           --casestudy-font-ui
           --casestudy-font-reading
           --casestudy-font-reading-large
           --casestudy-font-heading
           --casestudy-font-hero-size
           --casestudy-font-mono
           ===================================================== */

        .casestudy {
          font-family: var(--casestudy-font-reading);
          color: var(--casestudy-text);

          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .casestudy p {
          font-family: var(--casestudy-font-reading);
          font-size: var(--casestudy-font-reading-size);
          line-height: var(--casestudy-font-reading-line-height);
          letter-spacing: var(--casestudy-font-reading-letter-spacing);
        }

        .casestudy strong {
          font-family: var(--casestudy-font-heading);
          font-weight: var(--casestudy-font-heading-weight);
          letter-spacing: var(--casestudy-font-heading-letter-spacing);
        }

        .casestudy h1,
        .casestudy h2,
        .casestudy h3,
        .casestudy h4 {
          font-family: var(--casestudy-font-heading);
          font-weight: var(--casestudy-font-heading-weight);
          letter-spacing: var(--casestudy-font-heading-letter-spacing);
        }


        /* =====================================================
           HERO
           ===================================================== */

        .casestudy-hero {
          padding:
            var(--cs-space-10)
            0
            var(--cs-space-10);

          background: var(--cs-surface-subtle);

          border-bottom:
            var(--cs-border-width)
            solid
            var(--cs-border-default);
        }

        .casestudy-eyebrow {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          gap: var(--cs-space-3);
          margin-bottom: var(--cs-space-0);

          color: var(--cs-text-muted);
        }

        .casestudy-mono {
          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);
          font-weight: 400;
          color: var(--casestudy-text);
        }

        .casestudy-mono-muted {
          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);
          font-weight: 400;
          color: var(--casestudy-text-muted);
        }

        .casestudy-dot {
          width: 7px;
          height: 7px;

          flex: 0 0 7px;

          border-radius: 50%;

          background: var(--cs-accent-success);
        }

        .casestudy-hero-title {
          max-width: 880px;

          margin: 0;

          padding-bottom: var(--cs-space-4);

          color: var(--casestudy-text);

          font-family: var(--casestudy-font-heading);
          line-height: var(--casestudy-font-hero-line-height);
          font-weight: var(--casestudy-font-heading-weight);
          letter-spacing: var(--casestudy-font-hero-letter-spacing);

          text-align: left;
        }

        .casestudy-hero-media {
  width: 100%;
  margin-top: var(--cs-space-5);
}

.casestudy-hero-image {
  display: block;
  width: 100%;
  height: auto;
}


        /* =====================================================
           META
           ===================================================== */
.casestudy-meta-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--cs-space-9);

  padding-top: var(--cs-space-10);

  text-align: center;
}

.casestudy-meta-label {
  display: block;

  margin-bottom: 0;

  text-align: center;
}

.casestudy-meta-value {
  display: block;

  margin-top: 0px;

  text-align: center;
}


        /* =====================================================
           SECTIONS
           ===================================================== */

        .casestudy-section {
          padding: var(--cs-space-22) 0;
        }

        .casestudy-section-tight {
          padding: var(--cs-space-16) 0;
        }

        .casestudy-section-gray {
          background: var(--cs-surface-muted);
        }

        .casestudy-section-dark {
          background: var(--cs-surface-dark);
          color: var(--cs-text-on-dark);
        }

        .casestudy-section-dark p {
          color: var(--cs-text-on-dark-secondary);
        }

        .casestudy-section-dark strong {
          color: var(--cs-text-on-dark);
        }

        .casestudy-final {
          padding: var(--cs-space-23) 0;
          background: var(--cs-surface-subtle);
        }

        .casestudy-final-container {
          max-width: var(--cs-final-max);
        }


        /* =====================================================
           SECTION INTRO
           ===================================================== */

        .casestudy-section-intro {
          margin-bottom: var(--cs-space-19);
          text-align: left;
        }

        .casestudy-section-number {
          display: block;

          margin-bottom: var(--cs-space-3);

          color: var(--cs-text-faint);

          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);

          text-align: left;
        }

        .casestudy-section-dark .casestudy-section-number {
          color: var(--cs-color-dark-subtle);
        }

        .casestudy-section-intro h2 {
          max-width: 800px;

          margin: 0;

          color: var(--casestudy-text);

          font-family: var(--casestudy-font-heading);
          font-size: clamp(24px, 3.2vw, 38px);
          line-height: 1.1;
          font-weight: var(--casestudy-font-heading-weight);
          letter-spacing: var(--casestudy-font-heading-letter-spacing);

          text-align: left;
        }

        .casestudy-section-dark .casestudy-section-intro h2 {
          color: var(--cs-text-on-dark);
        }

        .casestudy-section-subtitle {
          margin: var(--cs-space-5) 0 0;

          color: var(--cs-text-muted);

          font-family: var(--casestudy-font-reading);
          font-size: var(--casestudy-font-reading-size);
          line-height: 24px;
          letter-spacing: var(--casestudy-font-reading-letter-spacing);

          text-align: left;
        }

        .casestudy-section-dark .casestudy-section-subtitle {
          color: var(--cs-text-on-dark-muted);
        }


        /* =====================================================
           BODY
           ===================================================== */

        .casestudy-two-column {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          gap: var(--cs-column-gap);

          align-items: start;
        }

        .casestudy-body,
        .casestudy-body-wide {
          max-width: var(--cs-copy-max);

          color: var(--cs-text-secondary);

          font-family: var(--casestudy-font-reading);
          font-size: var(--casestudy-font-reading-size);
          line-height: var(--casestudy-font-reading-line-height);
          letter-spacing: var(--casestudy-font-reading-letter-spacing);

          text-align: left;
        }

        .casestudy-section-dark .casestudy-body,
        .casestudy-section-dark .casestudy-body-wide {
          color: var(--cs-text-on-dark-secondary);
        }

        .casestudy-copy {
          max-width: var(--cs-copy-max);
          text-align: left;
        }

        .casestudy-centered-text {
          max-width: 660px;

          margin: var(--cs-space-13) 0 0 !important;

          color: var(--cs-text-muted);

          font-family: var(--casestudy-font-reading);
          font-size: var(--casestudy-font-reading-size);
          line-height: 23px;
          letter-spacing: var(--casestudy-font-reading-letter-spacing);

          text-align: left;
        }


        /* =====================================================
           PULL QUOTE
           ===================================================== */

        .casestudy-pullquote {
          max-width: var(--cs-quote-max);

          margin: 0;

          padding-left: var(--cs-space-10);

          border-left:
            3px
            solid
            var(--cs-color-black);

          color: #222;

          font-family: var(--casestudy-font-reading-large);
          font-size: var(--casestudy-font-reading-large-size);
          line-height: var(--casestudy-font-reading-large-line-height);
          letter-spacing: var(--casestudy-font-reading-large-letter-spacing);

          text-align: left;
        }

        .casestudy-pullquote-blue {
          border-left-color: var(--cs-accent-primary);
        }

        .casestudy-pullquote-green {
          border-left-color: var(--cs-accent-success);
        }

        .casestudy-section-dark .casestudy-pullquote {
          border-left-color: var(--cs-color-white);
          color: var(--cs-color-white);
        }

        .casestudy-followup {
          margin-top: var(--cs-space-12) !important;
        }


        /* =====================================================
           MEDIA
           ===================================================== */

        .casestudy-media {
          width: 100%;

          min-height: var(--cs-media-height);

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;
       
          padding: var(--cs-space-15);

          background:
            linear-gradient(
              135deg,
              var(--cs-color-gray-200) 25%,
              var(--cs-color-gray-300) 25%,
              var(--cs-color-gray-300) 50%,
              var(--cs-color-gray-200) 50%,
              var(--cs-color-gray-200) 75%,
              var(--cs-color-gray-300) 75%
            );

          background-size: 22px 22px;

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          text-align: center;
        }

        .casestudy-media.compact {
          min-height: var(--cs-media-height-compact);
          margin-top: 0;
        }

        .casestudy-media-dark {
          background:
            linear-gradient(
              135deg,
              var(--cs-surface-dark-pattern-a) 25%,
              var(--cs-surface-dark-pattern-b) 25%,
              var(--cs-surface-dark-pattern-b) 50%,
              var(--cs-surface-dark-pattern-a) 50%,
              var(--cs-surface-dark-pattern-a) 75%,
              var(--cs-surface-dark-pattern-b) 75%
            );

          background-size: 22px 22px;

          border-color: var(--cs-border-dark);
        }

        .casestudy-media-label {
          padding:
            var(--cs-space-3)
            var(--cs-space-5);

          background: var(--cs-color-white);
          color: var(--cs-text-primary);

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);

          text-align: center;
        }

        .casestudy-media-dark .casestudy-media-label {
          background: #222;
          color: var(--cs-color-white);
          border-color: #555;
        }

        .casestudy-media-description {
          max-width: 480px;

          margin: var(--cs-space-5) 0 0;

          color: var(--cs-text-subtle);

          font-family: var(--casestudy-font-reading);
          font-size: var(--casestudy-font-ui-size);
          line-height: var(--casestudy-font-ui-line-height);

          text-align: center;
        }

        .casestudy-media-dark .casestudy-media-description {
          color: var(--cs-text-on-dark-muted);
        }

        .casestudy-media-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          gap: var(--cs-space-2);

          margin-top: var(--cs-space-8);
        }

        .casestudy-media-tag {
          padding:
            5px
            var(--cs-space-3);

          background: var(--cs-color-white);

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);
        }


        /* =====================================================
           PROCESS
           ===================================================== */

        .casestudy-process-callout {
          display: flex;

          align-items: center;
          justify-content: flex-start;

          flex-wrap: wrap;

          gap: var(--cs-space-3);

          margin-top: var(--cs-space-20);

          font-family: var(--casestudy-font-heading);
          font-size: var(--casestudy-font-reading-large-size);
          line-height: var(--cs-space-12);

          font-weight: var(--cs-font-heading-weight, 700);

          letter-spacing: var(--casestudy-font-heading-letter-spacing);

          text-align: left;
        }

        .casestudy-arrow {
          color: var(--cs-text-subtle);
        }


        /* =====================================================
           WORKFLOW
           ===================================================== */

        .casestudy-workflow {
          display: flex;
          flex-wrap: wrap;

          margin: var(--cs-space-19) 0 0;

          border-top:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          border-left:
            var(--cs-border-width)
            solid
            var(--cs-border-default);
        }

        .casestudy-workflow-node {
          flex: 1 1 130px;

          min-height: 74px;

          display: flex;

          align-items: center;
          justify-content: flex-start;

          padding: var(--cs-space-4);

          background: var(--cs-color-white);

          border-right:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          border-bottom:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          font-family: var(--casestudy-font-ui);

          font-size: var(--casestudy-font-ui-size);
          line-height: var(--casestudy-font-ui-line-height);

          text-align: left;
        }


        /* =====================================================
           SYSTEM
           ===================================================== */

        .casestudy-system-principle {
          padding: var(--cs-space-17) 0;

          border-top:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);
        }

        .casestudy-system-heading {
          display: grid;

          grid-template-columns: 56px 1fr;

          gap: var(--cs-space-8);

          margin-bottom: var(--cs-space-11);

          text-align: left;
        }

        .casestudy-system-number {
          color: var(--cs-color-dark-subtle);

          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);

          text-align: left;
        }

        .casestudy-system-heading h3 {
          margin: 0;

          color: var(--cs-text-on-dark);

          font-family: var(--casestudy-font-heading);
          font-size: 24px;
          line-height: 1.1;
          font-weight: var(--casestudy-font-heading-weight);
          letter-spacing: var(--casestudy-font-heading-letter-spacing);

          text-align: left;
        }

        .casestudy-system-heading h4 {
          margin: var(--cs-space-2) 0 0;

          color: var(--cs-text-on-dark-muted);

          font-family: var(--casestudy-font-reading);
          font-size: var(--casestudy-font-reading-size);
          line-height: 20px;
          font-weight: 400;

          text-align: left;
        }

        .casestudy-system-content {
          margin-left: 72px;
          text-align: left;
        }

        .casestudy-system-content p {
          max-width: var(--cs-copy-max);

          font-family: var(--casestudy-font-reading);
          font-size: var(--casestudy-font-reading-size);
          line-height: var(--casestudy-font-reading-line-height);
          letter-spacing: var(--casestudy-font-reading-letter-spacing);

          text-align: left;
        }


        /* =====================================================
           DARK INTRO
           ===================================================== */

        .casestudy-dark-intro {
          max-width: var(--cs-lead-max);

          margin-bottom: var(--cs-space-10);

          text-align: left;
        }


        /* =====================================================
           COLOR SCALE
           ===================================================== */

        .casestudy-color-scale {
          display: grid;

          grid-template-columns: repeat(3, 1fr);

          margin-top: var(--cs-space-15);

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);
        }

        .casestudy-color {
          min-height: 120px;

          display: flex;
          flex-direction: column;

          justify-content: flex-end;
          align-items: flex-start;

          padding: var(--cs-space-8);

          text-align: left;
        }

        .casestudy-color-blue {
          background: var(--cs-accent-primary);
        }

        .casestudy-color-green {
          background: var(--cs-accent-success);
        }

        .casestudy-color-red {
          background: var(--cs-accent-critical);
        }

        .casestudy-color-name {
          color: rgba(255, 255, 255, 0.75);

          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);
        }

        .casestudy-color-value {
          margin-top: var(--cs-space-1);

          color: var(--cs-color-white);

          font-family: var(--casestudy-font-heading);
          font-size: var(--casestudy-font-reading-large-size);
          line-height: var(--casestudy-font-reading-large-line-height);
          font-weight: var(--casestudy-font-heading-weight);
          letter-spacing: var(--casestudy-font-heading-letter-spacing);
        }


        /* =====================================================
           CATEGORY
           ===================================================== */

        .casestudy-category-strip {
          display: grid;

          grid-template-columns: repeat(6, 1fr);

          margin-top: var(--cs-space-14);

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);
        }

        .casestudy-category {
          min-height: 110px;

          display: flex;
          flex-direction: column;

          justify-content: flex-end;

          padding: var(--cs-space-5);

          border-right:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);

          text-align: left;
        }

        .casestudy-category:last-child {
          border-right: 0;
        }

        .casestudy-category-icon {
          flex: 1;

          display: flex;

          align-items: center;
          justify-content: center;

          color: var(--cs-text-on-dark-muted);

          font-family: var(--casestudy-font-ui);
          font-size: 24px;

          text-align: center;
        }

        .casestudy-category-name {
          color: var(--cs-color-faint);

          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);

          text-align: left;
        }


        /* =====================================================
           SCALE
           ===================================================== */

        .casestudy-scale {
          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: var(--cs-space-3);

          margin-top: var(--cs-space-18);
        }

        .casestudy-scale-step {
          min-height: 130px;

          display: flex;
          flex-direction: column;

          justify-content: center;
          align-items: flex-start;

          padding: var(--cs-space-10);

          background: var(--cs-surface-card);

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          text-align: left;
        }

        .casestudy-scale-number {
          color: var(--cs-text-faint);

          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);
        }

        .casestudy-scale-title {
          margin-top: var(--cs-space-3);

          font-family: var(--casestudy-font-heading);
          font-size: var(--casestudy-font-reading-large-size);
          line-height: 23px;
          font-weight: var(--casestudy-font-heading-weight);
          letter-spacing: var(--casestudy-font-heading-letter-spacing);
        }

        .casestudy-scale-description {
          margin-top: var(--cs-space-2);

          color: var(--cs-text-faint);

          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);
        }


        /* =====================================================
           BATCH
           ===================================================== */

        .casestudy-batch-grid {
          display: grid;

          grid-template-columns: repeat(4, 1fr);

          gap: var(--cs-space-3);

          margin-top: var(--cs-space-18);
        }

        .casestudy-batch {
          min-height: 160px;

          display: flex;
          flex-direction: column;

          justify-content: space-between;
          align-items: stretch;

          padding: var(--cs-space-8);

          background: var(--cs-color-white);

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          text-align: left;
        }

        .casestudy-batch-number {
          color: var(--cs-text-faint);

          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);
        }

        .casestudy-batch-icons {
          display: grid;

          grid-template-columns: repeat(5, 1fr);

          gap: 5px;
        }

        .casestudy-batch-icon {
          aspect-ratio: 1;

          display: flex;

          align-items: center;
          justify-content: center;

          background: var(--cs-color-gray-200);

          color: var(--cs-text-muted);

          font-family: var(--casestudy-font-ui);
          font-size: var(--casestudy-font-ui-size);

          text-align: center;
        }

        .casestudy-batch-footer {
          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);

          text-align: left;
        }


        /* =====================================================
           STATS
           ===================================================== */

        .casestudy-stat-grid {
          display: grid;

          grid-template-columns: repeat(4, 1fr);

          margin: var(--cs-space-18) 0;

          border-top:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);

          border-bottom:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);
        }

        .casestudy-stat {
          min-height: 130px;

          padding: var(--cs-space-10);

          border-right:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);

          text-align: left;
        }

        .casestudy-stat:last-child {
          border-right: 0;
        }

        .casestudy-stat-value {
          color: var(--cs-text-on-dark);

          font-family: var(--casestudy-font-heading);
          font-size: 26px;
          line-height: 1;
          font-weight: var(--casestudy-font-heading-weight);
          letter-spacing: var(--casestudy-font-heading-letter-spacing);

          text-align: left;
        }

        .casestudy-stat-label {
          margin-top: var(--cs-space-5);

          color: var(--cs-text-on-dark-muted);

          font-family: var(--casestudy-font-mono);
          font-size: var(--casestudy-font-mono-size);
          line-height: var(--casestudy-font-mono-line-height);
          letter-spacing: var(--casestudy-font-mono-letter-spacing);

          text-align: left;
        }


        /* =====================================================
           FINAL
           ===================================================== */

        .casestudy-final-copy {
          max-width: 760px;
          text-align: left;
        }

        .casestudy-final-paragraph {
          margin: 0 0 var(--cs-space-11);

          color: var(--cs-text-secondary);

          font-family: var(--casestudy-font-reading-large);
          font-size: var(--casestudy-font-reading-large-size);
          line-height: var(--casestudy-font-reading-large-line-height);
          letter-spacing: var(--casestudy-font-reading-large-letter-spacing);

          text-align: left;
        }

        .casestudy-notion-link {
          display: inline-block;

          margin-top: var(--cs-space-13);

          padding:
            var(--cs-space-4)
            var(--cs-space-7);

          background: var(--cs-color-black);
          color: var(--cs-color-white);

          border:
            var(--cs-window-border-width)
            solid
            var(--cs-color-black);

          font-family: var(--casestudy-font-ui);

          font-size: var(--casestudy-font-ui-size);
          line-height: var(--cs-space-10);

          text-decoration: none;

          text-align: left;

          transition:
            background-color 120ms ease,
            color 120ms ease;
        }

        .casestudy-notion-link:hover {
          background: var(--cs-color-white);
          color: var(--cs-color-black);
        }


        /* =====================================================
           STATUS BAR
           ===================================================== */

        .casestudy-statusbar {
          flex: 0 0 23px;

          height: 23px;

          display: flex;

          gap: var(--cs-space-1);

          padding: 2px var(--cs-space-1);

          background: var(--cs-color-gray-400);
        }

        .casestudy-status-item {
          display: flex;

          align-items: center;

          padding: 0 var(--cs-space-2);

          border-top: 1px solid #808080;
          border-left: 1px solid #808080;
          border-right: 1px solid var(--cs-color-white);
          border-bottom: 1px solid var(--cs-color-white);

          overflow: hidden;

          white-space: nowrap;
          text-overflow: ellipsis;

          font-family: var(--casestudy-font-ui);

          font-size: var(--casestudy-font-ui-size);
          line-height: var(--casestudy-font-ui-line-height);

          text-align: left;
        }

        .casestudy-status-ready {
          width: 100px;
        }


        /* =====================================================
           RESPONSIVE — 900
           ===================================================== */

        @media (max-width: 900px) {

          .casestudy-window {
            --cs-container-gutter: 32px;
            --cs-column-gap: var(--cs-column-gap-mobile);
          }

          .casestudy-meta-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .casestudy-two-column {
            grid-template-columns: 1fr;
            gap: var(--cs-column-gap-mobile);
          }

          .casestudy-workflow {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .casestudy-system-content {
            margin-left: 0;
          }

          .casestudy-category-strip {
            grid-template-columns: repeat(3, 1fr);
          }

          .casestudy-batch-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .casestudy-stat-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .casestudy-stat:nth-child(2) {
            border-right: 0;
          }

          .casestudy-stat:nth-child(-n + 2) {
            border-bottom:
              var(--cs-border-width)
              solid
              var(--cs-border-dark);
          }
        }


        /* =====================================================
           RESPONSIVE — 700
           ===================================================== */

        @media (max-width: 700px) {

          .casestudy-window {
            --cs-container-gutter: 32px;
          }

          .casestudy-hero {
            padding:
              var(--cs-space-19)
              0
              var(--cs-space-16);
          }

          .casestudy-section {
            padding: var(--cs-space-19) 0;
          }

          .casestudy-hero-title {
          }

          .casestudy-meta-grid {
            grid-template-columns: 1fr;
          }

          .casestudy-category-strip {
            grid-template-columns: repeat(3, 1fr);
          }

          .casestudy-scale {
            grid-template-columns: 1fr;
          }

          .casestudy-batch-grid {
            grid-template-columns: 1fr;
          }

          .casestudy-stat-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .casestudy-process-callout {
            margin-top: var(--cs-space-16);
          }

          .casestudy-system-heading {
            grid-template-columns: 40px 1fr;
          }
        }


        /* =====================================================
           RESPONSIVE — 520
           ===================================================== */

        @media (max-width: 520px) {

          .casestudy-window {
            --cs-container-gutter: 24px;
          }

          .casestudy-category-strip,
          .casestudy-color-scale,
          .casestudy-stat-grid {
            grid-template-columns: 1fr;
          }

          .casestudy-stat {
            border-right: 0;

            border-bottom:
              var(--cs-border-width)
              solid
              var(--cs-border-dark);
          }

          .casestudy-stat:last-child {
            border-bottom: 0;
          }

          .casestudy-workflow {
            grid-template-columns: 1fr;
          }

          .casestudy-media {
            min-height: 260px;
            padding: var(--cs-space-11);
          }

          .casestudy-pullquote {
            padding-left: var(--cs-space-8);

            font-size: var(--casestudy-font-reading-size);
            line-height: 25px;
          }

          .casestudy-final-paragraph {
            font-size: var(--casestudy-font-reading-large-size);
            line-height: 27px;
          }
        }

      `}</style>
    </div>
  );
}


/* =========================================================
   META
   ========================================================= */

function Meta({
  label,
  children,
}) {
  return (
    <div>
      <span className="casestudy-meta-label">
        {label}
      </span>

      <strong className="casestudy-meta-value">
        {children}
      </strong>
    </div>
  );
}


/* =========================================================
   SECTION INTRO
   ========================================================= */

function SectionIntro({
  number,
  title,
  subtitle,
  dark = false,
}) {
  return (
    <div className="casestudy-section-intro">

      <span className="casestudy-section-number">
        {number}
      </span>

      <h2>
        {title}
      </h2>

      {subtitle && (
        <p className="casestudy-section-subtitle">
          {subtitle}
        </p>
      )}

    </div>
  );
}


/* =========================================================
   PULL QUOTE
   ========================================================= */

function PullQuote({
  children,
  tone = 'default',
}) {
  const toneClass =
    tone === 'blue'
      ? 'casestudy-pullquote-blue'
      : tone === 'green'
        ? 'casestudy-pullquote-green'
        : '';

  return (
    <blockquote
      className={`casestudy-pullquote ${toneClass}`}
    >
      {children}
    </blockquote>
  );
}


/* =========================================================
   MEDIA PLACEHOLDER
   ========================================================= */

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
        'casestudy-media',
        compact ? 'compact' : '',
        dark ? 'casestudy-media-dark' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >

      <div className="casestudy-media-label">
        {type === 'video' ? '▶ ' : '▧ '}
        {label}
      </div>

      {description && (
        <p className="casestudy-media-description">
          {description}
        </p>
      )}

      {tags.length > 0 && (
        <div className="casestudy-media-tags">

          {tags.map((tag) => (
            <span
              key={tag}
              className="casestudy-media-tag"
            >
              {tag}
            </span>
          ))}

        </div>
      )}

    </div>
  );
}


/* =========================================================
   WORKFLOW
   ========================================================= */

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
    <div className="casestudy-workflow">

      {steps.map((step) => (
        <div
          key={step}
          className="casestudy-workflow-node"
        >
          {step}
        </div>
      ))}

    </div>
  );
}


/* =========================================================
   SYSTEM PRINCIPLE
   ========================================================= */

function SystemPrinciple({
  number,
  title,
  subtitle,
  children,
}) {
  return (
    <div className="casestudy-system-principle">

      <div className="casestudy-system-heading">

        <span className="casestudy-system-number">
          {number}
        </span>

        <div>

          <h3>
            {title}
          </h3>

          {subtitle && (
            <h4>
              {subtitle}
            </h4>
          )}

        </div>

      </div>

      <div className="casestudy-system-content">
        {children}
      </div>

    </div>
  );
}


/* =========================================================
   COLOR SCALE
   ========================================================= */

function ColorScale() {
  return (
    <div className="casestudy-color-scale">

      <div className="casestudy-color casestudy-color-blue">
        <span className="casestudy-color-name">
          BLUE
        </span>

        <span className="casestudy-color-value">
          Low
        </span>
      </div>

      <div className="casestudy-color casestudy-color-green">
        <span className="casestudy-color-name">
          GREEN
        </span>

        <span className="casestudy-color-value">
          Normal
        </span>
      </div>

      <div className="casestudy-color casestudy-color-red">
        <span className="casestudy-color-name">
          RED
        </span>

        <span className="casestudy-color-value">
          High / Critical
        </span>
      </div>

    </div>
  );
}


/* =========================================================
   CATEGORY STRIP
   ========================================================= */

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
    <div className="casestudy-category-strip">

      {categories.map(([name, icon]) => (
        <div
          key={name}
          className="casestudy-category"
        >

          <div className="casestudy-category-icon">
            {icon}
          </div>

          <div className="casestudy-category-name">
            {name}
          </div>

        </div>
      ))}

    </div>
  );
}


/* =========================================================
   SCALE DIAGRAM
   ========================================================= */

function ScaleDiagram() {
  const steps = [
    {
      number: '01',
      title: 'MASTER',
      description: '6–9 icons',
    },
    {
      number: '02',
      title: 'PRODUCTION',
      description: '20–100 icons',
    },
    {
      number: '03',
      title: 'SYSTEM',
      description: '2,500+ icons',
    },
  ];

  return (
    <div className="casestudy-scale">

      {steps.map((step) => (
        <div
          key={step.number}
          className="casestudy-scale-step"
        >

          <span className="casestudy-scale-number">
            {step.number}
          </span>

          <span className="casestudy-scale-title">
            {step.title}
          </span>

          <span className="casestudy-scale-description">
            {step.description}
          </span>

        </div>
      ))}

    </div>
  );
}


/* =========================================================
   BATCH GRID
   ========================================================= */

function BatchGrid() {
  const batches = [
    'Batch 01',
    'Batch 02',
    'Batch 03',
    'Batch 04',
  ];

  const icons = [
    '◉',
    '◇',
    '△',
    '＋',
    '□',
  ];

  return (
    <div className="casestudy-batch-grid">

      {batches.map((batch, batchIndex) => (
        <div
          key={batch}
          className="casestudy-batch"
        >

          <span className="casestudy-batch-number">
            {batch}
          </span>

          <div className="casestudy-batch-icons">

            {Array.from({ length: 10 }).map(
              (_, index) => (
                <span
                  key={index}
                  className="casestudy-batch-icon"
                >
                  {icons[(index + batchIndex) % icons.length]}
                </span>
              )
            )}

          </div>

          <span className="casestudy-batch-footer">
            XX icons
          </span>

        </div>
      ))}

    </div>
  );
}


/* =========================================================
   STAT
   ========================================================= */

function Stat({
  value,
  label,
}) {
  return (
    <div className="casestudy-stat">

      <div className="casestudy-stat-value">
        {value}
      </div>

      <div className="casestudy-stat-label">
        {label}
      </div>

    </div>
  );
}
