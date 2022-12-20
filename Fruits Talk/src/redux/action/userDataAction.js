import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { setUserUid } from "../reducer/userDataReducer";

const createAccount = (settingData, username) => {
  console.log(username)
  return async (dispatch) => {
    try{
      console.log(settingData)
      let userData = null;
      await createUserWithEmailAndPassword(auth, settingData.email, settingData.password)
        .then((userCredential) => {
          userData = userCredential.user;
        })
      let userId = `userId#${userData.uid}`
      let docRef = await addDoc(doc(db,'userData'),{
          username: username,
          userEmail: userData.email,
          userId: userId,
          userProfile:'no-data',
          userFriends:['no-data'],
          userChatRooms:['no-data']
        });
        console.log("Document written with ID: ", docRef.id);
    } catch(e){
      console.log(e)
    }
  }
}

export const addUserDataAction = {createAccount};
