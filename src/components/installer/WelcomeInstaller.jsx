import React from 'react';

import {
  Button,
  Frame,
} from '@react95/core';


export default function WelcomeInstaller({
  isMobile,
  isTablet,
  onContinue,
  onExit,
}) {

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
          : '410px',

        maxWidth: 'calc(100vw - 24px)',

        zIndex: 100000,
      }}
    >

      <Frame
        style={{
          width: '100%',

          padding: 3,

          background: '#c0c0c0',

          boxSizing: 'border-box',

          display: 'flex',
          flexDirection: 'column',
        }}
      >

        {/* TITLE BAR */}

        <div
          style={{
            height: 22,

            display: 'flex',
            alignItems: 'center',

            padding: '2px 8px',

            background: '#000080',
            color: '#ffffff',

            fontFamily:
              '"MS Sans Serif", Arial, sans-serif',

            fontSize: 12,
            fontWeight: 'bold',

            boxSizing: 'border-box',

            userSelect: 'none',
          }}
        >
          Welcome Installer
        </div>


        {/* CONTENT */}

        <div
          style={{
            background: '#ffffff',

            minHeight: isMobile
              ? '220px'
              : '250px',

            padding: isMobile
              ? '24px 20px'
              : '28px 30px',

            boxSizing: 'border-box',

            display: 'flex',
            flexDirection: 'column',

            justifyContent: 'center',
          }}
        >

          <div
            style={{
              marginBottom: 18,

              color: '#000000',

              fontFamily:
                '"MS Sans Serif", Arial, sans-serif',

              fontSize: isMobile
                ? 17
                : 20,

              fontWeight: 'bold',

              lineHeight: 1.2,
            }}
          >
            Welcome to the Installer
          </div>


          <div
            style={{
              color: '#000000',

              fontFamily:
                '"MS Sans Serif", Arial, sans-serif',

              fontSize: 13,

              lineHeight: 1.5,
            }}
          >
            This setup wizard will help you
            install the application on your
            computer.
          </div>


          <div
            style={{
              marginTop: 12,

              color: '#000000',

              fontFamily:
                '"MS Sans Serif", Arial, sans-serif',

              fontSize: 13,

              lineHeight: 1.5,
            }}
          >
            Click <b>Continue</b> to begin the setup,
            or <b>Exit Setup</b> to close the installer.
          </div>

        </div>


        {/* DIVIDER */}

        <div
          style={{
            borderTop: '1px solid #808080',
            boxShadow: '0 1px 0 #ffffff',
          }}
        />


        {/* FOOTER */}

        <div
          style={{
            display: 'flex',

            justifyContent: 'flex-end',
            alignItems: 'center',

            gap: 6,

            padding: '10px 12px',

            background: '#c0c0c0',

            boxSizing: 'border-box',
          }}
        >

          <Button onClick={onContinue}>
            Continue
          </Button>

          <Button onClick={onExit}>
            Exit Setup
          </Button>

        </div>

      </Frame>

    </div>
  );
}