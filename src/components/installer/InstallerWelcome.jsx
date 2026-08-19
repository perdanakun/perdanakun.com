import React, { useState } from 'react';

import win95installimg from './win95_install_illustration.png';
import { Install } from '@react95/icons';



/* =========================================================
   WINDOWS 95 CHECKBOX
========================================================= */

function Win95Checkbox({ checked, onChange, children }) {
  return (
<label
  className="ui-font"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: 6,

    cursor: 'pointer',
    userSelect: 'none',

    color: '#000000',
  }}
>


      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}

        style={{
          position: 'absolute',

          width: 1,
          height: 1,

          opacity: 0,

          pointerEvents: 'none',
        }}
      />

      {/* WIN95 CHECKBOX */}

      <span
        aria-hidden="true"

        style={{
          position: 'relative',

          width: 13,
          height: 13,

          flexShrink: 0,

          boxSizing: 'border-box',

          background: '#ffffff',

          borderTop: '1px solid #808080',
          borderLeft: '1px solid #808080',
          borderRight: '1px solid #ffffff',
          borderBottom: '1px solid #ffffff',

          boxShadow: `
            inset 1px 1px 0 #000000,
            inset -1px -1px 0 #dfdfdf
          `,

          display: 'block',
        }}
      >

        {checked && (
          <span
            style={{
              position: 'absolute',

              width: 4,
              height: 8,

              left: 3,
              top: 1,

              borderRight: '2px solid #000000',
              borderBottom: '2px solid #000000',

              transform: 'rotate(45deg)',

              boxSizing: 'border-box',
            }}
          />
        )}

      </span>


      {/* LABEL */}

      <span>
        {children}
      </span>

    </label>
  );
}


/* =========================================================
   SOFTWARE LICENSE AGREEMENT
========================================================= */

export default function InstallerWelcome() {
  const [accepted, setAccepted] = useState(false);

  return (
  <article
  aria-labelledby="perdana-pc-license-title"
  className="ui-font"
  style={{
    width: '100%',
    height: '100%',

    minWidth: 0,
    minHeight: 0,

    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'column',

    background: '#c0c0c0',

    color: '#000000',
  }}
>



      {/* =====================================================
          TOP LICENSE HEADER

          This section sits OUTSIDE the white frame.
      ===================================================== */}

<header
  style={{
    flex: '0 0 auto',
    minWidth: 0,
    padding: '10px 12px 8px',
    boxSizing: 'border-box',
    background: '#c0c0c0',
    color: '#000000',
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    }}
  >
    <Install
      style={{
        width: 32,
        height: 32,
        flexShrink: 0,
      }}
    />

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1
        id="perdana-pc-license-title"
        className="ui-font"
        style={{
          margin: 0,
          padding: 0,

          fontSize: 16,
          lineHeight: '20px',
          fontWeight: 'bold',

          letterSpacing: '-0.5px',

          textAlign: 'left',
          color: '#000000',
        }}
      >
        Welcome to Perdana's Computer
      </h1>

      <p
        className="ui-font"
        style={{
          margin: '4px 0 0',
          padding: 0,

          fontSize: 13,
          lineHeight: '18px',
          fontWeight: 'normal',

          textAlign: 'left',
          color: '#000000',
        }}
      >
        Before exploring the work, start with the person behind it.
      </p>
    </div>
  </div>
</header>


      {/* =====================================================
          WHITE WINDOWS 95 CONTENT FRAME

          This is the main white area.

          flex: 1 makes the frame take all remaining
          vertical space between the top and bottom text.
      ===================================================== */}

      <div
        aria-label="Software license agreement content frame"

        style={{
          flex: '1 1 auto',

          minWidth: 0,
          minHeight: 0,

          margin: '0 4px',

          boxSizing: 'border-box',

          background: '#ffffff',

          /*
            Windows 95 inset bevel.
          */

          border: '2px inset #c0c0c0',

          overflow: 'hidden',

          display: 'flex',

          flexDirection: 'column',
        }}
      >


        {/* =================================================
            SCROLLABLE CONTENT
        ================================================= */}

  <main
  aria-labelledby="license-content-title"
  className="reading-font"
  style={{
    flex: '1 1 auto',

    minWidth: 0,
    minHeight: 0,

    background: '#ffffff',

    padding: 12,

    boxSizing: 'border-box',

    overflowY: 'auto',
    overflowX: 'hidden',

    color: '#000000',

    textAlign: 'left',

    touchAction: 'pan-y',
  }}
>



          {/* ===============================================
              LICENSE TITLE
          =============================================== */}

          <header
            style={{
              paddingBottom: 10,

              marginBottom: 10,

              boxSizing: 'border-box',

              borderBottom:
                '1px solid #808080',
            }}
          >

        <h1
  id="license-content-title"
  className="reading-heading"
  style={{
    margin: '3px 0 0',
    padding: 0,

    fontSize: 16,
    lineHeight: '20px',

    letterSpacing: '-0.3px',

    textAlign: 'left',
  }}
>
  Perdana Kurniawan Arta
</h1>


          </header>


          {/* ===============================================
              INTRODUCTION
          =============================================== */}

          <section
            aria-labelledby="agreement-title"

            style={{
              width: '100%',

              minWidth: 0,

              boxSizing: 'border-box',
            }}
          >


            {/* =============================================
                AGREEMENT INTRO
            ============================================= */}
<h2
  className="reading-heading"
  style={{
    margin: '0 0 20px',

    fontSize: 14,
    lineHeight: '20px',

    textAlign: 'left',
  }}
>
  Visual Designer exploring Product Design, UX, and Design Engineering
</h2>



<p
  className="reading-font"
  style={{
    margin: '0 0 14px',
    textAlign: 'left',
  }}
>

Perdana is a Visual Designer and Design Lead 
with 10+ years of experience in visual systems, 
iconography, illustration, and graphic design.
 His practice is expanding into Product Design and 
 UX, exploring how visual craft, product thinking, 
 and code can come together 
to design and build digital experiences.      </p>


            {/* =============================================
                SECTION 1
            ============================================= */}
<h3
  className="reading-heading"
  style={{
    margin: '0 0 8px',
    padding: 0,

    fontSize: 14,
    lineHeight: '20px',

    color: '#000000',
  }}
>
  01. The Foundation
</h3>



<p
  className="reading-font"
  style={{
    margin: '0 0 14px',
    textAlign: 'left',
  }}
>

A decade of making things visual — 
building an eye for systems, detail, composition, and visual language.
            </p>


            {/* =============================================
                SECTION 2
            ============================================= */}

<h3
  className="reading-heading"
  style={{
    margin: '0 0 8px',
    padding: 0,

    fontSize: 14,
    lineHeight: '20px',

    color: '#000000',
  }}
>
              02. The Exploration
            </h3>


<p
  className="reading-font"
  style={{
    margin: '0 0 14px',
    textAlign: 'left',
  }}
>

Exploring what happens when that visual foundation meets products, people, 
interaction, and the way digital experiences are used.
            </p>



            {/* =============================================
                SECTION 3
            ============================================= */}

<h3
  className="reading-heading"
  style={{
    margin: '0 0 8px',
    padding: 0,

    fontSize: 14,
    lineHeight: '20px',

    color: '#000000',
  }}
>
              03. The Build
            </h3>


<p
  className="reading-font"
  style={{
    margin: '0 0 14px',
    textAlign: 'left',
  }}
>

Going beyond the canvas to turn ideas into interfaces — 
learning through code, experimentation, and design in code.
            </p>


            {/* =============================================
                SECTION 4
            ============================================= */}

<h3
  className="reading-heading"
  style={{
    margin: '0 0 8px',
    padding: 0,

    fontSize: 14,
    lineHeight: '20px',

    color: '#000000',
  }}
>
              04. The Next Chapter
            </h3>


<p
  className="reading-font"
  style={{
    margin: '0 0 14px',
    textAlign: 'left',
  }}
>

Moving toward Product Design and Design Engineering, where visual craft, product thinking,
 and implementation can become part of the same process.
            </p>


            {/* =============================================
                FINAL AGREEMENT
            ============================================= */}

            <section
              aria-label="Final agreement"

              style={{
                width: '100%',

                marginTop: 18,

                paddingTop: 10,

                boxSizing: 'border-box',

                borderTop:
                  '1px solid #808080',
              }}
            >

<p
  className="reading-font"
  style={{
    margin: 0,
    fontSize: 13,
    lineHeight: '20px',
    textAlign: 'left',
  }}
>
  By continuing, you acknowledge that you have read, understood,
  and probably skimmed through this introduction.
</p>

            </section>


          </section>


        </main>

      </div>


      {/* =====================================================
          BOTTOM LICENSE NOTICE

          This section sits OUTSIDE the white frame.
      ===================================================== */}

<footer
  className="ui-font"
  style={{
    flex: '0 0 auto',

    minWidth: 0,

    padding: '8px 12px 10px',

    boxSizing: 'border-box',

    background: '#c0c0c0',

    color: '#000000',

    textAlign: 'left',
  }}
>


<Win95Checkbox
  checked={accepted}
  onChange={(event) => {
    setAccepted(event.target.checked);
  }}
>
After skimming through this little introduction, 
I’d like to continue anyway.
</Win95Checkbox>

      </footer>


    </article>
  );
}