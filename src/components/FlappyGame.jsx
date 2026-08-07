import { useRef, useEffect, useState, useCallback } from 'react';

// --- GAME CONFIG (easy to tweak) ---
const CANVAS_W = 280;
const CANVAS_H = 360;
const GRAVITY = 0.35;
const FLAP_STRENGTH = -6.5;
const PIPE_GAP = 110;
const PIPE_WIDTH = 42;
const PIPE_SPEED = 2.2;
const PIPE_SPAWN_FRAMES = 95; // lower = tighter pipe spacing
const BIRD_SIZE = 16;
const BIRD_X = 60;

export default function FlappyGame() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const frameCountRef = useRef(0);

  // All game state lives in refs so the loop doesn't hit stale closures
  const birdYRef = useRef(CANVAS_H / 2);
  const birdVelRef = useRef(0);
  const pipesRef = useRef([]); // { x, topHeight }
  const scoreRef = useRef(0);
  const statusRef = useRef('ready'); // 'ready' | 'playing' | 'over'

  // Plain React state just to trigger UI overlay re-renders (score, game over, etc.)
  const [uiScore, setUiScore] = useState(0);
  const [uiStatus, setUiStatus] = useState('ready');
  const [bestScore, setBestScore] = useState(0);

  const resetGame = useCallback(() => {
    birdYRef.current = CANVAS_H / 2;
    birdVelRef.current = 0;
    pipesRef.current = [];
    scoreRef.current = 0;
    frameCountRef.current = 0;
    statusRef.current = 'ready';
    setUiScore(0);
    setUiStatus('ready');
  }, []);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const loop = () => {
      // --- UPDATE ---
      if (statusRef.current === 'playing') {
        frameCountRef.current += 1;

        birdVelRef.current += GRAVITY;
        birdYRef.current += birdVelRef.current;

        // Spawn a new pipe
        if (frameCountRef.current % PIPE_SPAWN_FRAMES === 0) {
          const topHeight = 40 + Math.random() * (CANVAS_H - PIPE_GAP - 80);
          pipesRef.current.push({ x: CANVAS_W, topHeight, passed: false });
        }

        // Move pipes + check score
        pipesRef.current.forEach((pipe) => {
          pipe.x -= PIPE_SPEED;
          if (!pipe.passed && pipe.x + PIPE_WIDTH < BIRD_X) {
            pipe.passed = true;
            scoreRef.current += 1;
            setUiScore(scoreRef.current);
          }
        });
        pipesRef.current = pipesRef.current.filter((p) => p.x > -PIPE_WIDTH);

        // Check floor/ceiling collision
        if (birdYRef.current + BIRD_SIZE / 2 > CANVAS_H || birdYRef.current - BIRD_SIZE / 2 < 0) {
          statusRef.current = 'over';
          setUiStatus('over');
          setBestScore((b) => Math.max(b, scoreRef.current));
        }

        // Check pipe collision
        for (const pipe of pipesRef.current) {
          const birdLeft = BIRD_X - BIRD_SIZE / 2;
          const birdRight = BIRD_X + BIRD_SIZE / 2;
          const birdTop = birdYRef.current - BIRD_SIZE / 2;
          const birdBottom = birdYRef.current + BIRD_SIZE / 2;

          const hitsPipeX = birdRight > pipe.x && birdLeft < pipe.x + PIPE_WIDTH;
          const hitsGap = birdTop > pipe.topHeight && birdBottom < pipe.topHeight + PIPE_GAP;

          if (hitsPipeX && !hitsGap) {
            statusRef.current = 'over';
            setUiStatus('over');
            setBestScore((b) => Math.max(b, scoreRef.current));
          }
        }
      }

      // --- DRAW ---
      // Sky
      ctx.fillStyle = '#5c94fc';
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // Retro blocky clouds (decoration)
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(30, 50, 24, 10);
      ctx.fillRect(150, 90, 30, 10);
      ctx.fillRect(200, 40, 20, 8);

      // Pipes
      ctx.fillStyle = '#4caf50';
      ctx.strokeStyle = '#2e7d32';
      ctx.lineWidth = 2;
      pipesRef.current.forEach((pipe) => {
        ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.topHeight);
        ctx.strokeRect(pipe.x, 0, PIPE_WIDTH, pipe.topHeight);
        const bottomY = pipe.topHeight + PIPE_GAP;
        ctx.fillRect(pipe.x, bottomY, PIPE_WIDTH, CANVAS_H - bottomY);
        ctx.strokeRect(pipe.x, bottomY, PIPE_WIDTH, CANVAS_H - bottomY);
      });

      // Ground
      ctx.fillStyle = '#ded895';
      ctx.fillRect(0, CANVAS_H - 12, CANVAS_W, 12);

      // Bird (pixel block to match the win95 aesthetic)
      ctx.save();
      ctx.translate(BIRD_X, birdYRef.current);
      const angle = Math.max(-0.5, Math.min(0.9, birdVelRef.current * 0.08));
      ctx.rotate(angle);
      ctx.fillStyle = '#ffcc00';
      ctx.fillRect(-BIRD_SIZE / 2, -BIRD_SIZE / 2, BIRD_SIZE, BIRD_SIZE);
      ctx.fillStyle = '#000000';
      ctx.fillRect(2, -4, 4, 4); // eye
      ctx.fillStyle = '#ff6600';
      ctx.fillRect(BIRD_SIZE / 2 - 2, -2, 6, 4); // beak
      ctx.restore();

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Controls: click/tap the canvas or press Space
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        flap();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [flap]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          fontFamily: 'sans-serif',
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#000',
          display: 'flex',
          justifyContent: 'space-between',
          width: CANVAS_W,
        }}
      >
        <span>Score: {uiScore}</span>
        <span>Best: {bestScore}</span>
      </div>

      <div
        style={{
          position: 'relative',
          width: CANVAS_W,
          height: CANVAS_H,
          border: '2px inset #ffffff',
          cursor: 'pointer',
        }}
        onClick={flap}
      >
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          style={{ display: 'block', imageRendering: 'pixelated' }}
        />

        {uiStatus !== 'playing' && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              backgroundColor: 'rgba(0,0,0,0.35)',
              color: '#ffffff',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              padding: '10px',
            }}
          >
            {uiStatus === 'ready' && (
              <>
                <div style={{ fontSize: '13px', fontWeight: 'bold' }}>flappy.exe</div>
                <div style={{ fontSize: '11px' }}>Click or press Space to flap</div>
              </>
            )}
            {uiStatus === 'over' && (
              <>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#ff5555' }}>Game Over</div>
                <div style={{ fontSize: '11px' }}>Score: {scoreRef.current}</div>
                <div style={{ fontSize: '11px' }}>Click to play again</div>
              </>
            )}
          </div>
        )}
      </div>

      <div style={{ fontFamily: 'sans-serif', fontSize: '10px', color: '#333' }}>
        Tip: space / click = flap
      </div>
    </div>
  );
}
