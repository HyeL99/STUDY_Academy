import React, { useState } from 'react'

const ChattingFooter = () => {
  const [input, setInput] = useState('');

  // const sendMessage = (event) => {
  //   event.preventDefault();
  //   db.collection('message').add({
  //     message:input,
  //     username:username,
  //     timestamp:firebase.firestore.FieldValue.serverTimeStamp()
  //   })
  // }

  const sendMessage = (event) => {
    event.preventDefault();
  }

  const resizeTextarea = (e) => {
    let el = e.target;
    el.style.height = '1px';
    let elHeight = el.scrollHeight;
    el.style.height = `${elHeight}px`
  }
  return (
    <div id='chattingFooter'>
      <form onSubmit={(event)=>sendMessage(event)}>
        <div className="textareaContainer">
          <textarea row={1} placeholder='메세지를 입력해주세요' value={input} onChange={(event)=>setInput(event.target.value)} onKeyDown={(e)=>resizeTextarea(e)} onKeyUp={(e)=>resizeTextarea(e)} className='scroll'/>
        </div>
        <input type="submit" value="💌" />
      </form>
    </div>
  )
}

export default ChattingFooter
