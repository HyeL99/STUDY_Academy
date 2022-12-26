import React from 'react'

const FriendsCard = ({userData}) => {
  console.log(userData);
  return (
    <div className='friendsCard'>
      <div className="right">
        <div className="cardProfileWrap"></div>
        <div className="nickname">{userData.username}</div>
      </div>
      <div className="left">
        채팅하러가기
      </div>
    </div>
  )
}

export default FriendsCard
