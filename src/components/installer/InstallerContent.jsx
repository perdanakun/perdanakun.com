import React from 'react';

import Profile from '../../content/about/Profile';
import Experience from '../../content/about/Experience';
import VisualSystems from '../../content/about/VisualSystems';
import ProductDesign from '../../content/about/ProductDesign';
import DesignEngineering from '../../content/about/DesignEngineering';
import Approach from '../../content/about/Approach';


/* =========================================================
   CONTENT MAP
========================================================= */

const contentMap = {
  profile: Profile,
  experience: Experience,
  'visual-systems': VisualSystems,
  'product-design': ProductDesign,
  'design-engineering': DesignEngineering,
  approach: Approach,
};


/* =========================================================
   INSTALLER CONTENT
========================================================= */

export default function InstallerContent({
  step,
}) {

  const ContentComponent =
    step?.id
      ? contentMap[step.id]
      : null;


  const currentTitle =
    step?.title ||
    'Installation';


  return (
    <section
      aria-labelledby="installer-content-title"

      style={{
        display: 'flex',

        flexDirection: 'column',

        flex: 1,

        width: '100%',
        height: '100%',

        minWidth: 0,
        minHeight: 0,

        boxSizing: 'border-box',

        backgroundColor: '#c0c0c0',

        fontFamily:
          '"MS Sans Serif", sans-serif',

        color: '#000000',
      }}
    >

      {/* =====================================================
          MENU BAR
          
          Same visual language as ProjectFolderContent
      ===================================================== */}

      <div
        style={{
          display: 'flex',

          alignItems: 'center',

          gap: 6,

          padding: '2px 6px',

          height: 20,
          minHeight: 20,

          boxSizing: 'border-box',

          backgroundColor: '#c0c0c0',

          borderBottom:
            '1px solid #808080',

          fontFamily:
            '"MS Sans Serif", sans-serif',

          fontSize: 11,

          lineHeight: '14px',

          color: '#000000',

          userSelect: 'none',

          flexShrink: 0,
        }}
      >

        <span
          style={{
            padding: '1px 4px',

            boxSizing: 'border-box',
          }}
        >
          <u>F</u>ile
        </span>


        <span
          style={{
            padding: '1px 4px',

            boxSizing: 'border-box',
          }}
        >
          <u>V</u>iew
        </span>


        <span
          style={{
            padding: '1px 4px',

            boxSizing: 'border-box',
          }}
        >
          <u>H</u>elp
        </span>

      </div>


      {/* =====================================================
          EXPLORER CONTENT FRAME
          
          No tree here.
          InstallerTree is handled by PerdanaInstaller.
      ===================================================== */}

      <div
        style={{
          flex: 1,

          minWidth: 0,
          minHeight: 0,

          backgroundColor: '#ffffff',

          overflow: 'hidden',

          margin: 2,

          boxSizing: 'border-box',

          boxShadow:
            'inset 1px 1px 0px #0a0a0a, inset -1px -1px 0px #dfdfdf',

          display: 'flex',
          flexDirection: 'column',
        }}
      >

        {/* ===================================================
            CONTENT SCROLL AREA
        =================================================== */}

        <main
          aria-labelledby="installer-content-title"

          style={{
            flex: 1,

            minWidth: 0,
            minHeight: 0,

            backgroundColor: '#ffffff',

            padding: 12,

            boxSizing: 'border-box',

            overflowY: 'auto',
            overflowX: 'hidden',

            fontFamily:
              '"MS Sans Serif", sans-serif',

            fontStyle: 'normal',

            fontWeight: 100,

            fontSize: 14,

            lineHeight: '20px',

            color: '#000000',

            textAlign: 'left',

            touchAction: 'pan-y',
          }}
        >

          {/* ===============================================
              PAGE TITLE
              
              Same scale as Welcome to Perdana's Computer
          =============================================== */}

          <header
            style={{
              paddingBottom: 10,

              marginBottom: 10,

              borderBottom:
                '1px solid #808080',

              boxSizing: 'border-box',
            }}
          >

            <h2
              id="installer-content-title"
              style={{
                margin: '3px 0 0',

                padding: 0,

                fontFamily:
                  '"MS Sans Serif", sans-serif',

                fontSize: 16,

                lineHeight: 1.25,

                fontWeight: 'bold',

                textAlign: 'left',

                color: '#000000',
              }}
            >
              {currentTitle}
            </h2>

          </header>


          {/* ===============================================
              ACTUAL CONTENT
          =============================================== */}

          {ContentComponent ? (

            <div
              style={{
                width: '100%',

                minWidth: 0,

                boxSizing: 'border-box',

                fontFamily:
                  '"MS Sans Serif", sans-serif',

                fontStyle: 'normal',

                fontWeight: 100,

                fontSize: 14,

                lineHeight: '20px',

                color: '#000000',

                textAlign: 'left',
              }}
            >
              <ContentComponent />
            </div>

          ) : (

            <p
              style={{
                margin: 0,

                fontFamily:
                  '"MS Sans Serif", sans-serif',

                fontSize: 14,

                lineHeight: '20px',

                color: '#000000',

                textAlign: 'left',
              }}
            >
              Follow the installation wizard
              to continue.
            </p>

          )}

        </main>

      </div>

    </section>
  );
}