import React, { useState } from 'react';
import { FileText, Folder } from '@react95/icons';

export default function ProjectFolderContent() {
  const [currentFolder, setCurrentFolder] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Project_Alpha',
      iconType: 'folder',
      isLocked: false,
      message: 'still on progress',
      files: [
        {
          id: 101,
          name: 'documentation.url',
          link: 'https://github.com/project-alpha-docs'
        },
        {
          id: 102,
          name: 'source_code.url',
          link: 'https://github.com/project-alpha'
        }
      ]
    },
    {
      id: 2,
      name: 'UI_Redesign',
      iconType: 'folder',
      isLocked: true,
      message: 'still on progress',
      files: []
    },
    {
      id: 3,
      name: 'Mobile_App',
      iconType: 'folder',
      isLocked: true,
      message: 'still on progress',
      files: []
    }
  ];


  const renderIcon = (type) => {
    switch(type){
      case 'folder':
      default:
        return <Folder variant="32x32_4" />;
    }
  };


  const handleFolderClick = (project) => {
    if(project.isLocked){
      alert(`Folder "${project.name}" is ${project.message}`);
    } else {
      setCurrentFolder(project);
    }
  };


  const handleFileClick = (file) => {
    window.open(file.link, '_blank');
  };


  const handleBack = () => {
    setCurrentFolder(null);
  };


  return (
    <div
      style={{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        fontFamily:'MS Sans Serif, sans-serif'
      }}
    >

      {/* Menu Bar */}
      <div
        style={{
          display:'flex',
          gap:'12px',
          padding:'2px 6px',
          backgroundColor:'#c0c0c0',
          borderBottom:'1px solid #808080',
          fontSize:'11px',
          userSelect:'none'
        }}
      >

        {
          currentFolder ? (
            <span
              onClick={handleBack}
              style={{
                cursor:'pointer',
                padding:'1px 4px'
              }}
            >
              ← Back
            </span>
          ) : (
            <>
              <span style={{padding:'1px 4px'}}>
                File
              </span>

              <span style={{padding:'1px 4px'}}>
                New
              </span>
            </>
          )
        }

      </div>


      {/* Explorer Area */}
      <div
        style={{
          flex:1,
          backgroundColor:'white',
          padding:'12px',
          overflowY:'auto',
          boxShadow:
            'inset 1px 1px 0px #0a0a0a, inset -1px -1px 0px #dfdfdf',
          margin:'2px'
        }}
      >

        <div
          style={{
            display:'flex',
            flexWrap:'wrap',
            gap:'24px',
            alignItems:'flex-start',
            padding:'4px'
          }}
        >


          {/* ROOT PROJECT */}
          {!currentFolder &&
            projects.map((project)=>(
              <div
                key={project.id}
                onDoubleClick={() => handleFolderClick(project)}
                style={{
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                  width:'70px',
                  cursor:
                    project.isLocked
                    ? 'not-allowed'
                    : 'pointer',
                  userSelect:'none',
                  padding:'4px',
                  textAlign:'center'
                }}
              >

                <div
                  style={{
                    marginBottom:'4px',
                    filter:
                      project.isLocked
                      ? 'grayscale(30%)'
                      : 'none'
                  }}
                >
                  {renderIcon(project.iconType)}
                </div>


                <span
                  style={{
                    fontSize:'11px',
                    overflowWrap: 'break-word',
                    lineHeight:'1.2'
                  }}
                >
                  {project.name}
                </span>

              </div>
            ))
          }



          {/* FILE INSIDE PROJECT */}
          {currentFolder &&
            currentFolder.files.map((file)=>(
              <div
                key={file.id}
                onDoubleClick={() => handleFileClick(file)}
                style={{
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                  width:'70px',
                  cursor:'pointer',
                  userSelect:'none',
                  padding:'4px',
                  textAlign:'center'
                }}
              >

                <div style={{marginBottom:'4px'}}>
                  <FileText variant="32x32_4" />
                </div>


                <span
                  style={{
                    fontSize:'11px',
                    overflowWrap: 'break-word',
                    lineHeight:'1.2'
                  }}
                >
                  {file.name}
                </span>


              </div>
            ))
          }


        </div>

      </div>



      {/* Status Bar */}
      <div
        style={{
          display:'flex',
          alignItems:'center',
          padding:'2px 6px',
          fontSize:'11px',
          color:'#000',
          backgroundColor:'#c0c0c0',
          boxShadow:
            'inset 1px 1px 0px #dfdfdf, inset -1px -1px 0px #0a0a0a',
          marginTop:'2px',
          height:'20px'
        }}
      >

        {
          !currentFolder
          ? `${projects.length} object(s)`
          : `${currentFolder.files.length} object(s)`
        }

      </div>


    </div>
  );
}