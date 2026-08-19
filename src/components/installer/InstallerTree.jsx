import React from 'react';

import {
  FolderOpen,
  FileText,
} from '@react95/icons';


/* ======================================
   INSTALLER TREE
====================================== */

export default function InstallerTree({
  steps = [],
  currentStep = 0,
  onSelectStep,
}) {
  return (
    <aside
      aria-label="Installation sections"
      className="ui-font"
      style={{
        width: 175,
        minWidth: 175,

        height: '100%',

        backgroundColor: '#c0c0c0',

        boxSizing: 'border-box',

        overflowY: 'auto',
        overflowX: 'hidden',

        padding: 4,

        borderRight: '1px solid #808080',

        color: '#000000',

        touchAction: 'pan-y',
      }}
    >

      {/* ======================================
          ROOT
      ====================================== */}

      <div
        style={{
          width: '100%',

          boxSizing: 'border-box',
        }}
      >

        {/* ====================================
            ROOT FOLDER
        ==================================== */}

        <div
          className="ui-font"
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

          {/* ==================================
              FOLDER ICON
          ================================== */}

          <div
            aria-hidden="true"
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


          {/* ==================================
              ROOT TITLE
          ================================== */}

          <span
            style={{
              whiteSpace: 'nowrap',

              lineHeight: '16px',

              color: '#000000',
            }}
          >
            About
          </span>

        </div>


        {/* ====================================
            CHILDREN
        ==================================== */}

        <div
          role="list"
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

                role="listitem"
              >

                {/* ==================================
                    STEP
                ================================== */}

                <button
                  type="button"

                  aria-current={
                    isSelected
                      ? 'page'
                      : undefined
                  }

                  onClick={() => {
                    onSelectStep?.(index);
                  }}

                  className="ui-font"

                  style={{
                    appearance: 'none',

                    display: 'flex',

                    alignItems: 'center',

                    width: '100%',

                    minHeight: 20,

                    padding: '3px 3px',

                    margin: 0,

                    border: 0,

                    borderRadius: 0,

                    boxSizing: 'border-box',

                    cursor: 'pointer',

                    userSelect: 'none',

                    textAlign: 'left',

                    font: 'inherit',

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

                  <span
                    aria-hidden="true"
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
                  </span>


                  {/* =================================
                      STEP TITLE
                  ================================= */}

                  <span
                    style={{
                      minWidth: 0,

                      overflow: 'hidden',

                      textOverflow: 'ellipsis',

                      whiteSpace: 'nowrap',

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

                </button>

              </div>
            );
          })}

        </div>

      </div>

    </aside>
  );
}
