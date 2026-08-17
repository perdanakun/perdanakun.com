import React from 'react';

export default function PerdanaBootScreen() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,

        width: '100vw',
        height: '100vh',

        background: '#000',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        color: '#fff',

        fontFamily:
          '"MS Sans Serif", "Microsoft Sans Serif", sans-serif',

        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: 'min(520px, 80vw)',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          textAlign: 'center',
        }}
      >

        {/* PC NAME */}

        <div
          style={{
            marginBottom: 18,

            fontSize: 28,
            lineHeight: '32px',

            fontWeight: 'bold',

            letterSpacing: 1,

            color: '#fff',
          }}
        >
          PERDANA PC
        </div>


        {/* BOOT MESSAGE */}

        <div
          style={{
            marginBottom: 14,

            fontSize: 13,
            lineHeight: '18px',

            color: '#c0c0c0',
          }}
        >
          Starting Perdana PC...
        </div>


        {/* LOADING BAR */}

        <div
          style={{
            width: '100%',
            height: 18,

            padding: 2,

            background: '#202020',

            border:
              '1px solid #606060',

            boxSizing: 'border-box',

            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: '45%',

              background:
                '#ffffff',

              animation:
                'perdanaBootProgress 1.4s linear forwards',
            }}
          />
        </div>


        {/* COPYRIGHT / VERSION */}

        <div
          style={{
            marginTop: 18,

            fontSize: 10,

            color: '#707070',
          }}
        >
          Perdana PC BIOS
        </div>

      </div>


      {/* BOOT ANIMATION */}

      <style>
        {`
          @keyframes perdanaBootProgress {
            from {
              width: 0%;
            }

            to {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}
