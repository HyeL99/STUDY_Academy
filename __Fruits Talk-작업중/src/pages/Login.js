import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Login.scss'
import { getDataListAction } from '../redux/action/userDataListAction';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountData, setUserEmail } from '../redux/reducer/userDataReducer';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [loginMod, setLoginMod] = useState(true);
  const dispatch = useDispatch();

  const userList = useSelector(state => state.userDataList.userData);
  console.log(userList)

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
      console.log('구글 로그인에 실패했습니다!')
    }
  }
  useEffect(()=>{
    dispatch(getDataListAction.getUserData())
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
    console.log(duplication[0])
    if(duplication.length>0){
      signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
          dispatch(setAccountData({accountData:duplication[0]}))
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
    let duplication = userList?.filter(item => item.email === email)
    if(duplication>0){
      alert('이메일이 중복됩니다.')
    } else {
      console.log(email, password)
      dispatch(setUserEmail({email:email, password:password}))
      navigate('/signup');
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
