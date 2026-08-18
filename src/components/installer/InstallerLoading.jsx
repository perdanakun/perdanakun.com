import React from 'react';

import {
  ProgressBar,
} from '@react95/core';

import win95installimg from './win95_install_illustration.png';


export default function InstallerLoading({
  progress = 0,
}) {

  const safeProgress = Math.max(
    0,
    Math.min(100, progress)
  );


  const getStatus = () => {
    if (safeProgress >= 100) {
      return 'Setup is complete.';
    }

    if (safeProgress >= 80) {
      return 'Finalizing installation...';
    }

    if (safeProgress >= 60) {
      return 'Installing program files...';
    }

    if (safeProgress >= 40) {
      return 'Copying program files...';
    }

    if (safeProgress >= 20) {
      return 'Preparing installation...';
    }

    return 'Starting installation...';
  };


  return (
    <section
      aria-labelledby="installer-loading-title"
      style={{
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',

        boxSizing: 'border-box',

        backgroundColor: '#c0c0c0',

        fontFamily:
          '"MS Sans Serif", sans-serif',

        color: '#000',

        overflow: 'hidden',
      }}
    >

      {/* =========================
          HEADER
      ========================= */}

      <header
        style={{
          height: 28,
          minHeight: 28,

          display: 'flex',
          alignItems: 'center',

          padding: '4px 8px',

          boxSizing: 'border-box',

          backgroundColor: '#c0c0c0',

          borderBottom:
            '1px solid #808080',

          fontSize: 11,
          fontWeight: 'bold',

          userSelect: 'none',
        }}
      >
        Perdana's Computer Setup
      </header>


      {/* =========================
          MAIN
      ========================= */}

      <main
        style={{
          flex: '1 1 0',

          minWidth: 0,
          minHeight: 0,

          display: 'flex',

          boxSizing: 'border-box',

          overflow: 'hidden',
        }}
      >

        {/* =========================
            LEFT IMAGE
        ========================= */}

        <aside
          style={{
            width: 170,
            minWidth: 170,

            height: '100%',

            flexShrink: 0,

            background: '#54A8A8',

            border: '2px inset #c0c0c0',

            boxSizing: 'border-box',

            overflow: 'hidden',

            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={win95installimg}
            alt="Perdana's Computer Setup"
            style={{
              width: '100%',
              height: '100%',

              display: 'block',

              objectFit: 'contain',

              objectPosition: 'center',
            }}
          />
        </aside>


        {/* =========================
            RIGHT CONTENT
        ========================= */}

        <div
          style={{
            flex: '1 1 0',

            minWidth: 0,
            minHeight: 0,

            display: 'flex',
            flexDirection: 'column',

            justifyContent: 'center',

            boxSizing: 'border-box',

            padding: '20px 24px',

            overflow: 'hidden',
          }}
        >

          <h1
            id="installer-loading-title"
            style={{
              margin: 0,

              fontSize: 16,
              lineHeight: '20px',

              fontWeight: 'bold',
            }}
          >
            Installing Perdana's Computer
          </h1>


          <p
            style={{
              margin: '10px 0 0',

              fontSize: 11,
              lineHeight: '16px',
            }}
          >
            Setup is installing Perdana's Computer
            on your computer.
          </p>


          {/* STATUS */}

          <div
            style={{
              marginTop: 20,

              fontSize: 11,
              lineHeight: '16px',
            }}
          >
            {getStatus()}
          </div>


          {/* PROGRESS BAR */}

          <div
            style={{
              width: '100%',

              maxWidth: 420,

              marginTop: 5,
            }}
          >
            <ProgressBar
              percent={safeProgress}
              width="100%"
            />
          </div>


          {/* PERCENTAGE */}

          <div
            style={{
              width: '100%',

              maxWidth: 420,

              marginTop: 3,

              fontSize: 11,
              lineHeight: '16px',

              textAlign: 'right',
            }}
          >
            {safeProgress}%
          </div>


          {/* NOTE */}

          <div
            style={{
              marginTop: 16,

              fontSize: 11,
              lineHeight: '16px',
            }}
          >
            {safeProgress >= 100
              ? "Perdana's Computer has been installed successfully."
              : 'Please wait while Setup completes the installation.'}
          </div>

        </div>

      </main>

    </section>
  );
}
