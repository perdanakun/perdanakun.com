import React, { useEffect, useState } from 'react';

/*
 * ============================================================
 * PERDANA PC
 * Award BIOS / Windows 95 style boot sequence
 *
 * RESPONSIVE:
 *
 * Smartphone:
 *   responsive
 *   max scale 2
 *
 * Tablet:
 *   responsive
 *   max scale 2
 *
 * Laptop kecil:
 *   responsive
 *   max scale 2
 *
 * Desktop HD:
 *   fullscreen 16:9
 *   tidak dipaksa 4:3
 *   ukuran teks dibuat proporsional untuk layar modern
 *
 * ============================================================
 */


/* ============================================================
   BIOS POST DATA
   ============================================================ */

const BIOS_LINES = [
  {
    t: 'PERDANA PC SYSTEMS',
    bright: true,
    bold: true,
  },

  {
    t: 'Award Modular BIOS v4.51PG',
  },

  {
    t: 'Copyright (C) 1984-1997, Award Software, Inc.',
  },

  {
    t: 'PDRN-686BX BIOS V1.00',
  },

  {
    t: '',
  },

  {
    t: 'Pentium(R) II CPU at 233MHz',
    bright: true,
  },

  {
    t: 'Memory Test : 65536K OK',
    bright: true,
  },

  {
    t: '',
  },

  {
    t: 'Primary Master : PERDANA 4.1GB',
  },

  {
    t: 'Primary Slave  : None',
  },

  {
    t: 'Secondary Master : ATAPI CD-ROM',
  },

  {
    t: '',
  },

  {
    t: 'Award Plug and Play BIOS Extension v1.0A',
  },

  {
    t: 'Detecting IDE Primary Master ...',
  },

  {
    t: 'Detecting IDE Secondary Master ...',
  },

  {
    t: '',
  },

  {
    t: 'Initializing Plug and Play Cards ...',
    bright: true,
  },

  {
    t: 'Verifying DMI Pool Data ...',
  },

  {
    t: 'Update Success',
    bright: true,
  },

  {
    t: '',
  },

  {
    t: 'Boot Sequence : A:,CDROM,C:',
  },

  {
    t: '',
  },

  {
    t: 'Press DEL to enter SETUP',
    bright: true,
  },
];


/* ============================================================
   DOS
   ============================================================ */

const DOS_LINES = [
  {
    t: 'Starting Windows 95...',
    bright: true,
  },
];


/* ============================================================
   WINDOWS 95
   ============================================================ */

const WINDOWS_LINES = [
  {
    t: 'Starting Windows 95...',
    bright: true,
  },

  {
    t: '',
  },

  {
    t: 'Loading system files...',
  },

  {
    t: 'Initializing Windows 95...',
  },
];


/* ============================================================
   RESPONSIVE SCALE
   ============================================================

   Mobile / tablet / laptop kecil:
     Virtual 640×480
     scale maksimal 2

   Desktop:
     Tidak menggunakan scale transform untuk seluruh canvas.

     Sebagai gantinya:
       screen menjadi fullscreen
       typography dan layout menggunakan vw/vh
       sehingga tidak menghasilkan font 36px hanya karena
       canvas 640×480 diperbesar 2.25x.
   ============================================================ */

function useResponsiveMode() {
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') {
      return 'mobile';
    }

    return window.innerWidth > 1200
      ? 'desktop'
      : 'compact';
  });


  useEffect(() => {
    const updateMode = () => {
      setMode(
        window.innerWidth > 1200
          ? 'desktop'
          : 'compact'
      );
    };


    updateMode();


    window.addEventListener(
      'resize',
      updateMode
    );

    window.addEventListener(
      'orientationchange',
      updateMode
    );


    return () => {
      window.removeEventListener(
        'resize',
        updateMode
      );

      window.removeEventListener(
        'orientationchange',
        updateMode
      );
    };
  }, []);


  return mode;
}


/* ============================================================
   COMPACT SCALE
   ============================================================ */

function useCompactScale() {
  const [scale, setScale] = useState(() => {
    if (typeof window === 'undefined') {
      return 1;
    }

    return Math.min(
      window.innerWidth / 640,
      window.innerHeight / 480,
      2
    );
  });


  useEffect(() => {
    const updateScale = () => {
      const widthScale =
        window.innerWidth / 640;

      const heightScale =
        window.innerHeight / 480;


      const nextScale =
        Math.min(
          widthScale,
          heightScale,
          2
        );


      setScale(nextScale);
    };


    updateScale();


    window.addEventListener(
      'resize',
      updateScale
    );

    window.addEventListener(
      'orientationchange',
      updateScale
    );


    return () => {
      window.removeEventListener(
        'resize',
        updateScale
      );

      window.removeEventListener(
        'orientationchange',
        updateScale
      );
    };
  }, []);


  return scale;
}


/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function PerdanaBootScreen() {
  const [phase, setPhase] =
    useState('bios');

  const [biosCount, setBiosCount] =
    useState(0);

  const [cursor, setCursor] =
    useState(true);

  const [windowsProgress, setWindowsProgress] =
    useState(0);

  const [windowsCount, setWindowsCount] =
    useState(0);


  const responsiveMode =
    useResponsiveMode();


  const compactScale =
    useCompactScale();


  /* ==========================================================
     BIOS POST
     ========================================================== */

  useEffect(() => {
    if (phase !== 'bios') {
      return;
    }


    const total =
      BIOS_LINES.length;


    const interval =
      5000 / total;


    const timer =
      setInterval(() => {
        setBiosCount((current) => {
          if (current >= total) {
            clearInterval(timer);

            return total;
          }


          return current + 1;
        });
      }, interval);


    return () => {
      clearInterval(timer);
    };
  }, [phase]);


  /* ==========================================================
     BIOS → DOS
     ========================================================== */

  useEffect(() => {
    if (phase !== 'bios') {
      return;
    }


    const timer =
      setTimeout(() => {
        setPhase('dos');
      }, 5200);


    return () => {
      clearTimeout(timer);
    };
  }, [phase]);


  /* ==========================================================
     CURSOR BLINK
     ========================================================== */

  useEffect(() => {
    const timer =
      setInterval(() => {
        setCursor((current) => !current);
      }, 420);


    return () => {
      clearInterval(timer);
    };
  }, []);


  /* ==========================================================
     DOS → WINDOWS
     ========================================================== */

  useEffect(() => {
    if (phase !== 'dos') {
      return;
    }


    const timer =
      setTimeout(() => {
        setPhase('windows');
      }, 1000);


    return () => {
      clearTimeout(timer);
    };
  }, [phase]);


  /* ==========================================================
     WINDOWS 95 STARTUP
     ========================================================== */

  useEffect(() => {
    if (phase !== 'windows') {
      return;
    }


    setWindowsProgress(0);
    setWindowsCount(0);


    const progressTimer =
      setInterval(() => {
        setWindowsProgress((current) => {
          if (current >= 100) {
            clearInterval(
              progressTimer
            );

            return 100;
          }


          return Math.min(
            current + 2.6,
            100
          );
        });
      }, 95);


    const textTimer =
      setInterval(() => {
        setWindowsCount((current) => {
          if (
            current >=
            WINDOWS_LINES.length
          ) {
            clearInterval(
              textTimer
            );

            return WINDOWS_LINES.length;
          }


          return current + 1;
        });
      }, 500);


    return () => {
      clearInterval(
        progressTimer
      );

      clearInterval(
        textTimer
      );
    };
  }, [phase]);


  return (
    <div
      className={[
        'perdana-boot-root',

        responsiveMode === 'desktop'
          ? 'desktop-mode'
          : 'compact-mode',
      ].join(' ')}
    >

      <div className="vga-viewport">

        <div
          className={[
            'vga-screen',

            responsiveMode === 'desktop'
              ? 'desktop-screen'
              : 'compact-screen',
          ].join(' ')}
          style={
            responsiveMode === 'desktop'
              ? undefined
              : {
                  transform:
                    `translate3d(-50%, -50%, 0) scale(${compactScale})`,
                }
          }
        >

          {phase === 'bios' && (
            <BIOSScreen
              lines={BIOS_LINES.slice(
                0,
                biosCount
              )}
            />
          )}


          {phase === 'dos' && (
            <DOSScreen
              lines={DOS_LINES}
              cursor={cursor}
            />
          )}


          {phase === 'windows' && (
            <Windows95Screen
              progress={windowsProgress}
              lines={WINDOWS_LINES.slice(
                0,
                windowsCount
              )}
            />
          )}

        </div>

      </div>


      <style>{`

        /* =====================================================
           GLOBAL
           ===================================================== */

        html,
        body,
        #root {
          margin: 0;
          padding: 0;

          width: 100%;
          height: 100%;

          background: #000;

          overflow: hidden;
        }


        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           ROOT
           ===================================================== */

        .perdana-boot-root {
          position: fixed;

          inset: 0;

          width: 100vw;
          height: 100vh;

          background: #000;

          overflow: hidden;

          user-select: none;

          touch-action: none;
        }


        /* =====================================================
           VIEWPORT
           ===================================================== */

        .vga-viewport {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: hidden;

          background: #000;
        }


        /* =====================================================
           COMPACT SCREEN
           
           Smartphone / tablet / laptop kecil.
           
           Tetap virtual 640×480.
           ===================================================== */

        .compact-screen {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 640px;
          height: 480px;

          transform-origin:
            center center;

          background: #000;

          overflow: hidden;

          image-rendering: pixelated;

          font-synthesis: none;

          -webkit-font-smoothing: none;

          -moz-osx-font-smoothing: grayscale;

          backface-visibility: hidden;

          will-change: transform;
        }


        /* =====================================================
           DESKTOP SCREEN
           
           Desktop HD modern:
           
           100vw × 100vh
           
           Tidak lagi menggunakan transform scale.
           ===================================================== */

        .desktop-screen {
          position: absolute;

          inset: 0;

          width: 100vw;
          height: 100vh;

          background: #000;

          overflow: hidden;

          image-rendering: pixelated;

          font-synthesis: none;

          -webkit-font-smoothing: none;

          -moz-osx-font-smoothing: grayscale;

          backface-visibility: hidden;
        }


        /* =====================================================
           SMALL MOBILE
           ===================================================== */

        @media (max-width: 480px) {

          .compact-screen {
            image-rendering: pixelated;
          }

        }


        /* =====================================================
           LANDSCAPE PHONE
           ===================================================== */

        @media (
          max-width: 900px
        ) and (
          orientation: landscape
        ) {

          .compact-screen {
            image-rendering: pixelated;
          }

        }


        /* =====================================================
           TABLET
           ===================================================== */

        @media (
          min-width: 600px
        ) and (
          max-width: 1200px
        ) {

          .compact-screen {
            image-rendering: pixelated;
          }

        }

      `}</style>

    </div>
  );
}


/* ============================================================
   BIOS SCREEN
   ============================================================ */

function BIOSScreen({
  lines,
}) {
  return (
    <div className="bios-screen">

      <div className="bios-content">

        {lines.map((line, index) => (
          <div
            key={index}
            className={[
              'bios-line',

              line.bright
                ? 'bios-bright'
                : '',

              line.bold
                ? 'bios-bold'
                : '',
            ].join(' ')}
          >
            {line.t}
          </div>
        ))}

      </div>


      <EPAEnergyStar />


      <div className="bios-bottom">

        <span>
          08/17/1997-i440BX-2A69KP3AC-00
        </span>

      </div>


      <style>{`

        .bios-screen {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          background: #000;

          color: #c0c0c0;

          font-family:
            "PxPlus IBM VGA8",
            "Perfect DOS VGA 437",
            "IBM VGA",
            "DOS",
            "Courier New",
            monospace;

          white-space: pre;

          text-align: left;

          overflow: hidden;

          -webkit-font-smoothing: none;

          -moz-osx-font-smoothing: grayscale;
        }


        /* =====================================================
           COMPACT
           ===================================================== */

        .compact-mode .bios-screen {
          font-size: 16px;

          line-height: 16px;
        }


        .compact-mode .bios-content {
          position: absolute;

          left: 16px;
          top: 16px;

          width: 608px;
        }


        .compact-mode .bios-line {
          width: 608px;

          height: 16px;

          line-height: 16px;

          color: #c0c0c0;

          font-weight: normal;
        }


        /* =====================================================
           DESKTOP
           
           1920px:
             font-size ≈ 24px
           
           2560px:
             font-size ≈ 29px
           
           Jadi tidak menjadi 36px karena transform 2.25.
           ===================================================== */

        .desktop-mode .bios-screen {
          font-size:
            clamp(
              20px,
              1.25vw,
              32px
            );

          line-height:
            1.05;

          padding:
            3.2vh 3vw;
        }


        .desktop-mode .bios-content {
          position: relative;

          left: auto;
          top: auto;

          width: 100%;
        }


        .desktop-mode .bios-line {
          width: 100%;

          height:
            1.05em;

          line-height:
            1.05em;

          color: #c0c0c0;

          font-weight: normal;
        }


        .bios-bright {
          color: #fff;
        }


        .bios-bold {
          font-weight: bold;
        }


        /* =====================================================
           BOTTOM
           ===================================================== */

        .compact-mode .bios-bottom {
          position: absolute;

          left: 16px;
          bottom: 16px;

          height: 16px;

          line-height: 16px;

          color: #c0c0c0;

          font-size: 16px;

          white-space: nowrap;
        }


        .desktop-mode .bios-bottom {
          position: absolute;

          left: 3vw;
          bottom: 3vh;

          height: 1em;

          line-height: 1em;

          color: #c0c0c0;

          font-size:
            clamp(
              20px,
              1.25vw,
              32px
            );

          white-space: nowrap;
        }

      `}</style>

    </div>
  );
}


/* ============================================================
   EPA ENERGY STAR
   ============================================================ */

function EPAEnergyStar() {
  return (
    <div
      className="epa-area"
      aria-hidden="true"
    >

      <div className="epa-star">

        <div className="epa-star-shape">
          ★
        </div>

      </div>

      <div className="epa-line">
        EPA POLLUTION
      </div>

      <div className="epa-line">
        PREVENTER
      </div>


      <style>{`

        .epa-area {
          position: absolute;

          color: #c0c0c0;

          text-align: center;

          white-space: nowrap;
        }


        /* =====================================================
           COMPACT
           ===================================================== */

        .compact-mode .epa-area {
          top: 18px;
          right: 20px;

          width: 142px;
          height: 92px;

          font-family:
            "PxPlus IBM VGA8",
            "Perfect DOS VGA 437",
            monospace;

          font-size: 12px;

          line-height: 13px;
        }


        .compact-mode .epa-star {
          width: 48px;
          height: 40px;

          margin: 0 auto 2px auto;

          display: flex;

          align-items: center;
          justify-content: center;
        }


        .compact-mode .epa-star-shape {
          color: #c0c0c0;

          font-family:
            Arial,
            sans-serif;

          font-size: 34px;

          line-height: 34px;

          transform:
            rotate(-8deg);

          text-shadow:
            1px 0 #000;
        }


        /* =====================================================
           DESKTOP
           ===================================================== */

        .desktop-mode .epa-area {
          top: 4vh;
          right: 3vw;

          width: 190px;

          font-family:
            "PxPlus IBM VGA8",
            "Perfect DOS VGA 437",
            monospace;

          font-size:
            clamp(
              14px,
              0.9vw,
              22px
            );

          line-height:
            1.1em;
        }


        .desktop-mode .epa-star {
          width: 70px;
          height: 58px;

          margin: 0 auto 4px auto;

          display: flex;

          align-items: center;
          justify-content: center;
        }


        .desktop-mode .epa-star-shape {
          color: #c0c0c0;

          font-family:
            Arial,
            sans-serif;

          font-size:
            clamp(
              42px,
              3vw,
              70px
            );

          line-height: 1;

          transform:
            rotate(-8deg);

          text-shadow:
            2px 0 #000;
        }


        .epa-line {
          height: 1.1em;

          line-height: 1.1em;

          color: #c0c0c0;

          letter-spacing: 0;
        }

      `}</style>

    </div>
  );
}


/* ============================================================
   DOS SCREEN
   ============================================================ */

function DOSScreen({
  lines,
  cursor,
}) {
  return (
    <div className="dos-screen">

      <div className="dos-content">

        {lines.map((line, index) => (
          <div
            key={index}
            className={[
              'dos-line',

              line.bright
                ? 'dos-bright'
                : '',
            ].join(' ')}
          >
            {line.t}
          </div>
        ))}


        <div className="dos-prompt">
          C:\&gt;WIN
          {cursor ? '_' : ' '}
        </div>

      </div>


      <style>{`

        .dos-screen {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          background: #000;

          color: #c0c0c0;

          font-family:
            "PxPlus IBM VGA8",
            "Perfect DOS VGA 437",
            "IBM VGA",
            "Courier New",
            monospace;

          white-space: pre;

          text-align: left;

          overflow: hidden;

          -webkit-font-smoothing: none;

          -moz-osx-font-smoothing: grayscale;
        }


        /* =====================================================
           COMPACT
           ===================================================== */

        .compact-mode .dos-screen {
          font-size: 16px;

          line-height: 16px;
        }


        .compact-mode .dos-content {
          position: absolute;

          left: 16px;
          top: 16px;

          width: 608px;
        }


        .compact-mode .dos-line,
        .compact-mode .dos-prompt {
          height: 16px;

          line-height: 16px;
        }


        /* =====================================================
           DESKTOP
           ===================================================== */

        .desktop-mode .dos-screen {
          font-size:
            clamp(
              20px,
              1.25vw,
              32px
            );

          line-height:
            1.05;
        }


        .desktop-mode .dos-content {
          position: absolute;

          left: 3vw;
          top: 3vh;

          width: 94vw;
        }


        .desktop-mode .dos-line,
        .desktop-mode .dos-prompt {
          height: 1.05em;

          line-height: 1.05em;
        }


        .dos-bright {
          color: #fff;
        }


        .dos-prompt {
          color: #fff;

          white-space: pre;
        }

      `}</style>

    </div>
  );
}


/* ============================================================
   WINDOWS 95 STARTUP
   ============================================================ */

function Windows95Screen({
  progress,
  lines,
}) {
  return (
    <div className="win95-screen">

      <div className="win95-sky" />


      {/* CLOUDS */}

      <Cloud
        left={30}
        top={54}
        scale={1.1}
      />

      <Cloud
        left={420}
        top={48}
        scale={0.78}
      />

      <Cloud
        left={285}
        top={325}
        scale={0.58}
      />


      {/* MAIN LOGO */}

      <div className="win95-logo-area">

        <WindowsFlag />


        <div className="perdana-word">
          WELCOME
        </div>


        <div className="windows-word">
          Windows 95
        </div>


        <div className="starting-text">
          Starting Perdana PC...
        </div>

      </div>


      {/* PROGRESS BAR */}

      <div className="win95-progress-frame">

        <div className="win95-progress-track">

          <div
            className="win95-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>


      {/* STATUS */}

      <div className="win95-status">

        {lines.length > 0
          ? lines[
              lines.length - 1
            ]?.t
          : 'Starting Windows 95...'}

      </div>


      {/* FOOTER */}

      <div className="win95-footer">
        Copyright © 2026 Perdana Corporation
      </div>


      {/* CRT */}

      <div className="crt-lines" />


      <style>{`

        .win95-screen {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: hidden;

          background: #3976b8;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          color: #fff;
        }


        .win95-sky {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to bottom,

              #24579d 0%,

              #3979ba 42%,

              #72a7d0 72%,

              #b6d3e6 100%
            );
        }


        /* =====================================================
           LOGO
           ===================================================== */

        .win95-logo-area {
          position: absolute;

          left: 50%;
          top: 46%;

          transform:
            translate(
              -50%,
              -50%
            );

          width: 400px;

          text-align: center;

          color: #fff;

          z-index: 10;

          text-shadow:
            2px 2px 0
            rgba(
              0,
              30,
              90,
              0.55
            );
        }


        .perdana-word {
          margin-top: 14px;

       font-family:
    "Trebuchet MS",
    Arial,
    sans-serif;

          font-size: 43px;

          line-height: 43px;

          font-weight: bold;

          letter-spacing: -2px;
        }


        .windows-word {
          margin-top: 2px;

          font-size: 25px;

          line-height: 27px;

          font-weight: normal;

          letter-spacing: 0.5px;
        }


        .starting-text {
          margin-top: 12px;

          font-size: 11px;

          line-height: 13px;

          font-weight: normal;

          opacity: 0.95;
        }


        /* =====================================================
           DESKTOP WINDOWS LOGO
           ===================================================== */

        .desktop-mode .win95-logo-area {
          width:
            min(
              42vw,
              760px
            );
        }


        .desktop-mode .perdana-word {
          margin-top: 2vh;

          font-size:
            clamp(
              52px,
              4.2vw,
              92px
            );

          line-height:
            1;

          letter-spacing:
            -0.04em;
        }


        .desktop-mode .windows-word {
          margin-top: 0.3vh;

          font-size:
            clamp(
              30px,
              2.3vw,
              52px
            );

          line-height:
            1.1;
        }


        .desktop-mode .starting-text {
          margin-top: 1.5vh;

          font-size:
            clamp(
              13px,
              0.9vw,
              20px
            );

          line-height:
            1.2;
        }


        /* =====================================================
           PROGRESS BAR
           ===================================================== */

        .win95-progress-frame {
          position: absolute;

          left: 50%;

          bottom: 44px;

          transform:
            translateX(-50%);

          width: 270px;

          height: 18px;

          padding: 2px;

          background: #071e50;

          border:
            2px solid #dcecff;

          box-shadow:
            inset
            1px 1px 0
            #0d3b77;

          z-index: 20;
        }


        .win95-progress-track {
          width: 100%;

          height: 100%;

          background: #001440;

          overflow: hidden;
        }


        .win95-progress-fill {
          height: 100%;

          background: #f4d000;

          transition:
            width 95ms linear;

          image-rendering: pixelated;
        }


        /* =====================================================
           DESKTOP PROGRESS BAR
           ===================================================== */

        .desktop-mode .win95-progress-frame {
          bottom:
            clamp(
              55px,
              7vh,
              90px
            );

          width:
            clamp(
              320px,
              24vw,
              520px
            );

          height:
            clamp(
              22px,
              2vh,
              30px
            );

          padding: 3px;
        }


        /* =====================================================
           STATUS
           ===================================================== */

        .win95-status {
          position: absolute;

          left: 50%;

          bottom: 23px;

          transform:
            translateX(-50%);

          width: 500px;

          color: #fff;

          font-size: 9px;

          line-height: 10px;

          text-align: center;

          opacity: 0.9;

          z-index: 20;
        }


        .desktop-mode .win95-status {
          bottom:
            clamp(
              28px,
              4vh,
              55px
            );

          width: 80vw;

          font-size:
            clamp(
              11px,
              0.75vw,
              18px
            );

          line-height:
            1.1;
        }


        /* =====================================================
           FOOTER
           ===================================================== */

        .win95-footer {
          position: absolute;

          left: 0;
          right: 0;

          bottom: 7px;

          color: #fff;

          font-size: 7px;

          line-height: 8px;

          text-align: center;

          opacity: 0.65;

          z-index: 20;
        }


        .desktop-mode .win95-footer {
          bottom:
            clamp(
              8px,
              1.2vh,
              18px
            );

          font-size:
            clamp(
              9px,
              0.55vw,
              14px
            );

          line-height: 1.1;
        }


        /* =====================================================
           CRT
           ===================================================== */

        .crt-lines {
          position: absolute;

          inset: 0;

          pointer-events: none;

          z-index: 100;

          background:
            repeating-linear-gradient(
              to bottom,

              rgba(
                255,
                255,
                255,
                0.018
              ) 0px,

              rgba(
                255,
                255,
                255,
                0.018
              ) 1px,

              rgba(
                0,
                0,
                0,
                0.018
              ) 1px,

              rgba(
                0,
                0,
                0,
                0.018
              ) 3px
            );

          opacity: 0.45;

          mix-blend-mode: overlay;
        }

      `}</style>

    </div>
  );
}


/* ============================================================
   WINDOWS FLAG
   ============================================================ */

function WindowsFlag() {
  return (
    <div
      className="windows-flag"
      aria-hidden="true"
    >

      <div className="flag-red" />

      <div className="flag-green" />

      <div className="flag-blue" />

      <div className="flag-yellow" />


      <style>{`

        .windows-flag {
          position: relative;

          width: 112px;
          height: 90px;

          margin: 0 auto;

          transform:
            skewY(-5deg);

          filter:
            drop-shadow(
              3px 3px 0
              rgba(
                0,
                20,
                80,
                0.45
              )
            );
        }


        .windows-flag > div {
          position: absolute;

          width: 51px;
          height: 40px;
        }


        .flag-red {
          left: 0;
          top: 0;

          background: #f04438;

          border-right:
            3px solid #fff;

          border-bottom:
            3px solid #fff;
        }


        .flag-green {
          right: 0;
          top: 0;

          background: #20a44a;

          border-left:
            3px solid #fff;

          border-bottom:
            3px solid #fff;
        }


        .flag-blue {
          left: 0;
          bottom: 0;

          background: #2868c5;

          border-right:
            3px solid #fff;

          border-top:
            3px solid #fff;
        }


        .flag-yellow {
          right: 0;
          bottom: 0;

          background: #f4ca24;

          border-left:
            3px solid #fff;

          border-top:
            3px solid #fff;
        }


        /* =====================================================
           DESKTOP FLAG
           ===================================================== */

        .desktop-mode .windows-flag {
          width:
            clamp(
              130px,
              10vw,
              210px
            );

          height:
            clamp(
              105px,
              8vw,
              170px
            );
        }


        .desktop-mode .windows-flag > div {
          width:
            calc(
              50% - 4px
            );

          height:
            calc(
              50% - 4px
            );
        }


        .desktop-mode .flag-red {
          border-right-width: 4px;
          border-bottom-width: 4px;
        }


        .desktop-mode .flag-green {
          border-left-width: 4px;
          border-bottom-width: 4px;
        }


        .desktop-mode .flag-blue {
          border-right-width: 4px;
          border-top-width: 4px;
        }


        .desktop-mode .flag-yellow {
          border-left-width: 4px;
          border-top-width: 4px;
        }

      `}</style>

    </div>
  );
}


/* ============================================================
   CLOUD
   ============================================================ */

function Cloud({
  left,
  top,
  scale = 1,
}) {
  return (
    <div
      className="cloud"
      style={{
        '--cloud-left': `${left}px`,
        '--cloud-top': `${top}px`,
        '--cloud-scale': scale,
      }}
    >

      <div
        className="cloud-base"
      />


      <div
        className="cloud-puff-one"
      />


      <div
        className="cloud-puff-two"
      />


      <div
        className="cloud-puff-three"
      />


      <style>{`

        .cloud {
          position: absolute;

          left:
            var(--cloud-left);

          top:
            var(--cloud-top);

          width: 190px;
          height: 70px;

          transform:
            scale(
              var(--cloud-scale)
            );

          transform-origin:
            top left;

          z-index: 2;

          opacity: 0.82;
        }


        .cloud-base {
          position: absolute;

          left: 25px;
          bottom: 0;

          width: 145px;
          height: 30px;

          background: #fff;

          border-radius: 25px;
        }


        .cloud-puff-one {
          position: absolute;

          left: 50px;
          bottom: 18px;

          width: 58px;
          height: 48px;

          background: #fff;

          border-radius: 50%;
        }


        .cloud-puff-two {
          position: absolute;

          left: 94px;
          bottom: 15px;

          width: 68px;
          height: 53px;

          background: #fff;

          border-radius: 50%;
        }


        .cloud-puff-three {
          position: absolute;

          left: 8px;
          bottom: 5px;

          width: 62px;
          height: 37px;

          background: #fff;

          border-radius: 50%;
        }


        /* =====================================================
           DESKTOP CLOUDS
           ===================================================== */

        .desktop-mode .cloud {
          left:
            calc(
              var(--cloud-left) * 1.5
            );

          top:
            calc(
              var(--cloud-top) * 1.5
            );

          transform:
            scale(
              calc(
                var(--cloud-scale) * 1.8
              )
            );
        }

      `}</style>

    </div>
  );
}
