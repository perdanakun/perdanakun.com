import React from 'react';

import {
  Frame,
  TitleBar,
} from '@react95/core';


export default function InstallerTitleBar({
  title = 'Windows 95 Setup Wizard',
  onClose,
}) {

  return (
    <Frame
      style={{
        position: 'relative',

        height: 20,

        padding: 2,

        display: 'flex',
        alignItems: 'center',

        background: '#000080',
        color: '#ffffff',

        boxSizing: 'border-box',

        userSelect: 'none',

        flexShrink: 0,
      }}
    >

      {/* ======================================
          CENTER TITLE
      ====================================== */}

      <div
        style={{
          position: 'absolute',

          left: '50%',
          top: '50%',

          transform: 'translate(-50%, -50%)',

          whiteSpace: 'nowrap',

          fontSize: 12,
          fontWeight: 600,

          lineHeight: '1.4em',

          color: '#ffffff',

          textShadow: '0.5px 0px #000000',

          pointerEvents: 'none',
        }}
      >
        {title}
      </div>


      {/* ======================================
          CLOSE BUTTON
      ====================================== */}

      <div
        style={{
          position: 'absolute',

          right: 2,
          top: 2,

          display: 'flex',

          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        <TitleBar.Close
          onClick={onClose}
        />

      </div>

    </Frame>
  );
}