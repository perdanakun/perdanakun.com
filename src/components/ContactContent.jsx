import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, Frame } from '@react95/core';
import { Wangimg128, Files } from '@react95/icons';
import closeIcon from '../assets/close.svg';
import messageSentSound from '../assets/sounds/message_sent.wav';

export default function ContactContent({
  onSendSuccess,
  onOpenCamera,
  cameraAttachment,
  onRemoveAttachment
}) {
  // ================= STATE =================

  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('❤️ Personal Note');
  const [message, setMessage] = useState('');
  const [fromFocused, setFromFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  // ================= FILE ATTACHMENT =================

const fileInputRef = useRef(null);

const [fileAttachment, setFileAttachment] = useState(null);
const [fileAttachmentUrl, setFileAttachmentUrl] = useState(null);

const handleFileSelect = (e) => {
  const file = e.target.files?.[0];

  if (!file) {
    return;
  }

  setFileAttachment(file);

  const url = URL.createObjectURL(file);

  setFileAttachmentUrl(url);

  // Memungkinkan memilih file yang sama lagi
  e.target.value = '';
};

const handleRemoveFileAttachment = () => {
  if (fileAttachmentUrl) {
    URL.revokeObjectURL(fileAttachmentUrl);
  }

  setFileAttachment(null);
  setFileAttachmentUrl(null);
};


  // ================= CAMERA ATTACHMENT =================

const [attachmentUrl, setAttachmentUrl] = useState(null);

useEffect(() => {
  if (!cameraAttachment) {
    setAttachmentUrl(null);
    return;
  }

  const url = URL.createObjectURL(cameraAttachment);

  setAttachmentUrl(url);

  return () => {
    URL.revokeObjectURL(url);
  };
}, [cameraAttachment]);

  // ================= FORM VALIDATION =================

  const isFormValid =
    from.trim() !== '' &&
    message.trim() !== '';

// ================= HELPER BASE SEND EMAIL =================
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;

      // result = "data:image/png;base64,AAAA..."
      // Kita hanya kirim bagian Base64-nya
      const base64 = result.split(',')[1];

      resolve(base64);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
};

  // ================= SEND + SOUND =================
const handleSend = async () => {
  if (!isFormValid) {
    return;
  }

  try {
    // 1. Tentukan attachment yang akan dikirim
    const attachment = fileAttachment || cameraAttachment;

    // 2. Siapkan data attachment
    let attachmentData = null;

    if (attachment) {
      const base64 = await fileToBase64(attachment);

      attachmentData = {
        filename: attachment.name || 'camera-photo.jpg',
        content: base64,
      };
    }

    // 3. Kirim ke Vercel API
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        subject,
        message,
        attachment: attachmentData,
      }),
    });

    // 4. Ambil response dari backend
    const result = await response.json();

    // 5. Kalau gagal, jangan anggap email terkirim
    if (!response.ok || !result.success) {
      throw new Error(
        result.error || 'Failed to send email'
      );
    }

    // 6. EMAIL BERHASIL → baru sound
    const audio = new Audio(messageSentSound);

    audio.currentTime = 0;

    audio.play().catch(() => {});

    // 7. EMAIL BERHASIL → baru tampilkan alert
    if (onSendSuccess) {
      onSendSuccess();
    }

    // 8. Reset form
    setFrom('');
    setSubject('❤️ Personal Note');
    setMessage('');

    // 9. Reset file attachment
    handleRemoveFileAttachment();

    // 10. Reset camera attachment
    if (onRemoveAttachment) {
      onRemoveAttachment();
    }

  } catch (error) {
    console.error('Send email error:', error);

    alert(
      'Sorry, your message could not be sent. Please try again.'
    );
  }
};


  return (
    <Modal.Content
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 0,
        background: '#c0c0c0'
      }}
    >

      {/* ================= MENU BAR ================= */}

      <div
        style={{
          display: 'flex',
          gap: 16,
          padding: '6px 10px',
          borderBottom: '1px solid #808080',
          background: '#c0c0c0',
          fontSize: 12
        }}
      >
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Insert</span>
        <span>Format</span>
        <span>Tools</span>
      </div>


      {/* ================= MAIL BODY ================= */}

      <Frame
        bgColor="#c0c0c0"
        boxShadow="$in"
        style={{
          flex: 1,
          margin: 6,
          padding: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          minHeight: 0
        }}
      >

        {/* ================= FROM ================= */}

        <div style={rowStyle}>

          <label style={labelStyle}>
            From:
          </label>

        <input
          type="email"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          onFocus={() => setFromFocused(true)}
          onBlur={() => setFromFocused(false)}
          placeholder={
            fromFocused
              ? ''
              : 'your.email@address.com — where can I reach you?'
          }
          style={inputStyle}
        />

        </div>


        {/* ================= SUBJECT ================= */}

        <div style={rowStyle}>

          <label style={labelStyle}>
            Subject:
          </label>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={inputStyle}
          >
            <option>❤️ Personal Note</option>
            <option>💼 Job Opportunity</option>
            <option>🐣 Project Collaboration</option>
          </select>

        </div>


        {/* ================= TO + ATTACHMENT + CAMERA + SEND ================= */}

        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >

          <label style={labelStyle}>
            To:
          </label>


          {/* ================= TO ================= */}

          <input
            disabled
            value="Perdana Kurniawan Arta"
            style={{
              ...inputStyle,
              background: '#c5c4c4',
              color: '#555'
            }}
          />


{/* ================= FILE INPUT ================= */}

<input
  ref={fileInputRef}
  type="file"
  accept="image/*,.pdf,.doc,.docx,.txt"
  onChange={handleFileSelect}
  style={{
    display: 'none'
  }}
/>
 {/* ================= ATTACHMENT BUTTON ================= */}

<Button
  type="button"
  onClick={() => fileInputRef.current?.click()}
  style={{
    width: 32,
    height: 28,
    minWidth: 32,
    padding: 0,
    marginLeft: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
  title="Attach file"
>
  📎
</Button>


          {/* ================= CAMERA ================= */}

          <Button
            onClick={onOpenCamera}
            style={{
              width: 32,
              height: 28,
              minWidth: 32,
              padding: 0,
              marginLeft: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Take photo"
          >
            📷
          </Button>


          {/* ================= SEND ================= */}

          <div
            style={{
              marginLeft: 4,
              display: 'inline-flex'
            }}
          >

            <Button
              disabled={!isFormValid}
              onClick={
                isFormValid
                  ? handleSend
                  : undefined
              }
              style={{
                width: 120,
                height: 28,
                color: isFormValid
                  ? '#000'
                  : '#808080',
                textShadow: isFormValid
                  ? 'none'
                  : '1px 1px 0 #fff',
                pointerEvents: isFormValid
                  ? 'auto'
                  : 'none'
              }}
            >
              Send
            </Button>

          </div>

        </div>


        {/* ================= MESSAGE ================= */}
<textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onFocus={() => setMessageFocused(true)}
  onBlur={() => setMessageFocused(false)}
  placeholder={
    messageFocused
      ? ''
      : 'Take a moment to write something... I’d love to hear your thoughts, stories, ideas, or just a simple hello.'
  }
  style={{
    flex: 1,
    minHeight: 0,
    resize: 'none',
    border: 'none',
    outline: 'none',
    padding: 10,
    fontFamily: 'MS Sans Serif, sans-serif',
    fontSize: 12,
    background: '#fff',
    color: '#000',
    caretColor: '#000',
    boxShadow:
      'inset 2px 2px 0 #808080, inset -2px -2px 0 #ffffff'
  }}
/>




{/* =================  Parrent Attachement ================= */}

<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 0
  }}
>

<Frame
  bgColor="#c0c0c0"
  boxShadow="$in"
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 6,
    width: '100%',
    boxSizing: 'border-box'
  }}
>


{/* ================= FILE ATTACHMENT ================= */}

{fileAttachment && (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      minWidth: 0,
      gap: 6
    }}
  >

    {/* FILE INFO */}
    <div
      style={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        overflow: 'hidden'
      }}
    >
      <Files variant="16x16_4" />

      <a
        href={fileAttachmentUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        title="Open file"
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          color: '#0000ee',
          textDecoration: 'underline',
          fontFamily: 'MS Sans Serif, sans-serif',
          fontSize: 11,
          cursor: 'pointer'
        }}
      >
        {fileAttachment.name}
      </a>
    </div>

    {/* REMOVE FILE */}
    <Button
      onClick={handleRemoveFileAttachment}
      title="Remove attachment"
      style={{
        width: 16,
        height: 16,
        minWidth: 16,
        maxWidth: 16,
        padding: 0,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
    >
      <img
        src={closeIcon}
        alt="Remove attachment"
        style={{
          width: 8,
          height: 8,
          pointerEvents: 'none'
        }}
      />
    </Button>

  </div>
)}


{/* ================= CAMERA ATTACHMENT ================= */}

{cameraAttachment && attachmentUrl && (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      minWidth: 0,
      gap: 6
    }}
  >

    {/* CAMERA INFO */}
    <div
      style={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        overflow: 'hidden'
      }}
    >
      <Wangimg128 variant="16x16_4" />

      <a
        href={attachmentUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Open photo"
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          color: '#0000ee',
          textDecoration: 'underline',
          fontFamily: 'MS Sans Serif, sans-serif',
          fontSize: 11,
          cursor: 'pointer'
        }}
      >
        {cameraAttachment.name || 'Camera photo'}
      </a>
    </div>

    {/* REMOVE CAMERA */}
    <Button
      onClick={onRemoveAttachment}
      title="Remove attachment"
      style={{
        width: 16,
        height: 16,
        minWidth: 16,
        maxWidth: 16,
        padding: 0,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
    >
      <img
        src={closeIcon}
        alt="Remove attachment"
        style={{
          width: 8,
          height: 8,
          pointerEvents: 'none'
        }}
      />
    </Button>

  </div>
)}
</Frame>
</div>
      </Frame>
    </Modal.Content>
  );
}


/* ================= STYLES ================= */

const rowStyle = {
  display: 'flex',
  alignItems: 'center'
};

const labelStyle = {
  width: 70,
  fontSize: 12,
  color: '#000'
};

const inputStyle = {
  flex: 1,
  height: 28,
  padding: '0 8px',
  border: 'none',
  outline: 'none',
  fontFamily: 'MS Sans Serif, sans-serif',
  fontSize: 12,
  background: '#fff',
  color: '#000',
  caretColor: '#000',
  boxShadow:
    'inset 2px 2px 0 #808080, inset -2px -2px 0 #ffffff'
};