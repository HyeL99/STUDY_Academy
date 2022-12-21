import React from 'react'
import { Link } from 'react-router-dom'

const ChattingListCard = ({chatInfo}) => {
  const {chatroomId, chatroomName, user, recentMessage} = chatInfo;
  return (
    <Link to={`/chatting-room/${chatroomId}`}>
      <div className='chattingListCard'>
        <div className="profileWrap"></div>
        <div className="contents">
          <div className="title">
            {chatroomName}
            {user.length>2 && <span>({user.length}명)</span>}
          </div>
          <div className="message">{recentMessage}</div>
        </div>
      </div>
    </Link>
  )
}

export default ChattingListCard
