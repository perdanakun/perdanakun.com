import React, { useEffect, useState } from 'react';

import {
  Frame,
} from '@react95/core';

import { Install } from '@react95/icons';


export default function WelcomeInstallerLoading({
  isMobile,
  isTablet,
  onComplete,
}) {

  // ==========================================
  // PROGRESS
  // ==========================================

  const [progress, setProgress] = useState(0);


  useEffect(() => {

    const duration = 1000;
    const interval = 30;

    const startTime = Date.now();

    const timer = setInterval(() => {

      const elapsed = Date.now() - startTime;

      const percentage = Math.min(
        100,
        Math.round((elapsed / duration) * 100)
      );

      setProgress(percentage);

      if (percentage >= 100) {
        clearInterval(timer);

        onComplete?.();
      }

    }, interval);


    return () => {
      clearInterval(timer);
    };

  }, [onComplete]);


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
            LOADING CONTENT
        ========================================== */}

        <main
          style={{
            background: '#ffffff',

            padding: isMobile
              ? '22px 20px 20px'
              : isTablet
              ? '24px 24px 20px'
              : '26px 30px 22px',

            boxSizing: 'border-box',

            display: 'flex',

            flexDirection: 'column',
          }}
        >

          {/* ==========================================
              HEADER + MESSAGE
          ========================================== */}

          <div
            style={{
              display: 'flex',

              alignItems: 'center',

              gap: 12,

              marginBottom: 20,
            }}
          >

            <Install
              style={{
                width: 32,
                height: 32,

                flexShrink: 0,
              }}
            />

            <p
              className="reading-font"
              style={{
                margin: 0,

                color: '#000000',

                textAlign: 'left',

                lineHeight: 1.4,
              }}
            >
              <b>
                Setup is now preparing the Perdana's Windows 95 Setup Wizard,
                which will guide you through the rest of the setup process.
                Please wait.
              </b>
            </p>

          </div>


          {/* ==========================================
              PROGRESS BAR
          ========================================== */}

          <div
            style={{
              position: 'relative',

              marginTop: 3,

              width: '100%',

              height: 30,

              padding: 0,

              boxSizing: 'border-box',

              background: '#ffffff',

              border: '1.5px solid #000000',

              overflow: 'hidden',
            }}
          >

            {/* ==========================================
                BLUE PROGRESS
            ========================================== */}

            <div
              style={{
                width: `${progress}%`,

                height: '100%',

                background: '#000080',

                transition: 'width 30ms linear',
              }}
            />


            {/* ==========================================
                PERCENTAGE
            ========================================== */}

            <div
              className="ui-font"
              style={{
                position: 'absolute',

                inset: 0,

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'center',

                color: progress > 50
                  ? '#ffffff'
                  : '#000000',

                fontSize: 13,

                fontWeight: 'bold',

                pointerEvents: 'none',

                userSelect: 'none',

                textShadow: progress > 50
                  ? '1px 1px 0 #000'
                  : 'none',
              }}
            >
              {progress}%
            </div>

          </div>

        </main>

      </Frame>

    </div>
  );
}
