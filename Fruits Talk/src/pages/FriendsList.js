import React from 'react'
import { Link } from 'react-router-dom'
import FriendsCard from '../components/FriendsCard';
import './FriendsList.scss'

const FriendsList = () => {
  let friendsNumber = 5;
  let array = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div id='friendsPage'>
      <div className="top">
        <div className="profileWrap"></div>
        <div className="contentsWrap">
          <p>닉네임</p>
          <span>nickname@gmail.com</span>
        </div>
      </div>
      <div className="bottom">
        <div className="friendsHeader">
          <h2>내 친구<span>({array.length}명)</span></h2>
          <Link to='/add-friend'><button>친구추가</button></Link>
        </div>
        <div className="friendsCardWrap scroll">
          {array.map((item,index)=><Link to='/chatting-room/1' key={index}><FriendsCard /></Link>)}
        </div>
      </div>
    </div>
  )
}

export default FriendsList
