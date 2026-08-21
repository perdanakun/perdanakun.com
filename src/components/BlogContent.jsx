import React from 'react';
import { Modal, Frame } from '@react95/core';

export default function BlogContent() {
  return (
    <Modal.Content
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 0,
        background: '#c0c0c0',
      }}
    >
      {/* Browser toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '4px 6px',
          background: '#c0c0c0',
          borderBottom: '1px solid #808080',
          fontFamily: 'MS Sans Serif, sans-serif',
          fontSize: 11,
        }}
      >
        <span>Address:</span>

        <div
          style={{
            flex: 1,
            height: 22,
            padding: '3px 6px',
            background: '#fff',
            boxShadow:
              'inset 2px 2px 0 #808080, inset -1px -1px 0 #fff',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          https://perdanakun.com/blog/
        </div>
      </div>

      {/* Website */}
      <Frame
        bgColor="#ffffff"
        boxShadow="$in"
        style={{
          flex: 1,
          margin: 2,
          minHeight: 0,
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://perdanakun.com/blog/"
          title="Perdanakun Writing"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
        />
      </Frame>
    </Modal.Content>
  );
}
