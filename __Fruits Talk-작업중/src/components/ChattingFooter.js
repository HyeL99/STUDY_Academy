import { addDoc, collection, doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { handleUserDataAction } from '../redux/action/userDataAction';
import { FaRegPaperPlane } from 'react-icons/fa';

const ChattingFooter = () => {
  const [input, setInput] = useState('');
  const userId = JSON.parse(localStorage.getItem('accountData')).userId;
  const dispatch = useDispatch();
  let params = useParams();
  let id  = params.id;

  const sendMessage = async (event) => {
    const time = new Date()
    let message = input;
    message=message.replace(/(?:\r\n|\r|\n)/g,'<br/>');

    if(message !== ''){
      event.preventDefault();
      await addDoc(collection(db, "messages"), {
        chatroomId:id,
        message:message,
        userId:userId,
        timestamp: time
      });

      let timeText = time.toString();
      dispatch(handleUserDataAction.updateRecentMessage(id,{message:message,time:timeText}));
    }
    setInput('');
    document.querySelector('textarea').focus();
    document.querySelector('textarea').style.maxHeight = `20px`
  }

  const resizeTextarea = () => {
    document.querySelector('textarea').style.maxHeight = `3rem`
    let el = document.querySelector('textarea');
    el.style.height = '1px';
    let elHeight = el.scrollHeight;
    el.style.height = `${elHeight}px`
  }
  return (
    <div id='chattingFooter'>
      <form onSubmit={(event)=>sendMessage(event)}>
        <div className="textareaContainer">
          <textarea row={1} placeholder='메세지를 입력해주세요' value={input} onChange={(event)=>setInput(event.target.value)} onFocus={resizeTextarea} onKeyDown={resizeTextarea} onKeyUp={resizeTextarea} className='scroll'/>
        </div>
        <button type="submit">
          <FaRegPaperPlane/>
          <span className="ex">채팅 보내기</span>
        </button>
      </form>
    </div>
  )
}

export default ChattingFooter
