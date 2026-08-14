import React, {
  useRef,
  useState,
} from 'react';

import {
  FileText,
  Folder,
  FolderOpen,
  Inetcpl1313,
  Notepad2,
  FolderRename,
  Shdocvw272,
  Wordpad,
} from '@react95/icons';

import githubIcon from '../icons/github.svg';
import instagramIcon from '../icons/instagram.svg';
import figmaIcon from '../icons/figma.svg';


import LocalTree from './LocalTree';

export default function ProjectFolderContent({
  isTouchDevice,
}) {
  const [
    currentFolder,
    setCurrentFolder,
  ] = useState(null);

  const [
    selectedItem,
    setSelectedItem,
  ] = useState(null);

  // Tree expansion
  const [
    expandedIds,
    setExpandedIds,
  ] = useState([]);

  // Reset Tree
  const [
    resetTree,
    setResetTree,
  ] = useState(false);

  // Touch state
  const lastTapRef = useRef({
    type: null,
    id: null,
    time: 0,
  });

  const DOUBLE_TAP_DELAY = 300;

  // =========================================================
  // PROJECT DATA
  // =========================================================
const projects = [
{
  id: 1,
  name: 'This Website',
  iconType: 'folder',
  isLocked: false,
  message: '',
  files: [
        {
      id: 104,
      name: 'Case Study',
      iconType: 'caseStudy',
      link: 'https://app.notion.com/p/Design-in-Code-Personal-Portfolio-as-an-Interactive-Desktop-System-3ae3e6c8962380dd941def5566e614c4?source=copy_link',
    },

    {
      id: 102,
      name: 'Documentation',
      iconType: 'documentation',
      link: 'https://app.notion.com/p/Design-in-Code-Personal-Portfolio-as-an-Interactive-Desktop-System-3ae3e6c8962380dd941def5566e614c4?source=copy_link',
    },

    {
      id: 101,
      name: 'Github.url',
      iconType: 'github',
      link: 'https://github.com/perdanakun/perdanakun.com',
    },
    {
      id: 103,
      name: 'Live Website',
      iconType: 'website',
      link: 'https://www.perdanakun.com/',
    },
  ],
},

  {
    id: 2,
    name: 'HoloHealth',
    iconType: 'folder',
    isLocked: false,
    message: '',
    files: [
      {
        id: 201,
        name: 'HoloHealth',
        iconType: 'website',
        link: 'https://holo.health',
      },
    ],
  },

  {
    id: 3,
    name: 'Shipfaster UI',
    iconType: 'folder',
    isLocked: false,
    message: '',
    files: [
      {
        id: 301,
        name: 'Live Preview',
        iconType: 'figma',
        link: 'https://www.figma.com/design/0oLNU1icRnTTjeiScs6eXa/Shipfaster-UI---v2.7.1--LIVE----29-7?node-id=6-8&t=rZHIT5kjvZiofFEO-1',
      },
            {
        id: 302,
        name: 'Shipfaster UI',
        iconType: 'website',
        link: 'https://www.shipfasterui.com/components/icons',
      },
    ],
  },

  {
    id: 4,
    name: 'Mayora',
    iconType: 'folder',
    isLocked: false,
    message: '',
    files: [
      {
        id: 402,
        name: 'Case Study',
        iconType: 'caseStudy',
        link: 'https://honorable-slicer-cf7.notion.site/Mayora-Unwrapped-Strategic-Social-Media-in-Action-2d13e6c89623802aaf4fe1ed7c23ae28?pvs=143',
      },
      {
        id: 401,
        name: 'Instagram',
        iconType: 'instagram',
        link: 'https://www.instagram.com/mayoraofficial/?hl=id',
      },
    ],
  },
];

  // =========================================================
  // TREE DATA
  // =========================================================

  const treeData = projects.map(
    (project) => ({
      treeId: `folder-${project.id}`,

      type: 'folder',

      id: project.id,

      name: project.name,

      isLocked:
        project.isLocked,

      message:
        project.message,

      source: project,

      children:
        project.files.map(
          (file) => ({
            treeId:
              `file-${file.id}`,

            type: 'file',

            id: file.id,

            name: file.name,

            link: file.link,

            source: file,
          })
        ),
    })
  );
// =========================================================
// ICON
// =========================================================

// ICON FOLDER
const renderIcon = (type) => {
  switch (type) {
    case 'folderRename':
      return (
        <FolderRename
          variant="32x32_4"
        />
      );

    case 'folderOpen':
      return (
        <FolderOpen
          variant="32x32_4"
        />
      );

    case 'folder':
    default:
      return (
        <Folder
          variant="32x32_4"
        />
      );
  }
};


// ICON FILE
const renderFileIcon = (type) => {
  switch (type) {
    case 'github':
      return (
        <img
          src={githubIcon}
          alt="GitHub"
          style={{
            width: '32px',
            height: '32px',
            objectFit: 'contain',
          }}
        />
      );

    case 'instagram':
      return (
        <img
          src={instagramIcon}
          alt="Instagram"
          style={{
            width: '32px',
            height: '32px',
            objectFit: 'contain',
          }}
        />
      );



      case 'figma':
      return (
        <img
          src={figmaIcon}
          alt="Figma"
          style={{
            width: '32px',
            height: '32px',
            objectFit: 'contain',
          }}
        />
      );

    case 'website':
      return (
        <Shdocvw272
          variant="32x32_4"
        />
      );

    case 'caseStudy':
      return (
        <Notepad2
          variant="32x32_4"
        />
      );

          case 'documentation':
      return (
        <Wordpad
          variant="32x32_4"
        />
      );

    default:
      return (
        <FileText
          variant="32x32_4"
        />
      );
  }
};

  // =========================================================
  // OPEN EXTERNAL LINK
  // =========================================================

  const openExternalLink = (url) => {
    if (!url) return;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  };

  // =========================================================
  // EXPAND TREE
  // =========================================================

  const expandFolder = (
    projectId
  ) => {
    const treeId =
      `folder-${projectId}`;

    setExpandedIds(
      (previous) => {
        if (
          previous.includes(
            treeId
          )
        ) {
          return previous;
        }

        return [
          ...previous,
          treeId,
        ];
      }
    );
  };

  // =========================================================
  // COLLAPSE TREE
  // =========================================================

  const collapseFolder = (
    projectId
  ) => {
    const treeId =
      `folder-${projectId}`;

    setExpandedIds(
      (previous) =>
        previous.filter(
          (id) =>
            id !== treeId
        )
    );
  };

  // =========================================================
  // FOLDER CLICK
  // =========================================================

  const handleFolderClick = (
    project
  ) => {
    if (!project) return;

    setSelectedItem({
      type: 'folder',
      id: project.id,
    });
  };

  // =========================================================
  // FOLDER DOUBLE CLICK
  // =========================================================

  const handleFolderDoubleClick = (
    project
  ) => {
    if (!project) return;

    // Locked project
    if (project.isLocked) {
      alert(
        `${project.name}\n\n${project.message}`
      );

      return;
    }

    // Pastikan Tree ikut terbuka
    expandFolder(project.id);

    // Buka folder di Explorer
    setCurrentFolder(project);

    setSelectedItem(null);

    // Reset touch
    lastTapRef.current = {
      type: null,
      id: null,
      time: 0,
    };
  };

  // =========================================================
  // FILE CLICK
  // =========================================================

  const handleFileClick = (
    file
  ) => {
    if (!file) return;

    setSelectedItem({
      type: 'file',
      id: file.id,
    });
  };

  // =========================================================
  // FILE DOUBLE CLICK
  // =========================================================

  const handleFileDoubleClick = (
    file
  ) => {
    if (!file) return;

    openExternalLink(
      file.link
    );
  };

  // =========================================================
  // TREE FOLDER CLICK
  // =========================================================

  const handleTreeFolderClick = (
    project
  ) => {
    handleFolderClick(
      project
    );
  };

  // =========================================================
  // TREE FOLDER DOUBLE CLICK
  // =========================================================

  const handleTreeFolderDoubleClick = (
    project
  ) => {
    handleFolderDoubleClick(
      project
    );
  };

  // =========================================================
  // TREE FILE CLICK
  // =========================================================

  const handleTreeFileClick = (
    file
  ) => {
    handleFileClick(file);
  };

  // =========================================================
  // TREE FILE DOUBLE CLICK
  // =========================================================

  const handleTreeFileDoubleClick = (
    file
  ) => {
    handleFileDoubleClick(
      file
    );
  };

  // =========================================================
  // TREE TOGGLE
  // =========================================================

  const handleTreeToggle = (
    item,
    nextExpandedIds
  ) => {
    setExpandedIds(
      nextExpandedIds
    );
  };

  // =========================================================
  // TOUCH
  // =========================================================

  const handleTouchEnd = (
    type,
    item,
    e
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const now =
      Date.now();

    const sameItem =
      lastTapRef.current.type ===
        type &&
      lastTapRef.current.id ===
        item.id;

    const isDoubleTap =
      sameItem &&
      now -
        lastTapRef.current.time <
        DOUBLE_TAP_DELAY;

    if (isDoubleTap) {
      lastTapRef.current = {
        type: null,
        id: null,
        time: 0,
      };

      if (
        type === 'folder'
      ) {
        handleFolderDoubleClick(
          item
        );
      }

      if (
        type === 'file'
      ) {
        handleFileDoubleClick(
          item
        );
      }

      return;
    }

    lastTapRef.current = {
      type,
      id: item.id,
      time: now,
    };

    if (
      type === 'folder'
    ) {
      handleFolderClick(
        item
      );
    }

    if (
      type === 'file'
    ) {
      handleFileClick(
        item
      );
    }
  };

  // =========================================================
  // BACK
  // =========================================================

  const handleBack = () => {
    // Close current Explorer folder
    setCurrentFolder(null);

    // Clear selection
    setSelectedItem(null);

    // Collapse ALL Tree folders
    setExpandedIds([]);

    // Force LocalTree internal state reset
    setResetTree(true);

    // Reset trigger
    setTimeout(() => {
      setResetTree(false);
    }, 0);

    // Reset touch state
    lastTapRef.current = {
      type: null,
      id: null,
      time: 0,
    };
  };


  // Colapse - mean back

  const handleTreeFolderCollapse = (project) => {
  setCurrentFolder(null);
  setSelectedItem(null);

  setExpandedIds([]);

  lastTapRef.current = {
    type: null,
    id: null,
    time: 0,
  };
};

  // =========================================================
  // EMPTY AREA
  // =========================================================

  const handleExplorerClick = () => {
    setSelectedItem(null);
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        fontFamily:
          'MS Sans Serif, sans-serif',
      }}
    >

      {/* =====================================================
          MENU BAR
      ===================================================== */}

      <div
        style={{
          display: 'flex',
          gap: '6px',
          padding: '2px 6px',
          backgroundColor:
            '#c0c0c0',
          borderBottom:
            '1px solid #808080',
          fontSize: '11px',
          userSelect: 'none',
        }}
      >
        {currentFolder ? (
          <span
            onClick={
              handleBack
            }
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();

              handleBack();
            }}
            style={{
              padding:
                '1px 4px',

              cursor:
                'pointer',

              touchAction:
                'manipulation',
            }}
          >
            ← Back
          </span>
        ) : (
          <>
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
          </>
        )}
      </div>

      {/* =====================================================
          EXPLORER AREA
      ===================================================== */}

      <div
        style={{
          flex: 1,

          display: 'flex',

          backgroundColor:
            'white',

          overflow: 'hidden',

          margin: '2px',

          boxShadow:
            'inset 1px 1px 0px #0a0a0a, inset -1px -1px 0px #dfdfdf',
        }}
      >

        {/* ===================================================
            TREE PANEL
        =================================================== */}

        <div
          style={{
            width: '180px',
            minWidth: '180px',

            backgroundColor:
              '#ffffff',

            overflow: 'auto',

            borderRight:
              '1px solid #808080',

            padding: '4px',

            boxSizing:
              'border-box',

            touchAction:
              'pan-y',
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <LocalTree
            data={treeData}

            expandedIds={
              expandedIds
            }

            currentFolder={
              currentFolder
            }

            selectedItem={
              selectedItem
            }

            onFolderClick={
              handleTreeFolderClick
            }

            onFolderDoubleClick={
              handleTreeFolderDoubleClick
            }

            onFileClick={
              handleTreeFileClick
            }

            onFileDoubleClick={
              handleTreeFileDoubleClick
            }

            onToggleFolder={
              handleTreeToggle
            }

            onFolderCollapse={handleTreeFolderCollapse}

            resetExpanded={
              resetTree
            }
          />
        </div>

        {/* ===================================================
            EXPLORER CONTENT
        =================================================== */}

        <div
          onClick={
            handleExplorerClick
          }
          style={{
            flex: 1,

            backgroundColor:
              'white',

            padding: '12px',

            overflowY:
              'auto',

            boxShadow:
              'inset 1px 1px 0px #0a0a0a, inset -1px -1px 0px #dfdfdf',

            touchAction:
              'pan-y',
          }}
        >
          <div
            style={{
              display: 'grid',

              gridTemplateColumns:
                'repeat(auto-fill, 120px)',

              gridAutoRows:
                '90px',

              gap: '8px',

              alignItems:
                'start',

              padding: '4px',
            }}
          >

            {/* =================================================
                ROOT PROJECTS
            ================================================= */}

            {!currentFolder &&
              projects.map(
                (project) => {
                  const isSelected =
                    selectedItem?.type ===
                      'folder' &&
                    selectedItem?.id ===
                      project.id;

                  return (
                    <div
                      key={
                        project.id
                      }

                      onClick={(e) => {
                        e.stopPropagation();

                        if (
                          !isTouchDevice
                        ) {
                          handleFolderClick(
                            project
                          );
                        }
                      }}

                      onDoubleClick={(e) => {
                        e.stopPropagation();

                        if (
                          !isTouchDevice
                        ) {
                          handleFolderDoubleClick(
                            project
                          );
                        }
                      }}

                      onPointerUp={(e) => {
                        if (
                          isTouchDevice &&
                          (
                            e.pointerType ===
                              'touch' ||
                            e.pointerType ===
                              'pen'
                          )
                        ) {
                          e.preventDefault();
                          e.stopPropagation();

                          handleFolderDoubleClick(
                            project
                          );
                        }
                      }}

                      style={{
                        display:
                          'flex',

                        flexDirection:
                          'column',

                        alignItems:
                          'center',

                        width:
                          '120px',

                        cursor:
                          project.isLocked
                            ? 'not-allowed'
                            : 'pointer',

                        userSelect:
                          'none',

                        padding:
                          '4px',

                        textAlign:
                          'center',

                        boxSizing:
                          'border-box',

                        backgroundColor:
                          isSelected
                            ? '#000080'
                            : 'transparent',

                        color:
                          isSelected
                            ? 'white'
                            : 'black',

                        touchAction:
                          'manipulation',
                      }}
                    >

                      {/* FOLDER ICON */}

                      <div
                        style={{
                          marginBottom:
                            '4px',

                          opacity:
                            project.isLocked
                              ? 0.55
                              : 1,

                          filter:
                            project.isLocked
                              ? 'grayscale(100%)'
                              : 'none',

                          pointerEvents:
                            'none',
                        }}
                      >
                        {renderIcon(
                          project.iconType
                        )}
                      </div>

                      {/* FOLDER NAME */}

                      <span
                        style={{
                          fontSize:
                            '11px',

                          lineHeight:
                            '1.2',

                          width:
                            '100%',

                          textAlign:
                            'center',

                          wordBreak:
                            'normal',

                          overflowWrap:
                            'break-word',

                          pointerEvents:
                            'none',
                        }}
                      >
                        {
                          project.name
                        }
                      </span>
                    </div>
                  );
                }
              )}

            {/* =================================================
                FILES INSIDE FOLDER
            ================================================= */}

            {currentFolder &&
              Array.isArray(
                currentFolder.files
              ) &&
              currentFolder.files.map(
                (file) => {
                  const isSelected =
                    selectedItem?.type ===
                      'file' &&
                    selectedItem?.id ===
                      file.id;

                  return (
                    <div
                      key={
                        file.id
                      }

                      onClick={(e) => {
                        e.stopPropagation();

                        if (
                          !isTouchDevice
                        ) {
                          handleFileClick(
                            file
                          );
                        }
                      }}

                      onDoubleClick={(e) => {
                        e.stopPropagation();

                        if (
                          !isTouchDevice
                        ) {
                          handleFileDoubleClick(
                            file
                          );
                        }
                      }}

                      onPointerUp={(e) => {
                        if (
                          isTouchDevice &&
                          (
                            e.pointerType ===
                              'touch' ||
                            e.pointerType ===
                              'pen'
                          )
                        ) {
                          e.preventDefault();
                          e.stopPropagation();

                          handleFileDoubleClick(
                            file
                          );
                        }
                      }}

                      style={{
                        display:
                          'flex',

                        flexDirection:
                          'column',

                        alignItems:
                          'center',

                        width:
                          '120px',

                        cursor:
                          'pointer',

                        userSelect:
                          'none',

                        padding:
                          '4px',

                        textAlign:
                          'center',

                        boxSizing:
                          'border-box',

                        backgroundColor:
                          isSelected
                            ? '#000080'
                            : 'transparent',

                        color:
                          isSelected
                            ? 'white'
                            : 'black',

                        touchAction:
                          'manipulation',
                      }}
                    >

                      {/* FILE ICON */}

<div
  style={{
    marginBottom: '8px',
    pointerEvents: 'none',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '32px',
    height: '32px',
  }}
>
  {renderFileIcon(file.iconType)}
</div>

                      {/* FILE NAME */}

                      <span
                        style={{
                          fontSize:
                            '11px',

                          lineHeight:
                            '1.2',

                          width:
                            '100%',

                          textAlign:
                            'center',

                          wordBreak:
                            'normal',

                          overflowWrap:
                            'break-word',

                          pointerEvents:
                            'none',
                        }}
                      >
                        {
                          file.name
                        }
                      </span>
                    </div>
                  );
                }
              )}

          </div>
        </div>
      </div>

      {/* =====================================================
          STATUS BAR
      ===================================================== */}

      <div
        style={{
          display: 'flex',

          alignItems:
            'center',

          padding:
            '2px 6px',

          fontSize:
            '11px',

          color:
            '#000',

          backgroundColor:
            '#c0c0c0',

          boxShadow:
            'inset 1px 1px 0px #dfdfdf, inset -1px -1px 0px #0a0a0a',

          marginTop:
            '2px',

          height:
            '20px',
        }}
      >
        {!currentFolder
          ? `${projects.length} object(s)`
          : `${currentFolder.files.length} object(s)`}
      </div>

    </div>
  );
}