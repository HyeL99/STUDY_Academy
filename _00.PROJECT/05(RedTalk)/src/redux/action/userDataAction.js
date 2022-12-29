import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const createAccount = (settingData, username) => {
  return async (dispatch) => {
    try{
      let userData = null;
      await createUserWithEmailAndPassword(auth, settingData.email, settingData.password)
        .then((userCredential) => {
          userData = userCredential.user;
        })
      let userId = `userId#${userData.uid}`
      let docRef = await addDoc(doc(db,'userData',userData.uid),{
          userUid:userData.uid,
          username: username,
          userEmail: userData.email,
          userId: userId,
          userProfile:'no-data',
          userFriends:['no-data'],
          userChatRooms:['no-data']
        });
    } catch(e){
      console.log(e)
    }
  }
}
const updateAccount = (settingData, friendsList) => {
  return async (dispatch) => {
    try{
      const updateDocRef = doc(db, 'userData', settingData.userEmail);
      await updateDoc(updateDocRef,{
        userFriends:friendsList
      })
    } catch(e){
      console.log(e);
    }
  }
}

const updateUsername = (settingData, editUsername) => {
  return async (dispatch) => {
    try{
      const updateDocRef = doc(db, 'userData', settingData.userEmail);
      await updateDoc(updateDocRef,{
        username:editUsername
      })
    } catch(e){
      console.log(e);
    }
  }
}

const updateProfileImage = (settingData, url) => {
  return async (dispatch) => {
    try{
      const updateDocRef = doc(db, 'userData', settingData.userEmail);
      await updateDoc(updateDocRef,{
        userProfile:url
      })
    } catch(e){
      console.log(e);
    }
  }
}

const updateRecentMessage = (chatroomId, recentMessageObject) => {
  return async (dispatch) => {
    try{
      const updateDocRef = doc(db, 'chatrooms', chatroomId);
      await updateDoc(updateDocRef,{
        recentMessage:recentMessageObject
      })
    } catch(e){
      console.log(e);
    }
  }
}

export const handleUserDataAction = {createAccount, updateAccount, updateUsername, updateProfileImage, updateRecentMessage};
