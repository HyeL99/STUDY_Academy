import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import ChattingFooter from '../components/ChattingFooter'
import MessageCard from '../components/MessageCard'
import './ChattingRoom.scss'
import { BiArrowBack } from 'react-icons/bi';

const ChattingRoom = () => {
  const messageList = useSelector(state => state.userDataList.messages);
  const chatroomList = useSelector(state => state.userDataList.chatrooms);
  const userData = useSelector(state => state.userDataList.userData);

  let params = useParams();
  let thisChatroomId  = params.id;

  let thisMessageList = messageList.filter(item => item.chatroomId === thisChatroomId)

  thisMessageList = thisMessageList.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

  let thisChatroomInfo = chatroomList.filter(item => item.chatroomId === thisChatroomId)
  const myId = JSON.parse(localStorage.getItem('accountData')).userId;

  let chatroomName = '';
  thisChatroomInfo[0]?.chatroomUsersId.map(item => {
    if(item !== myId){
      chatroomName = userData.filter(user => user.userId === item)[0]?.username
    }
  })

  const messagesRef = useRef();

  useEffect(()=>{
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  },[thisMessageList])

  window.onresize = () => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }
  

  return (
    <div id='chatroomPage'>
      <div className="top">
        <Link to='/chat-list'>
          <button className='back'>
            <BiArrowBack/>
            <span className="ex">뒤로 가기</span>
          </button>
        </Link>
        <h2>{chatroomName}</h2>
        {/* <button className='setting'>설정</button> */}
      </div>
      <div className="chattingPlace scroll" ref={messagesRef}>
        {thisMessageList.map((item, index) => <MessageCard messageItem={item} key={index}/>)}
      </div>
      <ChattingFooter />
    </div>
  )
}

export default ChattingRoom
