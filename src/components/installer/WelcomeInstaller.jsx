import React from 'react';

import {
  Button,
  Frame,
} from '@react95/core';


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
      style={{
        position: 'fixed',

        left: '50%',
        top: '50%',

        transform: 'translate(-50%, -50%)',

        width: isMobile
          ? '90vw'
          : isTablet
          ? '55vw'
          : '600px',

        maxWidth: 'calc(100vw - 24px)',

        zIndex: 100000,

        fontFamily:
          '"MS Sans Serif", Arial, sans-serif',
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
          style={{
            height: 22,

            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center',

            padding: '2px 8px 6px 8px',

            background: '#000080',

            color: '#ffffff',

            fontFamily:
              '"MS Sans Serif", Arial, sans-serif',

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
              ? '24px 20px'
              : isTablet
              ? '26px 26px'
              : '28px 30px',

            boxSizing: 'border-box',

            display: 'flex',
            flexDirection: 'column',

            justifyContent: 'flex-start',
          }}
        >

          {/* ==========================================
              WELCOME TITLE
          ========================================== */}

          <h1
            style={{
              margin: '0 0 18px',
              letterSpacing: '-0.5px',

              color: '#000000',

              fontFamily:
                '"MS Sans Serif", Arial, sans-serif',

              fontSize: 16,

              fontWeight: 'bold',

              lineHeight: 1.2,

              textAlign: 'left',
            }}
          >
            Welcome to Windows 95 Setup
          </h1>


          {/* ==========================================
              INTRODUCTION
          ========================================== */}

          <p
            style={{
              margin: 0,

              color: '#000000',

              fontFamily:
                '"MS Sans Serif", Arial, sans-serif',

              fontSize: 13,

              fontWeight: 'normal',

              lineHeight: 1.5,

              textAlign: 'left',
            }}
          >
            Congratulations! You've made a great choice.
          </p>


          {/* ==========================================
              ABOUT PERDANA'S COMPUTER
          ========================================== */}

          <p
            style={{
              margin: '12px 0 0',

              color: '#000000',

              fontFamily:
                '"MS Sans Serif", Arial, sans-serif',

              fontSize: 13,

              fontWeight: 'normal',

              lineHeight: 1.5,

              textAlign: 'left',
            }}
          >
            This is Perdana's Computer — a personal space
            for his work, experience, ideas, and experiments
            as he explores the intersection of design,
            products, interaction, and code.
          </p>


          {/* ==========================================
              SETUP INTRODUCTION
          ========================================== */}

          <p
            style={{
              margin: '12px 0 0',

              color: '#000000',

              fontFamily:
                '"MS Sans Serif", Arial, sans-serif',

              fontSize: 13,

              fontWeight: 'normal',

              lineHeight: 1.5,

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
            style={{
              margin: '12px 0 0',

              color: '#000000',

              fontFamily:
                '"MS Sans Serif", Arial, sans-serif',

              fontSize: 13,

              fontWeight: 'normal',

              lineHeight: 1.5,

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
              marginTop: 20,

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
              style={{
                minWidth: 75,

                fontFamily:
                  '"MS Sans Serif", Arial, sans-serif',

                fontSize: 12,
              }}
            >
              Continue
            </Button>


            {/* ==========================================
                EXIT SETUP
            ========================================== */}

            <Button
              onClick={handleCancel}
              style={{
                minWidth: 75,

                fontFamily:
                  '"MS Sans Serif", Arial, sans-serif',

                fontSize: 12,
              }}
            >
              Exit Setup
            </Button>

          </div>

        </main>

      </Frame>

    </div>
  );
}