import React from 'react';

export default function CSGameModal() {
  return (
    <iframe
      src="https://archive.org/embed/SF2_DOS"
      title="Street Fighter II DOS"
      style={{
        width: '100%',
        height: '100%',
        minHeight: '60%',
        border: 'none',
        backgroundColor: 'black',
        display: 'block'
      }}
      frameBorder="0"
      allowFullScreen
    />
  );
}