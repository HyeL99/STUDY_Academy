import React, { useState } from 'react'
import { auth, signInGoogle } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SetValues = (e) => {
    if(e.target.name === 'loginEmail'){
      setEmail(e.garget.value);
    } else if(e.target.name === 'loginPassword') {
      setPassword(e.garget.value);
    }
  }

  const doLogin = (e) => {
    e.preventDefault();
    try{

    } catch {

    }
  }

  const onGoogleLogin = async (e) => {
    let provider;
    if(e.target.name === 'googleLogin'){
      provider = new auth.GoogleAuthProvider();
    }
    const data = signInGoogle();
  }
  return (
    <div>
      로그인 페이지
      <form onSubmit={doLogin}>
        <input type="email" name="loginEmail" placeholder='이메일을 입력해주세요.' value={email} onChange={SetValues} />
        <input type="password" name="loginPassword" placeholder='비밀번호를 입력해주세요.' value={password} onChange={SetValues} />

        <input type="submit" value="login" />
        <span>계정이 없으신가요? 계정 생성</span>
        <button name='googleLogin' onClick={onGoogleLogin}>구글 계정으로 로그인</button>
      </form>
    </div>
  )
}

export default Login
