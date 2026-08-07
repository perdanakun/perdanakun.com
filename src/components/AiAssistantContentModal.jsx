import React, { useState, useEffect, useRef } from 'react';
import { Modal, Frame, Button } from '@react95/core';
import { Computer } from '@react95/icons';
import { getAIResponse } from '../services/aiService'; // Sesuaikan path import

export default function AiAssistantContentModal() {
  const [showInfo, setShowInfo] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);
  
  const inputRef = useRef(null);
  const chatScrollRef = useRef(null);

  // Auto-scroll ke bawah saat chat history atau status loading berubah, green online color
useEffect(() => {
    if (chatScrollRef.current) {
        chatScrollRef.current.scrollTop =
            chatScrollRef.current.scrollHeight;
    }
}, [chatHistory, loading]);

  // Animasi rotasi placeholder input
const placeholders = [
  "Ask me anything about my life...",
  "What do you want to know about me?",
  "Search my memories or ask a question...",
  "What's on your mind? Drop a message...",
  "Curious about my background or routine?",
  "Think out loud—type your thoughts here...",
  "Test my memory—ask me a personal fact.",
  "Need a reminder or just want to chat?",
  "What should we check or talk about?",
  "Type a question or a detail about me..."
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

// Handle submit pesan chat
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = prompt; 
    setPrompt('');

    setChatHistory(prev => [
      ...prev, 
      { sender: 'user', text: userMessage }
    ]);

    // --- ATUR JEDA SEBELUM IS TYPING MUNCUL ---
    setTimeout(() => {
      setLoading(true);

      // Setelah status loading aktif, baru panggil AI
      getAIResponse(userMessage)
        .then((response) => {
          setTimeout(() => {
            setChatHistory(prev => [
              ...prev, 
              { sender: 'ai', text: response || 'Maaf, sepertinya tidak ada respons dari AI.' }
            ]);
            setLoading(false);
          }, 800); // Jeda simulasi waktu baca/ketik AI selesai
        })
        .catch((error) => {
          console.error("Gagal memanggil AI:", error);
          setChatHistory(prev => [
            ...prev, 
            { sender: 'ai', text: 'Terjadi kesalahan sistem pada AI.' }
          ]);
          setLoading(false);
        })
        .finally(() => {
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }, 850);
        });

    }, 500); // <-- Jeda 1 detik (1000ms) sebelum tulisan "is typing..." muncul
  };

  return (
    <Modal.Content 
    ref={containerRef}
    style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '4px', maxHeight: '100%', overflow: 'hidden' }}>
      
      {/* CSS TERPADU UNTUK ANIMASI GAYA AI */}
      <style>{`
        /* --- ANIMASI KEDIP MATA AI --- */
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        .ai-eye {
          animation: blink 2.5s infinite ease-in-out;
          transform-origin: center;
        }

        /* --- ANIMASI GLOW / PULSE KOTAK MATA AI --- */
        @keyframes aiGlow {
          0%, 100% { box-shadow: inset 0 0 10px rgba(0,0,0,0.1); }
          50% { box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3); }
        }

        .ai-container-glow {
          animation: aiGlow 3s infinite ease-in-out;
        }

        /* --- ANIMASI PESAN MUNCUL --- */
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .chat-message-animate {
          animation: slideUpFade 0.3s ease-out forwards;
        }
      `}</style>

      {/* HEADER INFO AI */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 10px',
        backgroundColor: '#dfdfdf',
        borderBottom: '1px solid #808080',
        fontFamily: 'sans-serif',
        fontSize: '11px',
      }}>
        <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ 
            width: '8px', height: '8px', 
            backgroundColor: '#008000',
            display: 'inline-block', borderRadius: '50%', flexShrink: 0,
            transform: 'translateY(3px)' 
          }}></span>
          perdana.ai
        </div>

        <div style={{ position: 'relative' }}>
          <Button 
            onClick={() => setShowInfo(!showInfo)}
            style={{ width: '20px', height: '20px', minWidth: '20px', padding: 0, fontSize: '11px', fontWeight: 'bold', lineHeight: '1', cursor: 'pointer' }}
            title="about this AI"
          >
            i
          </Button>

          {showInfo && (
            <div style={{
              position: 'absolute', right: 0, top: '24px', width: '220px',
              backgroundColor: '#ffffcc', border: '1px solid #000000',
              padding: '8px', boxShadow: '2px 2px 0px rgba(0,0,0,0.5)',
              textAlign: 'left', color: '#000000', lineHeight: '1.3', zIndex: 99
            }}>
              <strong>perdana.ai is a LLM chatbot</strong>
              <div style={{ fontSize: '10px', marginTop: '4px' }}>
                This is an AI-powered chatbot assistant. AI can make mistakes or provide inaccurate information. Please double-check important information.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AREA CHAT HISTORY */}
      <div ref={chatScrollRef}
        style={{
          flex: 1, minHeight: 0, backgroundColor: '#ffffff',
          padding: chatHistory.length === 0 ? '0px' : '8px',
          overflowY: 'auto', display: 'flex', flexDirection: 'column',
          justifyContent: chatHistory.length === 0 ? 'center' : 'flex-start',
          gap: '20px', marginBottom: '6px',
        }}>

        {chatHistory.length === 0 && (
          <div className="ai-container-glow" style={{
            width: '100%', flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', margin: 'auto',
            textAlign: 'center', backgroundColor: '#C15F3C', padding: '20px',
            color: '#666666', fontFamily: 'sans-serif',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', height: '20px' }}>
              <div className="ai-eye" style={{ width: '32px', height: '42px', backgroundColor: '#f8f5f4', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '10px', height: '14px', backgroundColor: '#222', borderRadius: '50%' }}></div>
              </div>
              <div className="ai-eye" style={{ width: '32px', height: '42px', backgroundColor: '#f8f5f4', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '10px', height: '14px', backgroundColor: '#222', borderRadius: '50%' }}></div>
              </div>
            </div>
          </div>
        )}

        {chatHistory.map((chat, index) => (
          <div key={index}
            className={index === 0 && chat.sender === 'user' ? "chat-message-animate" : ""}
            style={{
              position: 'relative',
              alignSelf: chat.sender === 'user' ? 'flex-end' : 'flex-start',
              marginLeft: chat.sender === 'ai' ? '36px' : '0px',
              display: 'flex', flexDirection: 'row', alignItems: 'flex-end',
              gap: '12px', maxWidth: '85%',
              backgroundColor: chat.sender === 'user' ? '#273bd3' : '#f2f2f2',
              color: chat.sender === 'user' ? '#ffffff' : '#000000',
              padding: '8px 15px', borderRadius: '10px', fontSize: '12px',
              lineHeight: '1.4', fontFamily: 'sans-serif', textAlign: 'left',
              wordBreak: 'break-word', whiteSpace: 'pre-wrap',
            }}>
              {chat.sender === 'ai' && (
                <Frame variant="well" style={{ 
                  position: 'absolute', left: '-34px', top: '50%', transform: 'translateY(-50%)',
                  width: '24px', height: '24px', display: 'flex', alignItems: 'center', 
                  justifyContent: 'center', backgroundColor: '#c0c0c0', flexShrink: 0, marginBottom: '2px'
                }}>
                  <Computer variant="32x32_4" />
                </Frame>
              )}
              {chat.text}
          </div>
        ))}
        
        {loading && (
          <div style={{
            position: 'relative', alignSelf: 'flex-start', marginLeft: '36px',
            display: 'flex', flexDirection: 'row', alignItems: 'center',
            backgroundColor: '#f2f2f2', color: '#666', padding: '8px 15px',
            borderRadius: '10px', fontSize: '12px', fontStyle: 'italic',
            lineHeight: '1.4', fontFamily: 'sans-serif',
          }}>
            <Frame variant="well" style={{ 
              position: 'absolute', left: '-34px', top: '50%', transform: 'translateY(-50%)',
              width: '24px', height: '24px', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', backgroundColor: '#c0c0c0', flexShrink: 0,
            }}>
              <Computer variant="32x32_4" />
            </Frame>
            is typing...
          </div>
        )}
      </div>

      {/* INPUT & FORM */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '4px', flexShrink: 0, background: '#c0c0c0', marginTop: 'auto' }}>
        <input
          ref={inputRef}
          type="text"
          placeholder={isFocused ? "" : placeholders[placeholderIndex]}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={loading}
          style={{
            flex: 1, height: '48px', padding: '0 8px', border: '2px inset #ffffff',
            backgroundColor: '#ffffff', fontSize: '12px', outline: 'none', color: '#000000', fontFamily: 'sans-serif'
          }}
        />
        <Button type="submit" disabled={loading}>Send</Button>
      </form>

    </Modal.Content>
  );
}