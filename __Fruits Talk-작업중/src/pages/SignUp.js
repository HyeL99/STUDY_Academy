import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignUpButton from '../components/SignUpButton';
import { addUsername } from '../redux/reducer/userDataReducer';
import './SignUp.scss'

const SignUp = () => {
  let settingData = useSelector(state => state.userData.settingData);
  const [username, setUsername] = useState('');
  const [usernameState, setUsernameState] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editProfileImage, setEditProfileImage] = useState('')

  useEffect(()=>{
    if(!settingData.email){
      navigate('/login')
    }
    setUsernameState(false);
  },[]);

  const onUsernameDispatch = (e) => {
    e.preventDefault();
    if(username.length === 0){
      alert('닉네임을 입력해주세요.');
      setUsernameState(false);
      return;
    }
    dispatch(addUsername({username:username}));
    setUsernameState(true);
  }

  const setImage = (link) => {
    let el = document.querySelector('#signUpPage .profileWrap');
    el.style.backgroundColor = `white`;
    el.style.backgroundImage = `url(${link})`;
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
  
  return (
    <div id='signUpPage'>
      <form onSubmit={(e)=>onUsernameDispatch(e)}>
      <label className="profileWrap" htmlFor="editProfileFile">이미지 선택</label>
        <input type="file" accept="image/*" id="editProfileFile" onChange={(e)=>selectFile(e)}/>
        <input type="text" placeholder='닉네임' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder='이메일' value={settingData.email} disabled/>
        <input type="submit" value='닉네임 등록'/>
      </form>
      <SignUpButton usernameState={usernameState} profileImage={editProfileImage}/>
    </div>
  )
}

export default SignUp
