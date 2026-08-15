import React from 'react';

function InstallerTree({
  steps = [],
  currentStep = 0,
  onSelectStep,
}) {
  return (
    <nav
      aria-label="Installer navigation"
      style={{
        width: '180px',
        minWidth: '180px',
        background: '#d4d0c8',
        borderRight: '1px solid #808080',
        padding: '8px 0',
        boxSizing: 'border-box',
      }}
    >
      <ol
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {steps.map((step, index) => {
          const isActive = index === currentStep;

          return (
            <li key={step.id || index}>
              <button
                type="button"
                onClick={() => onSelectStep?.(index)}
                aria-current={isActive ? 'step' : undefined}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '7px 12px',
                  border: 'none',
                  background: isActive ? '#000080' : 'transparent',
                  color: isActive ? '#ffffff' : '#000000',
                  textAlign: 'left',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                {step.title}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default InstallerTree;