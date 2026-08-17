import React from 'react';

import {
  Modal,
  Button,
  TitleBar,
} from '@react95/core';

import {
  Computer,
} from '@react95/icons';

import didYouKnowIcon
  from '../assets/images/win95_did_you_know.png';

import win95Pc
  from '../assets/images/win95_pc.png';


const FONT =
  '"MS Sans Serif", "Microsoft Sans Serif", sans-serif';


/* ======================================
   SHORTCUT LABEL
====================================== */

function ShortcutLabel({
  shortcut,
  children,
}) {
  const text = String(children);

  const index = text
    .toLowerCase()
    .indexOf(
      String(shortcut).toLowerCase()
    );

  if (index === -1) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {text.slice(0, index)}

      <u
        style={{
          textDecoration: 'underline',
          textUnderlineOffset: '1px',
        }}
      >
        {text.charAt(index)}
      </u>

      {text.slice(index + 1)}
    </span>
  );
}


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
      style={{
        display: 'flex',
        alignItems: 'center',

        minHeight: 24,

        gap: 6,

        cursor: 'pointer',
        userSelect: 'none',

        fontFamily: FONT,

        fontSize: 12,
        lineHeight: '18px',

        color: '#000000',

        position: 'relative',
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
          WIN95 CHECKBOX VISUAL
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

              boxSizing: 'border-box',
            }}
          />
        )}
      </span>

      {/* ==================================
          LABEL TEXT
      ================================== */}

      <span
        style={{
          display: 'block',

          fontFamily: FONT,

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


/* ======================================
   WELCOME MODAL
====================================== */

export default function WelcomeModal({
  isMobile,
  isTablet,
  onClose,
}) {

  /* ====================================
     WELCOME CHECKBOX STATE
  ==================================== */

  const [showWelcome, setShowWelcome] =
    React.useState(true);


  /* ====================================
     DELAY SHOW WELCOME
  ==================================== */

  const [isReady, setIsReady] =
    React.useState(false);


  React.useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setIsReady(true);
    }, 700);

    return () => {
      clearTimeout(welcomeTimer);
    };
  }, []);


  /* ====================================
     BUTTON ACTIONS
  ==================================== */

  const handleWindowsTour = () => {
    window.alert(
      'Windows Tour is not available yet.'
    );
  };


  const handleWhatsNew = () => {
    window.alert(
      "What's New is not available yet."
    );
  };


  const handleOnlineRegistration = () => {
    window.alert(
      'Online Registration is not available yet.'
    );
  };


  const handleProductCatalog = () => {
    window.alert(
      'Product Catalog is not available yet.'
    );
  };


  const handleNextTip = () => {
    window.alert(
      'Next Tip is not available yet.'
    );
  };


  /* ====================================
     WAIT BEFORE RENDER
  ==================================== */

  if (!isReady) {
    return null;
  }


  /* ====================================
     MAIN MODAL
  ==================================== */

  return (
    <Modal
      key="welcome-window"

      icon={
        <Computer variant="16x16_4" />
      }

      title="Welcome to Windows 95"

      style={{
        position: 'fixed',

        /* ================================
           MOBILE
        ================================= */

        ...(isMobile
          ? {
              top: 0,
              left: 0,
              right: 0,
              bottom: '28px',

              width: '100vw',
              height: 'auto',

              maxWidth: '100vw',
              maxHeight:
                'calc(100vh - 28px)',

              transform: 'none',

              margin: 0,
            }

        /* ================================
           TABLET
        ================================= */

          : isTablet
          ? {
              left: '50%',
              top:
                'calc((100vh - 28px) / 2)',

              width: '78vw',
              height: '68vh',

              maxWidth: '90vw',
              maxHeight:
                'calc(100vh - 28px)',

              transform:
                'translate(-50%, -50%)',
            }

        /* ================================
           DESKTOP
        ================================= */

          : {
              left: '50%',
              top:
                'calc((100vh - 28px) / 2)',

              width: '700px',
              height: '380px',

              maxWidth:
                'calc(100vw - 20px)',

              maxHeight:
                'calc(100vh - 28px)',

              transform:
                'translate(-50%, -50%)',
            }),

        boxSizing: 'border-box',
      }}

      titleBarOptions={
        <>
          <Modal.Minimize />

          <TitleBar.Close
            onClick={onClose}
          />
        </>
      }
    >

      {/* ==================================
          MODAL CONTENT
      ================================== */}

      <Modal.Content
        style={{
          padding: 0,

          width: '100%',
          height: '100%',

          minWidth: 0,
          minHeight: 0,

          background: '#c0c0c0',

          boxSizing: 'border-box',

          overflow: 'hidden',
        }}
      >

        {/* ==================================
            MAIN ARTICLE
        ================================== */}

        <article
          aria-labelledby="welcome-title"

          style={{
            width: '100%',
            height: '100%',

            minWidth: 0,
            minHeight: 0,

            boxSizing: 'border-box',

            backgroundColor: '#c0c0c0',

            color: '#000',

            fontFamily: FONT,
            fontSize: 11,

            overflow: 'hidden',

            display: 'flex',
            flexDirection: 'column',
          }}
        >

          {/* ==================================
              CONTENT AREA
          ================================== */}

          <div
            style={{
              flex: '1 1 auto',

              minWidth: 0,
              minHeight: 0,

              padding:
                '10px 12px 0',

              boxSizing: 'border-box',

              display: 'flex',
              flexDirection: 'column',

              overflow: 'hidden',
            }}
          >

            {/* ==================================
                TITLE
            ================================== */}

            <h1
              id="welcome-title"

              style={{
                margin:
                  '0 0 7px 0',

                padding: 0,

                width: 'fit-content',

                alignSelf: 'flex-start',

                textAlign: 'left',

                whiteSpace: 'nowrap',

                fontFamily:
                  'Georgia, "Times New Roman", serif',

                fontSize: 26,

                lineHeight: '29px',

                fontWeight: 'bold',

                letterSpacing: '-0.7px',

                color: '#000',

                flexShrink: 0,
              }}
            >
              <span>
                Welcome to{' '}
              </span>

              <span
                style={{
                  fontFamily:
                    '"Arial Black", Arial, sans-serif',

                  fontSize: 25,

                  letterSpacing: '-1.3px',

                  fontWeight: 900,
                }}
              >
                Windows
              </span>

              <span
                style={{
                  fontFamily:
                    'Arial, sans-serif',

                  fontSize: 25,

                  fontWeight: 400,

                  color: '#f1f1f1',

                  letterSpacing: '-1px',

                  textShadow:
                    '1px 1px 0 #808080',
                }}
              >
                95
              </span>
            </h1>


            {/* ==================================
                MAIN ROW
            ================================== */}

            <div
              style={{
                flex: '1 1 auto',

                minWidth: 0,
                minHeight: 0,

                display: 'flex',

                alignItems: 'stretch',

                gap: 10,

                overflow: 'hidden',
              }}
            >

              {/* ==================================
                  INFORMATION PANEL
              ================================== */}

              <section
                aria-label="Welcome information"

                style={{
                  flex: '1 1 auto',

                  minWidth: 0,
                  minHeight: 0,

                  backgroundColor:
                    '#ffffdf',

                  borderTop:
                    '1px solid #808080',

                  borderLeft:
                    '1px solid #808080',

                  borderRight:
                    '1px solid #ffffff',

                  borderBottom:
                    '1px solid #ffffff',

                  boxSizing:
                    'border-box',

                  overflow: 'hidden',

                  padding:
                    '14px 14px',

                  display: 'flex',

                  flexDirection:
                    'column',
                }}
              >

                {/* ==================================
                    DID YOU KNOW
                ================================== */}

                <div
                  style={{
                    display: 'flex',

                    alignItems:
                      'flex-start',

                    width: '100%',

                    minWidth: 0,
                  }}
                >

                  {/* ICON */}

                  <div
                    aria-hidden="true"

                    style={{
                      width: 64,
                      minWidth: 64,

                      height: 64,

                      marginRight: 12,
                      marginTop: -10,

                      padding: 0,

                      display: 'flex',

                      alignItems:
                        'flex-start',

                      justifyContent:
                        'flex-start',

                      flexShrink: 0,

                      boxSizing:
                        'border-box',
                    }}
                  >

                    <img
                      src={didYouKnowIcon}
                      alt=""

                      width={64}
                      height={64}

                      style={{
                        width: 64,
                        height: 64,

                        display: 'block',

                        imageRendering:
                          'pixelated',
                      }}
                    />

                  </div>


                  {/* TEXT */}

                  <div
                    style={{
                      flex: '1 1 auto',

                      minWidth: 0,

                      width: '100%',

                      paddingTop: 10,

                      boxSizing:
                        'border-box',

                      textAlign: 'left',
                    }}
                  >

                    <strong
                      style={{
                        display: 'block',

                        margin: 0,
                        padding: 0,

                        fontFamily: FONT,

                        fontSize: 12,

                        lineHeight:
                          '15px',

                        fontWeight: 'bold',

                        color: '#000',
                      }}
                    >
                      Did you know...
                    </strong>


                    <p
                      style={{
                        margin:
                          '25px 0 0',

                        padding: 0,

                        maxWidth: 480,

                        fontFamily: FONT,

                        fontSize: 12,

                        lineHeight:
                          '16px',

                        color: '#000',
                      }}
                    >
                      Perdana Kurniawan Arta
                      is a Visual Designer
                      and Design Lead
                      currently exploring
                      Product Design, UX,
                      and Design Engineering.
                    </p>


                    <p
                      style={{
                        margin:
                          '11px 0 0',

                        padding: 0,

                        maxWidth: 480,

                        fontFamily: FONT,

                        fontSize: 12,

                        lineHeight:
                          '16px',

                        color: '#000',
                      }}
                    >
                      With 10+ years of
                      experience across
                      visual design, visual
                      systems, iconography,
                      illustration, and design
                      direction, he now
                      explores how design,
                      interaction, and code
                      can come together to
                      build functional digital
                      experiences.
                    </p>

                  </div>

                </div>


                {/* ==================================
                    OPTIONAL WINDOWS 95 PC IMAGE
                ==================================

                <div
                  aria-hidden="true"

                  style={{
                    flex: '1 1 auto',

                    display: 'flex',

                    alignItems:
                      'flex-end',

                    justifyContent:
                      'center',

                    minHeight: 0,

                    paddingTop: 8,
                  }}
                >

                  <img
                    src={win95Pc}
                    alt=""

                    height={210}

                    style={{
                      height: 210,

                      width: 'auto',

                      display: 'block',

                      imageRendering:
                        'pixelated',

                      flexShrink: 0,

                      transform:
                        'translateY(-20px)',
                    }}
                  />

                </div>

                */}

              </section>


              {/* ==================================
                  RIGHT BUTTONS
              ================================== */}

              <aside
                aria-label="Welcome actions"

                style={{
                  width: 140,
                  minWidth: 140,

                  flexShrink: 0,

                  gap: 8,

                  display: 'flex',

                  flexDirection:
                    'column',

                  boxSizing:
                    'border-box',
                }}
              >

                <Button
                  onClick={
                    handleWindowsTour
                  }
                >
                  <ShortcutLabel
                    shortcut="W"
                  >
                    Windows Tour
                  </ShortcutLabel>
                </Button>


                <Button
                  onClick={
                    handleWhatsNew
                  }
                >
                  <ShortcutLabel
                    shortcut="W"
                  >
                    What's New
                  </ShortcutLabel>
                </Button>


                <Button
                  onClick={
                    handleOnlineRegistration
                  }
                >
                  <ShortcutLabel
                    shortcut="O"
                  >
                    Online Registration
                  </ShortcutLabel>
                </Button>


                <Button
                  onClick={
                    handleProductCatalog
                  }
                >
                  <ShortcutLabel
                    shortcut="P"
                  >
                    Product Catalog
                  </ShortcutLabel>
                </Button>


                <Button
                  onClick={
                    handleNextTip
                  }
                >
                  <ShortcutLabel
                    shortcut="N"
                  >
                    Next Tip
                  </ShortcutLabel>
                </Button>


                {/* SPACER */}

                <div
                  style={{
                    flex: '1 1 auto',
                    minHeight: 14,
                  }}
                />


                {/* SEPARATOR */}

                <div
                  aria-hidden="true"

                  style={{
                    width: '100%',
                    height: 2,

                    margin:
                      '0 0 8px',

                    borderTop:
                      '1px solid #808080',

                    borderBottom:
                      '1px solid #ffffff',

                    boxSizing:
                      'border-box',

                    flexShrink: 0,
                  }}
                />


                {/* CLOSE */}

                <Button
                  onClick={onClose}
                >
                  <ShortcutLabel
                    shortcut="C"
                  >
                    Close
                  </ShortcutLabel>
                </Button>

              </aside>

            </div>


            {/* ==================================
                CHECKBOX AREA
            ================================== */}

            <div
              style={{
                flexShrink: 0,

                width: '100%',

                height: 39,
                minHeight: 39,

                boxSizing:
                  'border-box',

                display: 'flex',

                alignItems:
                  'center',

                padding:
                  '6px 0 8px',

                backgroundColor:
                  '#c0c0c0',

                overflow:
                  'visible',
              }}
            >

              <Win95Checkbox
                checked={showWelcome}

                onChange={(event) => {
                  setShowWelcome(
                    event.target.checked
                  );
                }}
              >
                Show this Welcome Screen
                next time you start Windows
              </Win95Checkbox>

            </div>

          </div>

        </article>

      </Modal.Content>

    </Modal>
  );
}
