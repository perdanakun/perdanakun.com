import React from 'react';

import {
  FolderOpen,
  FileText,
} from '@react95/icons';


export default function InstallerTree({
  steps = [],
  currentStep = 0,
  onSelectStep,
}) {

  return (
    <aside
      aria-label="Installation sections"
      style={{
        width: 180,
        minWidth: 180,

        height: '100%',

        /*
          Classic Windows 95 window background
        */
        backgroundColor: '#c0c0c0',

        boxSizing: 'border-box',

        overflowY: 'auto',
        overflowX: 'hidden',

        padding: 4,

        borderRight: '1px solid #808080',

        fontFamily:
          '"MS Sans Serif", sans-serif',

        fontSize: 11,

        color: '#000000',

        touchAction: 'pan-y',
      }}
    >

      {/* =========================================
          ROOT
      ========================================= */}

      <div
        style={{
          width: '100%',

          boxSizing: 'border-box',
        }}
      >

        {/* =======================================
            ROOT FOLDER
        ======================================= */}

        <div
          style={{
            display: 'flex',

            alignItems: 'center',

            minHeight: 20,

            padding: '1px 2px',

            boxSizing: 'border-box',

            userSelect: 'none',

            color: '#000000',
          }}
        >

          <div
            style={{
              width: 16,
              height: 16,

              flexShrink: 0,

              display: 'flex',

              alignItems: 'center',
              justifyContent: 'center',

              marginRight: 2,

              pointerEvents: 'none',
            }}
          >
            <FolderOpen
              variant="16x16_4"
            />
          </div>


          <span
            style={{
              whiteSpace: 'nowrap',

              fontFamily:
                '"MS Sans Serif", sans-serif',

              fontSize: 11,

              lineHeight: '16px',

              color: '#000000',
            }}
          >
            About
          </span>

        </div>


        {/* =======================================
            CHILDREN
        ======================================= */}

        <div
          style={{
            marginLeft: 16,

            boxSizing: 'border-box',
          }}
        >

          {steps.map((step, index) => {

            const isSelected =
              currentStep === index;


            return (
              <div
                key={
                  step.id ||
                  step.key ||
                  index
                }

                role="button"

                tabIndex={0}

                aria-current={
                  isSelected
                    ? 'page'
                    : undefined
                }

                onClick={() => {
                  onSelectStep?.(index);
                }}

                onKeyDown={(event) => {

                  if (
                    event.key === 'Enter' ||
                    event.key === ' '
                  ) {
                    event.preventDefault();

                    onSelectStep?.(index);
                  }

                }}

                style={{
                  display: 'flex',

                  alignItems: 'center',

                  width: '100%',

                  minHeight: 20,

                  padding: '1px 3px',

                  boxSizing: 'border-box',

                  cursor: 'pointer',

                  userSelect: 'none',

                  backgroundColor:
                    isSelected
                      ? '#000080'
                      : 'transparent',

                  color:
                    isSelected
                      ? '#ffffff'
                      : '#000000',

                  touchAction:
                    'manipulation',
                }}
              >

                {/* =================================
                    FILE ICON
                ================================= */}

                <div
                  style={{
                    width: 16,
                    height: 16,

                    flexShrink: 0,

                    display: 'flex',

                    alignItems: 'center',
                    justifyContent: 'center',

                    marginRight: 3,

                    pointerEvents: 'none',
                  }}
                >
                  <FileText
                    variant="16x16_4"
                  />
                </div>


                {/* =================================
                    TITLE
                ================================= */}

                <span
                  style={{
                    minWidth: 0,

                    overflow: 'hidden',

                    textOverflow: 'ellipsis',

                    whiteSpace: 'nowrap',

                    fontFamily:
                      '"MS Sans Serif", sans-serif',

                    fontSize: 11,

                    lineHeight: '16px',

                    color:
                      isSelected
                        ? '#ffffff'
                        : '#000000',

                    pointerEvents: 'none',
                  }}
                >
                  {step.title}
                </span>

              </div>
            );
          })}

        </div>

      </div>

    </aside>
  );
}