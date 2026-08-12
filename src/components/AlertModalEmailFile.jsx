import React, { useEffect } from 'react';
import { Modal, Button, TitleBar } from '@react95/core';
import { Regwiz122 } from '@react95/icons';
import attachmentErrorSound from '../assets/sounds/message_attachment_error.wav';

export default function AlertModalEmailFile({
  show,
  title = 'File Size Warning',
  message = 'The attached photo is too large. Please select a smaller file to continue.',
  onClose
}) {
  if (!show) {
    return null;
  }

  // Sound Effect
  useEffect(() => {
    if (show) {
      const audio = new Audio(attachmentErrorSound);

      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  }, [show]);

  // Animation Shake Effect
  const shakeAnimation = `
@keyframes alertShake {
  0% {
    transform: translateX(0);
  }

  10% {
    transform: translateX(-4px);
  }

  20% {
    transform: translateX(4px);
  }

  30% {
    transform: translateX(-4px);
  }

  40% {
    transform: translateX(4px);
  }

  50% {
    transform: translateX(-3px);
  }

  60% {
    transform: translateX(3px);
  }

  70% {
    transform: translateX(-2px);
  }

  80% {
    transform: translateX(2px);
  }

  100% {
    transform: translateX(0);
  }
}

.alert-shake-wrapper {
  animation: alertShake 0.45s ease-in-out;
}
`;


  return (
    <>
  <style>{shakeAnimation}</style>

<Modal
  title={title}
  hasWindowButton={false}
  titleBarOptions={
    <TitleBar.Close onClick={onClose} />
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

      <div
    className="alert-shake-wrapper"
    style={{
      width: '100%',
      height: '100%',
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
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
            }}
          >
            <Regwiz122 variant="32x32_4" />

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
        </div>
      </Modal>
    </>
  );
}