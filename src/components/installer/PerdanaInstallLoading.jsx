import React, { useEffect, useState } from 'react';

import { Install } from '@react95/icons';

import installerBackground from '../../assets/images/win95_install.jpg';


function PerdanaInstallLoading({
  isMobile = false,
  isTablet = false,
  winBackground,
  onComplete,
}) {
  const [showWindow, setShowWindow] = useState(false);

  const [currentBackground, setCurrentBackground] = useState(
    installerBackground
  );


  // ==========================================
  // WINDOW + BACKGROUND TIMING
  // ==========================================

  useEffect(() => {
    // 300ms → window muncul
    const showTimer = setTimeout(() => {
      setShowWindow(true);
    }, 300);


    // 2500ms → window hilang
    // DAN background berganti ke desktop
    const changeBackgroundTimer = setTimeout(() => {
      setShowWindow(false);

      setCurrentBackground(winBackground);
    }, 1900);


    return () => {
      clearTimeout(showTimer);
      clearTimeout(changeBackgroundTimer);
    };
  }, [winBackground]);


  // ==========================================
  // WINDOW SIZE
  // ==========================================

  const getWindowStyle = () => {
    if (isMobile) {
      return {
        width: '90vw',
        maxWidth: '90vw',
      };
    }

    if (isTablet) {
      return {
        width: '70vw',
        maxWidth: '70vw',
      };
    }

    return {
      width: '550px',
      maxWidth: 'calc(100vw - 24px)',
    };
  };


  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,

        width: '100vw',
        height: '100vh',

        zIndex: 999999,

        cursor: 'wait',

        backgroundImage: `url(${currentBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        boxSizing: 'border-box',

        fontFamily:
          '"MS Sans Serif", "Microsoft Sans Serif", sans-serif',
      }}
    >

      {/* ==========================================
          WINDOWS 95 WINDOW
      ========================================== */}

      {showWindow && (
        <div
          style={{
            ...getWindowStyle(),

            backgroundColor: '#c0c0c0',

            borderTop: '2px solid #ffffff',
            borderLeft: '2px solid #ffffff',
            borderRight: '2px solid #000000',
            borderBottom: '2px solid #000000',

            padding: 3,

            boxSizing: 'border-box',

            display: 'flex',
            flexDirection: 'column',
          }}
        >

          {/* ==========================================
              TITLE BAR
          ========================================== */}

          <div
            style={{
              height: 22,

              backgroundColor: '#000080',

              color: '#ffffff',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              padding: '2px 8px 6px 8px',

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
            Setting up Perdana's Computer
          </div>


          {/* ==========================================
              CONTENT
          ========================================== */}

          <main
            style={{
              backgroundColor: '#c0c0c0',

              padding: isMobile
                ? '22px 14px 20px'
                : isTablet
                ? '24px 20px 20px'
                : '26px 30px 22px',

              boxSizing: 'border-box',

              display: 'flex',
              flexDirection: 'column',
            }}
          >

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                gap: 12,

                marginBottom: 20,

                width: '100%',
                boxSizing: 'border-box',
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
                style={{
                  margin: 0,

                  color: '#000000',

                  textAlign: 'left',

                  lineHeight: 1.4,

                  fontSize: 13,

                  maxWidth: 360,
                }}
              >
                Windows 95 is now finalizing settings for
                Perdana's Computer.
              </p>
            </div>

          </main>

        </div>
      )}

    </div>
  );
}

export default PerdanaInstallLoading;