import React, { useEffect, useRef } from 'react';
import { Modal, Button, TitleBar } from '@react95/core';
import { Install } from '@react95/icons';



export default function AlertModalInstall({
  show,
  title = 'Perdana Installer',
  message = "Ready to install Perdana.exe?",
  onClose,
  onConfirm,
  isMobile = false,
  isTablet = false,
}) {




  // ==========================================
  // HIDE MODAL
  // ==========================================
  if (!show) {
    return null;
  }

  // ==========================================
  // RESPONSIVE WINDOW STYLE
  // ==========================================
  const getWindowStyle = () => {
    if (isMobile) {
      return {
        position: 'fixed',

        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',

        width: '88%',
        maxWidth: '360px',

        height: 'auto',
        maxHeight: '80vh',

        boxSizing: 'border-box',

        zIndex: 99999,
      };
    }

    if (isTablet) {
      return {
        position: 'fixed',

        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',

        width: '55%',
        maxWidth: '440px',
        minWidth: '320px',

        height: 'auto',
        maxHeight: '80vh',

        boxSizing: 'border-box',

        zIndex: 99999,
      };
    }

    return {
      position: 'fixed',

      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',

      width: '30%',
      maxWidth: '420px',
      minWidth: '320px',

      height: 'auto',
      minHeight: '120px',
      maxHeight: '80vh',

      boxSizing: 'border-box',

      zIndex: 99999,
    };
  };

  return (
    <Modal
      title={title}
      hasWindowButton={false}
      titleBarOptions={
        <TitleBar.Close onClick={onClose} />
      }
      style={getWindowStyle()}
    >
      <Modal.Content
        style={{
          width: '100%',
          boxSizing: 'border-box',

          padding: isMobile ? '3%' : '4%',

          background: '#c0c0c0',

          display: 'flex',
          flexDirection: 'column',

          overflow: 'hidden',
        }}
      >

        {/* =========================
            MESSAGE + ICON
        ========================= */}
        <div
          style={{
            width: '100%',

            display: 'flex',
            alignItems: 'center',

            gap: isMobile ? '10px' : '14px',

            padding: isMobile
              ? '2% 1%'
              : '2% 1.5%',

            boxSizing: 'border-box',

            overflow: 'hidden',
          }}
        >

          {/* =========================
              INSTALL ICON
          ========================= */}
          <div
            style={{
              flexShrink: 0,

              width: isMobile ? '28px' : '32px',
              height: isMobile ? '28px' : '32px',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              overflow: 'hidden',
            }}
          >
            <Install
              variant="32x32_4"
              style={{
                width: isMobile ? '28px' : '32px',
                height: isMobile ? '28px' : '32px',

                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </div>

          {/* =========================
              MESSAGE
          ========================= */}
          <div
            style={{
              flex: 1,
              minWidth: 0,

              fontFamily: 'MS Sans Serif, sans-serif',

              fontSize: '12px',
              lineHeight: isMobile ? '17px' : '16px',

              color: '#000',

              textAlign: 'left',

              overflowWrap: 'anywhere',
              wordBreak: 'break-word',
            }}
          >
            {message}
          </div>
        </div>

        {/* =========================
            ACTION BUTTONS
        ========================= */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            gap: '8px',

            paddingTop: isMobile ? '8px' : '12px',
            paddingBottom: '1%',
          }}
        >

          {/* INSTALL */}
          <Button
            onClick={onConfirm}
            style={{
              width: isMobile ? '72px' : '70px',
              minWidth: '70px',

              height: '24px',

              fontFamily: 'MS Sans Serif, sans-serif',
              fontSize: '12px',
            }}
          >
            Install
          </Button>

          {/* CANCEL */}
          <Button
            onClick={onClose}
            style={{
              width: isMobile ? '72px' : '70px',
              minWidth: '70px',

              height: '24px',

              fontFamily: 'MS Sans Serif, sans-serif',
              fontSize: '12px',
            }}
          >
            Cancel
          </Button>

        </div>

      </Modal.Content>
    </Modal>
  );
}
