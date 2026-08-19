import React from 'react';

import {
  Bookmark,
  Shell32135,
  Drvspace7,
  Brush,
} from '@react95/icons';

import win95installimg
  from './win95_install_illustration.png';


/* ======================================
   WINDOWS 95 RADIO BUTTON
====================================== */

function Win95RadioButton() {
  return (
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

        borderRadius: '50%',

        boxShadow: `
          inset 1px 1px 0 #000000,
          inset -1px -1px 0 #dfdfdf
        `,

        display: 'block',
      }}
    >

      {/* ==================================
          WIN95 RADIO DOT
      ================================== */}

      <span
        style={{
          position: 'absolute',

          width: 5,
          height: 5,

          left: 3,
          top: 3,

          background: '#000000',

          borderRadius: '50%',

          boxSizing: 'border-box',
        }}
      />

    </span>
  );
}


/* ======================================
   SYSTEM REQUIREMENT OPTION
====================================== */

function RequirementOption({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div
      className="requirement-option ui-font"

      style={{
        display: 'flex',

        alignItems: 'flex-start',

        width: '100%',

        boxSizing: 'border-box',

        margin: 0,
        padding: '5px 0',

        gap: 8,

        color: '#000000',
      }}
    >

      {/* ==================================
          ICON
      ================================== */}

      <div
        aria-hidden="true"
        className="requirement-icon"

        style={{
          width: 32,
          minWidth: 32,

          height: 32,

          display: 'flex',

          alignItems: 'center',
          justifyContent: 'center',

          boxSizing: 'border-box',
        }}
      >

        <Icon
          style={{
            width: 24,
            height: 24,
          }}
        />

      </div>


      {/* ==================================
          RADIO BUTTON
      ================================== */}

      <div
        className="requirement-radio"

        style={{
          paddingTop: 6,

          flexShrink: 0,

          marginLeft: 6,
          marginRight: 12,
        }}
      >

        <Win95RadioButton />

      </div>


      {/* ==================================
          TEXT
      ================================== */}

      <div
        className="requirement-text"

        style={{
          minWidth: 0,

          display: 'flex',
          flexDirection: 'column',

          paddingRight: 4,

          boxSizing: 'border-box',
        }}
      >

        {/* TITLE */}

        <div
          style={{
            fontWeight: 700,

            color: '#000000',

            textAlign: 'left',
          }}
        >
          {title}
        </div>


        {/* DESCRIPTION */}

        <div
          style={{
            marginTop: 6,

            textAlign: 'left',
          }}
        >
          {description}
        </div>

      </div>

    </div>
  );
}


/* ======================================
   INSTALLER SYSTEM REQUIREMENTS
====================================== */

export default function InstallerSystemRequirements() {

  return (
    <article
      aria-labelledby="system-requirements-title"

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
          MOBILE RESPONSIVE STYLE
      ====================================== */}

      <style>
        {`
          @media (max-width: 600px) {

            .requirement-option {
              display: grid !important;

              grid-template-columns:
                32px minmax(0, 1fr);

              grid-template-rows:
                auto auto;

              column-gap: 8px;
              row-gap: 2px;

              align-items: start;

              padding: 7px 0 !important;
            }


            /* ==============================
               ICON
            ============================== */

            .requirement-icon {
              grid-column: 1;
              grid-row: 1;

              width: 32px !important;
              min-width: 32px !important;

              height: 32px !important;

              display: flex !important;

              align-items: flex-start;
              justify-content: center;

              padding-top: 0;

              box-sizing: border-box;

              align-self: start;
            }


            /* ==============================
               RADIO
            ============================== */

            .requirement-radio {
              grid-column: 1;
              grid-row: 2;

              width: 32px;

              margin: 0 !important;
              padding: 0 !important;

              display: flex;

              align-items: flex-start;
              justify-content: center;

              align-self: start;
            }


            /* ==============================
               TEXT
            ============================== */

            .requirement-text {
              grid-column: 2;
              grid-row: 1 / 3;

              min-width: 0;

              display: flex;

              flex-direction: column;

              justify-content: flex-start;

              padding-right: 4px !important;

              box-sizing: border-box;

              align-self: start;
            }

          }
        `}
      </style>


      {/* ======================================
          TWO COLUMN LAYOUT
      ====================================== */}

      <section
        aria-label="System Requirements introduction"

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
          aria-label="Windows 95 installation illustration"

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

            alt="Windows 95 installation illustration"

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
              id="system-requirements-title"

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
              System Requirements
            </h2>

          </header>


          {/* ==================================
              INTRODUCTION
          ================================== */}

          <section
            aria-label="System requirements introduction"

            style={{
              paddingTop: 10,
            }}
          >

            <p
              style={{
                margin: '0 0 12px',

                textAlign: 'left',

                color: '#000000',
              }}
            >
              Before continuing, make sure your system is
              ready to explore Perdana's Computer.
            </p>


            {/* ==================================
                REQUIREMENTS
            ================================== */}

            <div
              aria-label="System requirements"

              style={{
                width: '100%',

                boxSizing: 'border-box',
              }}
            >

              {/* ==================================
                  REQUIREMENT 1
              ================================== */}

              <RequirementOption
                icon={Drvspace7}

                title="Curiosity to Explore"

                description="Good design starts with asking questions. This computer is a place to explore how visual design, interaction, and technology can come together."
              />


              {/* ==================================
                  REQUIREMENT 2
              ================================== */}

              <RequirementOption
                icon={Brush}

                title="A Visual Design Foundation"

                description="Built from more than a decade of working with visual design, visual systems, iconography, illustration, and design direction."
              />


              {/* ==================================
                  REQUIREMENT 3
              ================================== */}

              <RequirementOption
                icon={Shell32135}

                title="Room to Discover"

                description="This is an ongoing exploration into product design, UX, and design engineering. Some things are finished, others are still being figured out."
              />


              {/* ==================================
                  REQUIREMENT 4
              ================================== */}

              <RequirementOption
                icon={Bookmark}

                title="An Open Mind"

                description="After years of focusing on how things look, the next question is how they work, behave, and become something people can actually use."
              />

            </div>

          </section>


          {/* ==================================
              READY TO EXPLORE
          ================================== */}

          <section
            aria-label="Ready to explore"

            style={{
              marginTop: 'auto',

              paddingTop: 12,

              boxSizing: 'border-box',
            }}
          >

            <div
              style={{
                paddingTop: 8,

                borderTop:
                  '1px solid #808080',

                boxSizing: 'border-box',
              }}
            >

              {/* READY TO EXPLORE */}

              <p
                style={{
                  margin: 0,

                  fontWeight: 700,

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                Ready to explore?
              </p>


              {/* DESCRIPTION */}

              <p
                style={{
                  margin: '3px 0 0',

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                Everything you need is already installed.
              </p>


              {/* PUNCHLINE */}

              <p
                style={{
                  margin: '8px 0 0',

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                No installation experience required.
              </p>

            </div>

          </section>

        </div>

      </section>

    </article>
  );
}
