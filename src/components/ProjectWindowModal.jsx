import React, { useState } from 'react';

import {
  Modal,
  TitleBar,
} from '@react95/core';

export default function ProjectWindowModal({
  title = 'Project.exe',
  icon = null,

  isMobile = false,
  isTablet = false,

  onClose,

  // =========================================================
  // BROWSER
  // =========================================================

  url = 'https://www.perdanakun.com/',
  statusText = 'Done',

  // =========================================================
  // NORMAL WINDOW
  // =========================================================

  width = '60%',
  height = '70%',

  top = '50%',
  left = '50%',

  transform = 'translate(-50%, -50%)',

  children,
}) {
  // =========================================================
  // MAXIMIZE STATE
  // =========================================================

  const [isMaximized, setIsMaximized] = useState(false);

  // =========================================================
  // ADDRESS STATE
  // =========================================================

  const [address, setAddress] = useState(url);

  // =========================================================
  // MAXIMIZE
  // =========================================================

  const toggleMaximize = () => {
    setIsMaximized((previous) => !previous);
  };

  // =========================================================
  // WINDOW STYLE
  // =========================================================

  const getWindowStyle = () => {
    // =======================================================
    // MOBILE
    // =======================================================

    if (isMobile) {
      return {
        position: 'fixed',

        top: 0,
        left: 0,
        right: 0,
        bottom: '28px',

        width: '100vw',
        height: 'auto',

        maxWidth: '100vw',
        maxHeight: 'calc(100vh - 28px)',

        minWidth: 0,
        minHeight: 0,

        transform: 'none',
        margin: 0,

        boxSizing: 'border-box',
      };
    }

    // =======================================================
    // MAXIMIZED
    // =======================================================

    if (isMaximized) {
      return {
        position: 'fixed',

        top: 0,
        left: 0,
        right: 0,
        bottom: '28px',

        width: '100vw',
        height: 'auto',

        maxWidth: 'none',
        maxHeight: 'none',

        minWidth: 0,
        minHeight: 0,

        transform: 'none',
        margin: 0,

        boxSizing: 'border-box',

        inset: '0 0 28px 0',
      };
    }

    // =======================================================
    // TABLET
    // =======================================================

    if (isTablet) {
      return {
        position: 'fixed',

        top,
        left,

        width: '70vw',
        height: '70vh',

        maxWidth: '90vw',
        maxHeight: 'calc(100vh - 40px)',

        minWidth: 0,
        minHeight: 0,

        transform,

        boxSizing: 'border-box',
      };
    }

    // =======================================================
    // DESKTOP
    // =======================================================

    return {
      position: 'fixed',

      top,
      left,

      width,
      height,

      maxWidth: 'calc(100vw - 20px)',
      maxHeight: 'calc(100vh - 50px)',

      minWidth: 0,
      minHeight: 0,

      transform,

      boxSizing: 'border-box',
    };
  };

  // =========================================================
  // ADDRESS SUBMIT
  // =========================================================

  const handleAddressSubmit = (event) => {
    event.preventDefault();

    const value = address.trim();

    if (!value) {
      return;
    }

    let target = value;

    if (
      !target.startsWith('http://') &&
      !target.startsWith('https://')
    ) {
      target = `https://${target}`;
    }

    setAddress(target);
  };

  // =========================================================
  // MENU ITEM STYLE
  // =========================================================

  const menuItemStyle = {
    display: 'inline-flex',

    alignItems: 'center',

    height: '18px',

    padding: '1px 6px',

    boxSizing: 'border-box',

    whiteSpace: 'nowrap',

    fontFamily: 'MS Sans Serif, sans-serif',

    fontSize: '11px',

    lineHeight: '12px',

    color: '#000000',

    userSelect: 'none',

    cursor: 'default',
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <Modal
      icon={icon}
      title={title}
      style={getWindowStyle()}
      titleBarOptions={
        <>
          {/* =================================================
              MINIMIZE
          ================================================= */}

          <Modal.Minimize />

          {/* =================================================
              MAXIMIZE / RESTORE
          ================================================= */}

          {!isMobile &&
            (isMaximized ? (
              <TitleBar.Restore
                onClick={toggleMaximize}
              />
            ) : (
              <TitleBar.Maximize
                onClick={toggleMaximize}
              />
            ))}

          {/* =================================================
              CLOSE
          ================================================= */}

          <TitleBar.Close
            onClick={onClose}
          />
        </>
      }
    >
      {/* =====================================================
          WINDOW BODY

          Seluruh browser chrome dibuat sebagai satu layout
          vertikal agar menu → address → content → status
          terasa seperti aplikasi Win95.
      ===================================================== */}

      <div
        style={{
          position: 'relative',

          display: 'flex',

          flexDirection: 'column',

          width: '100%',

          height: '100%',

          minWidth: 0,

          minHeight: 0,

          padding: 6,

          margin: 0,

          backgroundColor: '#c0c0c0',

          boxSizing: 'border-box',

          overflow: 'hidden',
        }}
      >
        {/* ===================================================
            MENU BAR
        =================================================== */}

        <div
          style={{
            display: 'flex',

            alignItems: 'center',

            gap: isMobile ? '2px' : '4px',

            width: '100%',

            minHeight: '22px',

            height: '22px',

            padding: isMobile
              ? '2px 4px'
              : '2px 6px',

            boxSizing: 'border-box',

            backgroundColor: '#c0c0c0',

            borderBottom: '1px solid #808080',

            fontFamily:
              'MS Sans Serif, sans-serif',

            fontSize: '11px',

            lineHeight: '12px',

            userSelect: 'none',

            flexShrink: 0,

            overflow: 'hidden',
          }}
        >
          {/* FILE */}

          <span style={menuItemStyle}>
            <u>F</u>ile
          </span>

          {/* EDIT */}

          <span style={menuItemStyle}>
            <u>E</u>dit
          </span>

          {/* VIEW */}

          <span style={menuItemStyle}>
            <u>V</u>iew
          </span>

          {/* FAVORITES */}

          {!isMobile && (
            <span style={menuItemStyle}>
              Favorites
            </span>
          )}

          {/* TOOLS */}

          {!isMobile && (
            <span style={menuItemStyle}>
              <u>T</u>ools
            </span>
          )}

          {/* HELP */}

          <span style={menuItemStyle}>
            <u>H</u>elp
          </span>
        </div>

        {/* ===================================================
            ADDRESS BAR
        =================================================== */}

        <div
          style={{
            display: 'flex',

            alignItems: 'center',

            gap: '5px',

            width: '100%',

            minHeight: isMobile
              ? '28px'
              : '29px',

            height: isMobile
              ? '28px'
              : '29px',

            padding: isMobile
              ? '3px 4px'
              : '3px 6px',

            boxSizing: 'border-box',

            backgroundColor: '#c0c0c0',

            borderBottom: '1px solid #808080',

            fontFamily:
              'MS Sans Serif, sans-serif',

            fontSize: '11px',

            flexShrink: 0,
          }}
        >
          {/* ADDRESS LABEL */}

          <span
            style={{
              flexShrink: 0,

              whiteSpace: 'nowrap',

              fontFamily:
                'MS Sans Serif, sans-serif',

              fontSize: '11px',

              color: '#000000',
            }}
          >
            Address
          </span>

          {/* ADDRESS FORM */}

          <form
            onSubmit={handleAddressSubmit}
            style={{
              display: 'flex',

              flex: 1,

              minWidth: 0,

              height: '20px',

              margin: 0,

              padding: 0,
            }}
          >
            <input
              type="text"
              value={address}
              onChange={(event) => {
                setAddress(
                  event.target.value
                );
              }}
              aria-label="Address"
              spellCheck={false}
              style={{
                width: '100%',

                minWidth: 0,

                height: '20px',

                padding: '1px 4px',

                border: '1px solid #808080',

                borderRadius: 0,

                outline: 'none',

                boxSizing: 'border-box',

                backgroundColor: '#ffffff',

                color: '#000000',

                fontFamily:
                  'MS Sans Serif, sans-serif',

                fontSize: '11px',

                lineHeight: '16px',

                caretColor: '#000000',

                boxShadow:
                  'inset 1px 1px 0 #000000, inset -1px -1px 0 #ffffff',
              }}
            />
          </form>
        </div>
{/* ===================================================
    BROWSER CONTENT
=================================================== */}

<div
  style={{
    flex: '1 1 0',

    minWidth: 0,
    minHeight: 0,

    width: '100%',
    height: '100%',

    boxSizing: 'border-box',

    backgroundColor: '#ffffff',

    /*
      INI AREA SCROLL
    */
    overflowY: 'scroll',
    overflowX: 'hidden',

    /*
      WIN95 BORDER
    */
    borderTop: '2px solid #808080',
    borderLeft: '2px solid #808080',
    borderRight: '2px solid #ffffff',
    borderBottom: '2px solid #ffffff',

    boxShadow: `
      inset 1px 1px 0 #000000,
      inset -1px -1px 0 #dfdfdf
    `,

    fontFamily: 'MS Sans Serif, sans-serif',

    color: '#000000',

    touchAction: 'pan-y',

    WebkitOverflowScrolling: 'touch',

    /*
      Supaya scrollbar tidak hilang
      di browser modern.
    */
    scrollbarWidth: 'auto',
  }}
>
  {children}
</div>

        </div>
    </Modal>
  );
}
