import React from 'react';

import holohealthGif from '../assets/images/case-study/holohealth.gif';
import holohealthGif4 from '../assets/images/case-study/holohealth4.gif';
import holohealthGif5 from '../assets/images/case-study/holohealth5.gif';

import holohealthTest1 from '../assets/images/case-study/holohealth-test1.jpg';
import holohealthTest2 from '../assets/images/case-study/holohealth-test2.jpg';
import holohealthTest3 from '../assets/images/case-study/holohealth-test3.jpg';

const NOTION_URL =
  'https://app.notion.com/p/HoloHealth-Iconography-Visual-System-3c23e6c896238027a77ef87eeb315a85';

export default function HoloHealthCaseStudyRetro() {
  return (
    <div className="casestudy-window">

      <main className="casestudy">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="casestudy-hero">

          <div className="casestudy-container">

            <div className="casestudy-eyebrow">
              <span className="casestudy-dot" />

              <span className="casestudy-mono-muted">
                HoloHealth — Iconography &amp; Visual System
              </span>
            </div>

            <h1 className="casestudy-hero-title">
              Building a Scalable Iconography System
            </h1>

            <p className="casestudy-hero-lead">
              Building a visual language for veterinary health that could
              remain consistent while scaling to thousands of assets.
            </p>

            <div className="casestudy-media casestudy-hero-media">

              <img
                src={holohealthGif}
                alt="HoloHealth product and iconography"
                className="casestudy-media-image"
              />

            </div>

            <div className="casestudy-meta-grid">

              <Meta label="Role">
                Creative / Design Lead
              </Meta>

              <Meta label="Timeline">
                Apr 2025 — Jun 2026
              </Meta>

              <Meta label="Scope">
                2,500+ icons
              </Meta>

              <Meta label="Focus">
                Iconography
              </Meta>

            </div>

          </div>

        </section>


        {/* =====================================================
            01 — CHALLENGE
        ===================================================== */}

        <section className="casestudy-section">

          <div className="casestudy-container">

            <SectionIntro
              number="01 — The Challenge"
              title="Building a visual language for veterinary health"
            />

            <div className="casestudy-challenge-grid">

              <div className="casestudy-copy">

                <p className="casestudy-body">
                  HoloHealth needed to communicate a wide range of
                  veterinary concepts — from animals and anatomy to
                  conditions, medication, devices, and services.
                </p>

                <p className="casestudy-body">
                  The challenge wasn't simply creating icons. The product
                  needed a <strong>
                    visual language that could stay consistent while
                    scaling to thousands of assets.
                  </strong>
                </p>

              </div>

              <div className="casestudy-role-card">

                <span className="casestudy-card-label">
                  MY ROLE
                </span>

                <p>
                  I worked as Creative / Design Lead, establishing the
                  visual direction, creating the master icons, directing
                  production, reviewing outputs, and solving visual
                  inconsistencies throughout the process.
                </p>

              </div>

            </div>

            <div className="casestudy-goal">

              <div className="casestudy-goal-mark">
                GOAL
              </div>

              <p>
                Build a scalable iconography system that could support
                HoloHealth as the product and library continued to grow.
              </p>

            </div>

            <MediaImage
              src={holohealthTest1}
              alt="HoloHealth iconography in product"
              label="THE PRODUCT"
              description="The iconography system designed to live inside the HoloHealth product."
            />
          </div>

        </section>


        {/* =====================================================
            02 — STRATEGY
        ===================================================== */}

        <section className="casestudy-section casestudy-section-gray">

          <div className="casestudy-container">

            <SectionIntro
              number="02 — The Strategy"
              title="From references to a repeatable system"
              subtitle="The system started small, then expanded through repeatable visual decisions."
            />

            <div className="casestudy-strategy-intro">

              <p className="casestudy-body">
                We started with a small set of master icons rather than
                immediately producing at scale.
              </p>

              <p className="casestudy-body">
                Before drawing unfamiliar veterinary concepts, we first
                identified what information needed to survive
                simplification.
              </p>

            </div>

            <ProcessFlow />

            <div className="casestudy-principles">

              <StrategyPrinciple
                number="01"
                title="Form"
                subtitle="Outline + fill"
                text="Outlined forms created a shared structure across animals, anatomy, objects, and medical concepts. Filled areas added emphasis where information needed to stand out."
              />

              <StrategyPrinciple
                number="02"
                title="Color"
                subtitle="Visual states and meaning"
                text="Color became another layer of information, helping communicate states, conditions, and functional meaning without changing the underlying visual structure."
              />

              <StrategyPrinciple
                number="03"
                title="Consistency"
                subtitle="One language across different subjects"
                text="The same visual logic had to survive across species, anatomy, medication, devices, services, and conditions."
              />

            </div>

            <PullQuote tone="green">
              The goal wasn't to make every icon identical.
              <br />
              It was to give every icon the same{' '}
              <strong>visual DNA.</strong>
            </PullQuote>

            <MediaImage
              src={holohealthTest3}
              alt="HoloHealth master icons and visual system"
              label="MASTER ICONS"
              description="A small set of master icons established the visual direction before production scaled."
            />

          </div>

        </section>


        {/* =====================================================
            03 — EXECUTION
        ===================================================== */}

        <section className="casestudy-section casestudy-section-dark">

          <div className="casestudy-container">

            <SectionIntro
              number="03 — The Execution"
              title="Scaling from masters to 2,500+ icons"
              subtitle="A repeatable production workflow allowed the visual language to scale without losing consistency."
              dark
            />

            <div className="casestudy-execution-intro">

              <div>

                <p className="casestudy-body casestudy-body-large">
                  Once the direction was approved, production moved into
                  batches of roughly <strong>20–100 icons.</strong>
                </p>

                <p className="casestudy-body">
                  Another designer handled most of the production while
                  I focused on direction, review, problem solving,
                  timeline, and client communication.
                </p>

              </div>

              <PullQuote>
                Does this still belong to the same visual language?
              </PullQuote>

            </div>

            <Workflow />

            <ScaleDiagram />
                        <MediaImage
              src={holohealthTest2}
              alt="HoloHealth iconography in product"
              label="THE PRODUCT"
              description="The iconography system designed to live inside the HoloHealth product."
            />

            <div className="casestudy-master-production">

              <div className="casestudy-master-card">
           

                <span className="casestudy-card-label">
                  MASTER ICONS
                </span>

                <div className="casestudy-icon-grid">

                  <IconShape type="circle" />
                  <IconShape type="diamond" />
                  <IconShape type="triangle" />
                  <IconShape type="plus" />
                  <IconShape type="square" />
                  <IconShape type="cross" />
                  <IconShape type="circle" />
                  <IconShape type="diamond" />

                </div>

                <p>
                  A small set of approved references.
                </p>

              </div>

              <div className="casestudy-master-arrow">
                →
              </div>

              <div className="casestudy-production-card">

                <span className="casestudy-card-label">
                  PRODUCTION
                </span>

                <div className="casestudy-icon-grid casestudy-icon-grid-large">

                  {Array.from({ length: 24 }).map((_, index) => (

                    <IconShape
                      key={index}
                      type={[
                        'circle',
                        'diamond',
                        'triangle',
                        'plus',
                        'square',
                        'cross',
                      ][index % 6]}
                    />

                  ))}

                </div>

                <p>
                  20–100 icons per production batch.
                </p>

              </div>

            </div>

            <p className="casestudy-body-wide">
              The master icons became production references, allowing the
              library to grow without relying entirely on individual
              interpretation. I reviewed deliveries, resolved
              inconsistencies, and stepped in whenever a concept needed
              a different visual approach.
            </p>

          </div>

          

        </section>


        {/* =====================================================
            04 — IMPACT
        ===================================================== */}

        <section className="casestudy-section">

          <div className="casestudy-container">

            <SectionIntro
              number="04 — The Impact"
              title="From an icon library to a product language"
            />

            <div className="casestudy-impact-grid">

              <div className="casestudy-impact-copy">

                <p className="casestudy-body casestudy-body-large">
                  The system grew to <strong>2,500+ icons</strong> covering
                  multiple species, conditions, behaviors, medications,
                  devices, services, and states.
                </p>

                <p className="casestudy-body">
                  More importantly, the project established a shared
                  visual language that could continue expanding through
                  a repeatable production workflow.
                </p>

                <p className="casestudy-body">
                  The icons were designed to live inside HoloHealth's
                  actual product experience — not simply as an isolated
                  asset collection.
                </p>

              </div>

              <div className="casestudy-impact-stat">

                <span className="casestudy-impact-number">
                  2,500+
                </span>

                <span className="casestudy-impact-label">
                  ICONS
                </span>

                <span className="casestudy-impact-description">
                  One visual language across multiple species,
                  conditions, behaviors, devices, and services.
                </span>

              </div>

            </div>

            <MediaImage
              src={holohealthGif4}
              alt="HoloHealth product using the iconography system"
              label="IN CONTEXT"
              description="The iconography system applied inside the HoloHealth product experience."
            />

          </div>

        </section>


        {/* =====================================================
            REFLECTION
        ===================================================== */}

        <section className="casestudy-section casestudy-section-gray casestudy-reflection">

          <div className="casestudy-container">

            <SectionIntro
              number="Reflection"
              title="The project changed how I think about visual design."
            />

            <div className="casestudy-reflection-content">

              <p className="casestudy-reflection-lead">
                I became more interested in the systems behind the assets:
                <strong>
                  {' '}patterns, constraints, reusable decisions,
                  and ways of working that another designer can understand
                  and continue.
                </strong>
              </p>

              <p className="casestudy-body">
                It marked a shift from simply making visual assets toward
                understanding <strong>
                  how design systems work, how people use them,
                  and how they can scale.
                </strong>
              </p>

            </div>

            <div className="casestudy-snapshot">

              <div className="casestudy-snapshot-header">
                Project Snapshot
              </div>

              <div className="casestudy-snapshot-grid">

                <SnapshotItem
                  label="Role"
                  value="Creative / Design Lead"
                />

                <SnapshotItem
                  label="Timeline"
                  value="Apr 2025 — Jun 2026"
                />

                <SnapshotItem
                  label="Scope"
                  value="2,500+ icons"
                />

                <SnapshotItem
                  label="Focus"
                  value="Iconography · Visual System · Creative Direction · Production Direction · QA"
                />

              </div>

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


      {/* =====================================================
          STATUS BAR
      ===================================================== */}

      <div className="casestudy-statusbar">

        <div className="casestudy-status-item">
          HoloHealth — Building a Scalable Iconography System
        </div>

        <div className="casestudy-status-item casestudy-status-ready">
          Ready
        </div>

      </div>


      <style>{`

        /* =====================================================
           DESIGN SYSTEM
        ===================================================== */

        .casestudy-window {

          --cs-color-black: #000;
          --cs-color-white: #fff;

          --cs-color-ink: #fff;
          --cs-color-text: #e8e8e8;
          --cs-color-muted: #b8b8b8;
          --cs-color-subtle: #999;
          --cs-color-faint: #777;
          --cs-color-border: #444;

          --cs-color-gray-50: #181818;
          --cs-color-gray-100: #151515;
          --cs-color-gray-150: #181818;
          --cs-color-gray-200: #242424;
          --cs-color-gray-300: #303030;
          --cs-color-gray-400: #3a3a3a;

          --cs-color-blue: #5b7cfa;
          --cs-color-green: #20bf6b;
          --cs-color-red: #eb3b5a;

          --cs-color-dark: #101010;
          --cs-color-dark-100: #151515;
          --cs-color-dark-200: #181818;
          --cs-color-dark-border: #333;
          --cs-color-dark-text: #ccc;
          --cs-color-dark-muted: #aaa;
          --cs-color-dark-subtle: #888;

          --cs-surface-page: #101010;
          --cs-surface-subtle: #151515;
          --cs-surface-muted: #181818;
          --cs-surface-card: #181818;
          --cs-surface-dark: #0b0b0b;

          --cs-text-primary: #fff;
          --cs-text-secondary: #d0d0d0;
          --cs-text-muted: #aaa;
          --cs-text-subtle: #888;

          --cs-text-on-dark: #fff;
          --cs-text-on-dark-secondary: #ccc;
          --cs-text-on-dark-muted: #999;

          --cs-border-default: #444;
          --cs-border-light: #333;
          --cs-border-dark: #333;

          --cs-accent-primary: var(--cs-color-blue);
          --cs-accent-success: var(--cs-color-green);
          --cs-accent-critical: var(--cs-color-red);

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

          --cs-container-max: 60%;
          --cs-container-gutter: 48px;

          --cs-column-gap: 48px;
          --cs-column-gap-mobile: 32px;

          --cs-copy-max: 600px;
          --cs-quote-max: 560px;
          --cs-lead-max: 680px;

          --cs-border-width: 1px;
          --cs-window-border-width: 2px;

          --cs-status-height: 23px;
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

          background: #101010;

          color: #fff;

          border:
            var(--cs-window-border-width)
            solid;

          border-color:
            #444
            #222
            #222
            #444;

          box-sizing: border-box;
        }


        .casestudy-window *,
        .casestudy-window *::before,
        .casestudy-window *::after {
          box-sizing: border-box;
        }


        .casestudy-window p {
          margin:
            0
            0
            var(--cs-space-10);

          text-align: left;
        }


        .casestudy-window strong {
          font-weight: 700;
          color: #fff;
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

          font-family: var(--casestudy-font-reading);

          color: #fff;

          -webkit-font-smoothing: antialiased;

          text-rendering: optimizeLegibility;
        }


        /* =====================================================
           MASTER CONTAINER
           
           SENGAJA TIDAK DIUBAH.
           Posisi/layout tetap original.
        ===================================================== */

        .casestudy-container {

          width: min(
            var(--cs-container-max),
            calc(100% - (var(--cs-container-gutter) * 2))
          );

          margin-left: auto;
          margin-right: auto;

          box-sizing: border-box;
        }


        /* =====================================================
           TYPOGRAPHY
           
           HANYA ALIGNMENT TEXT YANG DIUBAH.
        ===================================================== */

        .casestudy p {

          font-family:
            var(--casestudy-font-reading);

          font-size:
            var(--casestudy-font-reading-size);

          line-height:
            var(--casestudy-font-reading-line-height);

          letter-spacing:
            var(--casestudy-font-reading-letter-spacing);

          text-align: left;
        }


        .casestudy strong {

          font-family:
            var(--casestudy-font-heading);

          font-weight:
            var(--casestudy-font-heading-weight);

          letter-spacing:
            var(--casestudy-font-heading-letter-spacing);

          color: #fff;
        }


        .casestudy h1,
        .casestudy h2,
        .casestudy h3,
        .casestudy h4 {

          font-family:
            var(--casestudy-font-heading);

          font-weight:
            var(--casestudy-font-heading-weight);

          letter-spacing:
            var(--casestudy-font-heading-letter-spacing);

          color: #fff;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .casestudy-hero {

          padding:
            var(--cs-space-19)
            0
            var(--cs-space-20);

          background:
            var(--cs-surface-subtle);

          border-bottom:
            var(--cs-border-width)
            solid
            var(--cs-border-default);
        }


        .casestudy-eyebrow {

          display: flex;

          align-items: center;

          gap:
            var(--cs-space-3);

          margin-bottom:
            var(--cs-space-8);

          color:
            var(--cs-text-muted);
        }


        .casestudy-mono-muted {

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          line-height:
            var(--casestudy-font-mono-line-height);

          letter-spacing:
            var(--casestudy-font-mono-letter-spacing);

          font-weight: 400;

          color:
            var(--cs-text-muted);
        }


        .casestudy-dot {

          width: 7px;
          height: 7px;

          flex: 0 0 7px;

          border-radius: 50%;

          background:
            var(--cs-accent-success);
        }


        .casestudy-hero-title {

          max-width: 820px;

          margin: 0;

          color:
            #fff;

          font-family:
            var(--casestudy-font-heading);

          font-size:
            var(--casestudy-font-hero-size);

          line-height:
            var(--casestudy-font-hero-line-height);

          font-weight:
            var(--casestudy-font-heading-weight);

          letter-spacing:
            var(--casestudy-font-hero-letter-spacing);

          text-align: left;
        }


        .casestudy-hero-lead {

          max-width:
            var(--cs-lead-max);

          margin:
            var(--cs-space-8)
            0
            0;

          color:
            var(--cs-text-muted);

          font-family:
            var(--casestudy-font-reading-large);

          font-size:
            var(--casestudy-font-reading-large-size);

          line-height:
            var(--casestudy-font-reading-large-line-height);

          letter-spacing:
            var(--casestudy-font-reading-large-letter-spacing);

          text-align: left;
        }


        /* =====================================================
           MEDIA
        ===================================================== */

        .casestudy-media {

          width: 100%;

          margin:
            var(--cs-space-20)
            0
            0;

          background:
            #202020;

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          overflow: hidden;
        }


        .casestudy-hero-media {

          margin-top:
            var(--cs-space-15);
        }


        .casestudy-media-image {

          display: block;

          width: 100%;

          height: auto;

          max-width: 100%;

          background:
            #181818;
        }


        /* =====================================================
           META
        ===================================================== */

        .casestudy-meta-grid {

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap:
            var(--cs-space-9);

          padding-top:
            var(--cs-space-10);

          text-align: left;
        }


        .casestudy-meta-label {

          display: block;

          margin-bottom:
            var(--cs-space-2);

          color:
            var(--cs-text-faint);

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          line-height:
            var(--casestudy-font-mono-line-height);

          letter-spacing:
            var(--casestudy-font-mono-letter-spacing);

          text-align: left;
        }


        .casestudy-meta-value {

          display: block;

          color:
            #fff;

          font-family:
            var(--casestudy-font-heading);

          font-size:
            var(--casestudy-font-reading-size);

          line-height:
            var(--casestudy-font-reading-line-height);

          font-weight:
            var(--casestudy-font-heading-weight);

          text-align: left;
        }


        /* =====================================================
           SECTIONS
        ===================================================== */

        .casestudy-section {

          padding:
            var(--cs-space-22)
            0;

          background:
            #101010;
        }


        .casestudy-section-gray {

          background:
            #181818;
        }


        .casestudy-section-dark {

          background:
            #0b0b0b;

          color:
            #fff;
        }


        .casestudy-section-dark p {

          color:
            #ccc;

          text-align: left;
        }


        .casestudy-section-dark strong {

          color:
            #fff;
        }


        /* =====================================================
           SECTION INTRO
           
           POSISI TIDAK DIUBAH.
           HANYA TEXT ALIGN LEFT.
        ===================================================== */

        .casestudy-section-intro {

          margin-bottom:
            var(--cs-space-19);

          text-align: left;
        }


        .casestudy-section-number {

          display: block;

          margin-bottom:
            var(--cs-space-3);

          color:
            var(--cs-text-faint);

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          line-height:
            var(--casestudy-font-mono-line-height);

          letter-spacing:
            var(--casestudy-font-mono-letter-spacing);

          text-align: left;
        }


        .casestudy-section-dark
        .casestudy-section-number {

          color:
            var(--cs-color-dark-subtle);
        }


        .casestudy-section-intro h2 {

          max-width: 780px;

          margin: 0;

          color:
            #fff;

          font-family:
            var(--casestudy-font-heading);

          font-size:
            clamp(26px, 3.4vw, 42px);

          line-height: 1.08;

          font-weight:
            var(--casestudy-font-heading-weight);

          letter-spacing:
            var(--casestudy-font-heading-letter-spacing);

          text-align: left;
        }


        .casestudy-section-dark
        .casestudy-section-intro h2 {

          color:
            #fff;
        }


        .casestudy-section-subtitle {

          max-width: 650px;

          margin:
            var(--cs-space-5)
            0
            0 !important;

          color:
            var(--cs-text-muted);

          font-family:
            var(--casestudy-font-reading);

          font-size:
            var(--casestudy-font-reading-size);

          line-height: 24px;

          letter-spacing:
            var(--casestudy-font-reading-letter-spacing);

          text-align: left;
        }


        .casestudy-section-dark
        .casestudy-section-subtitle {

          color:
            var(--cs-text-on-dark-muted);
        }


        /* =====================================================
           BODY
           
           INI BAGIAN UTAMA YANG KAMU MAU:
           text rata kiri, tanpa mengubah layout.
        ===================================================== */

        .casestudy-body {

          max-width:
            var(--cs-copy-max);

          color:
            #d0d0d0;

          text-align: left;
        }


        .casestudy-body-large {

          font-family:
            var(--casestudy-font-reading-large) !important;

          font-size:
            var(--casestudy-font-reading-large-size) !important;

          line-height:
            var(--casestudy-font-reading-large-line-height) !important;

          letter-spacing:
            var(--casestudy-font-reading-large-letter-spacing) !important;

          text-align: left !important;
        }


        .casestudy-body-wide {

          max-width: 760px;

          margin-top:
            var(--cs-space-18);

          color:
            #d0d0d0;

          text-align: left;
        }


        .casestudy-section-dark
        .casestudy-body,

        .casestudy-section-dark
        .casestudy-body-wide {

          color:
            #ccc;

          text-align: left;
        }


        /* =====================================================
           CHALLENGE
        ===================================================== */

        .casestudy-challenge-grid {

          display: grid;

          grid-template-columns:
            minmax(0, 1.2fr)
            minmax(280px, 0.8fr);

          gap:
            var(--cs-column-gap);

          align-items: start;
        }


        .casestudy-copy {

          max-width:
            var(--cs-copy-max);

          text-align: left;
        }


        .casestudy-role-card {

          padding:
            var(--cs-space-11);

          background:
            #181818;

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          text-align: left;
        }


        .casestudy-role-card p {

          margin:
            var(--cs-space-5)
            0
            0;

          color:
            var(--cs-text-secondary);

          text-align: left;
        }


        .casestudy-card-label {

          display: block;

          color:
            var(--cs-text-faint);

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          line-height:
            var(--casestudy-font-mono-line-height);

          letter-spacing:
            var(--casestudy-font-mono-letter-spacing);

          text-align: left;
        }


        .casestudy-goal {

          display: grid;

          grid-template-columns:
            80px 1fr;

          gap:
            var(--cs-space-8);

          max-width: 820px;

          margin-top:
            var(--cs-space-18);

          padding-top:
            var(--cs-space-10);

          border-top:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          text-align: left;
        }


        .casestudy-goal-mark {

          color:
            var(--cs-accent-success);

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          text-align: left;
        }


        .casestudy-goal p {

          max-width: 650px;

          margin: 0;

          color:
            #fff;

          font-family:
            var(--casestudy-font-reading-large);

          font-size:
            var(--casestudy-font-reading-large-size);

          line-height:
            var(--casestudy-font-reading-large-line-height);

          letter-spacing:
            var(--casestudy-font-reading-large-letter-spacing);

          text-align: left;
        }


        /* =====================================================
           MEDIA CAPTION
        ===================================================== */

        .casestudy-media-caption {

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap:
            var(--cs-space-8);

          padding:
            var(--cs-space-5)
            var(--cs-space-7);

          background:
            #181818;

          border-top:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          text-align: left;
        }


        .casestudy-media-caption-label {

          color:
            #fff;

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          line-height:
            var(--casestudy-font-mono-line-height);

          letter-spacing:
            var(--casestudy-font-mono-letter-spacing);

          text-align: left;
        }


        .casestudy-media-caption-description {

          max-width: 520px;

          margin: 0 !important;

          color:
            var(--cs-text-subtle);

          font-family:
            var(--casestudy-font-reading);

          font-size:
            var(--casestudy-font-ui-size);

          line-height:
            var(--casestudy-font-ui-line-height);

          text-align: left;
        }


        /* =====================================================
           PROCESS FLOW
        ===================================================== */

        .casestudy-process-flow {

          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          margin-top:
            var(--cs-space-18);

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-default);
        }


        .casestudy-process-step {

          min-height: 140px;

          display: flex;

          flex-direction: column;

          justify-content: center;

          padding:
            var(--cs-space-10);

          background:
            #181818;

          border-right:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          text-align: left;
        }


        .casestudy-process-step:last-child {

          border-right: 0;
        }


        .casestudy-process-number {

          color:
            var(--cs-text-faint);

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          text-align: left;
        }


        .casestudy-process-title {

          margin-top:
            var(--cs-space-4);

          color:
            #fff;

          font-family:
            var(--casestudy-font-heading);

          font-size:
            var(--casestudy-font-reading-large-size);

          line-height: 1.1;

          font-weight:
            var(--casestudy-font-heading-weight);

          text-align: left;
        }


        .casestudy-process-description {

          margin-top:
            var(--cs-space-3);

          color:
            var(--cs-text-muted);

          font-family:
            var(--casestudy-font-reading);

          font-size:
            var(--casestudy-font-reading-size);

          line-height: 21px;

          text-align: left;
        }


        /* =====================================================
           STRATEGY
        ===================================================== */

        .casestudy-principles {

          margin-top:
            var(--cs-space-22);

          border-top:
            var(--cs-border-width)
            solid
            var(--cs-border-default);
        }


        .casestudy-principle {

          display: grid;

          grid-template-columns:
            80px 180px 1fr;

          gap:
            var(--cs-space-8);

          padding:
            var(--cs-space-11)
            0;

          border-bottom:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          text-align: left;
        }


        .casestudy-principle-number {

          color:
            var(--cs-text-faint);

          font-family:
            var(--casestudy-font-mono);

          text-align: left;
        }


        .casestudy-principle-title {

          color:
            #fff;

          font-family:
            var(--casestudy-font-heading);

          font-size: 22px;

          line-height: 1.1;

          font-weight:
            var(--casestudy-font-heading-weight);

          text-align: left;
        }


        .casestudy-principle-subtitle {

          margin-top:
            var(--cs-space-2);

          color:
            var(--cs-text-faint);

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          text-align: left;
        }


        .casestudy-principle-text {

          max-width: 600px;

          margin: 0 !important;

          color:
            var(--cs-text-secondary);

          text-align: left;
        }


        /* =====================================================
           PULL QUOTE
        ===================================================== */

        .casestudy-pullquote {

          max-width:
            var(--cs-quote-max);

          margin:
            var(--cs-space-19)
            0
            0;

          padding-left:
            var(--cs-space-10);

          border-left:
            3px
            solid
            #fff;

          color:
            #fff;

          font-family:
            var(--casestudy-font-reading-large);

          font-size:
            var(--casestudy-font-reading-large-size);

          line-height:
            var(--casestudy-font-reading-large-line-height);

          letter-spacing:
            var(--casestudy-font-reading-large-letter-spacing);

          text-align: left;
        }


        .casestudy-pullquote-blue {

          border-left-color:
            var(--cs-accent-primary);
        }


        .casestudy-pullquote-green {

          border-left-color:
            var(--cs-accent-success);
        }


        .casestudy-section-dark
        .casestudy-pullquote {

          color:
            #fff;

          border-left-color:
            #fff;

          text-align: left;
        }


        /* =====================================================
           EXECUTION
        ===================================================== */

        .casestudy-execution-intro {

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(280px, 0.8fr);

          gap:
            var(--cs-column-gap);

          align-items: start;

          text-align: left;
        }


        .casestudy-execution-intro
        .casestudy-pullquote {

          margin-top: 0;

          color:
            #fff;

          text-align: left;
        }


        .casestudy-workflow {

          display: grid;

          grid-template-columns:
            repeat(5, 1fr);

          margin-top:
            var(--cs-space-20);

          border-top:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);

          border-left:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);
        }


        .casestudy-workflow-node {

          min-height: 84px;

          display: flex;

          align-items: center;

          padding:
            var(--cs-space-5);

          color:
            var(--cs-text-on-dark);

          border-right:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);

          border-bottom:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          line-height: 18px;

          text-align: left;
        }


        /* =====================================================
           SCALE
        ===================================================== */

        .casestudy-scale {

          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap:
            var(--cs-space-3);

          margin-top:
            var(--cs-space-18);
        }


        .casestudy-scale-step {

          min-height: 130px;

          display: flex;

          flex-direction: column;

          justify-content: center;

          padding:
            var(--cs-space-10);

          background:
            var(--cs-color-dark-100);

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);

          text-align: left;
        }


        .casestudy-scale-number {

          color:
            var(--cs-color-dark-subtle);

          font-family:
            var(--casestudy-font-mono);

          text-align: left;
        }


        .casestudy-scale-title {

          margin-top:
            var(--cs-space-3);

          color:
            var(--cs-color-white);

          font-family:
            var(--casestudy-font-heading);

          font-size:
            var(--casestudy-font-reading-large-size);

          line-height: 23px;

          font-weight:
            var(--casestudy-font-heading-weight);

          text-align: left;
        }


        .casestudy-scale-description {

          margin-top:
            var(--cs-space-2);

          color:
            var(--cs-color-dark-muted);

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          text-align: left;
        }


        /* =====================================================
           MASTER / PRODUCTION
        ===================================================== */

        .casestudy-master-production {

          display: grid;

          grid-template-columns:
            1fr 70px 1.4fr;

          gap:
            var(--cs-space-8);

          align-items: center;

          margin-top:
            var(--cs-space-20);
        }


        .casestudy-master-card,
        .casestudy-production-card {

          min-width: 0;

          padding:
            var(--cs-space-10);

          background:
            var(--cs-color-dark-100);

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-dark);

          text-align: left;
        }


        .casestudy-master-card p,
        .casestudy-production-card p {

          margin:
            var(--cs-space-7)
            0
            0;

          color:
            var(--cs-color-dark-muted);

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          line-height: 18px;

          text-align: left;
        }


        .casestudy-master-card
        .casestudy-card-label,

        .casestudy-production-card
        .casestudy-card-label {

          color:
            var(--cs-color-dark-muted);

          text-align: left;
        }


        .casestudy-master-arrow {

          display: flex;

          align-items: center;

          justify-content: center;

          color:
            var(--cs-color-white);

          font-size: 30px;
        }


        .casestudy-icon-grid {

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap:
            var(--cs-space-2);

          margin-top:
            var(--cs-space-8);
        }


        .casestudy-icon-grid-large {

          grid-template-columns:
            repeat(8, 1fr);
        }


        .casestudy-icon {

          aspect-ratio: 1;

          display: flex;

          align-items: center;

          justify-content: center;

          color:
            var(--cs-color-dark-text);

          border:
            1px
            solid
            #444;

          font-size: 18px;
        }


        .casestudy-icon::before {

          content: '';

          display: block;
        }


        .casestudy-icon-circle::before {

          width: 42%;
          height: 42%;

          border:
            2px
            solid
            currentColor;

          border-radius: 50%;
        }


        .casestudy-icon-diamond::before {

          width: 38%;
          height: 38%;

          border:
            2px
            solid
            currentColor;

          transform:
            rotate(45deg);
        }


        .casestudy-icon-triangle::before {

          width: 0;
          height: 0;

          border-left:
            7px
            solid
            transparent;

          border-right:
            7px
            solid
            transparent;

          border-bottom:
            13px
            solid
            currentColor;
        }


        .casestudy-icon-plus::before {

          content: '+';

          font-size: 20px;

          line-height: 1;
        }


        .casestudy-icon-square::before {

          width: 38%;
          height: 38%;

          border:
            2px
            solid
            currentColor;
        }


        .casestudy-icon-cross::before {

          content: '×';

          font-size: 22px;

          line-height: 1;
        }


        /* =====================================================
           IMPACT
        ===================================================== */

        .casestudy-impact-grid {

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(300px, 0.7fr);

          gap:
            var(--cs-column-gap);

          align-items: stretch;
        }


        .casestudy-impact-copy {

          text-align: left;
        }


        .casestudy-impact-stat {

          display: flex;

          flex-direction: column;

          justify-content: center;

          padding:
            var(--cs-space-12);

          background:
            #000;

          color:
            #fff;

          text-align: left;
        }


        .casestudy-impact-number {

          color:
            #fff;

          font-family:
            var(--casestudy-font-heading);

          font-size:
            clamp(52px, 7vw, 86px);

          line-height: 0.9;

          font-weight:
            var(--casestudy-font-heading-weight);

          text-align: left;
        }


        .casestudy-impact-label {

          margin-top:
            var(--cs-space-5);

          color:
            var(--cs-color-green);

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          text-align: left;
        }


        .casestudy-impact-description {

          max-width: 300px;

          margin-top:
            var(--cs-space-8);

          color: #aaa;

          font-family:
            var(--casestudy-font-reading);

          font-size:
            var(--casestudy-font-reading-size);

          line-height: 23px;

          text-align: left;
        }


        /* =====================================================
           REFLECTION
        ===================================================== */

        .casestudy-reflection-content {

          max-width: 760px;

          text-align: left;
        }


        .casestudy-reflection-lead {

          margin:
            0
            0
            var(--cs-space-12);

          color:
            #fff;

          font-family:
            var(--casestudy-font-reading-large);

          font-size:
            var(--casestudy-font-reading-large-size);

          line-height:
            var(--casestudy-font-reading-large-line-height);

          text-align: left;
        }


        /* =====================================================
           SNAPSHOT
        ===================================================== */

        .casestudy-snapshot {

          margin-top:
            var(--cs-space-22);

          border:
            var(--cs-border-width)
            solid
            var(--cs-border-default);
        }


        .casestudy-snapshot-header {

          padding:
            var(--cs-space-5)
            var(--cs-space-7);

          background:
            #000;

          color:
            #fff;

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          text-align: left;
        }


        .casestudy-snapshot-grid {

          display: grid;

          grid-template-columns:
            repeat(2, 1fr);
        }


        .casestudy-snapshot-item {

          min-height: 120px;

          padding:
            var(--cs-space-9);

          background:
            #181818;

          border-right:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          border-bottom:
            var(--cs-border-width)
            solid
            var(--cs-border-default);

          text-align: left;
        }


        .casestudy-snapshot-item:nth-child(2n) {

          border-right: 0;
        }


        .casestudy-snapshot-item:nth-last-child(-n + 2) {

          border-bottom: 0;
        }


        .casestudy-snapshot-label {

          display: block;

          color:
            var(--cs-text-faint);

          font-family:
            var(--casestudy-font-mono);

          font-size:
            var(--casestudy-font-mono-size);

          text-align: left;
        }


        .casestudy-snapshot-value {

          display: block;

          margin-top:
            var(--cs-space-4);

          color:
            #fff;

          font-family:
            var(--casestudy-font-heading);

          font-size:
            var(--casestudy-font-reading-size);

          line-height: 23px;

          font-weight:
            var(--casestudy-font-heading-weight);

          text-align: left;
        }


        /* =====================================================
           NOTION LINK
        ===================================================== */

        .casestudy-notion-link {

          display: inline-block;

          margin-top:
            var(--cs-space-13);

          padding:
            var(--cs-space-4)
            var(--cs-space-7);

          background:
            #fff;

          color:
            #000;

          border:
            var(--cs-window-border-width)
            solid
            #fff;

          font-family:
            var(--casestudy-font-ui);

          font-size:
            var(--casestudy-font-ui-size);

          line-height:
            var(--cs-space-10);

          text-decoration: none;

          transition:
            background-color 120ms ease,
            color 120ms ease;
        }


        .casestudy-notion-link:hover {

          background:
            #000;

          color:
            #fff;
        }


        /* =====================================================
           STATUS BAR
        ===================================================== */

        .casestudy-statusbar {

          flex: 0 0 23px;

          height: 23px;

          display: flex;

          gap:
            var(--cs-space-1);

          padding:
            2px
            var(--cs-space-1);

          background:
            #3a3a3a;
        }


        .casestudy-status-item {

          display: flex;

          align-items: center;

          padding:
            0
            var(--cs-space-2);

          color: #fff;

          border-top:
            1px
            solid
            #555;

          border-left:
            1px
            solid
            #555;

          border-right:
            1px
            solid
            #111;

          border-bottom:
            1px
            solid
            #111;

          overflow: hidden;

          white-space: nowrap;

          text-overflow: ellipsis;

          font-family:
            var(--casestudy-font-ui);

          font-size:
            var(--casestudy-font-ui-size);
        }


        .casestudy-status-ready {

          width: 100px;
        }


        /* =====================================================
           RESPONSIVE — 900px
        ===================================================== */

        @media (max-width: 900px) {

          .casestudy-window {

            --cs-container-max: calc(100% - 64px);

            --cs-container-gutter: 32px;

            --cs-column-gap:
              var(--cs-column-gap-mobile);
          }


          .casestudy-meta-grid {

            grid-template-columns:
              repeat(2, 1fr);
          }


          .casestudy-challenge-grid,
          .casestudy-execution-intro,
          .casestudy-impact-grid {

            grid-template-columns: 1fr;
          }


          .casestudy-process-flow {

            grid-template-columns: 1fr;
          }


          .casestudy-process-step {

            min-height: 100px;

            border-right: 0;

            border-bottom:
              var(--cs-border-width)
              solid
              var(--cs-border-default);
          }


          .casestudy-process-step:last-child {

            border-bottom: 0;
          }


          .casestudy-principle {

            grid-template-columns:
              60px 180px 1fr;
          }


          .casestudy-workflow {

            grid-template-columns:
              repeat(3, 1fr);
          }


          .casestudy-master-production {

            grid-template-columns: 1fr;

            gap:
              var(--cs-space-5);
          }


          .casestudy-master-arrow {

            transform:
              rotate(90deg);
          }

        }


        /* =====================================================
           RESPONSIVE — 700px
        ===================================================== */

        @media (max-width: 700px) {

          .casestudy-window {

            --cs-container-max: calc(100% - 48px);

            --cs-container-gutter: 24px;
          }


          .casestudy-hero {

            padding:
              var(--cs-space-16)
              0
              var(--cs-space-17);
          }


          .casestudy-section {

            padding:
              var(--cs-space-19)
              0;
          }


          .casestudy-meta-grid {

            grid-template-columns:
              1fr 1fr;
          }


          .casestudy-principle {

            grid-template-columns:
              50px 180px 1fr;

            gap:
              var(--cs-space-5);
          }


          .casestudy-workflow {

            grid-template-columns:
              repeat(2, 1fr);
          }


          .casestudy-scale {

            grid-template-columns: 1fr;
          }


          .casestudy-snapshot-grid {

            grid-template-columns: 1fr;
          }


          .casestudy-snapshot-item,
          .casestudy-snapshot-item:nth-child(2n) {

            border-right: 0;
          }


          .casestudy-snapshot-item:nth-last-child(-n + 2) {

            border-bottom:
              var(--cs-border-width)
              solid
              var(--cs-border-default);
          }


          .casestudy-snapshot-item:last-child {

            border-bottom: 0;
          }


          .casestudy-media-caption {

            flex-direction: column;

            align-items: flex-start;
          }


          .casestudy-media-caption-description {

            text-align: left;
          }

        }


        /* =====================================================
           RESPONSIVE — 520px
        ===================================================== */

        @media (max-width: 520px) {

          .casestudy-window {

            --cs-container-max: calc(100% - 32px);

            --cs-container-gutter: 16px;
          }


          .casestudy-hero-title {

            font-size:
              clamp(34px, 11vw, 52px);
          }


          .casestudy-hero-lead {

            font-size:
              var(--casestudy-font-reading-size);

            line-height: 24px;
          }


          .casestudy-meta-grid {

            grid-template-columns: 1fr;
          }


          .casestudy-goal {

            grid-template-columns: 1fr;

            gap:
              var(--cs-space-3);
          }


          .casestudy-process-flow {

            grid-template-columns: 1fr;
          }


          .casestudy-principle {

            grid-template-columns:
              40px 1fr;
          }


          .casestudy-principle-text {

            grid-column:
              1 / -1;
          }


          .casestudy-workflow {

            grid-template-columns: 1fr;
          }


          .casestudy-icon-grid-large {

            grid-template-columns:
              repeat(6, 1fr);
          }


          .casestudy-pullquote {

            padding-left:
              var(--cs-space-8);

            font-size:
              var(--casestudy-font-reading-size);

            line-height: 25px;

            text-align: left;
          }


          .casestudy-impact-number {

            font-size: 58px;
          }


          .casestudy-snapshot-item {

            min-height: auto;
          }


          .casestudy-media-caption {

            padding:
              var(--cs-space-5);
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
   MEDIA IMAGE
========================================================= */

function MediaImage({
  src,
  alt,
  label,
  description,
}) {
  return (
    <figure className="casestudy-media">

      <img
        src={src}
        alt={alt}
        className="casestudy-media-image"
      />

      <figcaption className="casestudy-media-caption">

        <span className="casestudy-media-caption-label">
          {label}
        </span>

        {description && (
          <p className="casestudy-media-caption-description">
            {description}
          </p>
        )}

      </figcaption>

    </figure>
  );
}


/* =========================================================
   PROCESS FLOW
========================================================= */

function ProcessFlow() {

  const steps = [
    {
      number: '01',
      title: 'Understand',
      description:
        'Identify the concept and the information that matters.',
    },
    {
      number: '02',
      title: 'Simplify',
      description:
        'Reduce complexity without losing recognition.',
    },
    {
      number: '03',
      title: 'Visualize',
      description:
        'Translate the idea into the established visual language.',
    },
  ];

  return (
    <div className="casestudy-process-flow">

      {steps.map((step) => (

        <div
          key={step.number}
          className="casestudy-process-step"
        >

          <span className="casestudy-process-number">
            {step.number}
          </span>

          <span className="casestudy-process-title">
            {step.title}
          </span>

          <span className="casestudy-process-description">
            {step.description}
          </span>

        </div>

      ))}

    </div>
  );
}


/* =========================================================
   STRATEGY PRINCIPLE
========================================================= */

function StrategyPrinciple({
  number,
  title,
  subtitle,
  text,
}) {
  return (
    <div className="casestudy-principle">

      <span className="casestudy-principle-number">
        {number}
      </span>

      <div>

        <div className="casestudy-principle-title">
          {title}
        </div>

        <div className="casestudy-principle-subtitle">
          {subtitle}
        </div>

      </div>

      <p className="casestudy-principle-text">
        {text}
      </p>

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
   WORKFLOW
========================================================= */

function Workflow() {

  const steps = [
    'Master Icons',
    'Production',
    'Review',
    'Refinement',
    'Final Assets',
  ];

  return (
    <div className="casestudy-workflow">

      {steps.map((step, index) => (

        <div
          key={step}
          className="casestudy-workflow-node"
        >

          {String(index + 1).padStart(2, '0')}
          {'  '}
          {step}

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
      description: 'Small reference set',
    },
    {
      number: '02',
      title: 'BATCHES',
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
   ICON SHAPE
========================================================= */

function IconShape({
  type,
}) {
  return (
    <span
      className={`casestudy-icon casestudy-icon-${type}`}
      aria-hidden="true"
    />
  );
}


/* =========================================================
   SNAPSHOT ITEM
========================================================= */

function SnapshotItem({
  label,
  value,
}) {
  return (
    <div className="casestudy-snapshot-item">

      <span className="casestudy-snapshot-label">
        {label}
      </span>

      <span className="casestudy-snapshot-value">
        {value}
      </span>

    </div>
  );
}
