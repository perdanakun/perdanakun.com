import React from 'react';

import {
  Button,
  Frame,
} from '@react95/core';

import { Install } from '@react95/icons';


export default function WelcomeInstaller({
  isMobile,
  isTablet,
  onContinue,
  onClose,
}) {

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
        top: '50%',

        transform: 'translate(-50%, -50%)',

        width: isMobile
          ? '90vw'
          : isTablet
          ? '70vw'
          : '700px',

        maxWidth: 'calc(100vw - 24px)',

        zIndex: 100000,
      }}
    >

      {/* ==========================================
          WINDOWS 95 OUTER FRAME
      ========================================== */}

      <Frame
        style={{
          width: '100%',

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
            MAIN WHITE CONTENT
        ========================================== */}

        <main
          style={{
            background: '#ffffff',

padding: isMobile
  ? '18px 20px 14px'
  : isTablet
  ? '20px 20px 16px'
  : '20px 30px 16px',


            boxSizing: 'border-box',

            display: 'flex',
            flexDirection: 'column',

            justifyContent: 'flex-start',
          }}
        >

          {/* ==========================================
              WELCOME TITLE
          ========================================== */}
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    margin: '0 0 18px',
  }}
>
  <Install
    style={{
      width: 32,
      height: 32,
      flexShrink: 0,
    }}
  />

  <h1
  
    className="ui-font"
    style={{
      transform: 'translateY(-3px)',

      margin: 0,
      letterSpacing: '-0.5px',
      color: '#000000',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: '20px',
      textAlign: 'left',
    }}
  >
    Welcome to Windows 95 Setup!
  </h1>
</div>


          {/* ==========================================
              INTRODUCTION
          ========================================== */}

          <p
            className="reading-font"
            style={{
              margin: 0,

              color: '#000000',

              textAlign: 'left',
            }}
          >
            Congratulations! You've made a great choice.
          </p>


          {/* ==========================================
              ABOUT PERDANA'S COMPUTER
          ========================================== */}

          <p
            className="reading-font"
            style={{
              margin: '12px 0 0',

              color: '#000000',

              textAlign: 'left',
            }}
          >
            This is <b>Perdana's Computer</b> — a personal space
            for his work, experience, ideas, and experiments
            as he explores the intersection of <b>design,
            products, interaction, and code.</b> 
          </p>


          {/* ==========================================
              SETUP INTRODUCTION
          ========================================== */}

          <p
            className="reading-font"
            style={{
              margin: '12px 0 0',

              color: '#000000',

              textAlign: 'left',
            }}
          >
            Setup will introduce you to the person behind
            the work, show you what's inside, and guide you
            through the story before you start exploring.
          </p>


          {/* ==========================================
              CONTINUE INSTRUCTION
          ========================================== */}

          <p
            className="reading-font"
            style={{
              margin: '12px 0 0',

              color: '#000000',

              textAlign: 'left',
            }}
          >
            Click <strong>Continue</strong> to begin setup.
          </p>


          {/* ==========================================
              BUTTON AREA
          ========================================== */}

          <div
            style={{
              marginTop: 15,

              paddingTop: 0,

              display: 'flex',

              justifyContent: 'flex-end',

              alignItems: 'center',

              gap: 6,

              background: '#ffffff',
            }}
          >

            {/* ==========================================
                CONTINUE
            ========================================== */}

            <Button
              onClick={onContinue}
              className="ui-font"
              style={{
                minWidth: 90,
              }}
            >
            <strong> <u>C</u>ontinue </strong>
            </Button>


            {/* ==========================================
                EXIT SETUP
            ========================================== */}

            <Button
              onClick={handleCancel}
              className="ui-font"
              style={{
                minWidth: 90,
              }}
            >
             <strong> E<u>x</u>it Setup</strong>
            </Button>

          </div>

        </main>

      </Frame>

    </div>
  );
}
