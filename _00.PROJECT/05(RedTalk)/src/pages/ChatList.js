import React from 'react'
import { useSelector } from 'react-redux'
import ChattingListCard from '../components/ChattingListCard'
import Navbar from '../components/Navbar'
import './ChatList.scss'

const ChatList = () => {
  let chatroomList = useSelector(state => state.userDataList.chatrooms);

  const myId = JSON.parse(localStorage.getItem('accountData')).userId
  
  let chatrooms = chatroomList.filter(item => item.chatroomUsersId.includes(myId))

  chatrooms = chatrooms.sort((a, b) => new Date(a.recentMessage.time) - new Date(b.recentMessage.time)).reverse();

  return (
    <div id='chatListPage'>
      <Navbar />
      <div className="contentsWarp">
        <h2>채팅</h2>
        <div className="listPlace scroll">
          {chatrooms?.map((item,index) => <ChattingListCard chatInfo={item} key={index}/>)}
        </div>
      </div>
    </div>
  )
}

export default ChatList
