import React from 'react'
import { useSelector } from 'react-redux'
import './MessageCard.scss'

const MessageCard = ({messageItem}) => {
  const userData = useSelector(state => state.userDataList.userData)
  let username = '알 수 없음';
  let profileImage = 'no-data';

  const myId = JSON.parse(localStorage.getItem('accountData')).userId;

  userData.map((item) => {
    if(item.userId === messageItem.userId){
      username = item.username;
      profileImage = item.userProfile;
    }
  })
  let hour = new Date(messageItem.timestamp).getHours();
  let min = new Date(messageItem.timestamp).getMinutes();

  if(hour>=0 && hour<10){
    hour = '0' + hour;
  }
  if(min>=0 && min<10){
    min = '0' + min;
  }

  let messageArray = messageItem.message.split('<br/>');
  return (
    <div className={messageItem.userId === myId?'chatMessage me':'chatMessage'}>
      <div className="cardContentsWrap">
        {messageItem.userProfile === 'no-data'?
          <div className="profileWrap"></div>:
          <div className="profileWrap" style={{backgroundImage:`url(${profileImage})`,backgroundColor:'white'}}></div>
        }
        <div className="messageArea">
          <div className="messageWrap">
            <div className="name">{username}</div>
            <div className="message">
              {messageArray.map((item,index)=><span key={index}>{item}</span>)}
            </div>
          </div>
          
          <div className="timeArea">{hour}:{min}</div>
        </div>
      </div>
    </div>
  )
}

export default MessageCard
