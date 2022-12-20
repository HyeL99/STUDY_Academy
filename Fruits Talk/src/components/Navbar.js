import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div id='navbarComponent'>
      <div className="top">
        <Link to='/home'><button className="home">홈</button></Link>
        <Link to='/chat-list'><button className="chatList">채팅방</button></Link>
      </div>
      <div className="bottom">
        <Link to='/setting'><button className="chatList">설정</button></Link>
        
      </div>
    </div>
  )
}

export default Navbar
