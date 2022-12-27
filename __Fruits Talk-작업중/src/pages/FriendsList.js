import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import FriendsCard from '../components/FriendsCard';
import { db } from '../firebase';
import './FriendsList.scss'

const FriendsList = () => {

  let accountDataObject = localStorage.getItem('accountData')
  const accountData = accountDataObject && JSON.parse(accountDataObject);

  let userDataList = useSelector(state => state.userDataList.userData);

  console.log(accountData);

  const friendsId = accountData.userFriends;

  const friendsList = friendsId? friendsId.map(friendId => {
    return userDataList.filter(item => item.userId === friendId)
  }):[];

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
          <h2>내 친구{friendsList && <span> ({friendsList.length}명)</span>}</h2>
          <Link to='/add-friend'><button>친구추가</button></Link>
        </div>
        <div className="friendsCardWrap scroll">
          {friendsList && friendsList.length > 0 ? friendsList.map((item,index)=><FriendsCard userData={item[0]} key={index}/>):''}
        </div>
      </div>
    </div>
  )
}

export default FriendsList
