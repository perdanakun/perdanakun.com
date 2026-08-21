import React, { useState } from 'react';

import {
  Fieldset,
  Frame,
} from '@react95/core';

import win95installimg
  from './win95_install_illustration.png';


/* ======================================
   WINDOWS 95 CHECKBOX
====================================== */

function Win95Checkbox({
  checked,
  onChange,
  children,
}) {
  return (
    <label
      className="win95-checkbox ui-font-reading"
      style={{
        display: 'flex',

        alignItems: 'center',

        minHeight: 24,

        gap: 10,

        cursor: 'pointer',
        userSelect: 'none',

        color: '#000000',
      }}
    >

      {/* ==================================
          NATIVE CHECKBOX
      ================================== */}

      <input
        type="checkbox"

        checked={checked}

        onChange={onChange}

        aria-label={
          typeof children === 'string'
            ? children
            : undefined
        }

        className="win95-checkbox-input"

        style={{
          position: 'absolute',

          width: 1,
          height: 1,

          margin: 0,

          opacity: 0,

          pointerEvents: 'none',
        }}
      />


      {/* ==================================
          WIN95 CHECKBOX VISUAL
      ================================== */}

      <span
        aria-hidden="true"

        className="win95-checkbox-box"

        style={{
          position: 'relative',

          width: 13,
          height: 13,

          flexShrink: 0,

          boxSizing: 'border-box',

          background: '#ffffff',

          borderTop:
            '1px solid #808080',

          borderLeft:
            '1px solid #808080',

          borderRight:
            '1px solid #ffffff',

          borderBottom:
            '1px solid #ffffff',

          boxShadow: `
            inset 1px 1px 0 #000000,
            inset -1px -1px 0 #dfdfdf
          `,

          display: 'block',
        }}
      >

        {/* ==================================
            CHECK MARK
        ================================== */}

        {checked && (
          <span
            style={{
              position: 'absolute',

              width: 4,
              height: 8,

              left: 3,
              top: 1,

              borderRight:
                '2px solid #000000',

              borderBottom:
                '2px solid #000000',

              transform:
                'rotate(45deg)',

              boxSizing:
                'border-box',
            }}
          />
        )}

      </span>


      {/* ==================================
          LABEL
      ================================== */}

      <span
        className="ui-font-reading"

        style={{
          display: 'block',

          minWidth: 0,

          color: '#000000',
        }}
      >
        {children}
      </span>

    </label>
  );
}


/* ======================================
   FEATURE OPTION
====================================== */

function FeatureOption({
  checked,
  onChange,
  title,
}) {
  return (
    <Win95Checkbox
      checked={checked}
      onChange={onChange}
    >
      <b>{title}</b>
    </Win95Checkbox>
  );
}


/* ======================================
   INSTALLER WELCOME
====================================== */

export default function InstallerWelcome() {

  const [features, setFeatures] =
    useState({
      visualDesign: true,
      productDesign: true,
      designEngineering: true,
    });


  return (
    <article
      aria-labelledby="perdana-pc-welcome-title"

      className="ui-font-reading"

      style={{
        height: '100%',

        display: 'flex',
        flexDirection: 'column',

        color: '#000000',

        boxSizing: 'border-box',
      }}
    >

      {/* ======================================
          MOBILE RESPONSIVE STYLE
      ====================================== */}

      <style>
        {`
          @media (max-width: 600px) {

            .welcome-layout {
              flex-direction: column !important;

              gap: 12px !important;
            }


            .welcome-image {
              width: 100% !important;
              min-width: 0 !important;

              height: 150px !important;

              flex-shrink: 0 !important;
            }


            .welcome-content {
              width: 100%;

              padding-right: 2px !important;
            }


            .welcome-features {
              padding-left: 12px !important;
            }

          }


          /* ==============================
             CHECKBOX FOCUS
          ============================== */

          .win95-checkbox-input:focus-visible
          + .win95-checkbox-box {

            outline:
              1px dotted #000000;

            outline-offset: 2px;
          }
        `}
      </style>


      {/* ======================================
          TWO COLUMN LAYOUT
      ====================================== */}

      <section
        aria-label="Perdana's Computer introduction"

        className="welcome-layout"

        style={{
          display: 'flex',

          flex: 1,
          minHeight: 0,

          gap: 15,

          boxSizing: 'border-box',
        }}
      >

        {/* ====================================
            LEFT COLUMN
        ==================================== */}

        <div
          aria-label="Portrait of Perdana Kurniawan Arta"

          className="welcome-image"

          style={{
            width: 170,
            minWidth: 170,

            flexShrink: 0,

            background: '#54A8A8',

            border:
              '2px inset #c0c0c0',

            boxSizing: 'border-box',

            overflow: 'hidden',

            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center',
          }}
        >

          <img
            src={win95installimg}

            alt="Perdana Kurniawan Arta, Visual Designer"

            style={{
              width: '100%',
              height: '100%',

              display: 'block',

              objectFit: 'contain',
              objectPosition: 'center',

              transform: 'scale(1)',
            }}
          />

        </div>


        {/* ====================================
            RIGHT COLUMN
        ==================================== */}

        <div
          className="
            ui-font-reading
            welcome-content
          "

          style={{
            flex: 1,

            minWidth: 0,
            minHeight: 0,

            display: 'flex',
            flexDirection: 'column',

            overflowY: 'auto',

            paddingRight: 6,

            boxSizing: 'border-box',

            textAlign: 'left',

            color: '#000000',
          }}
        >

          {/* ==================================
              TITLE
          ================================== */}

          <header
            style={{
              paddingBottom: 0,
            }}
          >

            <h2
              id="perdana-pc-welcome-title"

              className="ui-font-reading"

              style={{
                margin: '3px 0 0',

                padding: 0,

                fontSize: 16,
                lineHeight: '20px',

                letterSpacing:
                  '-0.3px',

                fontWeight: 700,

                textAlign: 'left',

                color: '#000000',
              }}
            >
              About this Computer
            </h2>

          </header>


          {/* ==================================
              ABOUT INTRODUCTION
          ================================== */}

          <section
            aria-labelledby="about-introduction-title"

            style={{
              paddingTop: 15,

              boxSizing: 'border-box',
            }}
          >

            <div
              id="about-introduction-title"

              className="ui-font-reading"

              style={{
                boxSizing: 'border-box',

                color: '#000000',
              }}
            >

              {/* ==================================
                  PARAGRAPH 1
              ================================== */}

              <p
                style={{
                  margin: 0,

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                This is Perdana's personal computer — a place
                to explore his work, experience, ideas, and
                experiments.
              </p>


              {/* ==================================
                  PARAGRAPH 2
              ================================== */}

              <p
                style={{
                  margin: '10px 0 0',

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                Inside, you'll find work shaped by years of
                visual design, alongside newer explorations
                into product design, UX, and design engineering.
              </p>


              {/* ==================================
                  PARAGRAPH 3
              ================================== */}

              <p
                style={{
                  margin: '10px 0 0',

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                Not everything here is a finished product.
                Some projects are built, some are being explored,
                and some are simply ideas worth following.
              </p>


              {/* ==================================
                  PARAGRAPH 4
              ================================== */}

              <p
                style={{
                  margin: '10px 0 0',

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                Think of it less like a portfolio and more like
                a computer you can look around. Explore the work,
                trace the ideas, and see the things Perdana has
                built, tested, and figured out along the way.
              </p>

            </div>

          </section>


          {/* ==================================
              WHAT'S INSIDE
          ================================== */}

          <section
            aria-labelledby="inside-computer-title"

            style={{
              paddingTop: 12,

              boxSizing: 'border-box',
            }}
          >

            {/* ==================================
                INTRODUCTION
            ================================== */}

            <p
              id="inside-computer-title"

              style={{
                margin: '0 0 10px',

                textAlign: 'left',

                color: '#000000',
              }}
            >
              Inside Perdana’s computer, you’ll find:
            </p>


            {/* ==================================
                FEATURE FIELDSET
            ================================== */}

            <Fieldset
              className="ui-font-reading"

              style={{
                width: '100%',

                boxSizing: 'border-box',

                margin: 0,

                background: '#c0c0c0',

                color: '#000000',
              }}
            >

              <Frame
                display="flex"

                flexDirection="column"

                className="
                  ui-font-reading
                  welcome-features
                "

                style={{
                  gap: 1,

                  padding:
                    '0 0 0 15px',

                  background:
                    '#c0c0c0',

                  color: '#000000',
                }}
              >

                {/* ==================================
                    VISUAL DESIGN
                ================================== */}

                <FeatureOption
                  checked={
                    features.visualDesign
                  }

                  onChange={(event) => {
                    setFeatures((current) => ({
                      ...current,

                      visualDesign:
                        event.target.checked,
                    }));
                  }}

                  title="Visual Design & Systems"
                />


                {/* ==================================
                    PRODUCT DESIGN
                ================================== */}

                <FeatureOption
                  checked={
                    features.productDesign
                  }

                  onChange={(event) => {
                    setFeatures((current) => ({
                      ...current,

                      productDesign:
                        event.target.checked,
                    }));
                  }}

                  title="Product Design & UX"
                />


                {/* ==================================
                    DESIGN ENGINEERING
                ================================== */}

                <FeatureOption
                  checked={
                    features.designEngineering
                  }

                  onChange={(event) => {
                    setFeatures((current) => ({
                      ...current,

                      designEngineering:
                        event.target.checked,
                    }));
                  }}

                  title="Design Engineering & Experiments"
                />

              </Frame>

            </Fieldset>

          </section>


          {/* ==================================
              NOTE
          ================================== */}

          <section
            aria-labelledby="welcome-note-title"

            style={{
              marginTop: 'auto',

              paddingTop: 12,

              boxSizing: 'border-box',
            }}
          >

            <div
              className="ui-font-reading"

              style={{
                paddingTop: 10,

                boxSizing: 'border-box',

                color: '#000000',
              }}
            >

              <p
                id="welcome-note-title"

                style={{
                  margin: 0,

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                Note: Work, ideas, notes, experiments, and things
                built along the way.
              </p>

            </div>

          </section>

        </div>

      </section>

    </article>
  );
}