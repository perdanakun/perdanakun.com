import { useRef, useEffect, useState, useCallback } from 'react';

// =====================================
// GAME CONFIG
// Logical resolution.
// Game akan di-scale mengikuti ukuran layar.
// =====================================

const GAME_W = 280;
const GAME_H = 360;

const GRAVITY = 0.35;
const FLAP_STRENGTH = -6.5;
const PIPE_GAP = 110;
const PIPE_WIDTH = 42;
const PIPE_SPEED = 2.2;
const PIPE_SPAWN_FRAMES = 95;
const BIRD_SIZE = 16;
const BIRD_X = 60;

export default function FlappyGame() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const frameCountRef = useRef(0);

  const birdYRef = useRef(GAME_H / 2);
  const birdVelRef = useRef(0);
  const pipesRef = useRef([]);
  const scoreRef = useRef(0);
  const statusRef = useRef('ready');

  const [uiScore, setUiScore] = useState(0);
  const [uiStatus, setUiStatus] = useState('ready');
  const [bestScore, setBestScore] = useState(0);

  // =====================================
  // RESPONSIVE CANVAS SIZE
  // =====================================

  const [canvasSize, setCanvasSize] = useState({
    width: GAME_W,
    height: GAME_H,
  });

  // =====================================
  // CALCULATE FULLSCREEN GAME SIZE
  // =====================================

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const availableWidth = rect.width;
      const availableHeight = rect.height;

      if (!availableWidth || !availableHeight) return;

      // Pertahankan aspect ratio 280:360
      const scale = Math.min(
        availableWidth / GAME_W,
        availableHeight / GAME_H
      );

      const width = Math.max(
        1,
        Math.floor(GAME_W * scale)
      );

      const height = Math.max(
        1,
        Math.floor(GAME_H * scale)
      );

      setCanvasSize({
        width,
        height,
      });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('resize', updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  // =====================================
  // RESET GAME
  // =====================================

  const resetGame = useCallback(() => {
    birdYRef.current = GAME_H / 2;
    birdVelRef.current = 0;
    pipesRef.current = [];
    scoreRef.current = 0;
    frameCountRef.current = 0;
    statusRef.current = 'ready';

    setUiScore(0);
    setUiStatus('ready');
  }, []);

  // =====================================
  // FLAP
  // =====================================

  const flap = useCallback(() => {
    if (statusRef.current === 'ready') {
      statusRef.current = 'playing';
      setUiStatus('playing');
    }

    if (statusRef.current === 'over') {
      resetGame();
      return;
    }

    birdVelRef.current = FLAP_STRENGTH;
  }, [resetGame]);

  // =====================================
  // GAME LOOP
  // =====================================

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const loop = () => {

      // =====================================
      // UPDATE
      // =====================================

      if (statusRef.current === 'playing') {
        frameCountRef.current += 1;

        birdVelRef.current += GRAVITY;
        birdYRef.current += birdVelRef.current;

        // Spawn pipe
        if (
          frameCountRef.current %
            PIPE_SPAWN_FRAMES ===
          0
        ) {
          const topHeight =
            40 +
            Math.random() *
              (GAME_H - PIPE_GAP - 80);

          pipesRef.current.push({
            x: GAME_W,
            topHeight,
            passed: false,
          });
        }

        // Move pipes + score
        pipesRef.current.forEach((pipe) => {
          pipe.x -= PIPE_SPEED;

          if (
            !pipe.passed &&
            pipe.x + PIPE_WIDTH < BIRD_X
          ) {
            pipe.passed = true;

            scoreRef.current += 1;

            setUiScore(scoreRef.current);
          }
        });

        pipesRef.current =
          pipesRef.current.filter(
            (p) => p.x > -PIPE_WIDTH
          );

        // =====================================
        // FLOOR / CEILING
        // =====================================

        if (
          birdYRef.current + BIRD_SIZE / 2 >
            GAME_H ||
          birdYRef.current - BIRD_SIZE / 2 <
            0
        ) {
          statusRef.current = 'over';

          setUiStatus('over');

          setBestScore((b) =>
            Math.max(
              b,
              scoreRef.current
            )
          );
        }

        // =====================================
        // PIPE COLLISION
        // =====================================

        for (const pipe of pipesRef.current) {
          const birdLeft =
            BIRD_X - BIRD_SIZE / 2;

          const birdRight =
            BIRD_X + BIRD_SIZE / 2;

          const birdTop =
            birdYRef.current -
            BIRD_SIZE / 2;

          const birdBottom =
            birdYRef.current +
            BIRD_SIZE / 2;

          const hitsPipeX =
            birdRight > pipe.x &&
            birdLeft <
              pipe.x + PIPE_WIDTH;

          const hitsGap =
            birdTop > pipe.topHeight &&
            birdBottom <
              pipe.topHeight + PIPE_GAP;

          if (hitsPipeX && !hitsGap) {
            statusRef.current = 'over';

            setUiStatus('over');

            setBestScore((b) =>
              Math.max(
                b,
                scoreRef.current
              )
            );
          }
        }
      }

      // =====================================
      // DRAW
      // =====================================

      ctx.clearRect(
        0,
        0,
        GAME_W,
        GAME_H
      );

      // Sky
      ctx.fillStyle = '#5c94fc';

      ctx.fillRect(
        0,
        0,
        GAME_W,
        GAME_H
      );

      // Clouds
      ctx.fillStyle = '#ffffff';

      ctx.fillRect(
        30,
        50,
        24,
        10
      );

      ctx.fillRect(
        150,
        90,
        30,
        10
      );

      ctx.fillRect(
        200,
        40,
        20,
        8
      );

      // =====================================
      // PIPES
      // =====================================

      ctx.fillStyle = '#4caf50';
      ctx.strokeStyle = '#2e7d32';
      ctx.lineWidth = 2;

      pipesRef.current.forEach(
        (pipe) => {
          ctx.fillRect(
            pipe.x,
            0,
            PIPE_WIDTH,
            pipe.topHeight
          );

          ctx.strokeRect(
            pipe.x,
            0,
            PIPE_WIDTH,
            pipe.topHeight
          );

          const bottomY =
            pipe.topHeight +
            PIPE_GAP;

          ctx.fillRect(
            pipe.x,
            bottomY,
            PIPE_WIDTH,
            GAME_H - bottomY
          );

          ctx.strokeRect(
            pipe.x,
            bottomY,
            PIPE_WIDTH,
            GAME_H - bottomY
          );
        }
      );

      // =====================================
      // GROUND
      // =====================================

      ctx.fillStyle = '#ded895';

      ctx.fillRect(
        0,
        GAME_H - 12,
        GAME_W,
        12
      );

      // =====================================
      // BIRD
      // =====================================

      ctx.save();

      ctx.translate(
        BIRD_X,
        birdYRef.current
      );

      const angle = Math.max(
        -0.5,
        Math.min(
          0.9,
          birdVelRef.current * 0.08
        )
      );

      ctx.rotate(angle);

      ctx.fillStyle = '#ffcc00';

      ctx.fillRect(
        -BIRD_SIZE / 2,
        -BIRD_SIZE / 2,
        BIRD_SIZE,
        BIRD_SIZE
      );

      // Eye
      ctx.fillStyle = '#000000';

      ctx.fillRect(
        2,
        -4,
        4,
        4
      );

      // Beak
      ctx.fillStyle = '#ff6600';

      ctx.fillRect(
        BIRD_SIZE / 2 - 2,
        -2,
        6,
        4
      );

      ctx.restore();

      rafRef.current =
        requestAnimationFrame(loop);
    };

    rafRef.current =
      requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(
        rafRef.current
      );
    };
  }, []);

  // =====================================
  // SPACE CONTROL
  // =====================================

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        flap();
      }
    };

    window.addEventListener(
      'keydown',
      onKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        onKeyDown
      );
    };
  }, [flap]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#c0c0c0',

        boxSizing: 'border-box',

        overflow: 'hidden',

        padding: '8px',
      }}
    >

      {/* =====================================
          SCORE
      ===================================== */}

      <div
        style={{
          fontFamily:
            'MS Sans Serif, sans-serif',

          fontSize: '12px',

          fontWeight: 'bold',

          color: '#000',

          display: 'flex',

          justifyContent:
            'space-between',

          width:
            `${canvasSize.width}px`,

          flexShrink: 0,

          marginBottom: '6px',
        }}
      >
        <span>
          Score: {uiScore}
        </span>

        <span>
          Best: {bestScore}
        </span>
      </div>

      {/* =====================================
          GAME
      ===================================== */}

      <div
        style={{
          position: 'relative',

          width:
            `${canvasSize.width}px`,

          height:
            `${canvasSize.height}px`,

          border:
            '2px inset #ffffff',

          cursor: 'pointer',

          flexShrink: 1,

          maxWidth: '100%',

          maxHeight: 'calc(100% - 45px)',

          boxSizing: 'border-box',

          touchAction: 'none',

          overflow: 'hidden',
        }}

        onPointerDown={(e) => {
          e.preventDefault();
          flap();
        }}
      >

        <canvas
          ref={canvasRef}

          width={GAME_W}
          height={GAME_H}

          style={{
            display: 'block',

            width: '100%',
            height: '100%',

            imageRendering:
              'pixelated',
          }}
        />

        {/* =====================================
            OVERLAY
        ===================================== */}

        {uiStatus !== 'playing' && (
          <div
            style={{
              position: 'absolute',

              inset: 0,

              display: 'flex',

              flexDirection:
                'column',

              alignItems:
                'center',

              justifyContent:
                'center',

              gap: '6px',

              backgroundColor:
                'rgba(0,0,0,0.35)',

              color: '#ffffff',

              fontFamily:
                'MS Sans Serif, sans-serif',

              textAlign: 'center',

              padding: '10px',

              boxSizing: 'border-box',

              pointerEvents: 'none',
            }}
          >

            {uiStatus === 'ready' && (
              <>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 'bold',
                  }}
                >
                  flappy.exe
                </div>

                <div
                  style={{
                    fontSize: '11px',
                  }}
                >
                  Click or press Space to flap
                </div>
              </>
            )}

            {uiStatus === 'over' && (
              <>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#ff5555',
                  }}
                >
                  Game Over
                </div>

                <div
                  style={{
                    fontSize: '11px',
                  }}
                >
                  Score: {scoreRef.current}
                </div>

                <div
                  style={{
                    fontSize: '11px',
                  }}
                >
                  Click to play again
                </div>
              </>
            )}

          </div>
        )}

      </div>

      {/* =====================================
          TIP
      ===================================== */}

      <div
        style={{
          fontFamily:
            'MS Sans Serif, sans-serif',

          fontSize: '10px',

          color: '#333',

          marginTop: '6px',

          flexShrink: 0,
        }}
      >
        Tip: space / click = flap
      </div>

    </div>
  );
}