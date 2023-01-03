import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div id='loginPage'>
      <div className="inner">
        <div className="wrap">
          <div className="face">얼굴이미지</div>
          <div className="content">
            <h2>내냉</h2>
            <p>레시피 저장소 🥄내냉에 오신 것을 환영합니다🎉</p>
            <button id="googleLogin">구글로 시작</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
