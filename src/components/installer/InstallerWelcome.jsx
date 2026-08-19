import React, { useState } from 'react';

import {
  Button,
  Frame,
} from '@react95/core';

import { Install } from '@react95/icons';

export default function InstallerWelcome({
  isMobile,
  isTablet,
  onNext,
  onClose,
}) {
  // ==========================================
  // Loading After YES
  // ==========================================

  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (isLoading) return;

    setIsLoading(true);

    // Cursor seluruh halaman menjadi loading
    document.body.style.cursor = 'wait';

    setTimeout(() => {
      // Kembalikan cursor normal
      document.body.style.cursor = '';

      // Pindah ke next page
      onNext?.();
    }, 700);
  };

  // ==========================================
  // WINDOW HILANG SAAT LOADING
  // ==========================================

  if (isLoading) {
    return null;
  }

  // ==========================================
  // EXIT SETUP
  // ==========================================

  const handleCancel = () => {
    onClose?.();
  };

  return (
    <div
      className="ui-font"
      style={{
        position: 'fixed',

        left: '50%',

        top: isMobile
          ? '4%'
          : '50%',

        transform: isMobile
          ? 'translateX(-50%)'
          : 'translate(-50%, -50%)',

        width: isMobile
          ? '95vw'
          : isTablet
          ? '78vw'
          : '800px',

        maxWidth: 'calc(100vw - 20px)',

        zIndex: 100000,

        boxSizing: 'border-box',
      }}
    >

      {/* ==========================================
          WINDOWS 95 OUTER FRAME
      ========================================== */}

      <Frame
        style={{
          width: '100%',

          height: isMobile
            ? '80vh'
            : isTablet
            ? '70vh'
            : '450px',

          maxHeight: 'calc(100vh - 28px)',

          padding: 3,

          background: '#c0c0c0',

          boxSizing: 'border-box',

          display: 'flex',

          flexDirection: 'column',

          boxShadow: `
            inset -1px -1px #000000,
            inset 1px 1px #ffffff
          `,
        }}
      >

        {/* ==========================================
            TITLE BAR
        ========================================== */}

        <div
          className="ui-font"
          style={{
            flexShrink: 0,

            height: 22,

            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center',

            padding: '2px 8px 6px 8px',

            background: '#000080',

            color: '#ffffff',

            fontSize: 14,

            fontWeight: 'bold',

            lineHeight: 1,

            boxSizing: 'border-box',

            userSelect: 'none',

            whiteSpace: 'nowrap',

            overflow: 'hidden',

            textOverflow: 'ellipsis',
          }}
        >
          Perdana's Computer Setup
        </div>


        {/* ==========================================
            INSTALLER BODY
        ========================================== */}

        <div
          style={{
            flex: '1 1 0',

            minWidth: 0,
            minHeight: 0,

            marginTop: 3,

            background: '#c0c0c0',

            boxSizing: 'border-box',

            display: 'flex',

            flexDirection: 'column',

            overflow: 'hidden',
          }}
        >

          {/* ========================================
              TOP WELCOME HEADER

              OUTSIDE WHITE CONTENT
          ======================================== */}

          <header
            style={{
              flexShrink: 0,

              minWidth: 0,

              padding: isMobile
                ? '10px 12px 9px'
                : '10px 12px 9px',

              boxSizing: 'border-box',

              background: '#c0c0c0',

              color: '#000000',
            }}
          >

            <div
              style={{
                display: 'flex',

                alignItems: 'center',

                gap: 12,

                minWidth: 0,
              }}
            >

              {/* ====================================
                  INSTALL ICON
              ==================================== */}

              <Install
                style={{
                  width: 32,
                  height: 32,

                  flexShrink: 0,
                }}
              />


              {/* ====================================
                  TITLE + SUBTITLE
              ==================================== */}

              <div
                style={{
                  display: 'flex',

                  flexDirection: 'column',

                  justifyContent: 'center',

                  minWidth: 0,
                }}
              >

                <h1
                  id="perdana-welcome-title"
                  className="ui-font"
                  style={{
                    margin: 0,

                    padding: 0,

                    fontSize: 14,

                    fontWeight: 'bold',

                    letterSpacing: '-0.5px',

                    textAlign: 'left',

                    color: '#000000',

                    whiteSpace: 'nowrap',

                    overflow: 'hidden',

                    textOverflow: 'ellipsis',
                  }}
                >
                  Welcome to Perdana's Computer
                </h1>


                <p
                  className="ui-font"
                  style={{
                    margin: '4px 0 0',

                    padding: 0,

                    fontSize: 13,

                    lineHeight: '18px',

                    fontWeight: 'normal',

                    textAlign: 'left',

                    color: '#000000',
                  }}
                >
                  Before exploring the work, start with the person behind it.
                </p>

              </div>

            </div>

          </header>


          {/* ========================================
              WHITE CONTENT FRAME

              HEIGHT AREA INI YANG SCROLLABLE
          ======================================== */}

<div
  aria-label="Welcome content frame"
  style={{
    flex: '1 1 0',

    minWidth: 0,
    minHeight: 0,

    margin: '0 12px',

    background: '#ffffff',

    boxSizing: 'border-box',

border: '2px solid',
borderTopColor: '#808080',
borderLeftColor: '#808080',
borderRightColor: '#eeebeb',
borderBottomColor: '#eeebeb',

boxShadow: `
  inset 1px 1px 0 #000000,
  inset -1px -1px 0 #dfdfdf
`,

    display: 'flex',

    flexDirection: 'column',

    overflow: 'hidden',
  }}
>

            {/* ======================================
                SCROLLABLE WHITE CONTENT
            ====================================== */}

            <main
              className="reading-font"
              aria-labelledby="license-content-title"
              style={{
                flex: '1 1 0',

                minWidth: 0,
                minHeight: 0,

                width: '100%',

                background: '#ffffff',

                padding: isMobile
                  ? '16px 18px 20px'
                  : isTablet
                  ? '18px 20px 22px'
                  : '18px 24px 24px',

                boxSizing: 'border-box',

                overflowY: 'auto',

                overflowX: 'hidden',

                color: '#000000',

                textAlign: 'left',

                touchAction: 'pan-y',

                WebkitOverflowScrolling: 'touch',
              }}
            >

              {/* ====================================
                  CONTENT TITLE
              ==================================== */}

              <header
                style={{
                  paddingBottom: 5,

                  marginBottom: 0,

                  boxSizing: 'border-box',
                }}
              >

                <h2
                  id="license-content-title"
                  className="ui-font"
                  style={{
                    margin: '3px 0 0',

                    padding: 0,

                    fontSize: 16,

                    textAlign: 'left',

                    color: '#000000',
                  }}
                >
                 <b> Perdana Kurniawan Arta</b>
                </h2>

              </header>


              {/* ====================================
                  INTRODUCTION
              ==================================== */}

              <section
                aria-label="Introduction"
                style={{
                  width: '100%',

                  minWidth: 0,

                  boxSizing: 'border-box',
                }}
              >

                {/* ==================================
                    DESCRIPTION
                ================================== */}

                <h3
                  className="reading-font"
                  style={{
                    margin: '0 0 18px',

                    padding: '0 0 15px 0',

                    fontSize: 14,
                    textAlign: 'left',

                    color: '#000000',

                                      borderBottom:
                    '1px solid #808080',
                  }}
                >
                  Visual Designer exploring Product Design,
                  UX, and Design Engineering
                </h3>


                <p
                  className="reading-font"
                  style={{
                    margin: '0 0 14px',

                    textAlign: 'left',

                    color: '#000000',
                  }}
                >
                  Perdana is a Visual Designer and Design Lead
                  with 10+ years of experience in visual systems,
                  iconography, illustration, and graphic design.
                  His practice is expanding into Product Design
                  and UX, exploring how visual craft, product
                  thinking, and code can come together to design
                  and build digital experiences.
                </p>


                {/* ==================================
                    SECTION 01
                ================================== */}

                <h3
                  className=".ui-font"
                  style={{
                    margin: '20px 0 8px',

                    padding: 0,

                    fontSize: 14,

                    color: '#000000',
                  }}
                >
                  01. The Foundation
                </h3>


                <p
                  className="reading-font"
                  style={{
                    margin: '0 0 14px',

                    textAlign: 'left',

                    color: '#000000',
                  }}
                >
                  A decade of making things visual —
                  building an eye for systems, detail,
                  composition, and visual language.
                </p>


                {/* ==================================
                    SECTION 02
                ================================== */}

                <h3
                  className=".ui-font"
                  style={{
                    margin: '20px 0 8px',

                    padding: 0,

                    fontSize: 14,


                    color: '#000000',
                  }}
                >
                  02. The Exploration
                </h3>


                <p
                  className="reading-font"
                  style={{
                    margin: '0 0 14px',

                    textAlign: 'left',

                    color: '#000000',
                  }}
                >
                  Exploring what happens when that visual
                  foundation meets products, people,
                  interaction, and the way digital experiences
                  are used.
                </p>


                {/* ==================================
                    SECTION 03
                ================================== */}

                <h3
                  className=".ui-font"
                  style={{
                    margin: '20px 0 8px',

                    padding: 0,

                    fontSize: 14,


                    color: '#000000',
                  }}
                >
                  03. The Build
                </h3>


                <p
                  className="reading-font"
                  style={{
                    margin: '0 0 14px',

                    textAlign: 'left',

                    color: '#000000',
                  }}
                >
                  Going beyond the canvas to turn ideas into
                  interfaces — learning through code,
                  experimentation, and design in code.
                </p>


                {/* ==================================
                    SECTION 04
                ================================== */}

                <h3
                  className=".ui-font"
                  style={{
                    margin: '20px 0 8px',

                    padding: 0,

                    fontSize: 14,


                    color: '#000000',
                  }}
                >
                  04. The Next Chapter
                </h3>


                <p
                  className="reading-font"
                  style={{
                    margin: '0 0 14px',

                    textAlign: 'left',

                    color: '#000000',
                  }}
                >
                  Moving toward Product Design and Design
                  Engineering, where visual craft, product
                  thinking, and implementation can become
                  part of the same process.
                </p>


                {/* ==================================
                    BOTTOM SCROLL SPACE
                ================================== */}

                <div
                  aria-hidden="true"
                  style={{
                    height: 0,
                  }}
                />

              </section>

            </main>

          </div>


{/* ========================================
    FOOTER
======================================== */}

<footer
  className="ui-font"
  style={{
    flexShrink: 0,

    minWidth: 0,

    padding: '10px 12px 10px',

    boxSizing: 'border-box',

    background: '#c0c0c0',

    color: '#000000',

    display: 'flex',

    justifyContent: 'flex-end',

    alignItems: 'center',

    gap: 6,
  }}
>

  {/* ====================================
      BUTTON YES NO
  ==================================== */}

<Button
  onClick={handleNext}
  disabled={isLoading}
  className="ui-font"
  style={{
    minWidth: 90,
    boxSizing: 'border-box',
  }}
>
  <strong>
    <u>Y</u>es
  </strong>
</Button>

<Button
  onClick={handleCancel}
  className="ui-font"
  style={{
    minWidth: 90,
    boxSizing: 'border-box',
  }}
>
  <strong>
    <u>N</u>o
  </strong>
</Button>

</footer>

        </div>

      </Frame>

    </div>
  );
}