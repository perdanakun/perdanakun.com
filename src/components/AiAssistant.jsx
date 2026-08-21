import React, { useState, useEffect, useRef } from 'react';
import { Frame, Button, TitleBar } from '@react95/core';
import { getAIResponse } from '../services/aiService';
import AiPixelFace from './AiPixelFace';

import aiMessageSent from '../assets/sounds/ai_assistant_message_sent.wav';

export default function AiAssistant({
  style = {},
  onMinimize,
  onClose,
  onMaximize,
  onRestore,
}) {
  // =========================================
  // RESPONSIVE
  // =========================================

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 600
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // =========================================
  // WINDOW STATE
  // =========================================

  const [isMaximized, setIsMaximized] = useState(false);

  const [normalWindowStyle, setNormalWindowStyle] = useState({
    position: 'fixed',
    right: '0',
    top: '0',
    bottom: '28px',
    width: '20%',
    height: 'auto',
    maxHeight: 'calc(100vh - 28px)',
    boxSizing: 'border-box',
  });

  // =========================================
  // INFO
  // =========================================

  const [showInfo, setShowInfo] = useState(false);

  const infoButtonRef = useRef(null);

  const [infoPosition, setInfoPosition] = useState({
    top: 0,
    left: 0,
  });

  // =========================================
  // CHAT STATE
  // =========================================

  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const chatScrollRef = useRef(null);

  // =========================================
  // AUTO SCROLL
  // =========================================

  useEffect(() => {
    const scrollContainer = chatScrollRef.current;

    if (!scrollContainer) return;

    requestAnimationFrame(() => {
      scrollContainer.scrollTop =
        scrollContainer.scrollHeight -
        scrollContainer.clientHeight;
    });
  }, [chatHistory, loading]);

  // =========================================
  // PLACEHOLDER
  // =========================================

  const placeholders = [
    'Ask me anything about my life...',
    'What do you want to know about me?',
    'Search my memories or ask a question...',
    "What's on your mind? Drop a message...",
    'Curious about my background or routine?',
    'Think out loud—type your thoughts here...',
    'Test my memory—ask me a personal fact.',
    'Need a reminder or just want to chat?',
    'What should we check or talk about?',
    'Type a question or a detail about me...',
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prevIndex) =>
          (prevIndex + 1) % placeholders.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // =========================================
  // SEND MESSAGE
  // =========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    const userMessage = prompt;

    setPrompt('');

    // =========================================
    // SOUND
    // =========================================

    const audio = new Audio(aiMessageSent);

    audio.volume = 0.5;

    audio.play().catch(() => {
      // Browser dapat memblokir audio
    });

    // =========================================
    // USER MESSAGE
    // =========================================

    setChatHistory((prev) => [
      ...prev,
      {
        sender: 'user',
        text: userMessage,
      },
    ]);

    // =========================================
    // AI THINKING
    // =========================================

setTimeout(() => {
  setLoading(true);
}, 500);

    // =========================================
    // AI RESPONSE
    // =========================================

    getAIResponse(userMessage)
      .then((response) => {
        setTimeout(() => {
          setChatHistory((prev) => [
            ...prev,
            {
              sender: 'ai',
              text:
                response ||
                'Maaf, sepertinya tidak ada respons dari AI.',
            },
          ]);

          setLoading(false);
        }, 800);
      })
      
      .catch((error) => {
        console.error(
          'Gagal memanggil AI:',
          error
        );

        setChatHistory((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: 'Terjadi kesalahan sistem pada AI.',
          },
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
  };

  // =========================================
  // INFO AUTO CLOSE
  // =========================================

  useEffect(() => {
    if (!showInfo) return;

    const timer = setTimeout(() => {
      setShowInfo(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showInfo]);

  // =========================================
  // WINDOW MAXIMIZE
  // =========================================

  const handleMaximize = () => {
    if (isMaximized) {
      setIsMaximized(false);

      if (onRestore) {
        onRestore();
      }

      return;
    }

    setNormalWindowStyle(style);

    setIsMaximized(true);

    if (onMaximize) {
      onMaximize();
    }
  };

  // =========================================
  // WINDOW STYLE
  // =========================================

  const windowStyle = isMaximized
    ? {
        position: 'fixed',

        left: '0',
        top: '0',
        right: '0',
        bottom: '28px',

        width: '100vw',
        height: 'calc(100vh - 28px)',

        maxWidth: '100vw',
        maxHeight: 'calc(100vh - 28px)',

        boxSizing: 'border-box',

        ...style,
      }
    : {
        ...normalWindowStyle,
        ...style,
      };

  // =========================================
  // INFO BUTTON POSITION
  // =========================================

  const handleInfoClick = () => {
    if (
      !showInfo &&
      infoButtonRef.current
    ) {
      const rect =
        infoButtonRef.current.getBoundingClientRect();

      setInfoPosition({
        top: rect.top,
        left: rect.right - 240,
      });
    }

    setShowInfo(!showInfo);
  };

  // =========================================
  // RENDER
  // =========================================

  return (
    <>
      <style>{`

        /* =========================================
           WINDOW
        ========================================= */

        .ai-custom-window {
          z-index: 9999;

          display: flex;
          flex-direction: column;

          overflow: hidden;

          min-width: 0;
          min-height: 0;
        }


        /* =========================================
           CUSTOM TITLE BAR
        ========================================= */

        .ai-custom-titlebar {
          display: flex;

          align-items: center;

          width: 100%;
          min-height: 22px;

          box-sizing: border-box;

          padding: 2px 3px;

          background: linear-gradient(
            to right,
            #000080,
            #1084d0
          );

          color: white;

          font-family: sans-serif;
          font-size: 11px;
          font-weight: bold;

          user-select: none;

          flex-shrink: 0;
        }


        /* =========================================
           CHAT MESSAGE ANIMATION
        ========================================= */

        @keyframes chatMessageUp {
          from {
            opacity: 0;

            transform: scaleY(0);

            transform-origin: bottom;
          }

          to {
            opacity: 1;

            transform: scaleY(1);

            transform-origin: bottom;
          }
        }

        .chat-message-animate {
          animation:
            chatMessageUp
            0.25s
            ease-out;
        }


        /* =========================================
           CRT CONTAINER
        ========================================= */

        .ai-container-glow {
          position: relative;

          overflow: hidden;

          background: #141414;

          box-shadow:
            inset 0 0 25px rgba(0,0,0,0.9),
            inset 0 0 8px rgba(255,255,255,0.08),
            0 0 12px rgba(255,255,255,0.08);

          animation:
            crtFlicker
            0.12s
            infinite;
        }


        @keyframes crtFlicker {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.98;
          }
        }


        /* =========================================
           SCANLINES
        ========================================= */

        .ai-container-glow::before {
          content: "";

          position: absolute;

          inset: 0;

          background:
            repeating-linear-gradient(
              to bottom,

              rgba(255,255,255,0.035)
                0px,

              rgba(255,255,255,0.035)
                1px,

              rgba(0,0,0,0.12)
                2px,

              rgba(0,0,0,0.12)
                4px
            );

          pointer-events: none;

          z-index: 20;
        }


        /* =========================================
           CRT TEAR
        ========================================= */

        .ai-container-glow::after {
          content: "";

          position: absolute;

          left: -10%;

          width: 120%;

          height: 20px;

          top: 0;

          background:
            linear-gradient(
              to right,

              transparent 0%,

              rgba(255,255,255,0.05)
                20%,

              rgba(255,255,255,0.15)
                50%,

              rgba(255,255,255,0.04)
                80%,

              transparent 100%
            );

          opacity: 0;

          pointer-events: none;

          z-index: 30;

          animation:
            crtTear
            4s
            infinite;
        }


        @keyframes crtTear {
          0%,
          82% {
            top: -20px;

            opacity: 0;

            transform: translateX(0);
          }

          83% {
            top: 25%;

            opacity: 0.8;

            transform: translateX(-8px);
          }

          84% {
            top: 26%;

            opacity: 0.5;

            transform: translateX(10px);
          }

          85% {
            top: 27%;

            opacity: 0.9;

            transform: translateX(-5px);
          }

          86% {
            top: 28%;

            opacity: 0;

            transform: translateX(4px);
          }

          87% {
            top: 55%;

            opacity: 0.7;

            transform: translateX(8px);
          }

          88% {
            top: 56%;

            opacity: 0;

            transform: translateX(-8px);
          }

          100% {
            top: -20px;

            opacity: 0;

            transform: translateX(0);
          }
        }


        /* =========================================
           RGB GLITCH
        ========================================= */

        .crt-rgb-glitch {
          position: absolute;

          left: -10%;

          top: 42%;

          width: 120%;

          height: 35px;

          pointer-events: none;

          z-index: 25;

          opacity: 0;

          mix-blend-mode: screen;

          background:
            linear-gradient(
              90deg,

              rgba(255,0,0,0.25),

              transparent 30%,

              transparent 70%,

              rgba(0,100,255,0.25)
            );

          animation:
            rgbShift
            6s
            infinite
            steps(1);
        }


        @keyframes rgbShift {
          0%,
          85% {
            opacity: 0;

            transform: translateX(0);
          }

          86% {
            opacity: 0.7;

            transform: translateX(-8px);
          }

          87% {
            opacity: 0.4;

            transform: translateX(8px);
          }

          88% {
            opacity: 0;

            transform: translateX(0);
          }

          100% {
            opacity: 0;
          }
        }


        /* =========================================
           SCROLLBAR
        ========================================= */

        .ai-chat-scroll::-webkit-scrollbar {
          width: 3px;
        }

        .ai-chat-scroll::-webkit-scrollbar-track {
          background: #ffffff;
        }

        .ai-chat-scroll::-webkit-scrollbar-thumb {
          background: #ffffff;

          border-radius: 4px;
        }

        .ai-chat-scroll::-webkit-scrollbar-thumb:hover {
          background: #ffffff;
        }


        /* =========================================
           AI PIXEL AVATAR
        ========================================= */

        .ai-chat-avatar {
          position: absolute;

          left: -34px;

          top: 4px;

          width: 24px;
          height: 24px;

          display: flex;

          align-items: center;
          justify-content: center;

          background: #f2f2f2;

          flex-shrink: 0;

          margin: 0;
          padding: 0;

          box-sizing: border-box;

          overflow: hidden;
        }


        .ai-chat-avatar > div {
          flex-shrink: 0;
        }


        /* =========================================
           AI THINKING AVATAR
        ========================================= */

        .ai-loading-avatar {
          position: absolute;

          left: -34px;

          top: 4px;

          width: 24px;
          height: 24px;

          display: flex;

          align-items: center;
          justify-content: center;

          background: #f2f2f2;

          overflow: hidden;

          box-sizing: border-box;
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .ai-chat-avatar,
          .ai-loading-avatar {
            left: -32px;

            width: 22px;
            height: 22px;
          }
        }

      `}</style>


      {/* =========================================
          AI WINDOW
      ========================================= */}

      <Frame
        className="ai-custom-window"
        ref={containerRef}
        style={{
          ...windowStyle,

          backgroundColor: '#c0c0c0',

          border:
            '2px solid #ffffff',

          boxShadow:
            '2px 2px 0 #000000',

          display: 'flex',

          flexDirection: 'column',

          minWidth: 0,

          minHeight: 0,

          overflow: 'hidden',

          zIndex: 9999,
        }}
      >

        {/* =========================================
            CUSTOM TITLE BAR
        ========================================= */}

        <TitleBar
          className="ai-custom-titlebar"
          title="AI Assistant.exe"
        >
          <TitleBar.OptionsBox>

            <TitleBar.Help
              onClick={handleInfoClick}
            />

            <TitleBar.Minimize
              onClick={() => {
                if (onMinimize) {
                  onMinimize();
                }
              }}
            />

            {isMaximized ? (
              <TitleBar.Restore
                onClick={handleMaximize}
              />
            ) : (
              <TitleBar.Maximize
                onClick={handleMaximize}
              />
            )}

            <TitleBar.Close
              onClick={() => {
                if (onClose) {
                  onClose();
                }
              }}
            />

          </TitleBar.OptionsBox>
        </TitleBar>


        {/* =========================================
            INFO POPUP
        ========================================= */}

        {showInfo && (
          <div
            style={{
              position: 'fixed',

              top: `${infoPosition.top}px`,

              left: isMobile
                ? '10px'
                : `${infoPosition.left}px`,

              width: isMobile
                ? 'calc(100vw - 20px)'
                : '220px',

              maxWidth:
                'calc(100vw - 20px)',

              backgroundColor:
                '#ffffcc',

              border:
                '1px solid #000000',

              padding: '8px',

              boxShadow:
                '2px 2px 0px rgba(0,0,0,0.5)',

              textAlign: 'left',

              color: '#000000',

              lineHeight: '1.3',

              zIndex: 99999,

              fontFamily: 'sans-serif',

              fontSize: '11px',

              boxSizing: 'border-box',
            }}
          >
            <strong>
              perdana.ai is a LLM chatbot
            </strong>

            <div
              style={{
                fontSize: '10px',

                marginTop: '4px',
              }}
            >
              This is an AI-powered chatbot
              assistant. AI can make mistakes
              or provide inaccurate information.
              Please double-check important
              information.
            </div>
          </div>
        )}


        {/* =========================================
            AI CONTENT
        ========================================= */}

        <div
          style={{
            display: 'flex',

            flexDirection: 'column',

            width: '100%',

            height: '100%',

            flex: 1,

            minWidth: 0,

            minHeight: 0,

            maxWidth: '100%',

            boxSizing: 'border-box',

            overflow: 'hidden',
          }}
        >

          {/* =========================================
              HEADER INFO
          ========================================= */}

          <div
            style={{
              display: 'flex',

              alignItems: 'center',

              justifyContent: 'space-between',

              width: '100%',

              minWidth: 0,

              flexShrink: 0,

              padding: '6px 10px',

              backgroundColor: '#dfdfdf',

              borderBottom:
                '1px solid #808080',

              fontFamily: 'sans-serif',

              fontSize: '11px',

              boxSizing: 'border-box',
            }}
          >

            <div
              style={{
                fontWeight: 'bold',

                display: 'flex',

                alignItems: 'center',

                gap: '6px',

                minWidth: 0,
              }}
            >
              <span
                style={{
                  width: '8px',

                  height: '8px',

                  backgroundColor:
                    '#008000',

                  display:
                    'inline-block',

                  borderRadius: '50%',

                  flexShrink: 0,

                  transform:
                    'translateY(3px)',
                }}
              />

              perdana.ai
            </div>


            <div
              style={{
                position: 'relative',
              }}
            >
              <Button
                ref={infoButtonRef}
                onClick={handleInfoClick}
                style={{
                  width: '20px',

                  height: '20px',

                  minWidth: '20px',

                  padding: 0,

                  fontSize: '11px',

                  fontWeight: 'bold',

                  lineHeight: '1',

                  cursor: 'pointer',

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'center',
                }}
                title="about this AI"
              >
                i
              </Button>
            </div>

          </div>


          {/* =========================================
              CHAT AREA
          ========================================= */}

          <div
            ref={chatScrollRef}
            className="ai-chat-scroll"
            style={{
              flex: 1,

              minHeight: 0,

              backgroundColor:
                '#ffffff',

              padding:
                chatHistory.length === 0
                  ? '0px'
                  : '8px',

              overflowY: 'auto',

              display: 'flex',

              flexDirection:
                'column',

              gap: '20px',

              marginBottom: '6px',
            }}
          >

            {/* =========================================
                EMPTY AI FACE
            ========================================= */}

            {chatHistory.length === 0 && (
              <div
                className="ai-container-glow"
                style={{
                  backgroundColor:
                    '#141414',

                  width: '100%',

                  flex: 1,

                  display: 'flex',

                  flexDirection:
                    'column',

                  alignItems:
                    'center',

                  justifyContent:
                    'center',

                  margin: 'auto',

                  textAlign: 'center',

                  padding: '20px',

                  color: '#666666',

                  fontFamily:
                    'sans-serif',
                }}
              >

                {/* RGB GLITCH */}

                <div
                  className="crt-rgb-glitch"
                  aria-hidden="true"
                />


                {/* =================================
                    SAME AI CHARACTER
                ================================= */}

                <AiPixelFace
                  size={
                    isMobile
                      ? 100
                      : 140
                  }
                  state={
                    loading
                      ? 'thinking'
                      : 'idle'
                  }
                />

              </div>
            )}


            {/* =========================================
                CHAT MESSAGES
            ========================================= */}

            {chatHistory.map(
              (chat, index) => (
<div
  key={index}
  className={
    chat.sender === 'user'
      ? 'chat-message-animate'
      : ''
  }
                  style={{
                    position:
                      'relative',

                    alignSelf:
                      chat.sender === 'user'
                        ? 'flex-end'
                        : 'flex-start',

                    marginLeft:
                      chat.sender === 'ai'
                        ? '36px'
                        : '0px',

                    display: 'flex',

                    flexDirection:
                      'row',

                    alignItems:
                      'flex-end',

                    gap: '12px',

                    maxWidth:
                      '85%',

                    backgroundColor:
                      chat.sender === 'user'
                        ? '#273bd3'
                        : '#f2f2f2',

                    color:
                      chat.sender === 'user'
                        ? '#ffffff'
                        : '#000000',

                    padding:
                      '8px 15px',

                    borderRadius:
                      '10px',

                    fontSize: '12px',

                    lineHeight: '1.4',

                    fontFamily:
                      'sans-serif',

                    textAlign: 'left',

                    wordBreak:
                      'break-word',

                    whiteSpace:
                      'pre-wrap',
                  }}
                >

                  {/* =================================
                      AI PIXEL FACE AVATAR
                  ================================= */}

                  {chat.sender === 'ai' && (
                    <div
                      className="ai-chat-avatar"
                    >
                      <AiPixelFace
                        size={24}
                        state="idle"
                      />
                    </div>
                  )}


                  {chat.text}

                </div>
              )
            )}


            {/* =========================================
                LOADING / THINKING
            ========================================= */}

            {loading && (
              <div
                style={{
                  position:
                    'relative',

                  alignSelf:
                    'flex-start',

                  marginLeft:
                    '36px',

                  display: 'flex',

                  flexDirection:
                    'row',

                  alignItems:
                    'center',

                  backgroundColor:
                    '#f2f2f2',

                  color: '#666',

                  padding:
                    '8px 15px',

                  borderRadius:
                    '10px',

                  fontSize: '12px',

                  fontStyle:
                    'italic',

                  lineHeight:
                    '1.4',

                  fontFamily:
                    'sans-serif',
                }}
              >

                {/* =================================
                    THINKING PIXEL FACE
                ================================= */}

                <div
                  className="ai-loading-avatar"
                >
                  <AiPixelFace
                    size={24}
                    state="thinking"
                  />
                </div>


                is typing...

              </div>
            )}

          </div>


          {/* =========================================
              INPUT
          ========================================= */}

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',

              gap: '4px',

              flexShrink: 0,

              minWidth: 0,

              width: '100%',

              background: '#c0c0c0',

              marginTop: 'auto',

              boxSizing:
                'border-box',
            }}
          >

            <input
              ref={inputRef}
              type="text"

              placeholder={
                isFocused
                  ? ''
                  : placeholders[
                      placeholderIndex
                    ]
              }

              value={prompt}

              onChange={(e) =>
                setPrompt(
                  e.target.value
                )
              }

              onFocus={() =>
                setIsFocused(true)
              }

              onBlur={() =>
                setIsFocused(false)
              }

              disabled={loading}

              style={{
                flex: 1,

                minWidth: 0,

                width: '100%',

                height: '48px',

                padding:
                  '0 8px',

                border:
                  '2px inset #ffffff',

                backgroundColor:
                  '#ffffff',

                fontSize:
                  isMobile
                    ? '14px'
                    : '12px',

                outline: 'none',

                color: '#000000',

                fontFamily:
                  'sans-serif',

                boxSizing:
                  'border-box',
              }}
            />


            <Button
              type="submit"
              disabled={loading}
              style={{
                flexShrink: 0,

                minWidth:
                  isMobile
                    ? '52px'
                    : 'auto',
              }}
            >
              Send
            </Button>

          </form>

        </div>

      </Frame>
    </>
  );
}