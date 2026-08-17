import React, { useState } from 'react';

import {
  Fieldset,
  Frame,
} from '@react95/core';

import perdanaImage from './perdana.png';


/* ======================================
   WINDOWS 95 CHECKBOX
====================================== */

function Win95Checkbox({ checked, onChange, children }) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',

        minHeight: 24,

        gap: 6,

        cursor: 'pointer',
        userSelect: 'none',

        fontFamily: '"MS Sans Serif", sans-serif',
        fontSize: 12,
        lineHeight: '18px',

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

      {/* WIN95 CHECKBOX */}

      <span
        aria-hidden="true"
        style={{
          position: 'relative',

          width: 13,
          height: 13,

          flexShrink: 0,

          boxSizing: 'border-box',

          background: '#ffffff',

          /*
            Classic Win95 bevel:
            dark top/left
            light bottom/right
          */
          borderTop: '1px solid #808080',
          borderLeft: '1px solid #808080',
          borderRight: '1px solid #ffffff',
          borderBottom: '1px solid #ffffff',

          boxShadow: `
            inset 1px 1px 0 #000000,
            inset -1px -1px 0 #dfdfdf
          `,

          display: 'block',
        }}
      >

        {checked && (
          <>
            {/* black pixel-style check */}

            <span
              style={{
                position: 'absolute',

                width: 4,
                height: 8,

                left: 3,
                top: 1,

                borderRight: '2px solid #000000',
                borderBottom: '2px solid #000000',

                transform: 'rotate(45deg)',

                boxSizing: 'border-box',
              }}
            />

          </>
        )}

      </span>


      {/* LABEL */}

      <span
        style={{
          display: 'block',

          fontFamily: '"MS Sans Serif", sans-serif',
          fontSize: 12,
          lineHeight: '18px',

          color: '#000000',
        }}
      >
        {children}
      </span>

    </label>
  );
}


export default function InstallerWelcome() {
  const [features, setFeatures] = useState({
    portfolio: true,
    design: true,
    evolving: true,
  });

  return (
    <article
      aria-labelledby="identity-title"
      style={{
        height: '100%',

        display: 'flex',
        flexDirection: 'column',

        fontFamily: '"MS Sans Serif", sans-serif',
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

          gap: 18,

          boxSizing: 'border-box',
        }}
      >

        {/* ====================================
            LEFT COLUMN
        ==================================== */}

        <div
          aria-label="Portrait of Perdana Kurniawan Arta"
          style={{
            width: 190,

            flexShrink: 0,

            background: '#008080',

            border: '2px inset #c0c0c0',

            boxSizing: 'border-box',

            overflow: 'hidden',

            display: 'flex',
          }}
        >

          {/* 
          <img
            src={perdanaImage}
            alt="Perdana Kurniawan Arta, Visual Designer"
            style={{
              width: '100%',
              height: '100%',
              display: 'block',

              objectFit: 'cover',
              objectPosition: '100% 50%',
            }}
          />
          */}

        </div>


        {/* ====================================
            RIGHT COLUMN
        ==================================== */}

        <div
          style={{
            flex: 1,

            minWidth: 0,
            minHeight: 0,

            display: 'flex',
            flexDirection: 'column',

            overflowY: 'auto',

            paddingRight: 6,

            boxSizing: 'border-box',

            fontFamily: '"MS Sans Serif", sans-serif',
            fontSize: 12,
            lineHeight: 1.5,

            textAlign: 'left',
          }}
        >

          {/* ==================================
              TITLE
          ================================== */}

          <header
            style={{
              paddingBottom: 10,

              borderBottom: '1px solid #808080',
            }}
          >

            <h2
              id="perdana-pc-welcome-title"
              style={{
                margin: '3px 0 0',

                fontFamily: '"MS Sans Serif", sans-serif',
                fontSize: 16,
                lineHeight: 1.25,

                fontWeight: 'bold',

                textAlign: 'left',

                color: '#000000',
              }}
            >
              Welcome to Perdana's Computer
            </h2>

          </header>


          {/* ==================================
              INTRODUCTION
          ================================== */}

          <section
            aria-labelledby="identity-title"
            style={{
              paddingTop: 10,
            }}
          >

            <p
              style={{
                margin: '0 0 6px',

                fontFamily: '"MS Sans Serif", sans-serif',
                fontSize: 12,
                lineHeight: 1.5,

                textAlign: 'left',

                color: '#000000',
              }}
            >
              Before exploring the work, start with the
              person behind it.
            </p>


            {/* ==================================
                IDENTITY
            ================================== */}

            <h1
              id="identity-title"
              style={{
                margin: '0 0 12px',

                fontFamily: '"MS Sans Serif", sans-serif',
                fontSize: 16,
                lineHeight: 1.3,

                fontWeight: 'bold',

                textAlign: 'center',

                color: '#000000',

                letterSpacing: '0.02em',
              }}
            >
              Perdana Kurniawan Arta
            </h1>


            <p
              style={{
                margin: '0 0 12px',

                fontFamily: '"MS Sans Serif", sans-serif',
                fontSize: 12,
                lineHeight: 1.5,

                textAlign: 'left',

                color: '#000000',
              }}
            >
              Visual Designer exploring Product Design,
              UX, and Design Engineering
            </p>


            {/* ==================================
                ABOUT
            ================================== */}

            <section
              aria-labelledby="about-title"
            >

              <h2
                id="about-title"
                style={{
                  margin: '0 0 12px',

                  fontFamily: '"MS Sans Serif", sans-serif',
                  fontSize: 12,
                  lineHeight: 1.3,

                  fontWeight: 'bold',

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                About this Computer
              </h2>


              <div
                style={{
                  paddingLeft: 20,

                  boxSizing: 'border-box',
                }}
              >

<p
  style={{
    margin: 0,

    fontFamily: '"MS Sans Serif", sans-serif',
    fontSize: 12,
    lineHeight: 1.5,

    textAlign: 'left',

    color: '#000000',
  }}
>
  A visual designer with 10+ years of experience
  {' '}across visual design, visual systems,
  iconography, illustration, and design direction,
  now expanding into product design, UX, and
  design engineering.
</p>


                <p
                  style={{
                    margin: '11px 0 0',

                    fontFamily: '"MS Sans Serif", sans-serif',
                    fontSize: 12,
                    lineHeight: 1.5,

                    textAlign: 'left',

                    color: '#000000',
                  }}
                >
                  Through this work, he explores how design,
                  interaction, and code can come together to
                  build functional digital experiences.
                </p>

              </div>

            </section>

          </section>


          {/* ==================================
              FLEXIBLE SPACE
          ================================== */}

          <div
            aria-hidden="true"
            style={{
              flex: 1,

              minHeight: 18,
            }}
          />


          {/* ==================================
              INSIDE PERDANA'S COMPUTER
          ================================== */}

          <section
            aria-labelledby="inside-title"
            style={{
              paddingTop: 12,
            }}
          >

            <Fieldset
              legend="Inside Perdana's Computer"
              style={{
                width: '100%',

                boxSizing: 'border-box',

                margin: 0,

                fontFamily: '"MS Sans Serif", sans-serif',
                fontSize: 12,
                lineHeight: 1.5,

                background: '#c0c0c0',
              }}
            >

              <Frame
                display="flex"
                flexDirection="column"
                style={{
                  gap: 1,

                  padding: '2px 0',

                  fontFamily: '"MS Sans Serif", sans-serif',
                  fontSize: 12,
                  lineHeight: 1.5,

                  background: '#c0c0c0',
                }}
              >

                <Win95Checkbox
                  checked={features.portfolio}
                  onChange={(event) => {
                    setFeatures((current) => ({
                      ...current,
                      portfolio: event.target.checked,
                    }));
                  }}
                >
                  Interactive Portfolio
                </Win95Checkbox>


                <Win95Checkbox
                  checked={features.design}
                  onChange={(event) => {
                    setFeatures((current) => ({
                      ...current,
                      design: event.target.checked,
                    }));
                  }}
                >
                  Design, UX &amp; Design Engineering
                </Win95Checkbox>


                <Win95Checkbox
                  checked={features.evolving}
                  onChange={(event) => {
                    setFeatures((current) => ({
                      ...current,
                      evolving: event.target.checked,
                    }));
                  }}
                >
                  Continuously evolving
                </Win95Checkbox>

              </Frame>

            </Fieldset>

          </section>

        </div>

      </section>

    </article>
  );
}