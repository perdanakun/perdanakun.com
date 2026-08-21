import React from 'react';

import {
} from '@react95/core';

import win95installimg
  from './win95_install_illustration.png';


/* ======================================
   INSTALLER LOADING
====================================== */

export default function InstallerLoading({
  progress = 0,
}) {

  const safeProgress = Math.max(
    0,
    Math.min(100, progress)
  );


  /* ======================================
     INSTALLATION STATUS
  ====================================== */

  const getStatus = () => {

    if (safeProgress >= 100) {
      return 'Setup is complete.';
    }

    if (safeProgress >= 80) {
      return 'Finalizing installation...';
    }

    if (safeProgress >= 60) {
      return 'Installing program files...';
    }

    if (safeProgress >= 40) {
      return 'Copying program files...';
    }

    if (safeProgress >= 20) {
      return 'Preparing installation...';
    }

    return 'Starting installation...';
  };


  return (
    <article
      aria-labelledby="installer-loading-title"

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

            /* ==============================
               MAIN LAYOUT
            ============================== */

            .loading-layout {
              flex-direction: column !important;

              gap: 12px !important;
            }


            /* ==============================
               IMAGE
            ============================== */

            .loading-image {
              width: 100% !important;

              min-width: 0 !important;

              height: 150px !important;

              flex-shrink: 0 !important;
            }


            /* ==============================
               CONTENT
            ============================== */

            .loading-content {
              width: 100%;

              padding-right: 2px !important;
            }


            /* ==============================
               PROGRESS
            ============================== */

            .loading-progress {
              max-width: 100% !important;
            }


            /* ==============================
               PERCENTAGE
            ============================== */

            .loading-percentage {
              max-width: 100% !important;
            }

          }
        `}
      </style>


      {/* ======================================
          TWO COLUMN LAYOUT
      ====================================== */}

      <section
        aria-label="Installation progress"

        className="loading-layout"

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

          className="loading-image"

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
          className="
            ui-font-reading
            loading-content
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
              id="installer-loading-title"

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
              Installing Perdana's Computer
            </h2>

          </header>


          {/* ==================================
              INTRODUCTION
          ================================== */}

          <section
            aria-labelledby="installation-introduction-title"

            style={{
              paddingTop: 15,

              boxSizing: 'border-box',
            }}
          >

            <div
              id="installation-introduction-title"

              className="ui-font-reading"

              style={{
                boxSizing: 'border-box',

                color: '#000000',
              }}
            >

              {/* ==================================
                  INTRODUCTION TEXT
              ================================== */}

              <p
                style={{
                  margin: 0,

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                Setup is installing Perdana's Computer
                on your computer.
              </p>


              {/* ==================================
                  INSTALLATION STATUS
              ================================== */}

              <section
                aria-labelledby="installation-status-title"

                style={{
                  paddingTop: 18,

                  boxSizing: 'border-box',
                }}
              >

                <div
                  id="installation-status-title"

                  className="ui-font-reading"

                  style={{
                    boxSizing: 'border-box',

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
                    {getStatus()}
                  </p>

{/* ==================================
    PROGRESS BAR
================================== */}

<div
  className="loading-progress"

  style={{
    position: 'relative',

    marginTop: 5,

    width: '100%',

  

    height: 25,

    padding: 0,

    boxSizing: 'border-box',

    background: '#ffffff',

    border: '1.5px solid #000000',

    overflow: 'hidden',
  }}
>

{/* ==================================
    BLUE PROGRESS
================================== */}

<div
  style={{
    width: `${safeProgress}%`,

    height: '100%',

    background: '#000080',

    transition: 'width 30ms linear',
  }}
/>


{/* ==================================
    PERCENTAGE
================================== */}

<div
  className="ui-font"
  style={{
    position: 'absolute',

    inset: 0,

    display: 'flex',

    alignItems: 'center',

    justifyContent: 'center',

    color: safeProgress > 50
      ? '#ffffff'
      : '#000000',

    fontSize: 13,

    fontWeight: 'bold',

    pointerEvents: 'none',

    userSelect: 'none',

    textShadow: safeProgress > 50
      ? '1px 1px 0 #000'
      : 'none',
  }}
>
  {safeProgress}%
</div>

</div>

                </div>

              </section>

            </div>

          </section>


          {/* ==================================
              INSTALLATION NOTE
          ================================== */}

          <section
            aria-labelledby="installation-note-title"

            style={{
              marginTop: 'auto',

              paddingTop: 10,

              boxSizing: 'border-box',
            }}
          >

            <div
              style={{
                boxSizing: 'border-box',

                color: '#000000',
              }}
            >

              {/* ==================================
                  NOTE TITLE
              ================================== */}

              <p
                id="installation-note-title"

                style={{
                  margin: 0,

                  fontWeight: 700,

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                {safeProgress >= 100
                  ? 'Installation complete.'
                  : 'Please wait while Setup completes the installation.'}
              </p>


              {/* ==================================
                  NOTE DESCRIPTION
              ================================== */}

              <p
                style={{
                  margin: '3px 0 0',

                  textAlign: 'left',

                  color: '#000000',
                }}
              >
                {safeProgress >= 100
                  ? "Perdana's Computer has been installed successfully."
                  : 'Do not close this window while the installation is in progress.'}
              </p>

            </div>

          </section>

        </div>

      </section>

    </article>
  );
}