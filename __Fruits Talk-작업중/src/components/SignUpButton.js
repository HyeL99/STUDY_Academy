import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';

const SignUpButton = ({usernameState}) => {
  const settingData = useSelector(state => state.userData.settingData);
  const navigate = useNavigate();
  
  const createAccount = async () => {
    console.log(settingData);
    let accountData={};
    await createUserWithEmailAndPassword(auth, settingData.email, settingData.password)
    .then((userCredential) => {
      accountData = userCredential.user;
    })
    .then(async ()=>{
      try {
        console.log('settingData',settingData);
        console.log('accountData', accountData);
        await setDoc(doc(db, "userData",settingData.email), {
          userUid:accountData.uid,
          username: settingData.username,
          userEmail: settingData.email,
          userId: `userId#${accountData.uid}`,
          userProfile:'no-data',
          userFriends:[],
          userChatRooms:[],
        });
        //console.log("Document written with ID: ", docRef.id);
        navigate('/login')
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
    

  }

  if(usernameState){
    return (
      <button onClick={createAccount}>시작하기</button>
    )
  } else {
    return (
      <button onClick={createAccount} disabled>시작하기</button>
    )
  }
  
}

export default SignUpButton