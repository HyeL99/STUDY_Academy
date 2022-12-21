import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc } from 'firebase/firestore';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';

const SignUpButton = () => {
  const settingData = useSelector(state => state.userData.settingData);
  const navigate = useNavigate();
  
  const createAccount = async () => {
    console.log(settingData);
    let accountData={};
    await createUserWithEmailAndPassword(auth, settingData.email, settingData.password)
    .then((userCredential) => {
      accountData = userCredential.user;
    })
    try {
      const docRef = await addDoc(collection(db, "userData"), {
        username: settingData.username,
        userEmail: settingData.email,
        userId: `userId#${accountData.uid}`,
        userProfile:'no-data',
        userFriends:['no-data'],
        userChatRooms:['no-data']
      });
      console.log("Document written with ID: ", docRef.id);
      navigate('/login')
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
    <button onClick={createAccount}>시작하기</button>
  )
}

export default SignUpButton