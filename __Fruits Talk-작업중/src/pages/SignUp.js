import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignUpButton from '../components/SignUpButton';
import { addUserDataAction } from '../redux/action/userDataAction';
import { addUsername } from '../redux/reducer/userDataReducer';
import './SignUp.scss'

const SignUp = () => {
  let settingData = useSelector(state => state.userData.settingData);
  const [username, setUsername] = useState('');
  const [usernameState, setUsernameState] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      return;
    }
    dispatch(addUsername({username:username}));
    setUsernameState(true);
  }
  
  return (
    <div id='signUpPage'>
      <div className="profileWrap">이미지 선택</div>
      <form onSubmit={(e)=>onUsernameDispatch(e)}>
        <input type="text" placeholder='닉네임' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder='이메일' value={settingData.email} disabled/>
        <input type="submit" value='닉네임 등록'/>
      </form>
      <SignUpButton usernameState={usernameState}/>
    </div>
  )
}

export default SignUp
