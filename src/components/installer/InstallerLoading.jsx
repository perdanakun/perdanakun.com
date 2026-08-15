import React from 'react';
import { ProgressBar } from '@react95/core';

export default function InstallerLoading({
  progress = 0,
}) {
  return (
    <div
      style={{
        height: '100%',

        display: 'flex',

        flexDirection: 'column',

        justifyContent: 'center',

        fontFamily: '"MS Sans Serif", sans-serif',

        color: '#000',

        fontSize: 12,
      }}
    >

      <h2
        style={{
          margin: '0 0 20px',

          fontSize: 18,

          fontWeight: 'bold',
        }}
      >
        Installing Perdana's PC
      </h2>


      <p>
        Please wait while the portfolio environment
        is being prepared.
      </p>


      {/* ======================================
          PROGRESS
      ====================================== */}

      <div
        style={{
          marginTop: 16,

          marginBottom: 8,
        }}
      >

        <ProgressBar
          value={progress}

          style={{
            width: '100%',
          }}
        />

      </div>


      {/* ======================================
          STATUS
      ====================================== */}

      <div
        style={{
          display: 'flex',

          justifyContent: 'space-between',

          alignItems: 'center',
        }}
      >

        <span>
          Installing components...
        </span>

        <span>
          {progress}%
        </span>

      </div>


      {/* ======================================
          CURRENT OPERATION
      ====================================== */}

      <div
        style={{
          marginTop: 18,

          padding: '8px 10px',

          background: '#ffffff',

          border: '2px inset #c0c0c0',

          fontFamily: 'monospace',

          fontSize: 11,
        }}
      >
        {progress < 25 && 'Preparing desktop...'}
        {progress >= 25 && progress < 50 && 'Loading portfolio components...'}
        {progress >= 50 && progress < 75 && 'Configuring Windows interface...'}
        {progress >= 75 && progress < 100 && 'Finalizing installation...'}
        {progress >= 100 && 'Installation complete.'}
      </div>

    </div>
  );
}