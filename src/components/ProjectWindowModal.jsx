import React, {
  useState,
} from 'react';

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
  // NORMAL WINDOW
  // =========================================================

  width = '60%',
  height = '70%',

  top = '50%',
  left = '50%',

  transform =
    'translate(-50%, -50%)',

  children,
}) {

  // =========================================================
  // MAXIMIZE STATE
  // =========================================================

  const [
    isMaximized,
    setIsMaximized,
  ] = useState(false);


  // =========================================================
  // MAXIMIZE
  // =========================================================

  const toggleMaximize = () => {
    setIsMaximized(
      previous => !previous
    );
  };


  // =========================================================
  // WINDOW STYLE
  // =========================================================

  const getWindowStyle = () => {

    // =======================================================
    // SMARTPHONE
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
        maxHeight:
          'calc(100vh - 28px)',

        transform: 'none',
        margin: 0,

        boxSizing:
          'border-box',
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

        width: '100vw',
        height:
          'calc(100vh - 28px)',

        maxWidth: '100vw',
        maxHeight:
          'calc(100vh - 28px)',

        transform: 'none',
        margin: 0,

        boxSizing:
          'border-box',
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
        maxHeight:
          'calc(100vh - 40px)',

        transform,

        boxSizing:
          'border-box',
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

      maxWidth:
        'calc(100vw - 20px)',

      maxHeight:
        'calc(100vh - 50px)',

      transform,

      boxSizing:
        'border-box',
    };
  };


  // =========================================================
  // RENDER
  // =========================================================

  return (
    <Modal
      icon={icon}
      title={title}

      style={
        getWindowStyle()
      }

      titleBarOptions={
        <>

          {/* =================================================
              MINIMIZE
          ================================================= */}

          <Modal.Minimize />


          {/* =================================================
              MAXIMIZE
          ================================================= */}

          {!isMobile && (
            <button
              type="button"

              aria-label={
                isMaximized
                  ? 'Restore'
                  : 'Maximize'
              }

              title={
                isMaximized
                  ? 'Restore'
                  : 'Maximize'
              }

              onClick={
                toggleMaximize
              }

              style={{
                width: '16px',
                height: '14px',

                padding: 0,
                margin: 0,

                display: 'flex',

                alignItems:
                  'center',

                justifyContent:
                  'center',

                backgroundColor:
                  '#c0c0c0',

                border: 'none',

                boxShadow:
                  'inset 1px 1px 0 #ffffff, inset -1px -1px 0 #000000',

                cursor:
                  'pointer',

                boxSizing:
                  'border-box',

                fontFamily:
                  'MS Sans Serif, sans-serif',

                fontSize:
                  '9px',

                lineHeight:
                  '1',

                userSelect:
                  'none',
              }}

              onMouseDown={(e) => {
                e.stopPropagation();
              }}
            >
              {isMaximized
                ? '❐'
                : '□'}
            </button>
          )}


          {/* =================================================
              CLOSE
          ================================================= */}

          <TitleBar.Close
            onClick={
              onClose
            }
          />

        </>
      }
    >

      {/* =====================================================
          MENU BAR
      ===================================================== */}

      <div
        style={{
          display: 'flex',

          alignItems:
            'center',

          gap:
            isMobile
              ? '4px'
              : '6px',

          padding:
            isMobile
              ? '3px 5px'
              : '2px 6px',

          height:
            '22px',

          boxSizing:
            'border-box',

          backgroundColor:
            '#c0c0c0',

          borderBottom:
            '1px solid #808080',

          fontSize:
            '11px',

          fontFamily:
            'MS Sans Serif, sans-serif',

          userSelect:
            'none',

          flexShrink:
            0,
        }}
      >

        <span
          style={{
            padding:
              '1px 4px',
          }}
        >
          <u>F</u>ile
        </span>

        <span
          style={{
            padding:
              '1px 4px',
          }}
        >
          <u>N</u>ew
        </span>

        <span
          style={{
            padding:
              '1px 4px',
          }}
        >
          <u>V</u>iew
        </span>

        <span
          style={{
            padding:
              '1px 4px',
          }}
        >
          <u>H</u>elp
        </span>

      </div>


      {/* =====================================================
          WHITE CONTENT AREA
      ===================================================== */}

      <div
        style={{
          width:
            '100%',

          height:
            'calc(100% - 22px)',

          minWidth:
            0,

          minHeight:
            0,

          backgroundColor:
            '#ffffff',

          overflow:
            'auto',

          boxSizing:
            'border-box',

          boxShadow:
            'inset 1px 1px 0px #0a0a0a, inset -1px -1px 0px #dfdfdf',

          fontFamily:
            'MS Sans Serif, sans-serif',
        }}
      >

        {children}

      </div>

    </Modal>
  );
}