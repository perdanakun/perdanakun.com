import React from 'react';
import installerBackground from '../../assets/images/7night.png';

function PerdanaInstallLoading() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,

        backgroundImage: `url(${installerBackground})`,
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',


        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        fontFamily:
          '"MS Sans Serif", "Microsoft Sans Serif", sans-serif',
      }}
    >
      <div
        style={{
          width: '420px',
          maxWidth: '90vw',

          backgroundColor: '#c0c0c0',

          borderTop: '2px solid #ffffff',
          borderLeft: '2px solid #ffffff',
          borderRight: '2px solid #000000',
          borderBottom: '2px solid #000000',

          padding: '3px',
        }}
      >

        {/* TITLE BAR */}
        <div
          style={{
            height: '22px',

            backgroundColor: '#000080',
            color: '#ffffff',

            display: 'flex',
            alignItems: 'center',

            padding: '0 6px',

            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          Installing Windows 95
        </div>

        {/* CONTENT */}
        <div
          style={{
            padding: '24px 20px 20px',
            fontSize: '12px',
          }}
        >
          <div style={{ marginBottom: '14px' }}>
            Please wait while Windows 95 is being installed...
          </div>

          {/* PROGRESS BAR */}
          <div
            style={{
              width: '100%',
              height: '18px',

              backgroundColor: '#ffffff',

              borderTop: '2px solid #808080',
              borderLeft: '2px solid #808080',
              borderRight: '2px solid #ffffff',
              borderBottom: '2px solid #ffffff',

              padding: '2px',
              boxSizing: 'border-box',

              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',

                background:
                  'repeating-linear-gradient(90deg, #000080 0px, #000080 8px, transparent 8px, transparent 10px)',

                animation:
                  'win95Loading 0.7s linear infinite',
              }}
            />
          </div>

          <div
            style={{
              marginTop: '12px',
              textAlign: 'center',
            }}
          >
            Setting up your desktop...
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes win95Loading {
            from {
              transform: translateX(-10px);
            }

            to {
              transform: translateX(10px);
            }
          }
        `}
      </style>
    </div>
  );
}

export default PerdanaInstallLoading;
