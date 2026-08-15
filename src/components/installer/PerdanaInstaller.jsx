import React, { useEffect, useState } from 'react';

import {
  Modal,
  Button,
  TitleBar,
} from '@react95/core';

import { Computer } from '@react95/icons';

import InstallerWelcome from './InstallerWelcome';
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
    // -----------------------------
    // WELCOME → WIZARD
    // -----------------------------

    if (page === 'welcome') {
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
    // WIZARD
    // -----------------------------

    if (page === 'wizard') {
      if (currentStep > 0) {
        setCurrentStep((step) => step - 1);
      } else {
        setPage('welcome');
      }

      return;
    }
  };

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
    <Modal
      key="perdana-installer"
      icon={<Computer variant="16x16_4" />}
      title="Perdana's PC Setup"
style={{
  position: 'fixed',

  ...(isMobile
    ? {
        // =====================================
        // SMARTPHONE
        // FULLSCREEN - TASKBAR
        // =====================================
        top: 0,
        left: 0,
        right: 0,
        bottom: '28px',

        width: '100vw',
        height: 'auto',

        maxWidth: '100vw',
        maxHeight: 'none',

        transform: 'none',
        margin: 0,

        boxSizing: 'border-box',
      }

    : isTablet
    ? {
        // =====================================
        // TABLET
        // CENTER DI AREA ATAS TASKBAR
        // =====================================
        left: '50%',
        top: 'calc((100vh - 28px) / 2)',

        width: '70vw',
        height: '60vh',

        maxWidth: '90vw',
        maxHeight: 'calc(100vh - 28px)',

        transform: 'translate(-50%, -50%)',

        boxSizing: 'border-box',
      }

    : {
        // =====================================
        // DESKTOP
        // CENTER DI AREA ATAS TASKBAR
        // =====================================
        left: '50%',
        top: 'calc((100vh - 28px) / 2)',

        width: '700px',
        height: '500px',

        maxWidth: 'calc(100vw - 20px)',
        maxHeight: 'calc(100vh - 28px)',

        transform: 'translate(-50%, -50%)',

        boxSizing: 'border-box',
      }),
}}
      titleBarOptions={
        <TitleBar.Close
          onClick={handleCancel}
        />
      }
    >

      <Modal.Content
        style={{
          padding: 0,
          height: '100%',

          background: '#c0c0c0',

          boxSizing: 'border-box',

          display: 'flex',
          flexDirection: 'column',
        }}
      >

        {/* ======================================
            MAIN CONTENT
        ====================================== */}

        <div
          style={{
            flex: 1,
            minHeight: 0,

            boxSizing: 'border-box',

            overflow: 'hidden',
          }}
        >

          {/* ====================================
              WELCOME
          ==================================== */}

          {page === 'welcome' && (
            <div
              style={{
                height: '100%',
                padding: 12,
                boxSizing: 'border-box',
                overflow: 'auto',
              }}
            >
              <InstallerWelcome />
            </div>
          )}


          {/* ====================================
              ABOUT / CONTENT WIZARD
          ==================================== */}

          {page === 'wizard' && (
            <div
              style={{
                display: 'flex',
                height: '100%',
                minHeight: 0,
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
                onNext={handleNext}
                onBack={
                  currentStep > 0 || page === 'wizard'
                    ? handleBack
                    : undefined
                }
              />

            </div>
          )}


          {/* ====================================
              LOADING
          ==================================== */}

          {page === 'loading' && (
            <div
              style={{
                height: '100%',
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
                height: '100%',
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
            borderTop: '1px solid #808080',
            boxShadow: '0 1px 0 #ffffff',
            flexShrink: 0,
          }}
        />


        {/* ======================================
            FOOTER
        ====================================== */}

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',

            gap: 6,

            padding: '10px 12px',

            flexShrink: 0,
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

      </Modal.Content>

    </Modal>
  );
}