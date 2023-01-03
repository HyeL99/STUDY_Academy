import { deleteDoc, doc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db, storage } from '../firebase'
import { handleUserDataAction } from '../redux/action/userDataAction'
import './Setting.scss'

const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentAccount = JSON.parse(localStorage.getItem('accountData'))

  let currentUsername = currentAccount.username;
  const [editUsername, setEditUsername] = useState(currentAccount.username);
  const gettedUserData = JSON.parse(localStorage.getItem('accountData'));
  let userData = JSON.parse(localStorage.getItem('accountData'))
  const [editProfileImage, setEditProfileImage] = useState(currentAccount.userProfile)

  const editProfile = (e) => {
    e.preventDefault();
    dispatch(handleUserDataAction.updateUsername(userData,editUsername));
    currentAccount.username = editUsername;
    localStorage.setItem('accountData',JSON.stringify(currentAccount))
    setEditUsername('')

    if(gettedUserData.userProfile !== editProfileImage){
      const storageRef = ref(storage, `images/${editProfileImage.name}`);
      uploadBytes(storageRef, editProfileImage).then((snapshot) => {
        getDownloadURL(storageRef).then((url)=>{
          dispatch(handleUserDataAction.updateProfileImage(userData,url));
          currentAccount.userProfile = url;
          localStorage.setItem('accountData',JSON.stringify(currentAccount))
        })
      });
      setEditProfileImage('')
    }    
  }

  const logOut = () => {
    localStorage.clear();
    navigate('/')
  }

  const deleteAccount = async () => {
    let deleteResult = window.confirm('정말 계정을 삭제하시겠습니까?');
    if(deleteResult){
      await deleteDoc(doc(db, "userData", currentAccount.userEmail));
      auth.currentUser.delete();;
      localStorage.clear();
      navigate('/')
    }
  }

  const setImage = (link) => {
    let el = document.querySelector('.editProfilePlace .profileWrap');
    el.style.backgroundImage = `url(${link})`;
    el.style.backgroundColor = `white`;
  }

  const selectFile = (e) => {
    if(e.target.files && e.target.files[0]){
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      setEditProfileImage(e.target.files[0])
      reader.onload = function(e){
        setImage(e.target.result)
      }
    }
  }

  useEffect(()=> {
    if(userData.userProfile !== 'no-data'){
      setImage(userData.userProfile)
    }
  },[])

  return (
    <div id='settingPage'>
      <div className="contentsWrap">
        <div className="top">
          <Link to='/home'>
            <button>
              <BiArrowBack/>
              <span className="ex">뒤로 가기</span>
            </button>
          </Link>
          <h2>설정</h2>
        </div>
        <div className="editProfilePlace">
          <form onSubmit={(e)=>editProfile(e)}>
            <label htmlFor=""></label>
            <label className="profileWrap" htmlFor="editProfileFile">이미지 선택</label>
            <input type="file" accept="image/*" id="editProfileFile" onChange={(e)=>selectFile(e)}/>
            <input type="text" placeholder={currentUsername} value={editUsername} onChange={(e)=>setEditUsername(e.target.value)}/>
            <input type="submit" value='프로필 수정' />
          </form>
        </div>
      </div>
      <div className="handleAccountPlace">
        <button onClick={logOut}>로그아웃</button>
        <button onClick={deleteAccount}>회원탈퇴</button>
      </div>
      
    </div>
  )
}

export default Setting
