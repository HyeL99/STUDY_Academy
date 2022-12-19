import React, { useEffect, useState } from 'react'

const FindFriendCard = ({friendId}) => {
  const [friend, setFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(['1','2','3'])

  
  const addFriend = (e) => {
    let userId = e.target.id;
    setFriendsList([...friendsList, userId])
  }
  const removeFriend = (e) => {
    let userId = e.target.id;
    let resultList = [...friendsList];
    resultList.map((item, index) => {
      if(item === userId){
        resultList.splice(index, 1);
      }
    })
    setFriendsList(resultList);
  }

  useEffect(()=>{
    if(friendsList.includes(friendId)){
      setFriend(true);
    } else{
      setFriend(false);
    }
  },[friendsList, friendId])
  

  return (
    <div className='findFriendCard'>
      <div className="right">
        <div className="cardProfileWrap"></div>
        <div className="contents">
          <div className="nickname">닉네임</div>
          <div className="email">nickname@gmail.com</div>
        </div>
      </div>
      <div className="left">
        {friend?
          <button id={friendId} onClick={(e) => removeFriend(e)}>친구 취소</button>:
          <button id={friendId} onClick={(e) => addFriend(e)}>친구 추가</button>
        }
        
      </div>
    </div>
  )
}

export default FindFriendCard
