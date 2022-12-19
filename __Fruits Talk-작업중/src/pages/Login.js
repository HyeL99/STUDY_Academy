import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Login.scss'
import { loginAction } from '../redux/action/userDataAction';
import { useDispatch } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [loginMod, setLoginMod] = useState(true);
  const dispatch = useDispatch();

  const SetValues = (e) => {
    if(e.target.id === 'loginEmail'){
      setEmail(e.target.value);
    } else if(e.target.id === 'loginPassword') {
      setPassword(e.target.value);
      console.log(password);
    } else if(e.target.id === 'checkPassword') {
      setCheckPassword(e.target.value);
    }
  }

  const onGoogleLogin = async (e) => {
    try{
      const provider = new GoogleAuthProvider();
      let data = await signInWithPopup(auth, provider);
      await setUserData(data.user);
      console.log(data.user);
      setEmail(userData.email);
      setPassword(null);
      navigate('/home')
    } catch(error){
      console.log(error)
    }
  }

  

  useEffect(()=>{
    dispatch(loginAction.getUserData())
  },[])


  const onLogin = (e) => {
    e.preventDefault();
    if(email.length === 0){
      alert('이메일을 입력해주세요.')
    } else {
      if(password.length === 0){
        alert('비밀번호를 입력해주세요.');
      } else {
        if(loginMod === true){
          navigate('/home');
        } else {
          if(password === checkPassword){
            navigate('/signup');
          } else {
            alert('비밀번호가 일치하지 않습니다.');
          }
        }
      }
    }
  }

  return (
    <div id='loginPage'>
      <h2>Fruits Talk</h2>
      <form onSubmit={(e)=>onLogin(e)}>
        <input type="email" id="loginEmail" placeholder='이메일을 입력해주세요.' value={email} onChange={(e)=>SetValues(e)} />
        <input type="password" id="loginPassword" placeholder='비밀번호를 입력해주세요.' value={password} onChange={(e)=>SetValues(e)} />
        <input type="password" id="checkPassword" placeholder='비밀번호 확인' value={checkPassword} onChange={(e)=>SetValues(e)} style={{visibility:`${loginMod?'hidden':'visible'}`}}/>

        <input type="submit" value={loginMod?'로그인':'회원가입'} />
      </form>
      <button onClick={onGoogleLogin}>구글 계정으로 {loginMod?'로그인':'회원가입'}</button>
      {loginMod?
        <div onClick={()=>setLoginMod(false)}>계정이 없으신가요? <button>계정 생성</button></div>:
        <div onClick={()=>setLoginMod(true)}>계정이 있으신가요? <button>로그인</button></div>
      }
    </div>
  )
}

export default Login
