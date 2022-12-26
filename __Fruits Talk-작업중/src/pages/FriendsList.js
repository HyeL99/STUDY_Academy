import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import FriendsCard from '../components/FriendsCard';
import './FriendsList.scss'

const FriendsList = () => {

  let accountDataObject = localStorage.getItem('accountData')
  const accountData = accountDataObject && JSON.parse(accountDataObject);

  const userDataList = useSelector(state => state.userDataList.userData);

  console.log(accountData);

  const friendsId = accountData.userFriends;

  const friendsList = friendsId.map(friendId => {
    return userDataList.filter(item => item.userId === friendId)
  })

  console.log(friendsList);

  return (
    <div id='friendsPage'>
      <div className="top">
        <div className="profileWrap"></div>
        <div className="contentsWrap">
          <p>{accountData.username}</p>
          <span>{accountData.userEmail}</span>
        </div>
      </div>
      <div className="bottom">
        <div className="friendsHeader">
          <h2>내 친구<span>({friendsList.length}명)</span></h2>
          <Link to='/add-friend'><button>친구추가</button></Link>
        </div>
        <div className="friendsCardWrap scroll">
          {friendsList.map((item,index)=><Link to={`/chatting-room/${item[0].userId}`} key={index}><FriendsCard userData={item[0]}/></Link>)}
        </div>
      </div>
    </div>
  )
}

export default FriendsList
