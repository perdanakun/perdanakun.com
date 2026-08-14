import React, { useRef, useState } from 'react';
import { FileText, Folder, FolderOpen } from '@react95/icons';

export default function ProjectFolderContent({ isTouchDevice }) {
  const [currentFolder, setCurrentFolder] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  

  // Untuk mendeteksi double-tap di smartphone / tablet
  const lastTapRef = useRef({
    type: null,
    id: null,
    time: 0,
  });

  const DOUBLE_TAP_DELAY = 300;

  // =========================
  // PROJECT DATA
  // =========================

  const projects = [
    {
      id: 1,
      name: 'Personal Website',
      iconType: 'folderOpen',
      isLocked: false,
      message: '',
      files: [
        {
          id: 101,
          name: 'github.url',
          link: 'https://github.com/perdanakun/perdanakun.com',
        },
        {
          id: 102,
          name: 'Notion_Case_Study.url',
          link: 'https://app.notion.com/p/Design-in-Code-Personal-Portfolio-as-an-Interactive-Desktop-System-3ae3e6c8962380dd941def5566e614c4?source=copy_link',
        },
        {
          id: 103,
          name: 'perdanakun.com',
          link: 'https://www.perdanakun.com/',
        },
      ],
    },

    {
      id: 2,
      name: 'Untitled',
      iconType: 'folder',
      isLocked: true,
      message: 'This project has not been created yet.',
      files: [],
    },

    {
      id: 3,
      name: 'Untitled',
      iconType: 'folder',
      isLocked: true,
      message: 'This project has not been created yet.',
      files: [],
    },
  ];

  // =========================
  // ICON
  // =========================

  const renderIcon = (type) => {
    switch (type) {
      case 'folderOpen':
        return <FolderOpen variant="32x32_4" />;

      case 'folder':
      default:
        return <Folder variant="32x32_4" />;
    }
  };

  // =========================
  // OPEN EXTERNAL LINK
  // =========================

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // =========================
  // FOLDER
  // =========================

  const handleFolderClick = (project) => {
    setSelectedItem({
      type: 'folder',
      id: project.id,
    });
  };

  const handleFolderDoubleClick = (project) => {
    if (project.isLocked) {
      alert(`${project.name}\n\n${project.message}`);
      return;
    }

    setCurrentFolder(project);
    setSelectedItem(null);
  };

  // =========================
  // FILE
  // =========================

  const handleFileClick = (file) => {
    setSelectedItem({
      type: 'file',
      id: file.id,
    });
  };

  const handleFileDoubleClick = (file) => {
    openExternalLink(file.link);
  };

  // =========================
  // TOUCH / DOUBLE TAP
  // =========================

  const handleTouchEnd = (type, item, e) => {
    e.preventDefault();
    e.stopPropagation();

    const now = Date.now();

    const sameItem =
      lastTapRef.current.type === type &&
      lastTapRef.current.id === item.id;

    const isDoubleTap =
      sameItem &&
      now - lastTapRef.current.time < DOUBLE_TAP_DELAY;

    if (isDoubleTap) {
      // Reset supaya triple tap tidak ikut membuka berkali-kali
      lastTapRef.current = {
        type: null,
        id: null,
        time: 0,
      };

      if (type === 'folder') {
        handleFolderDoubleClick(item);
      }

      if (type === 'file') {
        handleFileDoubleClick(item);
      }

      return;
    }

    // First tap
    lastTapRef.current = {
      type,
      id: item.id,
      time: now,
    };

    if (type === 'folder') {
      handleFolderClick(item);
    }

    if (type === 'file') {
      handleFileClick(item);
    }
  };

  // =========================
  // BACK
  // =========================

  const handleBack = () => {
    setCurrentFolder(null);
    setSelectedItem(null);

    lastTapRef.current = {
      type: null,
      id: null,
      time: 0,
    };
  };

  // =========================
  // EMPTY AREA
  // =========================

  const handleExplorerClick = () => {
    setSelectedItem(null);
  };

  // =========================
  // RENDER
  // =========================

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        fontFamily: 'MS Sans Serif, sans-serif',
      }}
    >{/* =========================
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
  {currentFolder ? (
    <span
      onClick={handleBack}
      onTouchEnd={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleBack();
      }}
      style={{
        padding: '1px 4px',
        cursor: 'pointer',
        touchAction: 'manipulation',
      }}
    >
      ← Back
    </span>
  ) : (
    <>
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
        <u>N</u>ew
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
    </>
  )}
</div>

      {/* =========================
          EXPLORER AREA
      ========================= */}

      <div
        onClick={handleExplorerClick}
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: '12px',
          overflowY: 'auto',

          boxShadow:
            'inset 1px 1px 0px #0a0a0a, inset -1px -1px 0px #dfdfdf',

          margin: '2px',

          // Penting untuk touch device
          touchAction: 'pan-y',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 120px)',
            gridAutoRows: '90px',
            gap: '8px',
            alignItems: 'start',
            padding: '4px',
          }}
        >
          {/* =========================
              ROOT PROJECTS
          ========================= */}

          {!currentFolder &&
            projects.map((project) => {
              const isSelected =
                selectedItem?.type === 'folder' &&
                selectedItem?.id === project.id;

              return (

<div
  key={project.id}

  onClick={(e) => {
    e.stopPropagation();

    // PC: klik pertama hanya select
    if (!isTouchDevice) {
      handleFolderClick(project);
    }
  }}

  onDoubleClick={(e) => {
    e.stopPropagation();

    // PC: double click = buka
    if (!isTouchDevice) {
      handleFolderDoubleClick(project);
    }
  }}

  onPointerUp={(e) => {
    // Smartphone + iPad: 1 tap = buka
    if (
      isTouchDevice &&
      (e.pointerType === 'touch' || e.pointerType === 'pen')
    ) {
      e.preventDefault();
      e.stopPropagation();

      handleFolderDoubleClick(project);
    }
  }}

  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '120px',

    cursor: project.isLocked
      ? 'not-allowed'
      : 'pointer',

    userSelect: 'none',
    padding: '4px',
    textAlign: 'center',
    boxSizing: 'border-box',

    backgroundColor: isSelected
      ? '#000080'
      : 'transparent',

    color: isSelected
      ? 'white'
      : 'black',

    touchAction: 'manipulation',
  }}
>



                  {/* FOLDER ICON */}

                  <div
                    style={{
                      marginBottom: '4px',

                      opacity: project.isLocked
                        ? 0.55
                        : 1,

                      filter: project.isLocked
                        ? 'grayscale(100%)'
                        : 'none',

                      pointerEvents: 'none',
                    }}
                  >
                    {renderIcon(project.iconType)}
                  </div>

                  {/* FOLDER NAME */}

                  <span
                    style={{
                      fontSize: '11px',

                      lineHeight: '1.2',

                      width: '100%',

                      textAlign: 'center',

                      wordBreak: 'normal',

                      overflowWrap: 'break-word',

                      pointerEvents: 'none',
                    }}
                  >
                    {project.name}
                  </span>
                </div>
              );
            })}

          {/* =========================
              FILES INSIDE FOLDER
          ========================= */}

          {currentFolder &&
            currentFolder.files.map((file) => {
              const isSelected =
                selectedItem?.type === 'file' &&
                selectedItem?.id === file.id;

              return (

<div
  key={file.id}

  onClick={(e) => {
    e.stopPropagation();

    // PC: klik pertama hanya select
    if (!isTouchDevice) {
      handleFileClick(file);
    }
  }}

  onDoubleClick={(e) => {
    e.stopPropagation();

    // PC: double click = buka link
    if (!isTouchDevice) {
      handleFileDoubleClick(file);
    }
  }}

  onPointerUp={(e) => {
    // Smartphone + iPad: 1 tap = buka link
    if (
      isTouchDevice &&
      (e.pointerType === 'touch' || e.pointerType === 'pen')
    ) {
      e.preventDefault();
      e.stopPropagation();

      handleFileDoubleClick(file);
    }
  }}

  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '120px',

    cursor: 'pointer',

    userSelect: 'none',

    padding: '4px',

    textAlign: 'center',

    boxSizing: 'border-box',

    backgroundColor: isSelected
      ? '#000080'
      : 'transparent',

    color: isSelected
      ? 'white'
      : 'black',

    touchAction: 'manipulation',
  }}
>



                  {/* FILE ICON */}

                  <div
                    style={{
                      marginBottom: '4px',
                      pointerEvents: 'none',
                    }}
                  >
                    <FileText variant="32x32_4" />
                  </div>

                  {/* FILE NAME */}

                  <span
                    style={{
                      fontSize: '11px',

                      lineHeight: '1.2',

                      width: '100%',

                      textAlign: 'center',

                      wordBreak: 'normal',

                      overflowWrap: 'break-word',

                      pointerEvents: 'none',
                    }}
                  >
                    {file.name}
                  </span>
                </div>
              );
            })}
        </div>
      </div>

      {/* =========================
          STATUS BAR
      ========================= */}

      <div
        style={{
          display: 'flex',

          alignItems: 'center',

          padding: '2px 6px',

          fontSize: '11px',

          color: '#000',

          backgroundColor: '#c0c0c0',

          boxShadow:
            'inset 1px 1px 0px #dfdfdf, inset -1px -1px 0px #0a0a0a',

          marginTop: '2px',

          height: '20px',
        }}
      >
        {!currentFolder
          ? `${projects.length} object(s)`
          : `${currentFolder.files.length} object(s)`}
      </div>
    </div>
  );
}

