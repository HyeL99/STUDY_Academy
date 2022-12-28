import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import FriendsCard from '../components/FriendsCard';
import './FriendsList.scss'
import { FaUserCog, FaUserPlus } from 'react-icons/fa';
import { IoIosChatboxes } from 'react-icons/io';

const FriendsList = () => {
  const [deleteFriendMode,setDeleteFriendMode] = useState(false);
  const navigate = useNavigate();

  let accountDataObject = localStorage.getItem('accountData')
  const accountData = accountDataObject && JSON.parse(accountDataObject);

  let userDataList = useSelector(state => state.userDataList.userData);

  const friendsId = accountData.userFriends;

  let friendsList = friendsId? friendsId.map(friendId => {
    return userDataList.filter(item => item.userId === friendId)
  }):[];

  friendsList = friendsList.filter(item => item.length !== 0);

  friendsList = friendsList?.sort((a, b) => {
    let nameA = a[0].username.toLowerCase();
    let nameB = b[0].username.toLowerCase();
    let answer = nameA < nameB ? -1 : 1;
    return answer;
  })

  const goToAddFriendPage = () => {
    navigate('/add-friend')
  }
  const deleteFriendModeOn = () => {
    setDeleteFriendMode(!deleteFriendMode)
  }


  return (
    <div id='friendsPage'>
      <div className="top">
      {accountData.userProfile === 'no-data'?
        <div className="profileWrap"></div>:
        <div className="profileWrap" style={{backgroundImage:`url(${accountData.userProfile})`}}></div>
      }
        <div className="contentsWrap">
          <p>{accountData.username}</p>
          <span>{accountData.userEmail}</span>
        </div>
      </div>
      <div className="bottom">
        <div className="friendsHeader">
          <h2>친구{friendsList && <span> ({friendsList.length}명)</span>}</h2>
          <button onClick={goToAddFriendPage}>
            <FaUserPlus />
            <span className="ex">친구 추가</span>
          </button>
          {deleteFriendMode?
            (
              <button onClick={() => setDeleteFriendMode(!deleteFriendMode)}>
                <IoIosChatboxes />
                <span className="ex">편집종료</span>
              </button>
            ):(
              <button onClick={() => setDeleteFriendMode(!deleteFriendMode)}>
                <FaUserCog />
                <span className="ex">친구편집</span>
              </button>
            )
          }
        </div>
        <div className="friendsCardWrap scroll">
          {friendsList && friendsList.length > 0 ? friendsList.map((item,index)=><FriendsCard userData={item[0]} deleteMode={deleteFriendMode} key={index} />):''}
        </div>
      </div>
    </div>
  )
}

export default FriendsList
