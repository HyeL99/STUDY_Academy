import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.scss'

const SignUp = () => {
  let userEmail = 'nickname@gmail.com';
  const [username, setUsername] = useState('');

  const navigate = useNavigate()
  const addUserData = (e) => {
    e.preventDefault();
    if(username.length === 0){
      alert('닉네임을 입력해주세요.');
      return;
    }
    navigate('/home')
  }

  return (
    <div id='signUpPage'>
      <div className="profileWrap">이미지 선택</div>
      <form onSubmit={(e)=>addUserData(e)}>
        <input type="text" placeholder='닉네임' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder='이메일' value={userEmail} disabled/>
        <input type="submit" value='시작하기' />
      </form>
    </div>
  )
}

export default SignUp
