import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleUserDataAction } from '../redux/action/userDataAction';

const FindFriendCard = ({friendItem}) => {

  const dispatch = useDispatch();
  const [friend, setFriend] = useState(false);
  let userData = JSON.parse(localStorage.getItem('accountData'))
  let friendsList = [];
  
  let data = JSON.parse(localStorage.getItem('accountData')).userFriends;
  
  if(data?.length > 0){
    friendsList = data;
  }

  const addFriend = (e) => {
    let userId = e.target.id;
    if(!friendsList.includes(userId)){
      friendsList.push(userId);
      dispatch(handleUserDataAction.updateAccount(userData,friendsList));

      let saveData = {...userData}
      saveData.userFriends = friendsList;
      localStorage.setItem('accountData',JSON.stringify(saveData))
      setFriend(true);
    }
  }
  const removeFriend = (e) => {
    let userId = e.target.id;
    let resultList = [...friendsList];
    resultList.map((item, index) => {
      if(item === userId){
        resultList.splice(index, 1);
      }
    })
    dispatch(handleUserDataAction.updateAccount(userData,resultList))
    let saveData = {...userData}
    saveData.userFriends = resultList;
    localStorage.setItem('accountData',JSON.stringify(saveData))
    setFriend(false);
  }
  useEffect(()=>{
    if(friendsList?.includes(friendItem?.userId)){
      setFriend(true);
    } else{
      setFriend(false);
    }

  },[friendsList, friendItem.userId, userData,data])
  
  return (
    <div className='findFriendCard'>
      <div className="right">
        {friendItem?.userProfile === 'no-data'?
          <div className="cardProfileWrap"></div>:
          <div className="cardProfileWrap" style={{backgroundImage:`url(${friendItem?.userProfile})`,backgroundColor:'white'}}></div>
        }
        <div className="contents">
          <div className="nickname">{friendItem?.username}</div>
          <div className="email">{friendItem?.userEmail}</div>
        </div>
      </div>
      <div className="left">
        {friend?
          <button id={friendItem?.userId} onClick={(e) => removeFriend(e)}>친구 취소</button>:
          <button id={friendItem?.userId} onClick={(e) => addFriend(e)}>친구 추가</button>
        }
      </div>
    </div>
  )
}

export default FindFriendCard
