import React from 'react';

import {
  ProgressBar,
} from '@react95/core';

import {
  Computer,
  Folder,
  Install,
} from '@react95/icons';


/* =========================================================
   INSTALLER LOADING
   Windows 95 Setup style
========================================================= */

export default function InstallerLoading({
  progress = 0,
}) {

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


  return (
    <section
      aria-labelledby="installer-loading-title"

      style={{
        display: 'flex',

        flexDirection: 'column',

        width: '100%',
        height: '100%',

        minWidth: 0,
        minHeight: 0,

        boxSizing: 'border-box',

        backgroundColor: '#c0c0c0',

        fontFamily:
          'MS Sans Serif, sans-serif',

        color: '#000000',

        overflow: 'hidden',
      }}
    >

      {/* ===================================================
          SETUP HEADER
      =================================================== */}

      <div
        style={{
          height: 24,
          minHeight: 24,

          display: 'flex',

          alignItems: 'center',

          padding: '2px 6px',

          boxSizing: 'border-box',

          backgroundColor: '#c0c0c0',

          borderBottom:
            '1px solid #808080',

          userSelect: 'none',

          flexShrink: 0,
        }}
      >

        <span
          style={{
            fontSize: 11,

            lineHeight: '16px',

            fontWeight: 'bold',
          }}
        >
          Perdana's PC Setup
        </span>

      </div>


      {/* ===================================================
          MAIN WIZARD AREA
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
            LEFT WINDOWS 95 SETUP PANEL
        ================================================= */}

        <aside
          style={{
            width: 150,
            minWidth: 150,

            height: '100%',

            boxSizing: 'border-box',

            backgroundColor: '#000080',

            color: '#ffffff',

            display: 'flex',

            flexDirection: 'column',

            justifyContent: 'space-between',

            padding: 12,

            overflow: 'hidden',
          }}
        >

          {/* ===============================================
              TOP BRANDING
          =============================================== */}

          <div>

            <div
              style={{
                display: 'flex',

                alignItems: 'center',

                marginBottom: 10,
              }}
            >

              <Computer
                variant="32x32_4"
              />

            </div>


            <div
              style={{
                fontFamily:
                  'MS Sans Serif, sans-serif',

                fontSize: 18,

                lineHeight: '20px',

                fontWeight: 'bold',

                color: '#ffffff',

                marginBottom: 8,
              }}
            >
              Setup
            </div>


            <div
              style={{
                fontFamily:
                  'MS Sans Serif, sans-serif',

                fontSize: 11,

                lineHeight: '16px',

                color: '#ffffff',
              }}
            >
              Perdana's PC
              <br />
              Setup Wizard
            </div>

          </div>


          {/* ===============================================
              BOTTOM DECORATION
          =============================================== */}

          <div
            style={{
              display: 'flex',

              alignItems: 'center',

              gap: 4,

              opacity: 0.9,
            }}
          >

            <Folder
              variant="16x16_4"
            />

            <span
              style={{
                fontSize: 10,

                lineHeight: '14px',
              }}
            >
              Windows 95
            </span>

          </div>

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

            overflow: 'auto',
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
                'MS Sans Serif, sans-serif',

              fontSize: 16,

              lineHeight: '20px',

              fontWeight: 'bold',

              color: '#000000',
            }}
          >
            Installing Perdana's PC Setup
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
            }}
          >

            <div
              style={{
                width: 32,
                minWidth: 32,

                height: 32,

                display: 'flex',

                alignItems: 'center',
                justifyContent: 'center',
              }}
            >

              <Install
                variant="32x32_4"
              />

            </div>


            <div
              style={{
                minWidth: 0,
              }}
            >

              <p
                style={{
                  margin: 0,

                  fontFamily:
                    'MS Sans Serif, sans-serif',

                  fontSize: 11,

                  lineHeight: '16px',

                  color: '#000000',
                }}
              >
                Setup is installing
                Perdana's PC Setup on
                your computer.
              </p>


              <p
                style={{
                  margin: '8px 0 0',

                  fontFamily:
                    'MS Sans Serif, sans-serif',

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
                'MS Sans Serif, sans-serif',

              fontSize: 11,

              lineHeight: '16px',

              color: '#000000',
            }}
          >
            {getStatus()}
          </div>


          {/* ===============================================
              PROGRESS BAR FRAME
          =============================================== */}

          <div
            style={{
              width: '100%',

              maxWidth: 420,

              boxSizing: 'border-box',

              marginBottom: 5,
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
                'MS Sans Serif, sans-serif',

              fontSize: 11,

              lineHeight: '16px',

              color: '#000000',
            }}
          >
            {safeProgress}%
          </div>


          {/* ===============================================
              CURRENT FILE / COMPONENT
          =============================================== */}

          <div
            style={{
              marginTop: 16,

              padding: 6,

              width: '100%',

              maxWidth: 420,

              boxSizing: 'border-box',

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
                'MS Sans Serif, sans-serif',

              fontSize: 11,

              lineHeight: '16px',

              color: '#000000',

              overflow: 'hidden',

              whiteSpace: 'nowrap',

              textOverflow: 'ellipsis',
            }}
          >

            {safeProgress < 100
              ? 'Installing files...'
              : 'Installation finished.'}

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

      <div
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
            'MS Sans Serif, sans-serif',

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

      </div>

    </section>
  );
}