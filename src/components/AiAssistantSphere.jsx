import React, { useEffect, useState } from 'react';
import aiAssistantV2OpenSound from '../assets/sounds/ai_assistantv2_open.wav';

function AiAssistantSphere({
  onClick,
  state = 'idle',
}) {
  const [blink, setBlink] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [eyeDirection, setEyeDirection] = useState('center');
  const [eyeFrame, setEyeFrame] = useState(0);

  const isThinking = state === 'thinking';
  const isListening = state === 'listening';
  const isSpeaking = state === 'speaking';

  /*
   * =========================================
   * OPEN SOUND
   * =========================================
   */

  const playOpenSound = () => {
    const audio = new Audio(aiAssistantV2OpenSound);

    audio.volume = 0.5;
    audio.currentTime = 0;

    audio.play().catch((error) => {
      console.log('AI Assistant V2 sound blocked:', error);
    });
  };

  /*
   * =========================================
   * RANDOM PIXEL BLINK
   *
   * 3 frame blink:
   *
   * OPEN
   *   █    █
   *
   * HALF
   *   ▬    ▬
   *
   * CLOSED
   *   ━    ━
   *
   * OPEN
   * =========================================
   */

  useEffect(() => {
    let blinkTimer;
    let frameTimer;

    const scheduleBlink = () => {
      const delay = 2200 + Math.random() * 4200;

      blinkTimer = setTimeout(() => {
        setBlink(true);
        setEyeFrame(1);

        frameTimer = setTimeout(() => {
          setEyeFrame(2);

          frameTimer = setTimeout(() => {
            setEyeFrame(0);
            setBlink(false);

            scheduleBlink();
          }, 65);
        }, 55);
      }, delay);
    };

    scheduleBlink();

    return () => {
      clearTimeout(blinkTimer);
      clearTimeout(frameTimer);
    };
  }, []);

  /*
   * =========================================
   * RANDOM EYE TRACKING
   * =========================================
   */

  useEffect(() => {
    let timer;

    const scheduleEyeMovement = () => {
      const delay = 1800 + Math.random() * 3200;

      timer = setTimeout(() => {
        /*
         * Thinking / listening / speaking
         * memiliki behavior sendiri.
         */
        if (!isThinking && !isListening && !isSpeaking) {
          const directions = [
            'center',
            'center',
            'left',
            'center',
            'right',
            'center',
            'down',
          ];

          const nextDirection =
            directions[
              Math.floor(Math.random() * directions.length)
            ];

          setEyeDirection(nextDirection);
        }

        scheduleEyeMovement();
      }, delay);
    };

    scheduleEyeMovement();

    return () => clearTimeout(timer);
  }, [isThinking, isListening, isSpeaking]);

  /*
   * =========================================
   * CRT GLITCH
   * =========================================
   */

  useEffect(() => {
    let timer;
    let endTimer;

    const scheduleGlitch = () => {
      const delay = 4500 + Math.random() * 7500;

      timer = setTimeout(() => {
        setGlitch(true);

        endTimer = setTimeout(() => {
          setGlitch(false);
          scheduleGlitch();
        }, 100 + Math.random() * 180);
      }, delay);
    };

    scheduleGlitch();

    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, []);

  /*
   * =========================================
   * SPEAKING EYE FRAME
   * =========================================
   */

  useEffect(() => {
    if (!isSpeaking) return;

    const interval = setInterval(() => {
      setEyeFrame((prev) => (prev + 1) % 3);
    }, 180);

    return () => clearInterval(interval);
  }, [isSpeaking]);

  /*
   * =========================================
   * COMPUTED EYE CLASS
   * =========================================
   */

  const eyeClassName = `
    pixel-ai-eyes
    eye-${eyeDirection}
    ${blink ? `blink-frame-${eyeFrame}` : ''}
  `;

  return (
    <>
      <style>{`

        /*
        =========================================
        RETRO AI COLOR SYSTEM
        =========================================
        */

        :root {
          --crt-black: #020805;
          --crt-dark: #07130f;
          --crt-dark-2: #0b1d15;

          --crt-green-dark: #174f35;
          --crt-green: #31ff75;
          --crt-green-bright: #d7ffe9;
          --crt-green-glow: #3eff89;

          --thinking: #ffd83d;
          --listening: #3de7ff;
          --speaking: #ff4d4d;
        }


        /*
        =========================================
        PIXEL AI CONTAINER
        =========================================
        */

        .pixel-ai {
          position: fixed;

          right: 24px;
          bottom: 80px;

          width: 76px;
          height: 76px;

          z-index: 9999;

          cursor: pointer;
          user-select: none;

          image-rendering: pixelated;

          transform-origin: center bottom;

          animation:
            pixelFloat
            4s
            steps(4)
            infinite;

          -webkit-tap-highlight-color: transparent;
        }


        /*
        =========================================
        BODY
        =========================================
        */

        .pixel-ai-body {
          position: absolute;

          inset: 0;

          background: #c0c0c0;

          /*
           * Stepped CRT hardware silhouette
           */

          clip-path: polygon(
            9px 0,
            calc(100% - 9px) 0,

            calc(100% - 9px) 3px,
            calc(100% - 4px) 3px,
            calc(100% - 4px) 8px,

            100% 8px,
            100% calc(100% - 8px),

            calc(100% - 4px) calc(100% - 8px),
            calc(100% - 4px) calc(100% - 3px),
            calc(100% - 9px) calc(100% - 3px),

            9px calc(100% - 3px),
            9px calc(100% - 3px),
            4px calc(100% - 3px),
            4px calc(100% - 8px),

            0 calc(100% - 8px),
            0 8px,

            4px 8px,
            4px 3px,
            9px 3px
          );

          box-shadow:
            4px 4px 0 #000;
        }


        /*
        =========================================
        OUTER BLACK FRAME
        =========================================
        */

        .pixel-ai-frame {
          position: absolute;

          inset: 3px;

          background: #101010;

          clip-path: polygon(
            7px 0,
            calc(100% - 7px) 0,

            calc(100% - 7px) 3px,
            calc(100% - 3px) 3px,
            calc(100% - 3px) 7px,

            100% 7px,
            100% calc(100% - 7px),

            calc(100% - 3px) calc(100% - 7px),
            calc(100% - 3px) calc(100% - 3px),
            calc(100% - 7px) calc(100% - 3px),

            7px calc(100% - 3px),
            7px calc(100% - 3px),
            3px calc(100% - 3px),
            3px calc(100% - 7px),

            0 calc(100% - 7px),
            0 7px,

            3px 7px,
            3px 3px,
            7px 3px
          );
        }


        /*
        =========================================
        HARDWARE HIGHLIGHT
        =========================================
        */

        .pixel-ai-highlight {
          position: absolute;

          top: 4px;
          left: 9px;

          width: 29px;
          height: 3px;

          background: #fff;

          z-index: 60;
        }

        .pixel-ai-highlight::after {
          content: "";

          position: absolute;

          left: -4px;
          top: 3px;

          width: 3px;
          height: 10px;

          background: #fff;
        }


        /*
        =========================================
        SCREEN
        =========================================
        */

        .pixel-ai-screen {
          position: absolute;

          left: 9px;
          top: 10px;

          width: 58px;
          height: 51px;

          overflow: hidden;

          background: var(--crt-dark);

          border: 2px solid #000;

          box-sizing: border-box;

          box-shadow:
            inset 3px 3px 0 #020604,
            inset -2px -2px 0 #263c32;

          z-index: 5;
        }


        /*
        =========================================
        CRT SCANLINES
        =========================================
        */

        .pixel-ai-screen::before {
          content: "";

          position: absolute;

          inset: 0;

          pointer-events: none;

          z-index: 30;

          background:
            repeating-linear-gradient(
              to bottom,
              transparent 0px,
              transparent 2px,
              rgba(92,255,170,0.10) 2px,
              rgba(92,255,170,0.10) 3px
            );

          opacity: 0.85;
        }


        /*
        =========================================
        CRT VIGNETTE
        =========================================
        */

        .pixel-ai-screen::after {
          content: "";

          position: absolute;

          inset: 0;

          pointer-events: none;

          z-index: 31;

          background:
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.25),
              transparent 16%,
              transparent 84%,
              rgba(0,0,0,0.35)
            );
        }


        /*
        =========================================
        CRT FACE
        =========================================
        */

        .pixel-ai-face {
          position: absolute;

          inset: 0;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          gap: 7px;

          z-index: 10;

          color: var(--crt-green-bright);

          text-shadow:
            2px 0 var(--crt-green-glow),
            0 2px var(--crt-green-glow),
            0 0 4px rgba(62,255,137,0.55);
        }


        /*
        =========================================
        EYES
        =========================================
        */

        .pixel-ai-eyes {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 14px;

          transform:
            translate(0, 0);

          transition: none;
        }


        /*
        =========================================
        EYE TRACKING
        =========================================
        */

        .pixel-ai-eyes.eye-left {
          transform: translateX(-3px);
        }

        .pixel-ai-eyes.eye-right {
          transform: translateX(3px);
        }

        .pixel-ai-eyes.eye-down {
          transform: translateY(2px);
        }


        /*
        =========================================
        PIXEL EYE
        =========================================
        */

        .pixel-ai-eye {
          position: relative;

          width: 10px;
          height: 18px;

          background: var(--crt-green-bright);

          clip-path: polygon(
            2px 0,
            8px 0,

            8px 2px,
            10px 2px,

            10px 16px,

            8px 16px,
            8px 18px,

            2px 18px,

            2px 16px,
            0 16px,

            0 2px,
            2px 2px
          );

          box-shadow:
            0 0 0 1px var(--crt-green),
            0 0 4px rgba(62,255,137,0.6);
        }


        /*
        =========================================
        EYE HIGHLIGHT
        =========================================
        */

        .pixel-ai-eye::before {
          content: "";

          position: absolute;

          top: 3px;
          left: 3px;

          width: 2px;
          height: 4px;

          background: #fff;

          opacity: 0.65;
        }


        /*
        =========================================
        BLINK FRAME 1
        =========================================
        */

        .pixel-ai-eyes.blink-frame-1 .pixel-ai-eye {
          width: 11px;
          height: 5px;

          clip-path: none;

          transform: translateY(6px);

          box-shadow:
            0 0 0 1px var(--crt-green),
            0 0 4px rgba(62,255,137,0.6);
        }


        /*
        =========================================
        BLINK FRAME 2
        =========================================
        */

        .pixel-ai-eyes.blink-frame-2 .pixel-ai-eye {
          width: 13px;
          height: 2px;

          clip-path: none;

          transform: translateY(8px);

          box-shadow:
            0 0 0 1px var(--crt-green),
            0 0 5px rgba(62,255,137,0.8);
        }


        /*
        =========================================
        THINKING
        =========================================
        */

        .pixel-ai.thinking .pixel-ai-eyes {
          animation:
            pixelThinkEyes
            800ms
            steps(3)
            infinite;
        }

        .pixel-ai.thinking .pixel-ai-eye {
          background: #fff1a8;

          box-shadow:
            0 0 0 1px var(--thinking),
            0 0 5px rgba(255,216,61,0.75);
        }


        @keyframes pixelThinkEyes {
          0% {
            transform: translate(0, 0);
          }

          33% {
            transform: translate(-2px, -2px);
          }

          66% {
            transform: translate(2px, 0);
          }

          100% {
            transform: translate(0, -3px);
          }
        }


        /*
        =========================================
        THINKING MOUTH
        =========================================
        */

        .pixel-ai.thinking .pixel-ai-mouth {
          width: 5px;
          height: 5px;

          background: #fff1a8;

          clip-path: none;

          box-shadow:
            0 0 0 1px var(--thinking),
            0 0 4px rgba(255,216,61,0.7);

          animation:
            thinkingMouth
            500ms
            steps(2)
            infinite;
        }

        @keyframes thinkingMouth {
          0% {
            transform: translateX(-2px);
          }

          50% {
            transform: translateX(2px);
          }

          100% {
            transform: translateX(-1px);
          }
        }


        /*
        =========================================
        LISTENING
        =========================================
        */

        .pixel-ai.listening .pixel-ai-screen {
          background: #061812;

          box-shadow:
            inset 3px 3px 0 #020604,
            inset -2px -2px 0 #24543b,
            0 0 0 1px #36d77c;
        }


        .pixel-ai.listening .pixel-ai-eyes {
          animation:
            listeningEyes
            700ms
            steps(2)
            infinite alternate;
        }


        .pixel-ai.listening .pixel-ai-eye {
          width: 12px;
          height: 20px;

          background: #dffff4;

          box-shadow:
            0 0 0 1px var(--listening),
            0 0 6px rgba(61,231,255,0.8);
        }


        @keyframes listeningEyes {
          0% {
            transform: scaleY(1);
          }

          100% {
            transform: scaleY(1.12);
          }
        }


        /*
        =========================================
        LISTENING MOUTH / RADAR
        =========================================
        */

        .pixel-ai.listening .pixel-ai-mouth {
          width: 7px;
          height: 7px;

          background: #dffff4;

          clip-path: none;

          box-shadow:
            0 0 0 1px var(--listening),
            0 0 6px rgba(61,231,255,0.8);

          animation:
            listeningRadar
            600ms
            steps(2)
            infinite alternate;
        }

        @keyframes listeningRadar {
          0% {
            transform: scale(1);
          }

          100% {
            transform: scale(1.35);
          }
        }


        /*
        =========================================
        SPEAKING
        =========================================
        */

        .pixel-ai.speaking .pixel-ai-mouth {
          animation:
            pixelTalk
            180ms
            steps(3)
            infinite;
        }


        .pixel-ai.speaking .pixel-ai-eyes {
          animation:
            speakingEyes
            500ms
            steps(2)
            infinite;
        }


        .pixel-ai.speaking .pixel-ai-eye {
          box-shadow:
            0 0 0 1px var(--speaking),
            0 0 5px rgba(255,77,77,0.7);
        }


        @keyframes speakingEyes {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-1px);
          }
        }


        @keyframes pixelTalk {
          0% {
            width: 8px;
            height: 3px;
          }

          33% {
            width: 15px;
            height: 6px;
          }

          66% {
            width: 11px;
            height: 4px;
          }

          100% {
            width: 13px;
            height: 5px;
          }
        }


        /*
        =========================================
        MOUTH
        =========================================
        */

        .pixel-ai-mouth {
          width: 14px;
          height: 3px;

          background: var(--crt-green-bright);

          box-shadow:
            0 0 0 1px var(--crt-green),
            0 0 4px rgba(62,255,137,0.55);

          clip-path: polygon(
            0 0,

            3px 0,
            3px 1px,

            calc(100% - 3px) 1px,
            calc(100% - 3px) 0,

            100% 0,
            100% 2px,

            calc(100% - 3px) 2px,
            calc(100% - 3px) 3px,

            3px 3px,
            3px 2px,

            0 2px
          );
        }


        /*
        =========================================
        CRT GLITCH
        =========================================
        */

        .pixel-ai-glitch {
          position: absolute;

          left: -4px;

          width: calc(100% + 8px);
          height: 3px;

          background:
            linear-gradient(
              to right,
              transparent 0%,
              #8affb8 15%,
              #ffffff 50%,
              #8affb8 85%,
              transparent 100%
            );

          opacity: 0;

          z-index: 40;

          pointer-events: none;
        }


        .pixel-ai-glitch.active {
          opacity: 0.8;

          animation:
            pixelGlitch
            90ms
            steps(3)
            infinite;
        }


        @keyframes pixelGlitch {
          0% {
            top: 8px;

            transform:
              translateX(-3px)
              scaleX(1.1);
          }

          25% {
            top: 17px;

            transform:
              translateX(4px)
              scaleX(0.85);
          }

          50% {
            top: 28px;

            transform:
              translateX(-5px)
              scaleX(1.2);
          }

          75% {
            top: 37px;

            transform:
              translateX(3px)
              scaleX(0.9);
          }

          100% {
            top: 45px;

            transform:
              translateX(-2px)
              scaleX(1);
          }
        }


        /*
        =========================================
        PIXEL NOISE
        =========================================
        */

        .pixel-ai-noise {
          position: absolute;

          inset: 0;

          z-index: 35;

          pointer-events: none;

          opacity: 0.11;

          background-image:
            radial-gradient(
              #ffffff 1px,
              transparent 1px
            );

          background-size: 4px 4px;

          animation:
            pixelNoise
            250ms
            steps(2)
            infinite;
        }


        .pixel-ai.thinking .pixel-ai-noise {
          opacity: 0.18;
        }


        .pixel-ai.listening .pixel-ai-noise {
          opacity: 0.14;
        }


        .pixel-ai.speaking .pixel-ai-noise {
          opacity: 0.17;
        }


        @keyframes pixelNoise {
          0% {
            transform:
              translate(0, 0);
          }

          50% {
            transform:
              translate(2px, -1px);
          }

          100% {
            transform:
              translate(-1px, 2px);
          }
        }


        /*
        =========================================
        POWER LED
        =========================================
        */

        .pixel-ai-led {
          position: absolute;

          right: 7px;
          bottom: 7px;

          width: 5px;
          height: 5px;

          background: var(--crt-green);

          border: 1px solid #111;

          box-shadow:
            1px 1px 0 #555,
            0 0 4px rgba(49,255,117,0.5);

          z-index: 50;
        }


        /*
        =========================================
        THINKING LED
        =========================================
        */

        .pixel-ai.thinking .pixel-ai-led {
          background: var(--thinking);

          box-shadow:
            1px 1px 0 #555,
            0 0 5px rgba(255,216,61,0.75);

          animation:
            ledThinking
            500ms
            steps(2)
            infinite alternate;
        }


        @keyframes ledThinking {
          from {
            opacity: 0.45;
          }

          to {
            opacity: 1;
          }
        }


        /*
        =========================================
        LISTENING LED
        =========================================
        */

        .pixel-ai.listening .pixel-ai-led {
          background: var(--listening);

          box-shadow:
            1px 1px 0 #555,
            0 0 6px rgba(61,231,255,0.9);

          animation:
            ledListening
            350ms
            steps(2)
            infinite alternate;
        }


        @keyframes ledListening {
          from {
            opacity: 0.5;
          }

          to {
            opacity: 1;
          }
        }


        /*
        =========================================
        SPEAKING LED
        =========================================
        */

        .pixel-ai.speaking .pixel-ai-led {
          background: var(--speaking);

          box-shadow:
            1px 1px 0 #555,
            0 0 6px rgba(255,77,77,0.9);

          animation:
            ledSpeaking
            180ms
            steps(2)
            infinite alternate;
        }


        @keyframes ledSpeaking {
          from {
            opacity: 0.45;
          }

          to {
            opacity: 1;
          }
        }


        /*
        =========================================
        FLOAT
        =========================================
        */

        @keyframes pixelFloat {
          0%,
          100% {
            transform:
              translateY(0);
          }

          25% {
            transform:
              translateY(-1px);
          }

          50% {
            transform:
              translateY(-3px);
          }

          75% {
            transform:
              translateY(-1px);
          }
        }


        /*
        =========================================
        HOVER
        =========================================
        */

        .pixel-ai:hover {
          animation:
            pixelHover
            300ms
            steps(3)
            forwards;
        }


        .pixel-ai:hover .pixel-ai-screen {
          box-shadow:
            inset 3px 3px 0 #020604,
            inset -2px -2px 0 #263c32,
            0 0 0 1px rgba(62,255,137,0.6);
        }


        @keyframes pixelHover {
          0% {
            transform:
              translateY(0);
          }

          33% {
            transform:
              translateY(-3px);
          }

          66% {
            transform:
              translateY(-5px);
          }

          100% {
            transform:
              translateY(-3px);
          }
        }


        /*
        =========================================
        CLICK
        =========================================
        */

        .pixel-ai:active {
          transform:
            translate(
              3px,
              3px
            );

          animation: none;
        }


        /*
        =========================================
        MOBILE
        =========================================
        */

        @media (max-width: 600px) {
          .pixel-ai {
            right: 16px;
            bottom: 60px;

            width: 68px;
            height: 68px;
          }

          .pixel-ai-screen {
            left: 8px;
            top: 9px;

            width: 52px;
            height: 46px;
          }

          .pixel-ai-eyes {
            gap: 12px;
          }

          .pixel-ai-eye {
            width: 9px;
            height: 16px;
          }

          .pixel-ai-mouth {
            width: 12px;
          }
        }


        /*
        =========================================
        REDUCE MOTION
        =========================================
        */

        @media (prefers-reduced-motion: reduce) {
          .pixel-ai,
          .pixel-ai *,
          .pixel-ai::before,
          .pixel-ai::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
          }
        }

      `}</style>


      <div
        className={`
          pixel-ai
          ${isThinking ? 'thinking' : ''}
          ${isListening ? 'listening' : ''}
          ${isSpeaking ? 'speaking' : ''}
        `}
        onClick={() => {
          playOpenSound();
          onClick?.();
        }}
        role="button"
        tabIndex={0}
        aria-label="Open AI Assistant"
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();

            playOpenSound();
            onClick?.();
          }
        }}
      >

        {/* =====================================
            OUTER RETRO CASE
        ====================================== */}

        <div className="pixel-ai-body">

          {/* BLACK FRAME */}

          <div className="pixel-ai-frame">

            {/* CRT SCREEN */}

            <div className="pixel-ai-screen">

              {/* GLITCH */}

              <div
                className={`
                  pixel-ai-glitch
                  ${glitch ? 'active' : ''}
                `}
              />

              {/* NOISE */}

              <div className="pixel-ai-noise" />

              {/* FACE */}

              <div className="pixel-ai-face">

                {/* EYES */}

                <div className={eyeClassName}>

                  <div className="pixel-ai-eye" />

                  <div className="pixel-ai-eye" />

                </div>


                {/* MOUTH */}

                <div className="pixel-ai-mouth" />

              </div>

            </div>

          </div>


          {/* HARDWARE HIGHLIGHT */}

          <div className="pixel-ai-highlight" />


          {/* POWER LED */}

          <div className="pixel-ai-led" />

        </div>

      </div>
    </>
  );
}

export default AiAssistantSphere;