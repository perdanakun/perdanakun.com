import React from 'react';
import { Computer } from '@react95/icons';

export default function InstallerComplete() {
  return (
    <div
      style={{
        height: '100%',

        display: 'flex',

        flexDirection: 'column',

        justifyContent: 'center',

        alignItems: 'center',

        textAlign: 'center',

        fontFamily: '"MS Sans Serif", sans-serif',

        color: '#000',
      }}
    >

      {/* ICON */}

      <div
        style={{
          marginBottom: 8,
        }}
      >
        <Computer variant="32x32_4" />
      </div>


      {/* TITLE */}

      <h2
        style={{
          margin: '10px 0',

          fontSize: 18,

          fontWeight: 'bold',
        }}
      >
        Installation Complete
      </h2>


      {/* DESCRIPTION */}

      <p
        style={{
          fontSize: 12,

          lineHeight: 1.5,

          maxWidth: 380,

          margin: '0 0 10px',
        }}
      >
        Perdana's PC has been successfully installed.
        You can now explore the portfolio desktop.
      </p>


      <p
        style={{
          fontSize: 12,

          marginTop: 8,
        }}
      >
        Click <strong>Finish</strong> to continue.
      </p>

    </div>
  );
}