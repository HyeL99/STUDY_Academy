import { doc, setDoc } from 'firebase/firestore';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { db } from '../firebase';
import { handleUserDataAction } from '../redux/action/userDataAction';
import { BsChatFill } from 'react-icons/bs';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const FriendsCard = ({userData,deleteMode}) => {
  let chatroomList = useSelector(state => state.userDataList.chatrooms);
  const accountData = JSON.parse(localStorage.getItem('accountData'))
  let data = JSON.parse(localStorage.getItem('accountData')).userFriends;
  let friendsList = [];
  const dispatch = useDispatch();

  if(data?.length > 0){
    friendsList = data;
  }

  const navigate = useNavigate();

  const goToChattingRoom = async () => {
    let chattingRoomItem = null;
    for(let chatroom of chatroomList){
      let chatroomUsers = chatroom.chatroomUsersId;
      let hasAccount = chatroomUsers.includes(accountData.userId)
      let hasUser = chatroomUsers.includes(userData.userId)
      if( hasAccount && hasUser){
        chattingRoomItem = chatroom;
      }
    }

    if(chattingRoomItem){
      navigate(`/chatting-room/${chattingRoomItem.chatroomId}`)
    } else {
      const geteduuid = uuid();
      try{
        await setDoc(doc(db, "chatrooms",`chatroom@${geteduuid}`), {
        chatroomId:`chatroom@${geteduuid}`,
        chatroomUsersId:[accountData.userId,userData.userId],
        recentMessage:{}
        });
        navigate(`/chatting-room/chatroom@${geteduuid}`)
      } catch(e){
        console.log(e);
      }
    }
  }
  const deleteFriend = async() => {
    let deleteResult = window.confirm(`정말 ${userData?.username}님을 삭제하시겠습니까?`);
    let myData = JSON.parse(localStorage.getItem('accountData'))
    if(deleteResult){
      let resultList = [...friendsList];
      resultList.map((item, index) => {
        if(item === userData?.userId){
          resultList.splice(index, 1);
        }
      })
      dispatch(handleUserDataAction.updateAccount(myData,resultList))
      let saveData = {...myData}
      saveData.userFriends = resultList;
      localStorage.setItem('accountData',JSON.stringify(saveData))
    }
  }

  //상대 계정 탈퇴시 보여주지 않음
  if(!userData){
    return
  }

  return (
    <div className='friendsCard' onClick={deleteMode?deleteFriend:goToChattingRoom}>
      <div className="right">
        {userData?.userProfile === 'no-data'?
          <div className="cardProfileWrap"></div>:
          <div className="cardProfileWrap" style={{backgroundImage:`url(${userData?.userProfile})`,backgroundColor:'white'}}></div>
        }
        <div className="nickname">{userData?.username}</div>
      </div>
      <div className="left">
        {deleteMode?(
          <div className="warp">
            <RiDeleteBack2Fill />
            <span className="ex">친구 삭제</span>
          </div>
        ):(
          <div className="warp">
            <BsChatFill />
            <span className="ex">채팅하러 가기</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default FriendsCard
