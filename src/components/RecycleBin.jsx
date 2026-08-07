import React from 'react';
import { Globe, FileText, Wangimg129 } from '@react95/icons';

export default function RecycleBin() {

  const files = [
    {
      id: 1,
      name: 'nimu.jpg',
      link: 'https://github.com/your-old-portfolio'
    },
    {
      id: 2,
      name: 'miyu.jpg',
      link: 'https://github.com/archive-project'
    },
  ];


  const handleFileClick = (file) => {
    window.open(file.link, '_blank');
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

        <span style={{padding:'1px 4px'}}>
          File
        </span>

        <span style={{padding:'1px 4px'}}>
          Edit
        </span>

        <span style={{padding:'1px 4px'}}>
          View
        </span>

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


          {
            files.map((file)=>(
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
                  textAlign:'center',
                }}
              >


                <div
                  style={{
                    marginBottom:'4px'
                  }}
                >
                  <Wangimg129 variant="32x32_4" />
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

        {files.length} object(s)

      </div>


    </div>
  );
}