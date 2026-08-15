import React from 'react';
import perdanaImage from './perdana.png';

export default function InstallerWelcome() {
  return (
    <article
      aria-labelledby="perdana-pc-welcome-title"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"MS Sans Serif", sans-serif',
        color: '#000',
        boxSizing: 'border-box',
      }}
    >

      {/* ======================================
          TWO COLUMN LAYOUT
      ====================================== */}

      <section
        aria-label="Perdana-PC introduction"
        style={{
          display: 'flex',
          flex: 1,
          minHeight: 0,
          gap: 18,
          boxSizing: 'border-box',
        }}
      >

        {/* ====================================
            LEFT COLUMN
            PHOTO
        ==================================== */}

        <div
          aria-label="Portrait of Perdana Kurniawan Arta"
          style={{
            width: 150,
            flexShrink: 0,

            background: '#008080',

            border: '2px inset #c0c0c0',

            boxSizing: 'border-box',

            overflow: 'hidden',

            display: 'flex',
          }}
        >

          <img
            src={perdanaImage}
            alt="Portrait of Perdana Kurniawan Arta"
            style={{
              width: '100%',
              height: '100%',
              display: 'block',

              objectFit: 'cover',
              objectPosition: '85% 50%',
            }}
          />

        </div>


{/* ====================================
    RIGHT COLUMN
    ALL CONTENT
==================================== */}

<div
  style={{
    flex: 1,
    minWidth: 0,

    display: 'grid',
    gridTemplateRows: 'auto 1fr auto 1fr auto',
    minHeight: 0,

    overflowY: 'auto',

    paddingRight: 4,

    boxSizing: 'border-box',

    fontSize: 12,
    lineHeight: 1.55,

    textAlign: 'left',
  }}
>

  {/* ==================================
      TITLE
  ================================== */}


<header
  style={{
    paddingBottom: 8,
    borderBottom: '1px solid #616161',
  }}
>
  <h2
    id="perdana-pc-welcome-title"
    style={{
      margin: '4px 0 4px',

      fontSize: 20,
      fontWeight: 'bold',

      textAlign: 'left',

      color: '#000000',
    }}
  >
    Welcome to Perdana-PC Setup
  </h2>
</header>



  {/* ==================================
      TOP SPACER
  ================================== */}

  <div />


  {/* ==================================
      INTRODUCTION
  ================================== */}

  <section
    aria-label="About Perdana-PC"
  >

    <p
      style={{
        margin: '0 0 4px',

        textAlign: 'left',

        fontWeight: 'normal',
      }}
    >
      Before exploring the work, start with the person behind it.
    </p>


    <h3
      id="identity-title"
      style={{
        margin: '0 0 4px',

        fontSize: 13,
        fontWeight: 'bold',

        textAlign: 'left',
      }}
    >
      Perdana Kurniawan Arta
    </h3>


    <p
      style={{
        margin: '0 0 4px',

        textAlign: 'left',
        paddingLeft: 24,

        color: '#000000',
      }}
    >
      Visual Designer &amp; Design Lead exploring Product
      Design and Design Engineering
    </p>


    <p
      style={{
        margin: '0 0 4px',

        fontSize: 12,
        fontWeight: 'bold',

        textAlign: 'left',
      }}
    >
      What Is This Setup About?
    </p>


    <p
      style={{
        margin: '0',

        paddingLeft: 24,

        textAlign: 'left',
        lineHeight: 1.55,

        color: '#000000',
      }}
    >
      This setup will introduce the person behind{' '}
      <strong>Perdana-PC</strong>
      {' '}— from a decade of visual design and
      visual systems work to an ongoing exploration
      of product design, UX, and design engineering.
    </p>

  </section>


  {/* ==================================
      BOTTOM SPACER
  ================================== */}

  <div />


  {/* ==================================
      SETUP INFORMATION
  ================================== */}

  <section
    aria-labelledby="setup-information-title"
  >

    <div
      style={{
        padding: '12px 14px',

        background: '#ffffff',

        border: '2px inset #c0c0c0',

        boxSizing: 'border-box',

        lineHeight: 1.45,

        textAlign: 'left',

        fontSize: 12,
      }}
    >

      <h3
        id="setup-information-title"
        style={{
          margin: '0 0 8px',

          fontSize: 12,
          fontWeight: 'bold',

          textAlign: 'left',
        }}
      >
        Setup Information
      </h3>


      <div
        style={{
          borderTop: '1px solid #c0c0c0',
          paddingTop: 4,
        }}
      >

        <p
          style={{
            margin: 0,

            textAlign: 'left',

            paddingLeft: 24,
          }}
        >
          <strong>Product:</strong>{' '}
          Perdana-PC
          <br />

          <strong>Type:</strong>{' '}
          Interactive Portfolio
          <br />

          <strong>Focus:</strong>{' '}
          Design, UX &amp; Design Engineering
        </p>

      </div>

    </div>

  </section>


  {/* ==================================
      NAVIGATION INSTRUCTION
  ================================== */}

  <p
    style={{
      margin: '10px 0 0',

      textAlign: 'left',

      fontSize: 11,
    }}
  >
    Click <strong>Next</strong> to explore the installation.
  </p>

</div>


      </section>

    </article>
  );
}