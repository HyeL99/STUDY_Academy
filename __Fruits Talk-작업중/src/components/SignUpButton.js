import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../firebase';

const SignUpButton = ({usernameState, profileImage}) => {
  console.log(profileImage);
  const settingData = useSelector(state => state.userData.settingData);
  const navigate = useNavigate();

  let profileUrl = '';

  const createAccount = async () => {

    if(profileImage !== ''){
      const editProfileImage = profileImage;

      const storageRef = ref(storage, `images/${editProfileImage.name}`);
      
      uploadBytes(storageRef, editProfileImage).then((snapshot) => {
        getDownloadURL(storageRef).then((url)=>{
          profileUrl = url;
        }).then(()=>{
          setAccount();
        })
      });
    } else {
      setAccount();
    }

    
  }
  const setAccount = async () => {
    let accountData={};
    await createUserWithEmailAndPassword(auth, settingData.email, settingData.password)
    .then((userCredential) => {
      accountData = userCredential.user;
    })
    .then(async ()=>{
      try {
        await setDoc(doc(db, "userData",settingData.email), {
          userUid:accountData.uid,
          username: settingData.username,
          userEmail: settingData.email,
          userId: `userId@${accountData.uid}`,
          userProfile:profileUrl?profileUrl:'no-data',
          userFriends:[],
          userChatRooms:[],
        });
        navigate('/login')
      } catch (e) {
        console.log(e)
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