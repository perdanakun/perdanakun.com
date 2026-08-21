import React from 'react';
import { Modal, Button, TitleBar } from '@react95/core';
import { Drvspace7 } from '@react95/icons'; // Bisa diganti ikon lain, misal jam pasir atau tanda seru

export default function AlertModal({
  show,
  title = 'Feature Locked',
  message = 'This feature is still under construction or currently locked.',
  onClose
}) {
  if (!show) {
    return null;
  }

  return (
    <Modal
      title={title}
      hasWindowButton={false}
      titleBarOptions={
        <TitleBar.Close
          onClick={onClose}
        />
      }
      style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '360px',
        maxWidth: 'calc(100vw - 30px)',
        height: 'auto',
        minHeight: '120px',
        boxSizing: 'border-box',
        zIndex: 9999, // Memastikan modal berada di paling depan
      }}
    >
      <Modal.Content
        style={{
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          padding: '16px',
          background: '#c0c0c0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ================= MESSAGE & ICON ================= */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 16,
            padding: '8px 4px',
          }}
        >
          <Drvspace7
            variant="32x32_4"
            style={{ minWidth: '32px' }}
          />

          <div
            style={{
              fontFamily: 'MS Sans Serif, sans-serif',
              fontSize: 12,
              lineHeight: '16px',
              color: '#000',
              textAlign: 'left',
            }}
          >
            {message}
          </div>
        </div>

        {/* ================= OK BUTTON ================= */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 16,
          }}
        >
          <Button
            onClick={onClose}
            style={{
              width: 70,
            }}
          >
            OK
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  );
}