import React, {
  useRef,
  useState,
  useEffect,
} from 'react';

import {
  FileText,
  Folder,
  FolderOpen,
  Notepad2,
  FolderRename,
  Shdocvw272,
  Wordpad,
} from '@react95/icons';


import holohealthIcon from '../assets/images/case-study/holohealthIcon.png';
import githubIcon from '../icons/github.svg';
import instagramIcon from '../icons/instagram.svg';
import figmaIcon from '../icons/figma.svg';

import LocalTree from './LocalTree';

export default function ProjectFolderContent({
  isTouchDevice,
}) {
  // =========================================================
  // RESPONSIVE STATE
  // =========================================================

  const [
    isMobile,
    setIsMobile,
  ] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(
        window.innerWidth <= 700
      );
    };

    checkScreenSize();

    window.addEventListener(
      'resize',
      checkScreenSize
    );

    return () => {
      window.removeEventListener(
        'resize',
        checkScreenSize
      );
    };
  }, []);

  // =========================================================
  // DEVICE MODE
  // =========================================================

  const isTouch =
    isTouchDevice ||
    isMobile;

  // =========================================================
  // STATE
  // =========================================================

  const [
    currentFolder,
    setCurrentFolder,
  ] = useState(null);

  const [
    selectedItem,
    setSelectedItem,
  ] = useState(null);

  const [
    expandedIds,
    setExpandedIds,
  ] = useState([]);

  const [
    resetTree,
    setResetTree,
  ] = useState(false);

  // =========================================================
  // PROJECT DATA
  // =========================================================

  const projects = [
    {
      id: 'visual-design',
      name: 'Visual Design',
      type: 'folder',
      iconType: 'folder',
      isLocked: false,
      message: '',
      children: [
        {
  id: 'holohealth',
  name: 'HoloHealth',
  type: 'folder',
  iconType: 'folder',
  isLocked: false,
  message: '',
children: [
          {
        id: 'holohealth-case-study',
        name: 'Case Study',
        type: 'file',
        iconType: 'caseStudy',
        openWindow: 'holohealth',
          },
        {
        id: 'holohealth-icon-system',
        name: 'HoloHealth.exe',
        type: 'file',
        iconType: 'holohealth',
        link: 'https://holo.health/',
        },
  // {
  //   id: 'holohealth-visual-language',
  //   name: 'Visual Language',
  //   type: 'file',
  //   iconType: 'documentation',
  // },
  // {
  //   id: 'holohealth-outcome',
  //   name: 'Outcome',
  //   type: 'file',
  //   iconType: 'caseStudy',
  // },
],
        },

        {
          id: 'ship-ui',
          name: 'Ship UI',
          type: 'folder',
          iconType: 'folder',
  isLocked: true,
  message: 'This folder is currently unavailable.',
          openWindow: 'ship-ui',
     // children: [
//   {
//     id: 'ship-ui-overview',
//     name: 'Overview',
//     type: 'file',
//     iconType: 'caseStudy',
//     link: 'https://www.shipfasterui.com/components/icons',
//   },
//   {
//     id: 'ship-ui-iconography',
//     name: 'Iconography',
//     type: 'file',
//     iconType: 'figma',
//     link: 'https://www.figma.com/design/0oLNU1icRnTTjeiScs6eXa/Shipfaster-UI---v2.7.1--LIVE----29-7?node-id=6-8&t=rZHIT5kjvZiofFEO-1',
//   },
//   {
//     id: 'ship-ui-ui-system',
//     name: 'UI System',
//     type: 'file',
//     iconType: 'documentation',
//   },
//   {
//     id: 'ship-ui-outcome',
//     name: 'Outcome',
//     type: 'file',
//     iconType: 'caseStudy',
//   },
// ],
        },

        {
          id: 'mayora',
          name: 'Mayora',
          type: 'folder',
          iconType: 'folder',
  isLocked: true,
  message: 'This folder is currently unavailable.',
          openWindow: 'mayora',
       // children: [
//   {
//     id: 'mayora-overview',
//     name: 'Overview',
//     type: 'file',
//     iconType: 'caseStudy',
//     link: 'https://honorable-slicer-cf7.notion.site/Mayora-Unwrapped-Strategic-Social-Media-in-Action-2d13e6c89623802aaf4fe1ed7c23ae28?pvs=143',
//   },
//   {
//     id: 'mayora-research-strategy',
//     name: 'Research & Strategy',
//     type: 'file',
//     iconType: 'documentation',
//   },
//   {
//     id: 'mayora-content-experiments',
//     name: 'Content Experiments',
//     type: 'file',
//     iconType: 'documentation',
//   },
//   {
//     id: 'mayora-visual-system',
//     name: 'Visual System',
//     type: 'file',
//     iconType: 'documentation',
//   },
//   {
//     id: 'mayora-outcome',
//     name: 'Outcome',
//     type: 'file',
//     iconType: 'caseStudy',
//   },
// ],
        },
      ],
    },

    {
      id: 'product-design',
      name: 'Product Design',
      type: 'folder',
      iconType: 'folder',
      isLocked: false,
      message: '',
      children: [
        {
          id: 'perdana-computer-product',
          name: "Perdana's Computer",
          type: 'folder',
          iconType: 'folder',
          isLocked: true,
          message: 'This folder is currently unavailable.',
          children: [
            {
              id: 'pc-product-overview',
              name: 'Overview',
              type: 'file',
              iconType: 'caseStudy',
            },
            {
              id: 'pc-product-thinking',
              name: 'Product Thinking',
              type: 'file',
              iconType: 'documentation',
            },
            {
              id: 'pc-features',
              name: 'Features',
              type: 'folder',
              iconType: 'folder',
              isLocked: false,
              message: '',
              children: [
                {
                  id: 'pc-installer',
                  name: 'Installer',
                  type: 'file',
                  iconType: 'documentation',
                },
                {
                  id: 'pc-project-folder',
                  name: 'Project Folder',
                  type: 'file',
                  iconType: 'documentation',
                },
                {
                  id: 'pc-ai-chat',
                  name: 'AI Chat',
                  type: 'file',
                  iconType: 'documentation',
                },
                {
                  id: 'pc-contact',
                  name: 'Contact',
                  type: 'file',
                  iconType: 'documentation',
                },
                {
                  id: 'pc-writing',
                  name: 'Writing',
                  type: 'file',
                  iconType: 'documentation',
                },
                {
                  id: 'pc-did-you-know',
                  name: 'Did You Know?',
                  type: 'file',
                  iconType: 'documentation',
                },
                {
                  id: 'pc-gimmicks',
                  name: 'Gimmicks & Easter Eggs',
                  type: 'file',
                  iconType: 'caseStudy',
                },
              ],
            },
            {
              id: 'pc-learnings',
              name: 'Learnings',
              type: 'file',
              iconType: 'documentation',
            },
          ],
        },
      ],
    },

    {
      id: 'design-engineering',
      name: 'Design Engineering',
      type: 'folder',
      iconType: 'folder',
      isLocked: false,
      message: '',
      children: [
        {
          id: 'perdana-computer-engineering',
          name: "Perdana's Computer",
          type: 'folder',
          iconType: 'folder',
  isLocked: true,
  message: 'This folder is currently unavailable.',
          children: [
            {
              id: 'pc-engineering-overview',
              name: 'Overview',
              type: 'file',
              iconType: 'caseStudy',
            },
            {
              id: 'pc-architecture',
              name: 'Architecture',
              type: 'file',
              iconType: 'documentation',
            },
            {
              id: 'pc-design-system',
              name: 'Design System',
              type: 'file',
              iconType: 'documentation',
            },
            {
              id: 'pc-interaction',
              name: 'Interaction',
              type: 'file',
              iconType: 'documentation',
            },
            {
              id: 'pc-build',
              name: 'Build',
              type: 'file',
              iconType: 'github',
              link: 'https://github.com/perdanakun/perdanakun.com',
            },
          ],
        },
      ],
    },

  // {
//   id: 'this-website',
//   name: 'This Website',
//   type: 'folder',
//   iconType: 'folder',
//   isLocked: false,
//   message: '',
//   children: [
//     {
//       id: 'website-case-study',
//       name: 'Case Study',
//       type: 'file',
//       iconType: 'caseStudy',
//       link: 'https://app.notion.com/p/Design-in-Code-Personal-Portfolio-as-an-Interactive-Desktop-System-3ae3e6c8962380dd941def5566e614c4?source=copy_link',
//     },
//     {
//       id: 'website-documentation',
//       name: 'Documentation',
//       type: 'file',
//       iconType: 'documentation',
//       link: 'https://app.notion.com/p/Design-in-Code-Personal-Portfolio-as-an-Interactive-Desktop-System-3ae3e6c8962380dd941def5566e614c4?source=copy_link',
//     },
//     {
//       id: 'website-github',
//       name: 'Github.url',
//       type: 'file',
//       iconType: 'github',
//       link: 'https://github.com/perdanakun/perdanakun.com',
//     },
//     {
//       id: 'website-live',
//       name: 'Live Website',
//       type: 'file',
//       iconType: 'website',
//       link: 'https://www.perdanakun.com/',
//     },
//   ],
// },

  ];

  // =========================================================
  // HELPERS
  // =========================================================

  const getChildren = (
    folder
  ) => {
    if (!folder) {
      return [];
    }

    return Array.isArray(
      folder.children
    )
      ? folder.children
      : [];
  };

  // Back to Children Folder

  const findParentFolder = (
  items,
  targetId,
  parent = null
) => {
  if (!Array.isArray(items)) {
    return null;
  }

  for (const item of items) {
    if (item.type !== 'folder') {
      continue;
    }

    if (item.id === targetId) {
      return parent;
    }

    const result = findParentFolder(
      item.children,
      targetId,
      item
    );

    if (result !== null) {
      return result;
    }
  }

  return null;
};

  // =========================================================
  // TREE DATA
  // =========================================================

  const buildTreeData = (
    items
  ) => {
    if (!Array.isArray(items)) {
      return [];
    }

    return items.map(
      (item) => {
        const isFolder =
          item.type === 'folder';

        return {
          treeId:
            `${isFolder ? 'folder' : 'file'}-${item.id}`,

          type:
            item.type,

          id:
            item.id,

          name:
            item.name,

          link:
            item.link,

          iconType:
            item.iconType,

          isLocked:
            item.isLocked ||
            false,

          message:
            item.message ||
            '',

          source:
            item,

          children:
            isFolder
              ? buildTreeData(
                  item.children
                )
              : [],
        };
      }
    );
  };

  const treeData =
    buildTreeData(projects);

  // =========================================================
  // ICONS
  // =========================================================

  const renderIcon = (
    type
  ) => {
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

  const renderFileIcon = (
    type
  ) => {
    switch (type) {

case 'holohealth':
  return (
    <img
      src={holohealthIcon}
      alt="HoloHealth"
      style={{
        width: '48px',
        height: '48px',
        objectFit: 'contain',
      }}
    />
  );


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
  // OPEN LINK
  // =========================================================

  const openExternalLink = (
    url
  ) => {
    if (!url) return;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  };

  // =========================================================
  // OPEN FOLDER
  // =========================================================

  const openFolder = (
    folder
  ) => {
    if (!folder) return;

    if (folder.isLocked) {
      alert(
        `${folder.name}\n\n${folder.message}`
      );

      return;
    }

    setCurrentFolder(
      folder
    );

    setSelectedItem(null);

    setExpandedIds(
      (previous) => {
        const treeId =
          `folder-${folder.id}`;

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
  // FOLDER CLICK
  // =========================================================
  const handleFolderClick = (
  folder
) => {
  if (!folder) return;

  // =========================================
  // MOBILE / TOUCH
  // =========================================

  if (isTouch) {
    // Project folder → langsung buka window
    if (folder.openWindow) {
      window.dispatchEvent(
        new CustomEvent(
          'open-project-window',
          {
            detail: {
              windowName:
                folder.openWindow,
            },
          }
        )
      );

      return;
    }

    // Folder biasa → buka folder
    openFolder(folder);

    return;
  }

  // =========================================
  // DESKTOP
  // =========================================

  // Desktop: single click hanya select
  setSelectedItem({
    type: 'folder',
    id: folder.id,
  });
};

  // =========================================================
  // FOLDER DOUBLE CLICK
  // =========================================================
const handleFolderDoubleClick = (
  folder
) => {
  if (!folder) return;

  // =========================================
  // MOBILE / TOUCH
  // =========================================

  if (isTouch) {
    return;
  }

  // =========================================
  // DESKTOP
  // =========================================

  // Project folder → buka project window
  if (folder.openWindow) {
    window.dispatchEvent(
      new CustomEvent(
        'open-project-window',
        {
          detail: {
            windowName:
              folder.openWindow,
          },
        }
      )
    );

    return;
  }

  // Folder biasa → masuk folder
  openFolder(folder);
};

  // =========================================================
  // FILE CLICK
  // =========================================================
const handleFileClick = (
  file
) => {
  if (!file) return;

  // =======================================================
  // MOBILE / TOUCH
  // =======================================================

  if (isTouch) {

    if (file.openWindow) {
      window.dispatchEvent(
        new CustomEvent(
          'open-project-window',
          {
            detail: {
              windowName:
                file.openWindow,
            },
          }
        )
      );

      return;
    }

    if (file.link) {
      openExternalLink(
        file.link
      );
    }

    return;
  }

  // =======================================================
  // DESKTOP
  // =======================================================

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

  if (isTouch) {
    return;
  }

  // =======================================================
  // OPEN INTERNAL PROJECT WINDOW
  // =======================================================

  if (file.openWindow) {
    window.dispatchEvent(
      new CustomEvent(
        'open-project-window',
        {
          detail: {
            windowName:
              file.openWindow,
          },
        }
      )
    );

    return;
  }

  // =======================================================
  // OPEN EXTERNAL LINK
  // =======================================================

  if (file.link) {
    openExternalLink(
      file.link
    );
  }
};

  // =========================================================
  // TREE FOLDER
  // =========================================================

  const handleTreeFolderClick = (
    item
  ) => {
    if (!item) return;

    handleFolderClick(
      item.source || item
    );
  };

  const handleTreeFolderDoubleClick = (
    item
  ) => {
    if (!item) return;

    handleFolderDoubleClick(
      item.source || item
    );
  };

  // =========================================================
  // TREE FILE
  // =========================================================

  const handleTreeFileClick = (
    item
  ) => {
    if (!item) return;

    handleFileClick(
      item.source || item
    );
  };

  const handleTreeFileDoubleClick = (
    item
  ) => {
    if (!item) return;

    handleFileDoubleClick(
      item.source || item
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
  // BACK
  // =========================================================
const handleBack = () => {
  if (!currentFolder) {
    return;
  }

  const parentFolder =
    findParentFolder(
      projects,
      currentFolder.id
    );

  setCurrentFolder(
    parentFolder
  );

  setSelectedItem(null);

  // Kembali satu level pada tree
  if (parentFolder) {
    setExpandedIds(
      (previous) => {
        const parentTreeId =
          `folder-${parentFolder.id}`;

        return previous.filter(
          (id) =>
            id === parentTreeId
        );
      }
    );
  } else {
    // Sudah kembali ke root
    setExpandedIds([]);
  }
};
  // =========================================================
  // TREE COLLAPSE
  // =========================================================

  const handleTreeFolderCollapse = () => {
    handleBack();
  };

  // =========================================================
  // EMPTY AREA
  // =========================================================

  const handleExplorerClick = () => {
    setSelectedItem(null);
  };

  // =========================================================
  // EXPLORER ITEM
  // =========================================================

  const renderExplorerItem = (
    item
  ) => {
    if (!item) {
      return null;
    }

    const isFolder =
      item.type === 'folder';

    const isSelected =
      selectedItem?.type ===
        item.type &&
      selectedItem?.id ===
        item.id;

    // =======================================================
    // FOLDER
    // =======================================================

    if (isFolder) {
      return (
        <div
          key={item.id}

          onClick={(e) => {
            e.stopPropagation();

            handleFolderClick(
              item
            );
          }}

          onDoubleClick={(e) => {
            e.stopPropagation();

            handleFolderDoubleClick(
              item
            );
          }}

          style={{
            display: 'flex',

            flexDirection:
              'column',

            alignItems:
              'center',

            justifyContent:
              'flex-start',

            width:
              'var(--explorer-item-width)',

            minHeight:
              'var(--explorer-item-height)',

            cursor:
              item.isLocked
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

            WebkitTapHighlightColor:
              'transparent',
          }}
        >
          {/* FOLDER ICON */}

          <div
            style={{
              marginBottom:
                '0px',

              opacity:
                item.isLocked
                  ? 0.55
                  : 1,

              filter:
                item.isLocked
                  ? 'grayscale(100%)'
                  : 'none',

              pointerEvents:
                'none',
            }}
          >
            {renderIcon(
              item.iconType
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
            {item.name}
          </span>
        </div>
      );
    }

    // =======================================================
    // FILE
    // =======================================================

    return (
      <div
        key={item.id}

        onClick={(e) => {
          e.stopPropagation();

          handleFileClick(
            item
          );
        }}

        onDoubleClick={(e) => {
          e.stopPropagation();

          handleFileDoubleClick(
            item
          );
        }}

        style={{
          display: 'flex',

          flexDirection:
            'column',

          alignItems:
            'center',

          justifyContent:
            'flex-start',

          width:
            'var(--explorer-item-width)',

          minHeight:
            'var(--explorer-item-height)',

          cursor:
            item.link
              ? 'pointer'
              : 'default',

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

          WebkitTapHighlightColor:
            'transparent',
        }}
      >
        {/* FILE ICON */}

        <div
          style={{
            marginBottom:
              '8px',

            pointerEvents:
              'none',

            display:
              'flex',

            alignItems:
              'center',

            justifyContent:
              'center',

            width:
              '32px',

            height:
              '32px',
          }}
        >
          {renderFileIcon(
            item.iconType
          )}
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
          {item.name}
        </span>
      </div>
    );
  };

  // =========================================================
  // CURRENT CHILDREN
  // =========================================================

  const currentChildren =
    currentFolder
      ? getChildren(
          currentFolder
        )
      : projects;

  // =========================================================
  // ROOT / FOLDER COUNT
  // =========================================================

  const currentObjectCount =
    currentChildren.length;

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div
      style={{
        '--explorer-item-width':
          isMobile
            ? '90px'
            : '120px',

        '--explorer-item-height':
          isMobile
            ? '82px'
            : '90px',

        display: 'flex',

        flexDirection:
          'column',

        height: '100%',

        width: '100%',

        minWidth: 0,

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

          backgroundColor:
            '#c0c0c0',

          borderBottom:
            '1px solid #808080',

          fontSize:
            '11px',

          userSelect:
            'none',

          flexShrink: 0,
        }}
      >
        {currentFolder ? (
          <span
            onClick={
              handleBack
            }

            style={{
              padding:
                '2px 6px',

              cursor:
                'pointer',

              touchAction:
                'manipulation',

              WebkitTapHighlightColor:
                'transparent',
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
          EXPLORER
      ===================================================== */}

      <div
        style={{
          flex: 1,

          display: 'flex',

          minHeight: 0,

          minWidth: 0,

          backgroundColor:
            'white',

          overflow: 'hidden',

          margin: '2px',

          boxShadow:
            'inset 1px 1px 0px #0a0a0a, inset -1px -1px 0px #dfdfdf',
        }}
      >
        {/* ===================================================
            TREE
        =================================================== */}

        {!isMobile && (
          <div
            style={{
              width:
                '180px',

              minWidth:
                '180px',

              backgroundColor:
                '#ffffff',

              overflow:
                'auto',

              borderRight:
                '1px solid #808080',

              padding:
                '4px',

              boxSizing:
                'border-box',

              touchAction:
                'pan-y',

              flexShrink:
                0,
            }}

            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <LocalTree
              data={
                treeData
              }

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

              onFolderCollapse={
                handleTreeFolderCollapse
              }

              resetExpanded={
                resetTree
              }
            />
          </div>
        )}

        {/* ===================================================
            CONTENT
        =================================================== */}

        <div
          onClick={
            handleExplorerClick
          }

          style={{
            flex: 1,

            minWidth: 0,

            minHeight: 0,

            backgroundColor:
              'white',

            padding:
              isMobile
                ? '8px'
                : '12px',

            overflowY:
              'auto',

            overflowX:
              'hidden',

            boxShadow:
              'inset 1px 1px 0px #0a0a0a, inset -1px -1px 0px #dfdfdf',

            touchAction:
              'pan-y',
          }}
        >
          <div
            style={{
              display:
                'grid',

              gridTemplateColumns:
                isMobile
                  ? 'repeat(auto-fill, minmax(90px, 1fr))'
                  : 'repeat(auto-fill, 120px)',

              gridAutoRows:
                isMobile
                  ? '82px'
                  : '90px',

              gap:
                isMobile
                  ? '6px'
                  : '8px',

              alignItems:
                'start',

              justifyItems:
                'start',

              padding:
                isMobile
                  ? '2px'
                  : '4px',

              width:
                '100%',

              boxSizing:
                'border-box',
            }}
          >
            {currentChildren.map(
              (item) =>
                renderExplorerItem(
                  item
                )
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

          flexShrink:
            0,

          boxSizing:
            'border-box',
        }}
      >
        {currentObjectCount}
        {' object(s)'}
      </div>
    </div>
  );
}
