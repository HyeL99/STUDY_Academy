import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';
import { IoSettingsSharp } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import { BsFillChatTextFill} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div id='navbarComponent'>
      <div className="top">
        <Link to='/home'><button className="home">
          <AiFillHome/>
          <span className="ex">홈</span></button>
        </Link>
        <Link to='/chat-list'>
          <button className="chatList">
            <BsFillChatTextFill/>
            <span className="ex">채팅방</span>
          </button>
        </Link>
      </div>
      <div className="bottom">
        <Link to='/setting'>
          <button className="chatList">
            <IoSettingsSharp/>
            <span className="ex">설정</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
