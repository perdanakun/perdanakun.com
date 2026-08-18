import React, { useEffect, useState } from 'react';

import {
  Button,
  Frame,
} from '@react95/core';

import InstallerWelcome from './InstallerWelcome';
import InstallerWelcomeAbout from './InstallerWelcomeAbout';
import InstallerSystemRequirements from './InstallerSystemRequirements';
import InstallerTree from './InstallerTree';
import InstallerContent from './InstallerContent';
import InstallerLoading from './InstallerLoading';
import InstallerComplete from './InstallerComplete';


import installerSteps from '../../data/installerSteps';


export default function PerdanaInstaller({
  isMobile,
  isTablet,
  onClose,
  onFinish,
}) {

  // ==========================================
  // INSTALLER PAGE
  // ==========================================

  const [page, setPage] = useState('welcome');


  // ==========================================
  // ABOUT / WIZARD STEP
  // ==========================================

  const [currentStep, setCurrentStep] = useState(0);


  // ==========================================
  // INSTALLATION PROGRESS
  // ==========================================

  const [progress, setProgress] = useState(0);


  // ==========================================
  // CURRENT STEP
  // ==========================================

  const currentInstallerStep =
    installerSteps[currentStep];


  // ==========================================
  // NEXT
  // ==========================================

  const handleNext = () => {
if (page === 'welcome') {
  setPage('welcomeAbout');

  return;
}

if (page === 'welcomeAbout') {
  setPage('requirements');

  return;
}

if (page === 'requirements') {
  setCurrentStep(0);
  setPage('wizard');

  return;
}


    // -----------------------------
    // WIZARD NAVIGATION
    // -----------------------------

    if (page === 'wizard') {

      const isLastStep =
        currentStep >= installerSteps.length - 1;


      if (!isLastStep) {
        setCurrentStep((step) => step + 1);

        return;
      }


      // Setelah section terakhir
      // mulai fake installation

      setProgress(0);
      setPage('loading');

      return;
    }


    // -----------------------------
    // COMPLETE → CLOSE
    // -----------------------------

    if (page === 'complete') {
      onFinish?.();
    }
  };


  // ==========================================
  // BACK
  // ==========================================
const handleBack = () => {

  // -----------------------------
  // WELCOME ABOUT → WELCOME
  // -----------------------------

  if (page === 'welcomeAbout') {
    setPage('welcome');

    return;
  }


  // -----------------------------
  // REQUIREMENTS → WELCOME ABOUT
  // -----------------------------

  if (page === 'requirements') {
    setPage('welcomeAbout');

    return;
  }


  // -----------------------------
  // WIZARD → REQUIREMENTS
  // -----------------------------

  if (page === 'wizard') {

    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    } else {
      setPage('requirements');
    }

    return;
  }

}; // ← INI YANG KURANG


// ==========================================
// TREE SELECT
// ==========================================

const handleSelectStep = (index) => {

  if (
    index < 0 ||
    index >= installerSteps.length
  ) {
    return;
  }

  setCurrentStep(index);
};

  // ==========================================
  // CANCEL
  // ==========================================

  const handleCancel = () => {
    onClose?.();
  };


  // ==========================================
  // FAKE INSTALLATION PROGRESS
  // ==========================================

  useEffect(() => {

    if (page !== 'loading') {
      return;
    }

    setProgress(0);


    const interval = setInterval(() => {

      setProgress((current) => {

        if (current >= 100) {
          clearInterval(interval);

          return 100;
        }

        return current + 5;
      });

    }, 120);


    return () => {
      clearInterval(interval);
    };

  }, [page]);


  // ==========================================
  // LOADING → COMPLETE
  // ==========================================

  useEffect(() => {

    if (
      page !== 'loading' ||
      progress < 100
    ) {
      return;
    }


    const timeout = setTimeout(() => {
      setPage('complete');
    }, 500);


    return () => {
      clearTimeout(timeout);
    };

  }, [page, progress]);


  // ==========================================
  // RENDER
  // ==========================================

return (
  <div
    style={{
      position: 'fixed',

      left: '50%',
      top: isMobile
        ? '4%'
        : '50%',

      transform: isMobile
        ? 'translateX(-50%)'
        : 'translate(-50%, -50%)',

      width: isMobile
        ? '95vw'
        : isTablet
        ? '78vw'
        : '820px',

      maxWidth: isMobile
        ? '95vw'
        : 'calc(100vw - 20px)',

      zIndex: 100000,
    }}
  >

    {/* =========================
        TITLE DI LUAR WINDOW
    ========================= */}
{/*<div
  style={{
    width: '100%',

    color: '#ffffff',

    fontFamily:
      '"MS Sans Serif", Arial, sans-serif',

    fontSize: isMobile ? 18 : 22,
    fontWeight: 'bold',

    textShadow: '2px 2px 0 #000',

    // Smartphone = center
    // Desktop = kiri
    textAlign: isMobile
      ? 'center'
      : 'left',

    lineHeight: 1.15,

    userSelect: 'none',
    pointerEvents: 'none',

    // Jarak antara title dan window
    marginBottom: isMobile ? 10 : 8,

    // Batas visual di bawah title
    paddingBottom: isMobile ? 8 : 6,



    boxSizing: 'border-box',
  }}
>
  {isMobile ? (
    <>
      <div>
        Perdana's Computer
      </div>

      <div>
        Windows 95 Setup
      </div>
    </>
  ) : (
    <div>
      Perdana's Computer - Windows 95 Setup
    </div>
  )}
</div>*/}


    {/* =========================
        INSTALLER WINDOW
    ========================= */}

    <Frame
  key="perdana-installer"
  style={{
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  padding: 3,

  background: '#c0c0c0',

  boxSizing: 'border-box',

  ...(isMobile
    ? {
        width: '100%',
        height: '80vh',

        maxWidth: '100%',
        maxHeight: 'calc(100vh - 28px)',

        margin: 0,
      }

    : isTablet
    ? {
        width: '100%',
        height: '68vh',

        maxWidth: '100%',
        maxHeight: 'calc(100vh - 28px)',

        margin: 0,
      }

    : {
        width: '100%',
        height: '560px',

        maxWidth: '100%',
        maxHeight: 'calc(100vh - 28px)',

        margin: 0,
      }),
}}
>

      {/* ======================================
          INSTALLER TITLE BAR
      ====================================== */}
{/* ======================================
    INSTALLER TITLE BAR
====================================== */}

<div
  style={{
    flexShrink: 0,

    height: 20,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    padding: '2px 8px 6px 8px',

    background: '#000080',
    color: '#ffffff',

    fontWeight: 'bold',
    fontSize: 12,

    boxSizing: 'border-box',

    userSelect: 'none',
  }}
>
  Windows 95 Setup Wizard
</div>

{/* ======================================
    INSTALLER BODY
====================================== */}

<div
  style={{
    flex: '1 1 0',

    width: '100%',
    minWidth: 0,
    minHeight: 0,

    marginTop: 3,

    background: '#c0c0c0',

    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'column',

    overflow: 'hidden',
  }}
>

        {/* ======================================
            MAIN CONTENT
        ====================================== */}

        <div
          style={{
            flex: '1 1 0',

            width: '100%',

            minWidth: 0,
            minHeight: 0,

            boxSizing: 'border-box',

            overflow: 'hidden',

            display: 'flex',
          }}
        >

          {/* ====================================
              WELCOME
          ==================================== */}

          {page === 'welcome' && (
            <div
              style={{
                width: '100%',
                height: '100%',

                minWidth: 0,
                minHeight: 0,

                padding: 12,

                boxSizing: 'border-box',

                overflow: 'auto',
              }}
            >
              <InstallerWelcome />
            </div>
          )}


          {page === 'welcomeAbout' && (
  <div
    style={{
      width: '100%',
      height: '100%',

      minWidth: 0,
      minHeight: 0,

      padding: 12,

      boxSizing: 'border-box',

      overflow: 'auto',
    }}
  >
    <InstallerWelcomeAbout />
  </div>
)}

          {/* ====================================
    SYSTEM REQUIREMENTS
==================================== */}

{page === 'requirements' && (
  <div
    style={{
      width: '100%',
      height: '100%',

      minWidth: 0,
      minHeight: 0,

      padding: 12,

      boxSizing: 'border-box',

      overflow: 'auto',
    }}
  >
    <InstallerSystemRequirements />
  </div>
)}


          {/* ====================================
              ABOUT / CONTENT WIZARD
          ==================================== */}

          {page === 'wizard' && (
            <div
              style={{
                display: 'flex',

                flex: '1 1 0',

                width: '100%',
                height: '100%',

                minWidth: 0,
                minHeight: 0,

                boxSizing: 'border-box',

                overflow: 'hidden',
              }}
            >

              {/* LEFT TREE */}

              <InstallerTree
                steps={installerSteps}
                currentStep={currentStep}
                onSelectStep={handleSelectStep}
              />


              {/* RIGHT CONTENT */}

              <InstallerContent
                step={currentInstallerStep}
              />

            </div>
          )}


          {/* ====================================
              LOADING
          ==================================== */}

          {page === 'loading' && (
            <div
              style={{
                width: '100%',
                height: '100%',

                minWidth: 0,
                minHeight: 0,

                padding: 12,

                boxSizing: 'border-box',

                overflow: 'auto',
              }}
            >
              <InstallerLoading
                progress={progress}
              />
            </div>
          )}


          {/* ====================================
              COMPLETE
          ==================================== */}

          {page === 'complete' && (
            <div
              style={{
                width: '100%',
                height: '100%',

                minWidth: 0,
                minHeight: 0,

                padding: 12,

                boxSizing: 'border-box',

                overflow: 'auto',
              }}
            >
              <InstallerComplete />
            </div>
          )}

        </div>


        {/* ======================================
            DIVIDER
        ====================================== */}

        <div
          style={{
            flexShrink: 0,

            borderTop: '1px solid #808080',

            boxShadow: '0 1px 0 #ffffff',
          }}
        />


        {/* ======================================
            FOOTER
        ====================================== */}

        <div
          style={{
            flexShrink: 0,

            display: 'flex',

            justifyContent: 'flex-end',
            alignItems: 'center',

            gap: 6,

            padding: '10px 12px',

            boxSizing: 'border-box',
          }}
        >

          {/* ====================================
              BACK
          ==================================== */}

          <Button
            disabled={
              page === 'welcome' ||
              page === 'loading' ||
              page === 'complete'
            }
            onClick={handleBack}
          >
            {'< Back'}
          </Button>


          {/* ====================================
              WELCOME → NEXT
          ==================================== */}

          {page === 'welcome' && (
            <Button onClick={handleNext}>
              {'Next >'}
            </Button>
          )}

          {page === 'welcomeAbout' && (
  <Button onClick={handleNext}>
    {'Next >'}
  </Button>
)}

          {/* ====================================
                REQUIREMENTS → NEXT
            ==================================== */}

{page === 'requirements' && (
  <Button onClick={handleNext}>
    {'Next >'}
  </Button>
)}


          {/* ====================================
              WIZARD → NEXT / INSTALL
          ==================================== */}

          {page === 'wizard' && (
            <Button onClick={handleNext}>
              {currentStep <
              installerSteps.length - 1
                ? 'Next >'
                : 'Install'}
            </Button>
          )}


          {/* ====================================
              LOADING
          ==================================== */}

          {page === 'loading' && (
            <Button disabled>
              Installing...
            </Button>
          )}


          {/* ====================================
              COMPLETE
          ==================================== */}

          {page === 'complete' && (
            <Button onClick={handleNext}>
              Finish
            </Button>
          )}


          {/* ====================================
              CANCEL
          ==================================== */}

          {page !== 'loading' && (
            <Button onClick={handleCancel}>
              Cancel
            </Button>
          )}

        </div>

      </div>

    </Frame>

    {/* =========================
        INSTALLATION NOTE
    ========================= 
    <div
      style={{
        width: '100%',

        marginTop: 8,

        color: '#ffffff',

        fontFamily:
          '"MS Sans Serif", Arial, sans-serif',

        fontSize: isMobile ? 10 : 11,
        fontWeight: 'normal',

        textShadow: '1px 1px 0 #000',

        textAlign: isMobile
          ? 'center'
          : 'center',

        lineHeight: 1.3,

        userSelect: 'none',
        pointerEvents: 'none',
      }}
    >
This setup runs automatically the first time you visit.
Once you're in, you can launch it again from the desktop.
    </div>*/}

    </div>
  );
}