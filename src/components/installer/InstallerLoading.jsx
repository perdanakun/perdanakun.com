import React from 'react';

import {
  ProgressBar,
} from '@react95/core';

import win95installimg from './win95_install_illustration.png';


/* =========================================================
   INSTALLER LOADING
   Windows 95 Setup style
========================================================= */

export default function InstallerLoading({
  progress = 0,
}) {

  /* =======================================================
     SAFE PROGRESS
  ======================================================= */

  const safeProgress = Math.max(
    0,
    Math.min(100, progress)
  );


  /* =======================================================
     INSTALL STATUS
  ======================================================= */

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


  /* =======================================================
     CURRENT FILE
  ======================================================= */

  const getCurrentFile = () => {

    if (safeProgress >= 100) {
      return 'INSTALLATION COMPLETE.';
    }

    if (safeProgress >= 80) {
      return 'REGISTERING COMPONENTS...';
    }

    if (safeProgress >= 60) {
      return 'COPYING DESIGN-ASSETS.DAT...';
    }

    if (safeProgress >= 40) {
      return 'COPYING PORTFOLIO.DAT...';
    }

    if (safeProgress >= 20) {
      return 'COPYING README.TXT...';
    }

    return 'PREPARING SETUP...';
  };


  return (
    <section
      aria-labelledby="installer-loading-title"
      style={{
        width: '100%',
        height: '100%',

        minWidth: 0,
        minHeight: 0,

        display: 'flex',
        flexDirection: 'column',

        boxSizing: 'border-box',

        backgroundColor: '#c0c0c0',

        fontFamily:
          '"MS Sans Serif", sans-serif',

        color: '#000000',

        overflow: 'hidden',
      }}
    >


      {/* ===================================================
          SETUP HEADER
      =================================================== */}

      <header
        style={{
          flex: '0 0 auto',

          height: 28,
          minHeight: 28,

          display: 'flex',
          alignItems: 'center',

          padding: '4px 8px',

          boxSizing: 'border-box',

          backgroundColor: '#c0c0c0',

          borderBottom:
            '1px solid #808080',

          userSelect: 'none',
        }}
      >

        <span
          style={{
            fontFamily:
              '"MS Sans Serif", sans-serif',

            fontSize: 11,

            lineHeight: '16px',

            fontWeight: 'bold',

            color: '#000000',
          }}
        >
          Perdana's Computer Setup
        </span>

      </header>


      {/* ===================================================
          MAIN SETUP AREA
      =================================================== */}

      <div
        style={{
          flex: '1 1 0',

          minWidth: 0,
          minHeight: 0,

          display: 'flex',

          boxSizing: 'border-box',

          overflow: 'hidden',
        }}
      >


        {/* =================================================
            LEFT IMAGE PANEL
        ================================================= */}

        <aside
          aria-label="Perdana's Computer Setup illustration"
          style={{
            width: 170,
            minWidth: 170,

            height: '100%',

            flexShrink: 0,

            background: '#54A8A8',

            border: '2px inset #c0c0c0',

            boxSizing: 'border-box',

            overflow: 'hidden',

            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center',
          }}
        >

          <img
            src={win95installimg}
            alt="Perdana's Computer Setup"
            style={{
              width: '100%',
              height: '100%',

              display: 'block',

              objectFit: 'contain',

              objectPosition: 'center',

              transform: 'scale(1)',
            }}
          />

        </aside>


        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <main
          style={{
            flex: '1 1 0',

            minWidth: 0,
            minHeight: 0,

            display: 'flex',
            flexDirection: 'column',

            boxSizing: 'border-box',

            padding: '18px 20px',

            backgroundColor: '#c0c0c0',

            overflow: 'hidden',
          }}
        >


          {/* ===============================================
              TITLE
          =============================================== */}

          <h1
            id="installer-loading-title"
            style={{
              margin: 0,
              padding: 0,

              fontFamily:
                '"MS Sans Serif", sans-serif',

              fontSize: 16,

              lineHeight: '20px',

              fontWeight: 'bold',

              color: '#000000',
            }}
          >
            Installing Perdana's Computer
          </h1>


          {/* ===============================================
              DIVIDER
          =============================================== */}

          <div
            style={{
              width: '100%',

              height: 1,

              marginTop: 8,
              marginBottom: 14,

              backgroundColor: '#808080',

              boxShadow:
                '0 1px 0 #ffffff',

              flexShrink: 0,
            }}
          />


          {/* ===============================================
              INSTALL ICON + DESCRIPTION
          =============================================== */}

          <div
            style={{
              display: 'flex',

              alignItems: 'flex-start',

              gap: 10,

              marginBottom: 20,

              flexShrink: 0,
            }}
          >

            {/* INSTALL ICON */}

            <div
              style={{
                width: 32,
                minWidth: 32,

                height: 32,

                display: 'flex',

                alignItems: 'center',
                justifyContent: 'center',

                backgroundColor: '#c0c0c0',
              }}
            >

              {/* Small Windows-style folder icon using CSS */}

              <div
                style={{
                  width: 28,
                  height: 22,

                  position: 'relative',

                  backgroundColor: '#ffff00',

                  borderTop:
                    '1px solid #808000',

                  borderLeft:
                    '1px solid #808000',

                  borderRight:
                    '1px solid #000000',

                  borderBottom:
                    '1px solid #000000',

                  boxSizing: 'border-box',
                }}
              >

                <div
                  style={{
                    position: 'absolute',

                    left: 2,
                    top: -5,

                    width: 12,
                    height: 5,

                    backgroundColor: '#ffff00',

                    borderTop:
                      '1px solid #808000',

                    borderLeft:
                      '1px solid #808000',

                    borderRight:
                      '1px solid #808000',

                    boxSizing: 'border-box',
                  }}
                />

              </div>

            </div>


            {/* DESCRIPTION */}

            <div
              style={{
                minWidth: 0,
              }}
            >

              <p
                style={{
                  margin: 0,

                  fontFamily:
                    '"MS Sans Serif", sans-serif',

                  fontSize: 11,

                  lineHeight: '16px',

                  color: '#000000',
                }}
              >
                Setup is installing
                {' '}
                <strong>
                  Perdana's Computer
                </strong>
                {' '}
                on your computer.
              </p>


              <p
                style={{
                  margin: '8px 0 0',

                  fontFamily:
                    '"MS Sans Serif", sans-serif',

                  fontSize: 11,

                  lineHeight: '16px',

                  color: '#000000',
                }}
              >
                Please wait while Setup
                completes the installation.
              </p>

            </div>

          </div>


          {/* ===============================================
              CURRENT STATUS
          =============================================== */}

          <div
            style={{
              marginBottom: 5,

              fontFamily:
                '"MS Sans Serif", sans-serif',

              fontSize: 11,

              lineHeight: '16px',

              color: '#000000',

              flexShrink: 0,
            }}
          >
            {getStatus()}
          </div>


          {/* ===============================================
              PROGRESS BAR
          =============================================== */}

          <div
            style={{
              width: '100%',

              maxWidth: 420,

              boxSizing: 'border-box',

              marginBottom: 4,

              flexShrink: 0,
            }}
          >

            <ProgressBar
              percent={safeProgress}
              width="100%"
            />

          </div>


          {/* ===============================================
              PERCENTAGE
          =============================================== */}

          <div
            style={{
              width: '100%',

              maxWidth: 420,

              display: 'flex',

              justifyContent: 'flex-end',

              fontFamily:
                '"MS Sans Serif", sans-serif',

              fontSize: 11,

              lineHeight: '16px',

              color: '#000000',

              flexShrink: 0,
            }}
          >

            {safeProgress}%

          </div>


          {/* ===============================================
              CURRENT FILE
          =============================================== */}

          <div
            style={{
              marginTop: 16,

              width: '100%',

              maxWidth: 420,

              boxSizing: 'border-box',

              flexShrink: 0,
            }}
          >

            <div
              style={{
                marginBottom: 4,

                fontFamily:
                  '"MS Sans Serif", sans-serif',

                fontSize: 11,

                lineHeight: '16px',

                color: '#000000',
              }}
            >
              Current file:
            </div>


            <div
              style={{
                width: '100%',

                minHeight: 28,

                padding: '5px 6px',

                boxSizing: 'border-box',

                display: 'flex',

                alignItems: 'center',

                backgroundColor: '#ffffff',

                borderTop:
                  '1px solid #808080',

                borderLeft:
                  '1px solid #808080',

                borderRight:
                  '1px solid #ffffff',

                borderBottom:
                  '1px solid #ffffff',

                fontFamily:
                  '"MS Sans Serif", sans-serif',

                fontSize: 11,

                lineHeight: '16px',

                color: '#000000',

                overflow: 'hidden',

                whiteSpace: 'nowrap',

                textOverflow: 'ellipsis',
              }}
            >

              {getCurrentFile()}

            </div>

          </div>


          {/* ===============================================
              INSTALLATION NOTE
          =============================================== */}

          <div
            style={{
              marginTop: 'auto',

              paddingTop: 20,

              fontFamily:
                '"MS Sans Serif", sans-serif',

              fontSize: 11,

              lineHeight: '16px',

              color: '#000000',
            }}
          >

            {safeProgress >= 100
              ? "Perdana's Computer has been installed successfully."
              : 'Do not turn off your computer while Setup is running.'}

          </div>

        </main>

      </div>


      {/* ===================================================
          FOOTER DIVIDER
      =================================================== */}

      <div
        style={{
          height: 1,

          flexShrink: 0,

          backgroundColor: '#808080',

          boxShadow:
            '0 1px 0 #ffffff',
        }}
      />


      {/* ===================================================
          STATUS BAR
      =================================================== */}

      <footer
        style={{
          height: 22,
          minHeight: 22,

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'space-between',

          padding: '2px 6px',

          boxSizing: 'border-box',

          backgroundColor: '#c0c0c0',

          fontFamily:
            '"MS Sans Serif", sans-serif',

          fontSize: 11,

          lineHeight: '16px',

          color: '#000000',

          userSelect: 'none',

          flexShrink: 0,
        }}
      >

        <span>
          {safeProgress >= 100
            ? 'Setup complete'
            : 'Installing'}
        </span>


        <span>
          {safeProgress}%
        </span>

      </footer>

    </section>
  );
}