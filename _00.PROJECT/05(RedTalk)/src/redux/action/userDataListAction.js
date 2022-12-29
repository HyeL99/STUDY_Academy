import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import { getDataFail, getDataRequest, getDataSuccess } from "../reducer/userDataListReducer";

const getUserData = () => {
  let userData = [];
  let chatrooms = [];
  let messages = [];
  let userLoginData = [];

  return async (dispatch) => {
    try{
      dispatch(getDataRequest())
      const qUserData =  query(collection(db,"userData"));
      const querySnapshotUserData = getDocs(qUserData);
      const qChatrooms =  query(collection(db,"chatrooms"));
      const querySnapshotChatrooms = getDocs(qChatrooms);
      const qMessages =  query(collection(db,"messages"));
      const querySnapshotMessages = getDocs(qMessages);
      const qUserLoginData =  query(collection(db,"userLoginData"));
      const querySnapshotUserLoginData = getDocs(qUserLoginData);

      let [userDataList, chatroomList, messageList, userLoginDataList] = await Promise.all([querySnapshotUserData, querySnapshotChatrooms, querySnapshotMessages, querySnapshotUserLoginData])

      userDataList.forEach((doc)=>{return userData = [...userData, doc.data()]});
      chatroomList.forEach((doc)=>{return chatrooms = [...chatrooms, doc.data()]});
      messageList.forEach((doc)=>{return messages = [...messages, doc.data()]});
      userLoginDataList.forEach((doc)=>{return userLoginData = [...userLoginData, doc.data()]});

      messages.forEach((item) => item.timestamp = item.timestamp.toDate().toString())

      const unsubscribeUserData = onSnapshot(qUserData, (querySnapshot) => {
        userData=[];
        querySnapshot.forEach((doc)=>{return userData = [...userData, doc.data()]});
      })
      const unsubscribeChatrooms = onSnapshot(qChatrooms, (querySnapshot) => {
        chatrooms=[];
        querySnapshot.forEach((doc)=>{return chatrooms = [...chatrooms, doc.data()]});
      })
      const unsubscribeMessages = onSnapshot(qMessages, (querySnapshot) => {
        messages=[];
        querySnapshot.forEach((doc)=>{return messages = [...messages, doc.data()]});
        messages.forEach((item) => item.timestamp = item.timestamp.toDate().toString())
      })
      const unsubscribeUserLoginData = onSnapshot(qUserLoginData, (querySnapshot) => {
        userLoginData=[];
        querySnapshot.forEach((doc)=>{return userLoginData = [...userLoginData, doc.data()]});
      })

      dispatch(getDataSuccess({
        userData:userData,
        chatrooms:chatrooms,
        messages:messages,
        userLoginData:userLoginData,
      }))
    } catch (e) {
      console.log(e);
      dispatch(getDataFail())
    }
  }
}
export const getDataListAction = {getUserData};