import { useEffect, useState } from 'react';
import winBackground from '../../assets/images/win_background.jpg';
import cloudMedium from '../../assets/images/cloud_medium.png';
import cloudSmall from '../../assets/images/cloud_small.png';

function DynamicXPBackground() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

// DEBUG TIME
const totalMinutes = 12 * 60;

// Total waktu dengan presisi detik
const totalTime = totalMinutes + seconds / 60;
const getTimePhase = () => {
  if (totalMinutes >= 5 * 60 && totalMinutes < 7 * 60) {
    return 'sunrise';
  }

  if (totalMinutes >= 7 * 60 && totalMinutes < 17 * 60) {
    return 'day';
  }

  if (totalMinutes >= 17 * 60 && totalMinutes < 20 * 60) {
    return 'sunset';
  }

  return 'night';
};

const timePhase = getTimePhase();

const getSunPosition = () => {
  const sunrise = 5 * 60;
  const sunset = 19 * 60;

  // Sebelum sunrise
  if (totalMinutes <= sunrise) {
    return {
      x: -10,
      y: 60,
      opacity: 0,
    };
  }

  // Setelah sunset
  if (totalMinutes >= sunset) {
    return {
      x: 110,
      y: 60,
      opacity: 0,
    };
  }

  // Progress matahari dari sunrise → sunset
  const progress =
    (totalMinutes - sunrise) /
    (sunset - sunrise);

  const angle = Math.PI * progress;

  // Jalur matahari
  const x = 10 + progress * 80;
const y = 38 - Math.sin(angle) * 30;

  return {
    x,
    y,
    opacity: 1,
  };
};


const sun = getSunPosition();


const getSunStyle = () => {
  // 🌅 Sunrise
  if (totalMinutes >= 5 * 60 && totalMinutes < 7 * 60) {
    return {
      color: '#ffd08a',
      glow: 'rgba(255, 150, 70, 0.7)',
      size: 65,
    };
  }

  // ☀️ Siang
  if (totalMinutes >= 7 * 60 && totalMinutes < 17 * 60) {
    return {
      color: '#fff4a3',
      glow: 'rgba(255, 230, 120, 0.6)',
      size: 70,
    };
  }

  // 🌇 Sunset
  if (totalMinutes >= 17 * 60 && totalMinutes < 20 * 60) {
    return {
      color: '#ffb15c',
      glow: 'rgba(255, 100, 40, 0.75)',
      size: 65,
    };
  }

  // 🌙 Malam
  return {
    color: '#fff4a3',
    glow: 'rgba(255, 220, 120, 0)',
    size: 70,
  };
};

const sunStyle = getSunStyle();

  const getMoonPosition = () => {
  const moonrise = 19 * 60;
  const moonset = 5 * 60 + 24 * 60;

  let adjustedTime = totalMinutes;

  // Setelah tengah malam sampai sebelum sunrise
  if (totalMinutes < 5 * 60) {
    adjustedTime += 24 * 60;
  }

  if (
    adjustedTime < moonrise ||
    adjustedTime > moonset
  ) {
    return {
      x: 110,
      y: 60,
      opacity: 0,
    };
  }

  const progress =
    (adjustedTime - moonrise) /
    (moonset - moonrise);

  const angle = Math.PI * progress;

  const x = 90 - progress * 80;
  const y = 45 - Math.sin(angle) * 32;

  return {
    x,
    y,
    opacity: 1,
  };
};

const moon = getMoonPosition();

// ⭐ Mengatur opacity bintang berdasarkan waktu
const getStarsOpacity = () => {
  const sunrise = 5 * 60;
  const sunset = 19 * 60;

  // Malam penuh
  if (totalMinutes >= 21 * 60 || totalMinutes < 4 * 60) {
    return 1;
  }

  // Menjelang sunrise
  if (totalMinutes >= 4 * 60 && totalMinutes < sunrise) {
    return 1 - (totalMinutes - 4 * 60) / (60);
  }

  // Menjelang sunset
  if (totalMinutes >= sunset && totalMinutes < 21 * 60) {
    return (totalMinutes - sunset) / (2 * 60);
  }

  // Siang
  return 0;
};

const starsOpacity = getStarsOpacity();

// STARS
const stars = [
  { x: 8, y: 12, size: 2 },
  { x: 15, y: 22, size: 1 },
  { x: 23, y: 10, size: 3 },
  { x: 31, y: 18, size: 1 },
  { x: 39, y: 8, size: 2 },
  { x: 47, y: 25, size: 1 },
  { x: 55, y: 14, size: 3 },
  { x: 63, y: 7, size: 1 },
  { x: 70, y: 20, size: 2 },
  { x: 78, y: 11, size: 1 },
  { x: 86, y: 24, size: 3 },
  { x: 94, y: 9, size: 1 },

  { x: 12, y: 35, size: 1 },
  { x: 28, y: 30, size: 2 },
  { x: 43, y: 36, size: 1 },
  { x: 58, y: 32, size: 3 },
  { x: 74, y: 34, size: 1 },
  { x: 90, y: 31, size: 2 },
];


const getCloudOpacity = () => {
  if (totalMinutes >= 20 * 60 || totalMinutes < 5 * 60) {
    return 0;
  }

  if (totalMinutes >= 19 * 60) {
    return 1 - (totalMinutes - 19 * 60) / 60;
  }

  if (totalMinutes >= 5 * 60 && totalMinutes < 6 * 60) {
    return (totalMinutes - 5 * 60) / 60;
  }

  return 1;
};

const cloudOpacity = getCloudOpacity();

// ☁️ Menghitung posisi awan berdasarkan waktu
const getCloudPosition = (startPosition = 0, speed = 1) => {
  const dayStart = 5 * 60;
  const dayEnd = 24 * 60;

  const elapsed = Math.max(0, totalTime - dayStart);

  const progress =
    (elapsed / (dayEnd - dayStart)) * speed;

  return (startPosition + progress * 100) % 120 - 10;
};

const cloud1X = getCloudPosition(0, 0.5);
const cloud2X = getCloudPosition(40, 0.25);



  // Menentukan warna langit berdasarkan waktu
  const getSkyColor = () => {
    // 🌙 MALAM
    if (totalMinutes < 5 * 60) {
      return 'rgba(10, 25, 60, 0.65)';
    }

    // 🌅 SUBUH / SUNRISE
    if (totalMinutes < 7 * 60) {
      return 'rgba(255, 150, 90, 0.35)';
    }

    // ☀️ PAGI - SIANG
    if (totalMinutes < 17 * 60) {
      return 'rgba(80, 170, 235, 0)';
    }

    // 🌇 SUNSET
    if (totalMinutes < 20 * 60) {
      return 'rgba(255, 120, 70, 0.4)';
    }

    // 🌙 MALAM
    return 'rgba(10, 25, 60, 0.65)';
  };

  const skyColor = getSkyColor();


return (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      zIndex: 0,
    }}
  >

    {/* ========================================= */}
    {/* 1. XP BACKGROUND */}
    {/* ========================================= */}

    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${winBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />


    {/* ========================================= */}
    {/* 2. SKY COLOR OVERLAY */}
    {/* ========================================= */}

    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: skyColor,
        transition: 'background-color 5s ease',
        pointerEvents: 'none',
      }}
    />


{/* ========================================= */}
{/* ☁️ CLOUDS */}
{/* ========================================= */}

<img
  src={cloudMedium}
  alt=""
  style={{
    position: 'absolute',

    left: `${cloud1X}%`,
    top: '18%',

    width: '220px',
    height: 'auto',

    opacity: cloudOpacity,

    transition: 'left 1s linear, opacity 10s ease',

    pointerEvents: 'none',
    userSelect: 'none',
  }}
/>

<img
  src={cloudSmall}
  alt=""
  style={{
    position: 'absolute',

    left: `${cloud2X}%`,
    top: '27%',

    width: '140px',
    height: 'auto',

    opacity: cloudOpacity,

    transition: 'left 1s linear, opacity 10s ease',

    pointerEvents: 'none',
    userSelect: 'none',
  }}
/>


    {/* ========================================= */}
    {/* 3. STARS */}
    {/* ========================================= */}

    {stars.map((star, index) => (
      <div
        key={index}
        style={{
          position: 'absolute',

          left: `${star.x}%`,
          top: `${star.y}%`,

          width: `${star.size}px`,
          height: `${star.size}px`,

          borderRadius: '50%',

          backgroundColor: '#ffffff',

          boxShadow: `
            0 0 ${star.size * 2}px rgba(255, 255, 255, 1),
            0 0 ${star.size * 4}px rgba(180, 210, 255, 0.8),
            0 0 ${star.size * 7}px rgba(140, 190, 255, 0.4)
          `,

          opacity: starsOpacity,

          transition: 'opacity 10s ease',

          pointerEvents: 'none',
        }}
      />
    ))}


    {/* ========================================= */}
    {/* 4. SUN */}
    {/* ========================================= */}

    <div
      style={{
        position: 'absolute',

        left: `${sun.x}%`,
        top: `${sun.y}%`,

        width: `${sunStyle.size}px`,
        height: `${sunStyle.size}px`,

        transform: 'translate(-50%, -50%)',

        borderRadius: '50%',

        backgroundColor: sunStyle.color,

        boxShadow: `
          0 0 20px ${sunStyle.color},
          0 0 40px ${sunStyle.glow},
          0 0 70px ${sunStyle.glow}
        `,

        opacity: sun.opacity,

        transition: `
          left 1s linear,
          top 1s linear,
          opacity 5s ease,
          background-color 10s ease,
          box-shadow 10s ease
        `,

        pointerEvents: 'none',
      }}
    />


    {/* ========================================= */}
    {/* 5. MOON */}
    {/* ========================================= */}

    <div
      style={{
        position: 'absolute',

        left: `${moon.x}%`,
        top: `${moon.y}%`,

        width: '55px',
        height: '55px',

        transform: 'translate(-50%, -50%)',

        borderRadius: '50%',

        backgroundColor: '#f5f3d7',

        boxShadow: `
          0 0 15px rgba(255,255,220,0.5),
          0 0 35px rgba(255,255,220,0.25)
        `,

        opacity: moon.opacity,

        transition:
          'left 1s linear, top 1s linear, opacity 5s ease',

        pointerEvents: 'none',
      }}
    />


    {/* ========================================= */}
    {/* 6. DEBUG CLOCK */}
    {/* ========================================= */}

    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '4px 8px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: '12px',
        zIndex: 10,
      }}
    >
      <div>
        {String(hours).padStart(2, '0')}:
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </div>

      <div
        style={{
          marginTop: '2px',
          color: '#ffff00',
        }}
      >
        {timePhase.toUpperCase()}
      </div>
    </div>

  </div>
);


}

export default DynamicXPBackground;
