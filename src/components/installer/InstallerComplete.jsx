import React from 'react';

import win95installimg
  from './win95_install_illustration.png';


export default function InstallerComplete() {

  return (
    <article
      aria-labelledby="installation-complete-title"

      className="ui-font-reading"

      style={{
        height: '100%',

        display: 'flex',
        flexDirection: 'column',

        color: '#000000',

        boxSizing: 'border-box',
      }}
    >

      {/* ======================================
          MOBILE RESPONSIVE STYLE
      ====================================== */}

      <style>
        {`
          @media (max-width: 600px) {

            .complete-layout {
              flex-direction: column !important;

              gap: 12px !important;
            }

            .complete-image {
              width: 100% !important;

              min-width: 0 !important;

              height: 150px !important;

              flex-shrink: 0 !important;
            }

            .complete-content {
              width: 100%;

              padding-right: 2px !important;
            }

          }
        `}
      </style>


      {/* ======================================
          TWO COLUMN LAYOUT
      ====================================== */}

      <section
        aria-label="Installation complete"

        className="complete-layout"

        style={{
          display: 'flex',

          flex: 1,

          minHeight: 0,

          gap: 15,

          boxSizing: 'border-box',
        }}
      >

        {/* ====================================
            LEFT COLUMN
        ==================================== */}

        <div
          aria-label="Windows 95 installation illustration"

          className="complete-image"

          style={{
            width: 170,

            minWidth: 170,

            flexShrink: 0,

            background: '#54A8A8',

            border:
              '2px inset #c0c0c0',

            boxSizing: 'border-box',

            overflow: 'hidden',

            display: 'flex',

            alignItems: 'center',

            justifyContent: 'center',
          }}
        >

          <img
            src={win95installimg}

            alt="Windows 95 installation illustration"

            style={{
              width: '100%',

              height: '100%',

              display: 'block',

              objectFit: 'contain',

              objectPosition: 'center',
            }}
          />

        </div>


        {/* ====================================
            RIGHT COLUMN
        ==================================== */}

        <div
          className="
            ui-font-reading
            complete-content
          "

          style={{
            flex: 1,

            minWidth: 0,

            minHeight: 0,

            display: 'flex',

            flexDirection: 'column',

            paddingRight: 6,

            boxSizing: 'border-box',

            textAlign: 'left',

            color: '#000000',
          }}
        >

          {/* ==================================
              TITLE
          ================================== */}

          <header>

            <h2
              id="installation-complete-title"

              className="ui-font-reading"

              style={{
                margin: '3px 0 0',

                padding: 0,

                fontSize: 16,

                lineHeight: '20px',

                letterSpacing:
                  '-0.3px',

                fontWeight: 700,

                textAlign: 'left',

                color: '#000000',
              }}
            >
              Installation Complete
            </h2>

          </header>


          {/* ==================================
              COMPLETION MESSAGE
          ================================== */}

          <section
            aria-label="Installation completion message"

            style={{
              paddingTop: 15,

              boxSizing: 'border-box',
            }}
          >

            <p
              style={{
                margin: 0,

                textAlign: 'left',

                color: '#000000',
              }}
            >
              Perdana's Computer has been successfully
              installed and is ready to explore. 
            </p>



          </section>


          {/* ==================================
              FINISH MESSAGE
          ================================== */}
<section
  aria-label="Ready to continue"

  style={{
    marginTop: 'auto',

    paddingTop: 10,

    boxSizing: 'border-box',
  }}
>

  <p
    style={{
      margin: '6px 0 0',

      textAlign: 'left',

      color: '#000000',
    }}
  >
    Click <strong>Finish</strong> to start exploring.
  </p>

</section>

        </div>

      </section>

    </article>
  );
}