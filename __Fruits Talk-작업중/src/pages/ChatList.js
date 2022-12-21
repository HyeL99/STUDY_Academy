import React from 'react'
import ChattingListCard from '../components/ChattingListCard'
import Navbar from '../components/Navbar'
import './ChatList.scss'

const ChatList = () => {
  const chatList = [
    {
      chatroomId: 'chatroom#1',
      chatroomName: '단체톡방01',
      user: ['user#1','user#2','user#3'],
      recentMessage: '이게 마지막 대화'
    },
    {
      chatroomId: 'chatroom#1',
      chatroomName: '개인톡방',
      user: ['user#1','user#2'],
      recentMessage: '여기서 개인 대화를 했지'
    },
    {
      chatroomId: 'chatroom#1',
      chatroomName: '단체톡방02',
      user: ['user#1','user#2','user#3','user#4'],
      recentMessage: '오늘도 좋은하루'
    },
    {
      chatroomId: 'chatroom#1',
      chatroomName: '단체톡방01',
      user: ['user#1','user#2','user#3'],
      recentMessage: '이게 마지막 대화'
    },
    {
      chatroomId: 'chatroom#1',
      chatroomName: '개인톡방',
      user: ['user#1','user#2'],
      recentMessage: '여기서 개인 대화를 했지'
    },
    {
      chatroomId: 'chatroom#1',
      chatroomName: '단체톡방02',
      user: ['user#1','user#2','user#3','user#4'],
      recentMessage: '오늘도 좋은하루'
    },
    {
      chatroomId: 'chatroom#1',
      chatroomName: '단체톡방01',
      user: ['user#1','user#2','user#3'],
      recentMessage: '이게 마지막 대화'
    },
    {
      chatroomId: 'chatroom#1',
      chatroomName: '개인톡방',
      user: ['user#1','user#2'],
      recentMessage: '여기서 개인 대화를 했지'
    },
    {
      chatroomId: 'chatroom#1',
      chatroomName: '단체톡방02',
      user: ['user#1','user#2','user#3','user#4'],
      recentMessage: '오늘도 좋은하루'
    }
  ]
  return (
    <div id='chatListPage'>
      <Navbar />
      <div className="contentsWarp">
        <h2>채팅</h2>
        <div className="listPlace scroll">
          {chatList.map((item,index) => <ChattingListCard chatInfo={item} key={index}/>)}
        </div>
      </div>
    </div>
  )
}

export default ChatList
