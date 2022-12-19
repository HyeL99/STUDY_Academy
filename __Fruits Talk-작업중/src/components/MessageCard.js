import React from 'react'
import './MessageCard.scss'

const MessageCard = ({me}) => {
  return (
    <div className={me === 'me'?'chatMessage me':'chatMessage'}>
      <div className="cardContentsWrap">
        <div className="profileWrap"></div>
        <div className="messageArea">
          <div className="message">
            메세ddddddddd dasdfasdfasdfsadddddddddd지
          </div>
          <div className="timeArea">시간</div>
        </div>
      </div>
    </div>
  )
}

export default MessageCard
