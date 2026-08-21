import React from 'react';

function ImageViewer({
  viewer,
  onImageLoad,
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        fontFamily: 'MS Sans Serif, sans-serif',
      }}
    >

{/* =========================
    MENU BAR
========================= */}

<div
  style={{
    display: 'flex',
    gap: '6px',
    padding: '2px 6px',
    backgroundColor: '#c0c0c0',
    borderBottom: '1px solid #808080',
    fontSize: '11px',
    userSelect: 'none',
  }}
>
  <span
    style={{
      padding: '1px 4px',
    }}
  >
    <u>F</u>ile
  </span>

  <span
    style={{
      padding: '1px 4px',
    }}
  >
    <u>E</u>dit
  </span>

  <span
    style={{
      padding: '1px 4px',
    }}
  >
    <u>V</u>iew
  </span>

  <span
    style={{
      padding: '1px 4px',
    }}
  >
    <u>H</u>elp
  </span>
</div>
{/* =========================
    EXPLORER AREA
========================= */}

<div
  style={{
    flex: 1,

    backgroundColor: 'white',

    margin: '2px',
    padding: '12px',

    boxShadow:
      'inset 1px 1px 0px #0a0a0a, inset -1px -1px 0px #dfdfdf',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',

    boxSizing: 'border-box',
  }}
>
  <img
    src={viewer.file.imagePath}
    alt={viewer.file.name}
    onLoad={(e) =>
      onImageLoad(viewer.id, e)
    }
    style={{
      display: 'block',

      width: `${viewer.width}px`,
      height: `${viewer.height}px`,

      objectFit: 'contain',

      maxWidth: '100%',
      maxHeight: '100%',
    }}
  />
</div>
    </div>
  );
}

export default ImageViewer;