import React, { useEffect } from 'react';
import { Modal, Button, TitleBar } from '@react95/core';
import { User4 } from '@react95/icons';
import messageFailedSound from '../assets/sounds/message_failed.wav';

export default function AlertModalFailed({
  show,
  title = 'Sorry...',
  message,
  onClose
}) {
  if (!show) {
    return null;
  }

  // Sound Effect

    useEffect(() => {
    if (!show) {
      return;
    }

    const audio = new Audio(messageFailedSound);

    audio.currentTime = 0;
    audio.volume = 0.5;

    audio.play().catch(() => {
      // Browser bisa memblokir playback dalam kondisi tertentu
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [show]);

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

          <User4
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