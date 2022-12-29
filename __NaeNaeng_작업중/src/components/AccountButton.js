import React from 'react'
import { Link } from 'react-router-dom';

const AccountButton = () => {
  let loginState = false;
  return (
    <div id='accountButton'>
      {loginState ?
      (
        <Link to='/mypage/1' className='profile'>
          <div className="profileWrap">
            내 프로필
          </div>
          닉네임님!
        </Link>
      ):(
        <Link to='/login' className='login'>
          Login
        </Link>
      )}
    </div>
  )
}

export default AccountButton
