import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Setting.scss'

const Setting = () => {
  const navigate = useNavigate();

  let currentUsername = 'HyeL'
  const [editUsername, setEditUsername] = useState('')
  const editProfile = (e) => {
    e.preventDefault();
  }

  const logOut = () => {
    navigate('/')
  }

  const deleteAccount = () => {
    let deleteResult = window.confirm('정말 계정을 삭제하시겠습니까?');
    if(deleteResult){
      navigate('/')
    }
  }
  return (
    <div id='settingPage'>
      <div className="contentsWrap">
        <div className="top">
          <Link to='/home'><button>뒤로가기</button></Link>
          <h2>설정</h2>
        </div>
        <div className="editProfilePlace">
          <form onSubmit={(e)=>editProfile(e)}>
            <div className="profileWrap">이미지 선택</div>
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
