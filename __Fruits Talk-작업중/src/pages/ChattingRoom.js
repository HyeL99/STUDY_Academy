import React from 'react'
import { Link } from 'react-router-dom'
import ChattingFooter from '../components/ChattingFooter'
import MessageCard from '../components/MessageCard'
import './ChattingRoom.scss'

const ChattingRoom = () => {
  return (

    <div id='chatroomPage'>
      <div className="top">
        <Link to='/chat-list'><button className='back'>뒤로가기</button></Link>
        <h2>채팅방</h2>
        <button className='setting'>설정</button>
      </div>
      <div className="chattingPlace scroll">
        <MessageCard me='me'/>
        <MessageCard me='me' />
        <MessageCard me='you' />
        <MessageCard me='me' />
        <MessageCard me='you' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='you' />
        <MessageCard me='you' />
        <MessageCard me='you' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='you' />
        <MessageCard me='you' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='you' />
        <MessageCard me='you' />
        <MessageCard me='you' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='you' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='me' />
        <MessageCard me='you' />
        <MessageCard me='you' />
        <MessageCard me='me' />
      </div>
      <ChattingFooter />
    </div>
  )
}

export default ChattingRoom
