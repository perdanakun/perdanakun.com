import React from 'react';
import { Modal, Button, TitleBar } from '@react95/core';
import { Mailnews2 } from '@react95/icons';

export default function AlertModal({
  show,
  title = 'Alert',
  message,
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

        {/* ================= MESSAGE ================= */}

        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}
        >

          <Mailnews2
            variant="32x32_4"
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
