import React, { useState } from 'react';
import { Modal, Button } from '@react95/core';
import perdanaImage from '../assets/images/img_nimu.jpg';

export default function AboutContent() {
  const [page, setPage] = useState(1);
  const totalPages = 2;

  return (
    <Modal.Content
      style={{
        padding: 0,
        background: '#c0c0c0',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* --- BODY: left photo panel + right content panel --- */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          minHeight: 320
        }}
      >
        {/* LEFT PHOTO PANEL */}
        <div
          style={{
            width: 160,
            flexShrink: 0,
            overflow: 'hidden',
            background: '#000',
            display: 'flex'
          }}
        >
          <img
            src={perdanaImage}
            alt="Perdana Kurniawan Arta"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>

        {/* RIGHT PANEL */}
<div
  style={{
    flex: 1,
    height: 350,
    padding: '20px 20px 8px 20px',
    fontFamily: '"MS Sans Serif", sans-serif',
    color: '#000',
    overflowY: 'auto',
    boxSizing: 'border-box'
  }}
>
          
{page === 1 && (
  <>
    <h3 style={titleStyle}>
    <span style={highlightStyle}>
        Perdana Kurniawan Arta
    </span>
    </h3>

    <p style={textStyle}>
      Designer exploring the intersection of visual systems,
      UX, product design, and technology.
    </p>


    <p style={textStyle}>
      Background in{' '}
      <strong style={strongStyle}>
        Visual Communication Design
      </strong>{' '}
      and{' '}
      <strong style={strongStyle}>
        Industrial Electronics Engineering
      </strong>{' '}
      — a mix that shapes how I think about both form and function.
    </p>


    <p style={textStyle}>
      Over the past decade, I've delivered{' '}
      <strong style={strongStyle}>
        3,000+ design projects
      </strong>{' '}
      across iconography, illustration, and visual systems
      for founders, startups, and businesses worldwide.
    </p>


    <p style={textStyle}>
      Currently expanding into{' '}
      <strong style={strongStyle}>
        UX and Design Engineering
      </strong>,
      combining design thinking with front-end development.
    </p>


    <p style={textStyle}>
      More on my{' '}
      <a
        href="https://www.linkedin.com/in/perdanakun/"
        target="_blank"
        rel="noreferrer"
        style={linkStyle}
      >
        LinkedIn profile
      </a>.
    </p>

  </>
)}



{page === 2 && (
  <>
    <h3 style={titleStyle}>
      About This Portfolio
    </h3>


    <p style={textStyle}>
      This portfolio is an{' '}
      <strong style={strongStyle}>
        interactive desktop environment
      </strong>{' '}
      inspired by Windows 95 — built directly in code rather than
      as a static prototype.
    </p>


    <p style={textStyle}>
      Every window, icon, and click is treated as part of a small
      working system — a way of asking what happens when a{' '}
      <strong style={strongStyle}>
        design system stops being static
      </strong>{' '}
      and starts behaving like real software.
      It's my playground for{' '}
      <strong style={strongStyle}>
        Design Engineering
      </strong>:
      where design thinking, UX, and front-end craft meet in one
      continuous workflow.
    </p>


    <hr
      style={{
        border:'none',
        borderTop:'1px solid #808080',
        margin:'10px 0'
      }}
    />


    <p
      style={{
        ...textStyle,
        fontWeight:'bold'
      }}
    >
      Interested in working together?
    </p>


    <p style={textStyle}>
      Open to opportunities in UX Design, Product Design,
      Design Systems, and Design Engineering.
      Connect via{' '}
      <a
        href="https://www.linkedin.com/in/perdanakun/"
        target="_blank"
        rel="noreferrer"
        style={linkStyle}
      >
        LinkedIn
      </a>.
    </p>

  </>
)}

        </div>
      </div>

      {/* --- DIVIDER --- */}
      <div style={{ borderTop: '1px solid #808080', boxShadow: '0 1px 0 #ffffff' }} />

      {/* --- FOOTER: Back / Next / Cancel --- */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 6,
          padding: '10px 14px'
        }}
      >
        <Button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          {'< Back'}
        </Button>

        {page < totalPages ? (
          <Button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            {'Next >'}
          </Button>
        ) : (
          <Button disabled>{'Next >'}</Button>
        )}

        <Button onClick={() => setPage(1)}>Cancel</Button>
      </div>
    </Modal.Content>
  );
}

const titleStyle = {
  margin: '0 0 12px',
  fontSize: 16,
  fontWeight: 'bold'
};

const textStyle = {
  fontSize: 12,
  lineHeight: 1.5,
  margin: '0 0 10px',
  color: '#000',
  textAlign: 'left'
};

const strongStyle = {
  fontWeight:'bold',
  textDecoration:'underline'
};

const highlightStyle = {
  backgroundColor:'#ffff66',
  fontWeight:'bold',
  padding:'0 2px'
};

const linkStyle = {
  color: '#0000ee',
  textDecoration: 'underline',
  cursor: 'pointer'
};