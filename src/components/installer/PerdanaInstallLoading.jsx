import React from 'react';
import installerBackground from '../../assets/images/win95_install.jpg';

function PerdanaInstallLoading({
  isMobile = false,
  isTablet = false,
}) {
  const getWindowStyle = () => {
  // =========================
  // SMARTPHONE
  // =========================
  if (isMobile) {
    return {
      width: '90vw',
      height: '30vh',

      maxWidth: 'none',
      maxHeight: 'none',

      boxSizing: 'border-box',
    };
  }

  // =========================
  // TABLET
  // =========================
  if (isTablet) {
    return {
      width: '60vw',
      height: '30vh',

      maxWidth: 'none',
      maxHeight: 'none',

      boxSizing: 'border-box',
    };
  }

  // =========================
  // DESKTOP
  // =========================
  return {
    width: '420px',
    height: '220px',

    maxWidth: '90vw',
    maxHeight: '90vh',

    boxSizing: 'border-box',
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

        backgroundImage: `url(${installerBackground})`,
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
      <div
        style={{
          ...getWindowStyle(),

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

            boxSizing: 'border-box',

            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Installing Windows 95
        </div>

        {/* CONTENT */}
        <div
          style={{
            padding: isMobile
              ? '20px 14px 18px'
              : '24px 20px 20px',

            fontSize: '12px',

            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              marginBottom: '14px',
              lineHeight: '16px',
            }}
          >
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

              lineHeight: '16px',
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
