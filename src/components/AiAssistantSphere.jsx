import React from 'react';

function AiAssistantSphere({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'fixed',

        right: '24px',
        bottom: '45px',

        width: '64px',
        height: '64px',

        borderRadius: '50%',

        background:
          'radial-gradient(circle at 35% 30%, #ffffff 0%, #b8d9ff 18%, #4d8cff 45%, #174ea6 75%, #0b2d6b 100%)',

        border: '2px solid #ffffff',

        boxShadow:
          'inset -4px -5px 8px rgba(0,0,0,0.45), inset 3px 3px 6px rgba(255,255,255,0.8), 3px 3px 0px rgba(0,0,0,0.5)',

        cursor: 'pointer',

        zIndex: 9999,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        userSelect: 'none',

        transition: 'transform 0.1s ease',
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.92)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <div
        style={{
          width: '22px',
          height: '22px',
          borderRadius: '50%',

          background:
            'radial-gradient(circle at 35% 30%, #ffffff, #d8eaff 35%, #75aaff 70%, #3068c7)',

          boxShadow:
            '0 0 8px rgba(255,255,255,0.8)',
        }}
      />
    </div>
  );
}

export default AiAssistantSphere;