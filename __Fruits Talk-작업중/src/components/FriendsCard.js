import { collection, doc, onSnapshot, query, setDoc } from 'firebase/firestore';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { db } from '../firebase';

const FriendsCard = ({userData}) => {
  let chatroomList = useSelector(state => state.userDataList.chatrooms);
  const accountData = JSON.parse(localStorage.getItem('accountData'))

  const qChatrooms =  query(collection(db,"chatrooms"));

  //채팅방 추가시 데이터 갱신 코드 추가
  const unsubscribeChatrooms = onSnapshot(qChatrooms, (querySnapshot) => {
    let chatrooms=[];
    querySnapshot.forEach((doc)=>{return chatrooms = [...chatrooms, doc.data()]});
    chatroomList = chatrooms
    console.log('chatroom 업데이트',chatrooms);
  })

  const navigate = useNavigate();

  console.log(chatroomList);
  const goToChattingRoom = async () => {
    console.log(userData);
    let chattingRoomItem = null;
    for(let chatroom of chatroomList){
      console.log('chatroom',chatroom);
      let chatroomUsers = chatroom.chatroomUsersId;
      console.log(chatroomUsers);
      let hasAccount = chatroomUsers.includes(accountData.userId)
      let hasUser = chatroomUsers.includes(userData.userId)
      if( hasAccount && hasUser){
        chattingRoomItem = chatroom;
      }
    }

    if(chattingRoomItem){
      console.log('채팅방 있음',chattingRoomItem);
      navigate(`/chatting-room/${chattingRoomItem.chatroomId}`)
    } else {
      console.log('채팅방 없음',chattingRoomItem);
      const geteduuid = uuid();
      console.log(geteduuid);
      try{
        await setDoc(doc(db, "chatrooms",`chatroom#${geteduuid}`), {
        chatroomId:`chatroom#${geteduuid}`,
        chatroomUsersId:[accountData.userId,userData.userId]
      });
      } catch(e){
        console.log(e);
      }
    }

  }

  return (
    <div className='friendsCard' onClick={goToChattingRoom}>
      <div className="right">
        <div className="cardProfileWrap"></div>
        <div className="nickname">{userData?.username}</div>
      </div>
      <div className="left">
        채팅하러가기
      </div>
    </div>
  )
}

export default FriendsCard
