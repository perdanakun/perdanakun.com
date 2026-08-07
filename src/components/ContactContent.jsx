import React, { useState } from 'react';
import { Modal, Button, Frame } from '@react95/core';

export default function ContactContent() {
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('Personal Note');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState(null);

const showNotification = (title, message, type) => {
  setNotification({
    title,
    message,
    type
  });

  setTimeout(() => {
    setNotification(null);
  }, 3000);
};


  const handleSend = () => {

    if (!from.trim()) {
        showNotification(
        '📧 Email Required',
        'I need your email address to reply back.',
        'email'
        );
      return;
    }


    if (!message.trim()) {
        showNotification(
        '💬 Message Required',
        'Write something before sending.',
        'message'
        );
      return;
    }


    setFrom('');
    setSubject('Personal Note');
    setMessage('');
  };


  return (
    <Modal.Content
      style={{
        position:'relative',
        display:'flex',
        flexDirection:'column',
        height:'100%',
        padding:0,
        background:'#c0c0c0'
      }}
    >

      {/* ================= MENU BAR ================= */}

      <div
        style={{
          display:'flex',
          gap:16,
          padding:'6px 10px',
          borderBottom:'1px solid #808080',
          background:'#c0c0c0',
          fontSize:12
        }}
      >

        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Insert</span>
        <span>Format</span>
        <span>Tools</span>

      </div>



      {/* ================= MAIL BODY ================= */}

      <Frame
        bgColor="#c0c0c0"
        boxShadow="$in"
        style={{
          flex:1,
          margin:6,
          padding:10,
          display:'flex',
          flexDirection:'column',
          gap:10
        }}
      >


        {/* FROM */}

        <div
          style={rowStyle}
        >

          <label style={labelStyle}>
            From:
          </label>


          <input
            value={from}
            onChange={(e)=>setFrom(e.target.value)}
            placeholder="your.email@address.com"
            style={inputStyle}
          />

        </div>




        {/* SUBJECT */}

        <div
          style={rowStyle}
        >

          <label style={labelStyle}>
            Subject:
          </label>


          <select
            value={subject}
            onChange={(e)=>setSubject(e.target.value)}
            style={inputStyle}
          >

            <option>
              ❤️ Personal Note
            </option>

            <option>
              💼 Job Opportunity
            </option>

            <option>
              🐣 Project Collaboration
            </option>

          </select>


        </div>




        {/* TO + SEND */}

<div
  style={{
    display:'flex',
    alignItems:'center',
    position:'relative'
  }}
>

  <label style={labelStyle}>
    To:
  </label>


  <div
    style={{
      display:'flex',
      flex:1,
      gap:8
    }}
  >

    <input
      disabled
      value="Perdana Kurniawan Arta"
      style={{
        ...inputStyle,
        background:'#c5c4c4',
        color:'#555'
      }}
    />


    <Button
      onClick={handleSend}
      style={{
        width:80
      }}
    >
      Send
    </Button>
    {notification && (
  <div
    style={{
    position:'absolute',
    left:'100%',
    marginLeft:10,
    top:'50%',
    transform:'translateY(-50%)',
    width:240,
    background:
    notification.type === 'email'
    ? '#ffffcc'
    : '#ffe4e4',
    border:'1px solid #000',
    padding:10,
    boxShadow:'2px 2px 0 rgba(0,0,0,.5)',
    color:'#000',
    fontSize:11,
    lineHeight:1.4,
    textAlign:'left',
    zIndex:999
    }}
  >

    <strong>
      {notification.title}
    </strong>

    <div style={{marginTop:4}}>
      {notification.message}
    </div>

  </div>
)}

  </div>


</div>





        {/* MESSAGE */}

        <textarea
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="Write your message here..."
          style={{
            flex:1,
            resize:'none',
            border:'none',
            outline:'none',
            padding:10,
            fontFamily:'MS Sans Serif, sans-serif',
            fontSize:12,
            background:'#fff',
            color:'#000',
            caretColor:'#000',
            boxShadow:
              'inset 2px 2px 0 #808080, inset -2px -2px 0 #ffffff'
          }}
        />


      </Frame>


    </Modal.Content>
  );
}



const rowStyle = {
  display:'flex',
  alignItems:'center'
};


const labelStyle = {
  width:70,
  fontSize:12,
  color:'#000'
};


const inputStyle = {
  flex:1,
  height:28,
  padding:'0 8px',
  border:'none',
  outline:'none',
  fontFamily:'MS Sans Serif, sans-serif',
  fontSize:12,
  background:'#fff',
  color:'#000',
  caretColor:'#000',
  boxShadow:
    'inset 2px 2px 0 #808080, inset -2px -2px 0 #ffffff'
};