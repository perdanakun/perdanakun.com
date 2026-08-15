import React from 'react';

export default function InstallerWizard() {
  return (
    <div
      style={{
        height: '100%',

        fontFamily: '"MS Sans Serif", sans-serif',

        color: '#000',

        fontSize: 12,

        overflowY: 'auto',
      }}
    >

      <h2
        style={{
          margin: '4px 0 16px',

          fontSize: 18,

          fontWeight: 'bold',
        }}
      >
        Ready to install Perdana's PC
      </h2>


      <p>
        The setup program is ready to install the
        interactive portfolio environment.
      </p>


      {/* ======================================
          INSTALLATION DETAILS
      ====================================== */}

      <fieldset
        style={{
          marginTop: 20,

          padding: '12px 14px',

          border: '2px groove #ffffff',
        }}
      >

        <legend>
          Installation details
        </legend>


        {/* DESTINATION */}

        <p
          style={{
            margin: '6px 0',
          }}
        >
          <strong>
            Destination:
          </strong>
        </p>


        <div
          style={{
            background: '#ffffff',

            border: '2px inset #c0c0c0',

            padding: '6px 8px',

            marginBottom: 14,

            fontFamily: 'monospace',
          }}
        >
          C:\PERDANA-PC
        </div>


        {/* COMPONENTS */}

        <p
          style={{
            margin: '6px 0',
          }}
        >
          <strong>
            Components:
          </strong>
        </p>


        <div
          style={{
            background: '#ffffff',

            border: '2px inset #c0c0c0',

            padding: '8px',

            lineHeight: 1.6,
          }}
        >
          ✓ Portfolio Desktop

          <br />

          ✓ Project Explorer

          <br />

          ✓ Contact System

          <br />

          ✓ Interactive Applications

          <br />

          ✓ Windows 95 Interface

        </div>

      </fieldset>


      {/* ======================================
          DESCRIPTION
      ====================================== */}

      <p
        style={{
          marginTop: 18,

          fontWeight: 'bold',
        }}
      >
        Click Install to begin.
      </p>

    </div>
  );
}