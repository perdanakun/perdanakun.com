import React from 'react';

function PerdanaShutdownScreen({
  mode = 'restart',
}) {
  const isRestart = mode === 'restart';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,

        backgroundColor: '#000',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        color: '#fff',

        fontFamily:
          '"MS Sans Serif", "Microsoft Sans Serif", sans-serif',

        textAlign: 'center',
      }}
    >
      <div>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            letterSpacing: '2px',
          }}
        >
          PERDANA PC
        </div>

        <div
          style={{
            marginTop: '12px',
            fontSize: '12px',
            color: '#c0c0c0',
          }}
        >
          {isRestart
            ? 'Restarting Windows 95...'
            : 'Shutting down Windows 95...'}
        </div>
      </div>
    </div>
  );
}

export default PerdanaShutdownScreen;
