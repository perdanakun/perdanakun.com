import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import '@react95/icons/icons.css';
import AiAssistantContentModal from './components/AiAssistantContentModal';
import ProjectFolderContent from './components/ProjectFolderContent';
import CSGameModal from './components/CSGameModal';
import ContactContent from './components/ContactContent';
import RecycleBin from './components/RecycleBin';
import AboutContent from './components/AboutContent';
import { getAIResponse } from './services/aiService';
import { Frame, TitleBar, Button, TaskBar, List, Modal } from '@react95/core';
import { 
  Notepad, 
  Folder, 
  Globe, 
  Mail, 
  Computer, 
  User, 
  PowerOff, 
  MsDos, 
  Joy102,
  Shell3232
} from '@react95/icons';
import { useState, useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';


function App() {

  // Menyimpan status true (terbuka) atau false (tertutup) untuk setiap aplikasi/jendela
const [windows, setWindows] = useState({
  about: false,
  projects: false,
  contact: false,
  csGame: false,
  aiAssistant: false,
  recycleBin: false,
});

  const toggleWindow = (name, value) => {
  setWindows(prev => ({
    ...prev,
    [name]: value
  }));
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
            background-image: url('/winxp pixel.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

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

        {/* Thumbnail 1: About (about.txt) */}
        <Rnd default={{ x: 20, y: 120, width: 80, height: 80 }} bounds="window" enableResizing={false}>
          <div onDoubleClick={() => openWindow('about')} style={desktopIconStyle}>
            <div style={{ fontSize: '32px', marginBottom: '0' }}>
              <Notepad variant="32x32_4" />
            </div>
            <span>about.txt</span>
          </div>
        </Rnd>

        {/* Thumbnail 2: Recycle Bin */}
        <Rnd 
          default={{ x: 20, y: 20, width: 80, height: 80 }} 
          bounds="window" 
          enableResizing={false}>
          <div 
            onDoubleClick={() => openWindow('recycleBin')} 
            style={desktopIconStyle}>
            <div style={{ fontSize:'32px', marginBottom:'0' }}>
              <Shell3232 variant="32x32_4" />
            </div>
            <span>
              recycle_bin
            </span>
          </div>
        </Rnd>

        {/* Thumbnail 3: Case Studies (projects) */}
        <Rnd default={{ x: 20, y: 220, width: 80, height: 80 }} bounds="window" enableResizing={false}>
          <div onDoubleClick={() => openWindow('projects', true)} style={desktopIconStyle}>
            <div style={{ fontSize: '32px', marginBottom: '0' }}>
              <Folder variant="32x32_4" />
            </div>
            <span>projects</span>
          </div>
        </Rnd>

        {/* Thumbnail 4: Medium Articles (medium.url) */}
        <Rnd default={{ x: 20, y: 320, width: 80, height: 80 }} bounds="window" enableResizing={false}>
          <div onDoubleClick={() => openExternalLink('https://medium.com/@perdanakurniawan25')} style={desktopIconStyle}>
            <div style={{ fontSize: '32px', marginBottom: '0' }}>
              <Globe variant="32x32_4" />
            </div>
            <span>medium.url</span>
          </div>
        </Rnd>

        {/* Thumbnail 5: Contact Me (contact.exe) */}
        <Rnd default={{ x: 120, y: 20, width: 80, height: 80 }} bounds="window" enableResizing={false}>
          <div onDoubleClick={() => openWindow('contact')} style={desktopIconStyle}>
            <div style={{ fontSize: '32px', marginBottom: '0' }}>
              <Mail variant="32x32_4" />
            </div>
            <span>contact.exe</span>
          </div>
        </Rnd>

        {/* Thumbnail 6: Counter-Strike 1.6 (counter_strike.exe) */}
        <Rnd default={{ x: 120, y: 120, width: 80, height: 80 }} bounds="window" enableResizing={false}>
          <div onDoubleClick={() => openWindow('csGame')} style={desktopIconStyle}>
            <div style={{ fontSize: '32px', marginBottom: '0' }}>
              <Joy102 variant="32x32_4" />
            </div>
            <span>games.exe</span>
          </div>
        </Rnd> 

        {/* Thumbnail 7: AI Messenger (ai_messenger.exe) */}
        <Rnd default={{ x: 120, y: 220, width: 80, height: 80 }} bounds="window" enableResizing={false}>
          <div onDoubleClick={() => openWindow('aiAssistant')} style={desktopIconStyle}>
            <div style={{ fontSize: '32px', marginBottom: '0' }}>
              <Computer variant="32x32_4" />
            </div>
            <span>ai_messenger</span>
          </div>
        </Rnd>

        {/* --- JENDELA MODAL UNTUK MASING-MASING APLIKASI --- */}

        {/* --- JENDELA AI MESSENGER --- */}
        {windows.aiAssistant && (
          <Modal
              key="aiAssistant-window"
              icon={<Computer variant="16x16_4" />}
              title="ai_messenger.exe"
              style={{ 
                right: '20px', 
                top: '20px', 
                width: '400px',
                minHeight: '300px',
                maxHeight: '60%',
              }}
              titleBarOptions={
            <>
            <Modal.Minimize/> 
            <TitleBar.Close onClick={() => toggleWindow('aiAssistant', false)} />
          </>
              }
            >
          <AiAssistantContentModal /> 
            </Modal>
          )}

        {/* --- JENDELA PROJECTS --- */}
        {windows.projects && (
          <Modal
            key="projects-window"
            key={windows.projects ? 'projects-open' : 'projects-close'}
            icon={<Folder variant="16x16_4" />}
            title="project_explorer.exe"
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
            icon={<Mail variant="16x16_4" />}
            title="contact.exe"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '400px'
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
            <ContactContent />
          </Modal>
        )}

        {/* Jendela csGame */}
        {windows.csGame && (
          <Modal
            key="csGame-window"
            icon={<Joy102 variant="16x16_4" />}
            title="games.exe"
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
            icon={<Notepad variant="16x16_4" />}
            title="about.txt"
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
            icon={<Shell3232 variant="16x16_4" />}
            title="recycle_bin.exe"
            style={{
              left:'50%',
              top:'50%',
              transform:'translate(-50%, -50%)',
              width:'500px',
              height:'350px'
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

            <RecycleBin />

          </Modal>
        )}

        {/* --- TASKBAR BAWAH BAWAAN REACT95 --- */}
        <TaskBar
          list={
            <List style={{ width: '240px' }}>
              <List.Item 
                icon={<Computer variant="16x16_4" />} 
                onClick={() => toggleWindow('aiAssistant', true)}
              >
                AI Messenger
              </List.Item>
              <List.Divider />
              <List.Item 
                icon={<User variant="16x16_4" />} 
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
                icon={<Mail variant="16x16_4" />} 
                onClick={() => toggleWindow('contact', true)}
              >
                Contact Me
              </List.Item>
              <List.Item 
                icon={<Joy102 variant="16x16_4" />} 
                onClick={() => toggleWindow('csGame', true)}
              >
                Counter-Strike 1.6
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