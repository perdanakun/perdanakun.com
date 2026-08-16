import React, {
  useState,
} from 'react';

import {
  Button,
  Checkbox,
} from '@react95/core';

import {
  Bulb,
} from '@react95/icons';

import didYouKnowIcon
  from '../../assets/images/win95_did_you_know.png';

import win95Pc
  from '../../assets/images/win95_pc.png';


/* =========================================================
   WINDOWS 95 UI CONSTANTS
========================================================= */

const FONT =
  '"MS Sans Serif", "Microsoft Sans Serif", sans-serif';

const BUTTON_FONT_SIZE = 11;


/* =========================================================
   SHORTCUT LABEL

   W -> Windows Tour
   W -> What's New
   O -> Online Registration
   P -> Product Catalog
   N -> Next Tip
   C -> Close
========================================================= */

function ShortcutLabel({
  shortcut,
  children,
}) {

  const text =
    String(children);

  const index =
    text
      .toLowerCase()
      .indexOf(
        String(shortcut).toLowerCase()
      );


  if (index === -1) {

    return (
      <span>
        {text}
      </span>
    );
  }


  return (
    <span>

      {text.slice(0, index)}

      <u
        style={{
          textDecoration:
            'underline',

          textUnderlineOffset:
            '1px',
        }}
      >
        {text.charAt(index)}
      </u>

      {text.slice(index + 1)}

    </span>
  );
}


/* =========================================================
   INSTALLER WELCOME
========================================================= */

export default function InstallerWelcome({
  onWhatsNew,
  onOnlineRegistration,
  onClose,
}) {


  /* =======================================================
     CHECKBOX STATE
  ======================================================= */

  const [
    showWelcome,
    setShowWelcome,
  ] = useState(true);


  /* =======================================================
     ONLINE REGISTRATION
  ======================================================= */

  const handleOnlineRegistration = () => {

    if (onOnlineRegistration) {

      onOnlineRegistration();

      return;
    }

    window.alert(
      'Online Registration is not available yet.'
    );
  };


  /* =======================================================
     WINDOWS TOUR
  ======================================================= */

  const handleWindowsTour = () => {

    window.alert(
      'Windows Tour is not available yet.'
    );
  };


  /* =======================================================
     PRODUCT CATALOG
  ======================================================= */

  const handleProductCatalog = () => {

    window.alert(
      'Product Catalog is not available yet.'
    );
  };


  /* =======================================================
     NEXT TIP
  ======================================================= */

  const handleNextTip = () => {

    if (onWhatsNew) {

      onWhatsNew();
    }
  };


  return (

    <article
      aria-labelledby="welcome-title"

      style={{
        width: '100%',
        height: '100%',

        minWidth: 0,
        minHeight: 0,

        boxSizing: 'border-box',

        backgroundColor:
          '#c0c0c0',

        color: '#000000',

        fontFamily: FONT,

        fontSize: 11,

        overflow: 'hidden',

        display: 'flex',

        flexDirection:
          'column',
      }}
    >


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div
        style={{
          flex: '1 1 auto',

          minWidth: 0,
          minHeight: 0,

          padding:
            '10px 12px 0',

          boxSizing:
            'border-box',

          display: 'flex',

          flexDirection:
            'column',

          overflow:
            'hidden',
        }}
      >


        {/* =================================================
            TITLE
        ================================================= */}

        <h1
          id="welcome-title"

          style={{
            margin:
              '0 0 7px 0',

            padding: 0,

            width:
              'fit-content',

            alignSelf:
              'flex-start',

            textAlign:
              'left',

            whiteSpace:
              'nowrap',

            fontFamily:
              'Georgia, "Times New Roman", serif',

            fontSize: 26,

            lineHeight:
              '29px',

            fontWeight:
              'bold',

            letterSpacing:
              '-0.7px',

            color:
              '#000000',

            flexShrink: 0,

            transform:
              'translateX(0)',
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

              letterSpacing:
                '-1.3px',

              fontWeight:
                900,
            }}
          >
            Windows
          </span>


          <span
            style={{
              fontFamily:
                'Arial, sans-serif',

              fontSize: 25,

              fontWeight:
                400,

              color:
                '#f1f1f1',

              letterSpacing:
                '-1px',

              textShadow:
                '1px 1px 0 #808080',
            }}
          >
            95
          </span>

        </h1>


        {/* =================================================
            MAIN ROW
        ================================================= */}

        <div
          style={{
            flex:
              '1 1 auto',

            minWidth: 0,
            minHeight: 0,

            display:
              'flex',

            alignItems:
              'stretch',

            gap:
              10,

            overflow:
              'hidden',
          }}
        >


          {/* ===============================================
              INFORMATION PANEL
          =============================================== */}

          <section
            aria-label="Welcome information"

            style={{
              flex:
                '1 1 auto',

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

              overflow:
                'hidden',

              padding:
                '14px 14px',

              display:
                'flex',

              flexDirection:
                'column',
            }}
          >


            {/* =============================================
                DID YOU KNOW
            ============================================= */}

            <div
              style={{
                display:
                  'flex',

                alignItems:
                  'flex-start',

                width:
                  '100%',

                minWidth:
                  0,

                /*
                  Bulb + text naik bersama 5px.
                */
                transform:
                  'translateY(0px)',
              }}
            >


              {/* =========================================
                  DID YOU KNOW ICON
              ========================================= */}

              <div
                aria-hidden="true"

                style={{
                  width:
                    64,

                  minWidth:
                    64,

                  height:
                    64,

                  marginRight:
                    12,

                  marginTop:
                    -10,

                  padding:
                    0,

                  display:
                    'flex',

                  alignItems:
                    'flex-start',

                  justifyContent:
                    'flex-start',

                  flexShrink:
                    0,

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
                    width:
                      64,

                    height:
                      64,

                    display:
                      'block',

                    imageRendering:
                      'pixelated',
                  }}
                />

              </div>


              {/* =========================================
                  TEXT CONTENT
              ========================================= */}

              <div
                style={{
                  flex:
                    '1 1 auto',

                  minWidth:
                    0,

                  width:
                    '100%',

                  paddingTop:
                    10,

                  boxSizing:
                    'border-box',

                  textAlign:
                    'left',
                }}
              >


                {/* =======================================
                    DID YOU KNOW TITLE
                ======================================= */}

                <strong
                  style={{
                    display:
                      'block',

                    margin:
                      0,

                    padding:
                      0,

                    fontFamily:
                      FONT,

                    fontSize:
                      12,

                    lineHeight:
                      '15px',

                    fontWeight:
                      'bold',

                    color:
                      '#000000',
                  }}
                >
                  Did you know...
                </strong>



                {/* =======================================
                    SECOND PARAGRAPH
                ======================================= */}

                <p
                  style={{
                    margin:
                      '25px 0 0',

                    padding:
                      0,

                    maxWidth:
                      480,

                    fontFamily:
                      FONT,

                    fontSize:
                      12,

                    lineHeight:
                      '16px',

                    fontWeight:
                      'normal',

                    color:
                      '#000000',
                  }}
                >
                  Perdana Kurniawan Arta is a Visual
                  Designer and Design Lead currently exploring Product Design,
                  UX, and Design Engineering.
                </p>


                {/* =======================================
                    THIRD PARAGRAPH
                ======================================= */}

                <p
                  style={{
                    margin:
                      '11px 0 0',

                    padding:
                      0,

                    maxWidth:
                      480,

                    fontFamily:
                      FONT,

                    fontSize:
                      12,

                    lineHeight:
                      '16px',

                    fontWeight:
                      'normal',

                    color:
                      '#000000',
                  }}
                >
                  With 10+ years of experience across
                  visual design, visual systems,
                  iconography, illustration, and design
                  direction, he now explores how design,
                  interaction, and code can come together
                  to build functional digital experiences.
                </p>

              </div>

            </div>


            {/* =============================================
                WINDOWS 95 PC IMAGE
            ============================================= */}

            <div
              aria-hidden="true"

              style={{
                flex:
                  '1 1 auto',

                display:
                  'flex',

                alignItems:
                  'flex-end',

                justifyContent:
                  'center',

                minHeight:
                  0,

                paddingTop:
                  8,
              }}
            >

              <img
                src={win95Pc}

                alt=""

                height={210}

                style={{
                  height:
                    210,

                  width:
                    'auto',

                  display:
                    'block',

                  imageRendering:
                    'pixelated',

                  flexShrink:
                    0,

                  /*
                    PC naik 15px.
                  */
                  transform:
                    'translateY(-20px)',
                }}
              />

            </div>

          </section>


          {/* ===============================================
              RIGHT BUTTON COLUMN
          =============================================== */}

          <aside
            aria-label="Welcome actions"

            style={{
              width:
                140,

              minWidth:
                140,

              flexShrink:
                0,

              gap:
                8,

              display:
                'flex',

              flexDirection:
                'column',

              boxSizing:
                'border-box',
            }}
          >


            {/* =============================================
                WINDOWS TOUR
            ============================================= */}

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


            {/* =============================================
                WHAT'S NEW
            ============================================= */}

            <Button
              onClick={() => {}}
            >
              <ShortcutLabel
                shortcut="W"
              >
                What's New
              </ShortcutLabel>
            </Button>


            {/* =============================================
                ONLINE REGISTRATION
            ============================================= */}

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


            {/* =============================================
                PRODUCT CATALOG
            ============================================= */}

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


            {/* =============================================
                NEXT TIP
            ============================================= */}

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


            {/* =============================================
                SPACER
            ============================================= */}

            <div
              style={{
                flex:
                  '1 1 auto',

                minHeight:
                  14,
              }}
            />


            {/* =============================================
                DIVIDER
            ============================================= */}

            <div
              aria-hidden="true"

              style={{
                width:
                  '100%',

                height:
                  2,

                margin:
                  '0 0 13px',

                borderTop:
                  '1px solid #808080',

                borderBottom:
                  '1px solid #ffffff',

                boxSizing:
                  'border-box',

                flexShrink:
                  0,
              }}
            />


            {/* =============================================
                CLOSE
            ============================================= */}

            <Button
              onClick={
                onClose
              }
            >
              <ShortcutLabel
                shortcut="C"
              >
                Close
              </ShortcutLabel>
            </Button>

          </aside>

        </div>


        {/* =================================================
            CHECKBOX ROW
        ================================================= */}

        <div
          style={{
            flexShrink:
              0,

            width:
              '100%',

            height:
              39,

            minHeight:
              39,

            boxSizing:
              'border-box',

            display:
              'flex',

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


{/* ===============================================
    CHECKBOX
=============================================== */}

<div
  style={{
    display: 'flex',

    alignItems: 'center',

    width: '100%',

    minWidth: 0,

    fontFamily: FONT,

    fontSize: 11,

    lineHeight: '14px',

    color: '#000000',

    userSelect: 'none',
  }}
>
  <Checkbox
    checked={showWelcome}

    onChange={(event) => {
      setShowWelcome(
        event.target.checked
      );
    }}

    style={{
      margin: 0,

      padding: 8,

      width: 12,
      height: 13,

      flexShrink: 0,
    }}
  />

  <span
    style={{
      marginLeft: 5,

      display: 'block',

      whiteSpace: 'nowrap',

      lineHeight: '14px',
    }}
  >
    Show this Welcome Screen next time you start Windows
  </span>
</div>

        </div>

      </div>

    </article>
  );
}