
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@react95/core';
import shutterSound from '../assets/sounds/camera_shutter.wav';

export default function CameraModal({
  show,
  onClose,
  onCapture
}) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [cameraReady, setCameraReady] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');

  // ===== CAMERA SOUND ====

const shutterSoundRef = useRef(null);

useEffect(() => {
  shutterSoundRef.current = new Audio(shutterSound);
}, []);

  // ================= CAMERA START =================

  useEffect(() => {
    if (!show) {
      stopCamera();
      return;
    }

    startCamera();

    return () => {
      stopCamera();
    };
  }, [show]);

  const startCamera = async () => {
    try {
      setError('');
      setCameraReady(false);

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraReady(true);

    } catch (err) {
      console.error('Camera error:', err);

      setError(
        'Unable to access the camera. Please allow camera permission.'
      );
    }
  };

  // ================= CAMERA STOP =================

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current
        .getTracks()
        .forEach(track => track.stop());

      streamRef.current = null;
    }

    setCameraReady(false);
  };

  // ================= CAPTURE =================
const handleCapture = () => {
  const video = videoRef.current;

  if (!video || !cameraReady) {
    return;
  }

  // 🔊 CAMERA SHUTTER
  if (shutterSoundRef.current) {
    shutterSoundRef.current.currentTime = 0;
    shutterSoundRef.current.play().catch(() => {});
  }

  const canvas = document.createElement('canvas');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext('2d');

  if (!context) {
    return;
  }

  context.drawImage(
    video,
    0,
    0,
    canvas.width,
    canvas.height
  );

  const imageData = canvas.toDataURL(
    'image/jpeg',
    0.9
  );

  setPhoto(imageData);

  stopCamera();
};

  // ================= RETAKE =================

  const handleRetake = () => {
    setPhoto(null);
    startCamera();
  };

  // ================= USE PHOTO =================

  const handleUsePhoto = () => {
    if (!photo) {
      return;
    }

    // Base64 → binary
    const byteString = atob(
      photo.split(',')[1]
    );

    const mimeString = photo
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];

    const arrayBuffer = new ArrayBuffer(
      byteString.length
    );

    const intArray = new Uint8Array(
      arrayBuffer
    );

    for (
      let i = 0;
      i < byteString.length;
      i++
    ) {
      intArray[i] =
        byteString.charCodeAt(i);
    }

    // ================= FILE NAME =================
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const now = new Date();

const pad = (value) =>
  String(value).padStart(2, '0');

const fileName =
  `Caught-You-Smiling-on-${dayNames[now.getDay()]}-${pad(
    now.getDate()
  )}-${monthNames[now.getMonth()]}-${now.getFullYear()}.jpg`;
    // ================= CREATE FILE =================

    const file = new File(
      [arrayBuffer],
      fileName,
      {
        type: mimeString
      }
    );

    // Kirim file ke App.jsx
    if (onCapture) {
      onCapture(file);
    }

    setPhoto(null);

    // Tutup window Camera
    onClose();
  };

  // ================= CLOSE =================

  const handleClose = () => {
    stopCamera();
    setPhoto(null);
    setError('');

    onClose();
  };

  if (!show) {
    return null;
  }

  // ===== CAMERA BUTTON =====
const cameraButtonStyle = {
  height: 28,
  minHeight: 28,
  boxSizing: 'border-box',
};

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minWidth: 0,
        minHeight: 0,

        boxSizing: 'border-box',

        padding: 10,
        background: '#c0c0c0',

        display: 'flex',
        flexDirection: 'column',
        gap: 10,

        overflow: 'hidden'
      }}
    >

      {/* ================= CAMERA PREVIEW ================= */}

      <div
        style={{
          flex: 1,

          minHeight: 0,

          background: '#000',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          overflow: 'hidden',

          boxSizing: 'border-box',

          /*
           * Windows 95 bevel
           */
          borderTop:
            '2px solid #808080',

          borderLeft:
            '2px solid #808080',

          borderRight:
            '2px solid #ffffff',

          borderBottom:
            '2px solid #ffffff'
        }}
      >

        {/* LIVE CAMERA */}

        {!photo && !error && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{
              width: '100%',
              height: '100%',

              objectFit: 'cover',

              transform:
                'scaleX(-1)'
            }}
          />
        )}

        {/* CAPTURED PHOTO */}

        {photo && (
          <img
            src={photo}
            alt="Captured"
            style={{
              width: '100%',
              height: '100%',

              objectFit: 'contain',

              display: 'block'
            }}
          />
        )}

        {/* ERROR */}

        {error && (
          <div
            style={{
              padding: 20,

              color: '#fff',

              fontFamily:
                'MS Sans Serif, sans-serif',

              fontSize: 12,

              textAlign: 'center'
            }}
          >
            {error}
          </div>
        )}

      </div>


      {/* ================= CONTROLS ================= */}

      <div
        style={{
          flexShrink: 0,

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'center',

          gap: 8,

          minHeight: 30
        }}
      >

{/* TAKE PHOTO */}

{!photo && !error && (
  <Button
    disabled={!cameraReady}
    onClick={handleCapture}
    style={{
      ...cameraButtonStyle,
      width: 120,
    }}
  >
    Take Photo
  </Button>
)}

{/* AFTER PHOTO */}

{photo && (
  <>
    <Button
      onClick={handleRetake}
      style={{
        ...cameraButtonStyle,
        width: 80,
      }}
    >
      Retake
    </Button>

    <Button
      onClick={handleUsePhoto}
      style={{
        ...cameraButtonStyle,
        width: 100,
      }}
    >
      Use Photo
    </Button>
  </>
)}


{/* ERROR */}

{error && (
  <Button
    onClick={startCamera}
    style={{
      ...cameraButtonStyle,
      width: 80,
    }}
  >
    Retry
  </Button>
)}

      </div>

    </div>
  );
}
