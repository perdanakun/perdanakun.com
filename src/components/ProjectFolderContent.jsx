import React, { useState } from 'react';
import { FileText, Folder, FolderOpen } from '@react95/icons';

export default function ProjectFolderContent() {
  const [currentFolder, setCurrentFolder] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

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
          link: 'https://github.com/perdanakun/perdanakun.com'
        },
        {
          id: 102,
          name: 'Notion_Case_Study.url',
          link: 'https://app.notion.com/p/Design-in-Code-Personal-Portfolio-as-an-Interactive-Desktop-System-3ae3e6c8962380dd941def5566e614c4?source=copy_link'
        },
        {
          id: 103,
          name: 'perdanakun.com',
          link: 'https://www.perdanakun.com/'
        }
      ]
    },

    {
      id: 2,
      name: 'Untitled',
      iconType: 'folder',
      isLocked: true,
      message: 'This project has not been created yet.',
      files: []
    },

    {
      id: 3,
      name: 'Untitled',
      iconType: 'folder',
      isLocked: true,
      message: 'This project has not been created yet.',
      files: []
    }
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
  // FOLDER
  // =========================

  const handleFolderClick = (project) => {
    setSelectedItem({
      type: 'folder',
      id: project.id
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
      id: file.id
    });
  };

  const handleFileDoubleClick = (file) => {
    window.open(file.link, '_blank', 'noopener,noreferrer');
  };

  // =========================
  // BACK
  // =========================

  const handleBack = () => {
    setCurrentFolder(null);
    setSelectedItem(null);
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
        fontFamily: 'MS Sans Serif, sans-serif'
      }}
    >
      {/* =========================
          MENU BAR
      ========================= */}

      <div
        style={{
          display: 'flex',
          gap: '12px',
          padding: '2px 6px',
          backgroundColor: '#c0c0c0',
          borderBottom: '1px solid #808080',
          fontSize: '11px',
          userSelect: 'none'
        }}
      >
        {currentFolder ? (
          <span
            onClick={handleBack}
            style={{
              cursor: 'pointer',
              padding: '1px 4px'
            }}
          >
            ← Back
          </span>
        ) : (
          <>
            <span
              style={{
                padding: '1px 4px'
              }}
            >
              File
            </span>

            <span
              style={{
                padding: '1px 4px'
              }}
            >
              New
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

          margin: '2px'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 120px)',
            gridAutoRows: '90px',
            gap: '8px',
            alignItems: 'start',
            padding: '4px'
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
                    handleFolderClick(project);
                  }}
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    handleFolderDoubleClick(project);
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
                      : 'black'
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
                        : 'none'
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

                      overflowWrap: 'break-word'
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
                    handleFileClick(file);
                  }}
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    handleFileDoubleClick(file);
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
                      : 'black'
                  }}
                >
                  {/* FILE ICON */}

                  <div
                    style={{
                      marginBottom: '4px'
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

                      overflowWrap: 'break-word'
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

          height: '20px'
        }}
      >
        {!currentFolder
          ? `${projects.length} object(s)`
          : `${currentFolder.files.length} object(s)`}
      </div>
    </div>
  );
}
