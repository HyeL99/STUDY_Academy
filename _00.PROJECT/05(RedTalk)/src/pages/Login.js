import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountData, setUserEmail } from '../redux/reducer/userDataReducer';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [loginMod, setLoginMod] = useState(true);
  const dispatch = useDispatch();

  let userList = useSelector(state => state.userDataList.userData);

  const SetValues = (e) => {
    if(e.target.id === 'loginEmail'){
      setEmail(e.target.value);
    } else if(e.target.id === 'loginPassword') {
      setPassword(e.target.value);
    } else if(e.target.id === 'checkPassword') {
      setCheckPassword(e.target.value);
    }
  }

  useEffect(()=>{
    localStorage.setItem('accountData','');
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
          doLogin();
        } else {
          if(password.length < 6){
            alert('비밀번호는 6자리 이상 입력해주세요');
          }else if(password === checkPassword){
            doSignUp();
          } else {
            alert('비밀번호가 일치하지 않습니다.');
          }
        }
      }
    }
  }

  const doLogin = () => {
    let duplication = userList?.filter(item => item.userEmail === email)
    if(duplication.length>0){
      signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
          dispatch(setAccountData({accountData:duplication[0]}))
          localStorage.setItem('accountData',JSON.stringify(duplication[0]));
          navigate('/home')
        })
        .catch((e)=>{
          alert('이메일 또는 비밀번호가 일치하지 않습니다.')
        })
    } else {
      alert('일치하는 계정이 없습니다!')
    }
  }
  const doSignUp = () => {
    let duplication = userList?.filter(item => item.userEmail
      === email)
    if(duplication.length>0){
      alert('이메일이 중복됩니다.')
    } else {
      dispatch(setUserEmail({email:email, password:password}))
      navigate('/signup');
    }
  }
  return (
    <div id='loginPage'>
      <h2>Red Talk</h2>
      <form onSubmit={(e)=>onLogin(e)}>
        <input type="email" id="loginEmail" placeholder='이메일을 입력해주세요.' value={email} onChange={(e)=>SetValues(e)} />
        <input type="password" id="loginPassword" placeholder='비밀번호를 입력해주세요.' value={password} onChange={(e)=>SetValues(e)} />
        <input type="password" id="checkPassword" placeholder='비밀번호 확인' value={checkPassword} onChange={(e)=>SetValues(e)} style={{visibility:`${loginMod?'hidden':'visible'}`}}/>

        <input type="submit" value={loginMod?'로그인':'회원가입'} />
      </form>
      {loginMod?
        <div onClick={()=>setLoginMod(false)}>계정이 없으신가요? <button>계정 생성</button></div> :
        <div onClick={()=>setLoginMod(true)}>계정이 있으신가요? <button>로그인</button></div>
      }
    </div>
  )
}

export default Login
