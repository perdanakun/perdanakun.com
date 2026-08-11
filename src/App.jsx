import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import '@react95/icons/icons.css';
import winBackground from './assets/images/win_background.jpg';
import AiAssistantContentModal from './components/AiAssistantContentModal';
import ProjectFolderContent from './components/ProjectFolderContent';
import CSGameModal from './components/CSGameModal';
import ContactContent from './components/ContactContent';
import RecycleBin from './components/RecycleBin';
import AboutContent from './components/AboutContent';
import AlertModal from './components/AlertModal';
import CameraModal from './components/CameraModal';
import { getAIResponse } from './services/aiService';
import { Frame, TitleBar, Button, TaskBar, List, Modal, useModal } from '@react95/core';
import { 
  Notepad,
  Notepad2,
  Folder, 
  Globe, 
  Mail,
  Mailnews2,
  Mailnews14,
  Mapi32801,
  Computer, 
  User, 
  PowerOff, 
  MsDos, 
  Joy102,
  Shell3232,
  RecycleFull,
  Wangimg128,
  WindowsExplorer,
  FolderFile,
  Winmine1,
  Drvspace7,
  Intl101,
} from '@react95/icons';
import { useState, useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';
import aiOpenSound from './assets/sounds/ai_assistant_open.wav';


// Fungi baru DesktopIcon
function DesktopIcon({ children, onOpen }) {
  const lastTapRef = useRef(0);

  const handleDoubleClick = (e) => {
    e.preventDefault();
    onOpen();
  };

  const handleTouchEnd = (e) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
      e.preventDefault();
      lastTapRef.current = 0;
      onOpen();
    } else {
      lastTapRef.current = now;
    }
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      onTouchEnd={handleTouchEnd}
      style={{
        width: '100%',
        height: '100%',
        touchAction: 'manipulation',
      }}
    >
      {children}
    </div>
  );
}

function App() {
  const { focus } = useModal();

// Mengatur responsivenes dan tap di device selain PC
const [isMobile, setIsMobile] = useState(
  typeof window !== 'undefined' && window.innerWidth <= 600
);

const [isTablet, setIsTablet] = useState(
  typeof window !== 'undefined' &&
  window.innerWidth > 600 &&
  window.innerWidth <= 1024
);

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;

    setIsMobile(width <= 600);
    setIsTablet(width > 600 && width <= 1024);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  // Menyimpan status true (terbuka) atau false (tertutup) untuk setiap aplikasi/jendela
const [windows, setWindows] = useState({
  about: false,
  projects: false,
  contact: false,
  csGame: false,
  aiAssistant: false,
  recycleBin: false,
  imageViewer: false,
});


  // Sound Effect
  // AI Assistant Open Sound
  useEffect(() => {
  if (windows.aiAssistant) {
    const audio = new Audio(aiOpenSound);
    audio.volume = 0.5;
    audio.play().catch(() => {
      // Browser bisa memblokir autoplay dalam kondisi tertentu
    });
  }
}, [windows.aiAssistant]);


  const toggleWindow = (name, value) => {
  setWindows(prev => ({
    ...prev,
    [name]: value
  }));
};

//restoreAI sphere AI assistant

const restoreAI = () => {
  setAiMinimized(false);

  // kasih waktu React render kembali sebelum focus
  setTimeout(() => {
    focus('aiAssistant-window');
  }, 0);
};


// Fungsi open klik thumbnail after minimize
const openWindow = (name) => {
  // force close dulu supaya React95 reset state minimize internalnya
  setWindows(prev => ({
    ...prev,
    [name]: false
  }));

  // buka kembali
  setTimeout(() => {
    setWindows(prev => ({
      ...prev,
      [name]: true
    }));
  }, 10);
};

  // Fungsi untuk membuka tab baru di browser (digunakan untuk CV dan Medium)
  const openExternalLink = (url) => {
    window.open(url, '_blank');
  };


  const searchInputStyle = {
    flex: 1,
    height: '30px',
    padding: '0 10px',
    border: 'none',
    boxShadow: 'inset 2px 2px 0px #868686, inset -2px -2px 0px #ffffff',
    backgroundColor: 'white',
    fontFamily: 'sans-serif',
    fontSize: '13px',
    outline: 'none'
  };

  // Fungsi OpenImageFile
const [imageViewers, setImageViewers] = useState([]);

  const openImageFile = (file) => {
    setImageViewers(prev => {
      // Jangan buka window yang sama dua kali
      if (prev.some(viewer => viewer.file.id === file.id)) {
        return prev;
      }

      return [
        ...prev,
        {
          id: `${file.id}-${Date.now()}`,
          file,
          width: 300,
          height: 200,
        },
      ];
    });
  };

const closeImageViewer = (viewerId) => {
  setImageViewers(prev =>
    prev.filter(viewer => viewer.id !== viewerId)
  );
};

  // Fungsi menghitung ukuran window untuk mendapat rasio asli
    const handleImageLoad = (viewerId, e) => {
    const img = e.currentTarget;

    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    // Maksimal 40% dari desktop
    const maxWidth = window.innerWidth * 0.4;
    const maxHeight = window.innerHeight * 0.4;

    const scale = Math.min(
      1,
      maxWidth / naturalWidth,
      maxHeight / naturalHeight
    );

    const width = Math.round(naturalWidth * scale);
    const height = Math.round(naturalHeight * scale);

    setImageViewers(prev =>
      prev.map(viewer =>
        viewer.id === viewerId
          ? {
              ...viewer,
              width,
              height,
            }
          : viewer
      )
    );
  };

  // mengatur Responsive Modal window
  const getResponsiveModalStyle = ({
  width = 600,
  height = 400,
  mobileHeight = 'calc(100dvh - 70px)',
} = {}) => {
  if (isMobile) {
    return {
      left: '5px',
      top: '5px',
      transform: 'none',

      width: 'calc(100vw - 10px)',
      maxWidth: 'calc(100vw - 10px)',

      height: mobileHeight,
      maxHeight: 'calc(100dvh - 70px)',

      boxSizing: 'border-box',
    };
  }

  return {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',

    width: `${width}px`,
    height: `${height}px`,

    maxWidth: '90vw',
    maxHeight: '90vh',

    boxSizing: 'border-box',
  };
};

  //Notification allert send email
  const [showContactAlert, setShowContactAlert] = useState(false);

  // Fungsi Camera Contact
  const [showCamera, setShowCamera] = useState(false);
  const [cameraAttachment, setCameraAttachment] = useState(null);


  return (
    <>
      {/* CSS Reset untuk layar full screen dan background Windows XP */}
      <style>
        {`
          html, body, #root {
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-image: url(${winBackground});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            .draggable {
              justify-content: flex-start !important;
            }

            .draggable > div:first-of-type {
              text-align: left !important;
            }

        
         /* Aturan ukraun input smartphone, supaya ga nge zoom */
            @media (max-width: 600px) {
            input,
            textarea,
            select {
              font-size: 16px !important;
            }
          }


         /* Aturan scrollbar tipis dan mungil */
         div::-webkit-scrollbar {
            width: 3px; 
         }
         div::-webkit-scrollbar-track {
            background: #ffffff;
         }
         div::-webkit-scrollbar-thumb {
            background: #ffffff; 
            border-radius: 4px;  
         }
         div::-webkit-scrollbar-thumb:hover {
            background: #ffffff;
         }
        `}
      </style>

      {/* --- CONTAINER DESKTOP UTAMA --- */}
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>

        {/* --- THUMBNAIL DESKTOP --- */}

{/* --- THUMBNAIL AI SPHERE --- */}

        {/* Thumbnail 1: About (about.txt) */}
<Rnd
  default={{ x: 20, y: 120, width: 80, height: 80 }}
  bounds="window"
  enableResizing={false}
  disableDragging={false}
>
  <DesktopIcon onOpen={() => openWindow('about')}>
    <div style={desktopIconStyle}>
      <div style={{ fontSize: '32px', marginBottom: '0' }}>
        <Computer variant="32x32_4" />
      </div>
      <span>Perdana's PC</span>
    </div>
  </DesktopIcon>
</Rnd>

        {/* Thumbnail 2: Recycle Bin */}
<Rnd
  default={{ x: 20, y: 20, width: 80, height: 80 }}
  bounds="window"
  enableResizing={false}
  disableDragging={false}
>
  <DesktopIcon onOpen={() => openWindow('recycleBin')}>
    <div style={desktopIconStyle}>
      <div style={{ fontSize: '32px', marginBottom: '0' }}>
        <RecycleFull variant="32x32_4" />
      </div>
      <span>Recycle Bin </span>
    </div>
  </DesktopIcon>
</Rnd>

        {/* Thumbnail 3: Case Studies (projects) */}
<Rnd
  default={{ x: 20, y: 220, width: 80, height: 80 }}
  bounds="window"
  enableResizing={false}
  disableDragging={false}
>
  <DesktopIcon onOpen={() => openWindow('projects')}>
    <div style={desktopIconStyle}>
      <div style={{ fontSize: '32px', marginBottom: '0' }}>
        <Folder variant="32x32_4" />
      </div>
      <span>Projects</span>
    </div>
  </DesktopIcon>
</Rnd>

        {/* Thumbnail 4: Medium Articles (medium.url) */}
<Rnd
  default={{ x: 20, y: 320, width: 80, height: 80 }}
  bounds="window"
  enableResizing={false}
  disableDragging={false}
>
  <DesktopIcon
    onOpen={() =>
      openExternalLink('https://medium.com/@perdanakurniawan25')
    }
  >
    <div style={desktopIconStyle}>
      <div style={{ fontSize: '32px', marginBottom: '0' }}>
        <Notepad2 variant="32x32_4" />
      </div>
      <span>Writing</span>
    </div>
  </DesktopIcon>
</Rnd>

        {/* Thumbnail 5: Contact Me (contact.exe) */}
<Rnd
  default={{ x: 120, y: 20, width: 80, height: 80 }}
  bounds="window"
  enableResizing={false}
  disableDragging={false}
>
  <DesktopIcon onOpen={() => openWindow('contact')}>
    <div style={desktopIconStyle}>
      <div style={{ fontSize: '32px', marginBottom: '0' }}>
        <Mapi32801 variant="32x32_4" />
      </div>
      <span>Contact</span>
    </div>
  </DesktopIcon>
</Rnd>

        {/* Thumbnail 6: Games */}
<Rnd
  default={{ x: 120, y: 120, width: 80, height: 80 }}
  bounds="window"
  enableResizing={false}
  disableDragging={false}
>
  <DesktopIcon onOpen={() => openWindow('csGame')}>
    <div style={desktopIconStyle}>
      <div style={{ fontSize: '32px', marginBottom: '0' }}>
        <Winmine1 variant="32x32_4" />
      </div>
      <span>Games</span>
    </div>
  </DesktopIcon>
</Rnd>

        {/* Thumbnail 7: AI Messenger (ai_messenger.exe) */}
<Rnd
  default={{ x: 120, y: 220, width: 80, height: 80 }}
  bounds="window"
  enableResizing={false}
  disableDragging={false}
>
  <DesktopIcon onOpen={() => openWindow('aiAssistant')}>
    <div style={desktopIconStyle}>
      <div style={{ fontSize: '32px', marginBottom: '0' }}>
        <Intl101 variant="32x32_4" />
      </div>
      <span>AI Chat</span>
    </div>
  </DesktopIcon>
</Rnd>

        {/* --- JENDELA MODAL UNTUK MASING-MASING APLIKASI --- */}

        {/* --- JENDELA AI MESSENGER MINIMIZE--- */}

  


{/* --- JENDELA AI MESSENGER --- */}
{windows.aiAssistant && (
  <Modal
    id="aiAssistant-window"
    icon={<Intl101 variant="16x16_4" />}
    title="AI Assistant.exe"
    style={
  isMobile
    ? {
        // SMARTPHONE
        position: 'fixed',

        left: '0',
        top: '0',
        right: '0',
        bottom: '28px',

        width: '100vw',
        height: 'auto',

        maxWidth: '100vw',
        maxHeight: 'none',

        transform: 'none',

        boxSizing: 'border-box',
      }
    : isTablet
    ? {
        // IPAD / TABLET
        position: 'fixed',

        right: '0',
        top: '0',
        bottom: '28px',

        width: '40%',
        height: 'auto',

        maxWidth: '90vw',
        maxHeight: 'calc(100vh - 28px)',

        boxSizing: 'border-box',
      }
    : {
        // DESKTOP
        position: 'fixed',

        right: '0',
        top: '0',
        bottom: '28px',

        width: '20%',
        height: 'auto',

        maxHeight: 'calc(100vh - 28px)',

        boxSizing: 'border-box',
      }
}
    titleBarOptions={
      <>
        <Modal.Minimize />

        <TitleBar.Close
          onClick={() => toggleWindow('aiAssistant', false)}
        />
      </>
    }
  >
    <AiAssistantContentModal />
  </Modal>
)}






        {/* --- JENDELA PROJECTS --- */}
        {windows.projects && (
          <Modal
            key={windows.projects ? 'projects-open' : 'projects-close'}
            icon={<Folder variant="16x16_4" />}
            title="Project Explorer"
            style={{
              left:'50%',
              top:'50%',
              transform:'translate(-50%, -50%)',
              width:'700px',
              height:'500px'
            }}
            titleBarOptions={
              <>
                <Modal.Minimize />
                <TitleBar.Close
                  onClick={() => toggleWindow('projects', false)}
                />
              </>
            }
          >
            <ProjectFolderContent />
          </Modal>
        )}

{/* Jendela Contact */}


{windows.contact && (
  <Modal
    key="contact-window"
    icon={<Mapi32801 variant="16x16_4" />}
    title="Contact.exe"
    style={{
      position: 'fixed',

      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',

      // Ukuran normal desktop
      width: '800px',
      height: '600px',

      // Responsive
      maxWidth: 'calc(100vw - 20px)',
      maxHeight: 'calc(100vh - 50px)',

      boxSizing: 'border-box',
    }}
    titleBarOptions={
      <>
        <Modal.Minimize />

        <TitleBar.Close
          onClick={() => toggleWindow('contact', false)}
        />
      </>
    }
  >
    <ContactContent
      isMobile={isMobile}
      onSendSuccess={() => setShowContactAlert(true)}
      onOpenCamera={() => setShowCamera(true)}
      cameraAttachment={cameraAttachment}
      onRemoveAttachment={() => setCameraAttachment(null)}
    />
  </Modal>
)}

{/* Jendela Contact Camera */}
{showCamera && (
  <Modal
    key="camera-window"
    icon={<Mapi32801 variant="16x16_4" />}
    title="Camera.exe"
    style={{
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      height: '450px',
      maxWidth: '90vw',
      maxHeight: '90vh',
      boxSizing: 'border-box',
    }}
    titleBarOptions={
      <TitleBar.Close
        onClick={() => setShowCamera(false)}
      />
    }
  >
    <CameraModal
      show={showCamera}
      onClose={() => setShowCamera(false)}
      onCapture={(file) => {
        setCameraAttachment(file);
        setShowCamera(false);
      }}
    />
  </Modal>
)}


        {/* Jendela Contact Alert Message Sent */}
      <AlertModal
      show={showContactAlert}
      title="Message Sent!"
      message={
        <>
          Your message has been sent successfully.
          <br />
          Thanks for reaching out!
        </>
      }
      onClose={() => setShowContactAlert(false)}
      />


        {/* Jendela csGame */}
        {windows.csGame && (
          <Modal
            key="csGame-window"
            icon={<Winmine1 variant="16x16_4" />}
            title="Games.exe"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '640px',
              height: '480px'
            }}
            titleBarOptions={
              <>
                <Modal.Minimize />
                <TitleBar.Close
                  onClick={() => toggleWindow('csGame', false)}
                />
              </>
            }
          >
            <CSGameModal />
          </Modal>
        )}

        {windows.about && (
          <Modal
            key="about-window"
            icon={<Computer variant="16x16_4" />}
            title="PERDANA-PC"
            style={{
              left: '50%',
              top: '50%',
              width: '600px',
              transform: 'translate(-50%, -50%)'
            }}
            titleBarOptions={
              <>
                <Modal.Minimize />
                <TitleBar.Close
                  onClick={() => toggleWindow('about', false)}
                />
              </>
            }
          >
            <AboutContent />
          </Modal>
        )}

        {/* --- JENDELA RECYCLE BIN --- */}
        {windows.recycleBin && (
          <Modal
            key="recycleBin-window"
            icon={<RecycleFull variant="16x16_4" />}
            title="Recycle Bin"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '350px'
            }}
            titleBarOptions={
              <>
                <Modal.Minimize />
                <TitleBar.Close
                  onClick={() => toggleWindow('recycleBin', false)}
                />
              </>
            }
          >
            <RecycleBin onOpenFile={openImageFile} />
          </Modal>
        )}


        {/* --- JENDELA ImageViewer --- */}
        {imageViewers.map((viewer) => (
  <Modal
    key={viewer.id}
    id={`image-viewer-${viewer.id}`}
    icon={<Wangimg128 variant="16x16_4" />}
    title={viewer.file.name}
    style={{
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',

      width: `${viewer.width + 24}px`,
      height: `${viewer.height + 60}px`,

      maxWidth: '90vw',
      maxHeight: '90vh',

      boxSizing: 'border-box',
    }}
    titleBarOptions={
      <>
        <Modal.Minimize />

        <TitleBar.Close
          onClick={() => closeImageViewer(viewer.id)}
        />
      </>
    }
  >
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#808080',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        overflow: 'hidden',
        boxSizing: 'border-box',

        padding: '12px',
      }}
    >
      <img
        src={viewer.file.imagePath}
        alt={viewer.file.name}
        onLoad={(e) =>
          handleImageLoad(viewer.id, e)
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
  </Modal>
))}



        {/* --- TASKBAR BAWAH BAWAAN REACT95 --- */}
        <TaskBar
          list={
            <List style={{ width: '240px' }}>
<List.Item 
  icon={<Intl101 variant="16x16_4" />} 
  onClick={() => toggleWindow('aiAssistant', true)}
>
  AI Assistant
</List.Item>
              <List.Divider />
              <List.Item 
                icon={<Computer variant="16x16_4" />} 
                onClick={() => toggleWindow('about', true)}
              >
                About
              </List.Item>
              <List.Item 
                icon={<Folder variant="16x16_4" />} 
                onClick={() => toggleWindow('projects', true)}
              >
                Projects
              </List.Item>
              <List.Item 
                icon={<Mapi32801 variant="16x16_4" />} 
                onClick={() => toggleWindow('contact', true)}
              >
                Contact Me
              </List.Item>
              <List.Item 
                icon={<Winmine1 variant="16x16_4" />} 
                onClick={() => toggleWindow('csGame', true)}
              >
                Games
              </List.Item>
              <List.Divider />
              <List.Item 
                icon={<PowerOff variant="16x16_4" />} 
                onClick={() => window.location.reload()}
              >
                Reset Desktop
              </List.Item>
            </List>
          }
        />

      </div>
    </>
  );
}

const desktopIconStyle = {
  width: '80px', 
  textAlign: 'center', 
  cursor: 'grab',
  color: 'white',
  fontFamily: 'sans-serif',
  fontSize: '12px',
  textShadow: '1px 1px black',
  userSelect: 'none'
};

const inputStyle = {
  width: '100%',
  padding: '6px',
  border: 'none',
  boxShadow: 'inset 2px 2px 0px #868686, inset -2px -2px 0px #ffffff',
  backgroundColor: 'white',
  fontFamily: 'sans-serif',
  fontSize: '12px',
  outline: 'none'
};

export default App;