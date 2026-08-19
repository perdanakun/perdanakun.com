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
      className="ui-font"
      style={{
        display: 'flex',
        alignItems: 'center',

        minHeight: 24,

        gap: 6,

        cursor: 'pointer',
        userSelect: 'none',

        color: '#000000',
      }}
    >

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label={children}

        style={{
          position: 'absolute',

          width: 1,
          height: 1,

          opacity: 0,

          pointerEvents: 'none',
        }}
      />


      {/* ==================================
          WIN95 CHECKBOX
      ================================== */}

      <span
        aria-hidden="true"
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
        className="ui-font"
        style={{
          display: 'block',

          color: '#000000',
        }}
      >
        {children}
      </span>

    </label>
  );
}


/* ======================================
   INSTALLER WELCOME
====================================== */

export default function InstallerWelcome() {

  const [features, setFeatures] =
    useState({
      portfolio: true,
      design: true,
      evolving: true,
    });


  return (
    <article
      aria-labelledby="perdana-pc-welcome-title"

      className="ui-font"

      style={{
        height: '100%',

        display: 'flex',
        flexDirection: 'column',

        color: '#000000',

        boxSizing: 'border-box',
      }}
    >

      {/* ======================================
          TWO COLUMN LAYOUT
      ====================================== */}

      <section
        aria-label="Perdana's Computer introduction"

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
          className="ui-font"

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
              paddingBottom: 10,

              borderBottom:
                '1px solid #808080',
            }}
          >

            <h2
              id="perdana-pc-welcome-title"

              className="ui-font"

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
              INTRODUCTION
          ================================== */}

          <section
            aria-labelledby="about-title"

            style={{
              paddingTop: 10,
            }}
          >

            {/* ==================================
                ABOUT
            ================================== */}

            <div
              id="about-title"

              className="ui-font"

              style={{
                boxSizing: 'border-box',

                color: '#000000',
              }}
            >

              {/* ==================================
                  ABOUT — PARAGRAPH 1
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
                  ABOUT — PARAGRAPH 2
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
                  ABOUT — PARAGRAPH 3
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
                  ABOUT — PARAGRAPH 4
              ================================== */}

              <p
                style={{
                  margin: '10px 0 0',

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                Think of it less like a portfolio and more like
                a computer you can look around.
              </p>

            </div>

          </section>


          {/* ==================================
              INSIDE PERDANA'S COMPUTER
          ================================== */}

          <section
            aria-labelledby="inside-title"

            style={{
              marginTop: 'auto',

              paddingTop: 12,

              boxSizing: 'border-box',
            }}
          >

            {/* ==================================
                FIELDSET
            ================================== */}

            <Fieldset
              className="ui-font"

              legend="Inside Perdana's Computer"

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

                className="ui-font"

                style={{
                  gap: 1,

                  padding:
                    '2px 0',

                  background:
                    '#c0c0c0',

                  color: '#000000',
                }}
              >

                {/* ==================================
                    VISUAL DESIGN
                ================================== */}

                <Win95Checkbox
                  checked={features.portfolio}

                  onChange={(event) => {
                    setFeatures((current) => ({
                      ...current,

                      portfolio:
                        event.target.checked,
                    }));
                  }}
                >
                  Visual Design &amp; Systems
                </Win95Checkbox>


                {/* ==================================
                    PRODUCT DESIGN
                ================================== */}

                <Win95Checkbox
                  checked={features.design}

                  onChange={(event) => {
                    setFeatures((current) => ({
                      ...current,

                      design:
                        event.target.checked,
                    }));
                  }}
                >
                  Product Design &amp; UX
                </Win95Checkbox>


                {/* ==================================
                    DESIGN ENGINEERING
                ================================== */}

                <Win95Checkbox
                  checked={features.evolving}

                  onChange={(event) => {
                    setFeatures((current) => ({
                      ...current,

                      evolving:
                        event.target.checked,
                    }));
                  }}
                >
                  Design Engineering &amp; Experiments
                </Win95Checkbox>

              </Frame>

            </Fieldset>


            {/* ==================================
                INSIDE DESCRIPTION
            ================================== */}

            <div
              className="ui-font"

              style={{
                paddingTop: 10,

                boxSizing:
                  'border-box',

                color: '#000000',
              }}
            >

              <p
                style={{
                  margin: 0,

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                Work, ideas, notes, experiments, and things built
                along the way.
              </p>

            </div>

          </section>

        </div>

      </section>

    </article>
  );
}
