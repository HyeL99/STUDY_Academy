import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const ChattingListCard = ({chatInfo}) => {
  const userData = useSelector(state => state.userDataList.userData);
  const myId = JSON.parse(localStorage.getItem('accountData')).userId;
  const {chatroomId, chatroomUsersId,recentMessage } = chatInfo;
  
  let chatroomName = '';
  let chatroomProfile = '';
  chatroomUsersId.map(item => {
    if(item !== myId){
      let chatroomNameItem = userData.filter(user => user.userId === item)[0];
      chatroomName = chatroomNameItem.username;
      chatroomProfile = chatroomNameItem.userProfile;
    }
  })

  //상대 계정 탈퇴시 보여주지 않음
  if(!chatroomName){
    return;
  }
  
  let thisYear = new Date(recentMessage.time).getFullYear();
  let thisMonth = new Date(recentMessage.time).getMonth();
  let thisDate = new Date(recentMessage.time).getDate();
  let thisHour = new Date(recentMessage.time).getHours();
  let thisMinute = new Date(recentMessage.time).getMinutes();
  let todayYear = new Date().getFullYear();
  let todayMonth = new Date().getMonth();
  let todayDate = new Date().getDate();

  let thisTime = '';
  if(thisHour>=0 && thisHour<10){
    thisHour = '0' + thisHour;
  }
  if(thisMinute>=0 && thisMinute<10){
    thisMinute = '0' + thisMinute;
  }


  if(thisYear===todayYear && thisMonth===todayMonth && thisDate===todayDate){
    thisTime = `${thisHour}:${thisMinute}`
  } else {
    thisTime = `${thisMonth+1}/${thisDate}`
  }

  let messageArray = recentMessage.message?.split('<br/>');
  let message = '';
  messageArray?.map(item => message += item)

  if(!recentMessage.message){
    return;
  }
  return (
    <Link to={`/chatting-room/${chatroomId?chatroomId:''}`}>
      <div className='chattingListCard'>
        {chatroomProfile === 'no-data'?
          <div className="profileWrap"></div>:
          <div className="profileWrap" style={{backgroundImage:`url(${chatroomProfile})`,backgroundColor:'white'}}></div>
        }
        <div className="contents">
          <div className="title">
            {chatroomName}
            {chatroomUsersId?.length>2 && <span>({chatroomUsersId?.length}명)</span>}
          </div>
          
          <div className="message">
            {message}
          </div>
        </div>
        <div className='time'>{thisTime}</div>
      </div>
    </Link>
  )
}

export default ChattingListCard
