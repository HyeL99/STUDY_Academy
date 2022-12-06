import React, { useState } from 'react'
import { RiLoginCircleLine, RiAccountCircleLine} from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { VscListSelection, VscChromeClose } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss'
import logoImage from '../assets/LOGO.png'

//반응형, 사이드바(991px) 추가


const Navbar = ({authenticate, setAuthenticate }) => {
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','스포츠','Sale','지속가능성'];

  const [sideState, setSideState] = useState('-100%');
  // .sideMenu의 style.left 속성값
  const [keyword,setKeyword] = useState('');
  const navigate = useNavigate();

  const searchKeyword = (e) => {
    if(e.key === 'Enter'){  //엔터키만 눌렀을 때 반응
      let keyword = e.target.value; //js와 다름 event 안에 value가 들어있음
      console.log('keyword?',keyword);
      setKeyword('');
      navigate(`/?q=${keyword}`);  //추가조건은 쿼리로 붙임, 키워드를 읽어와서 url에 넣어줌
    }
  }
  const goToLogin = () => {
    navigate('/login')  //로그인 페이지로 이동
  }

  return (
    <div className='navBar'>
      <div className="sideMenu" style={{left:sideState}}>
        <div className="closeBtnWrap hide">
          <VscChromeClose className="closeBtn" onClick={()=>{setSideState('-100%')}} />
        </div>
        <ul className='sideMenuList'>
          {menuList.map((menu,index) => (<li key={index}>{menu}</li>))}
        </ul>
      </div>
      <div className="burgerMenu hide">
        <VscListSelection className="openBtn" onClick={()=>{setSideState('0')}}/>
      </div>

      <div className='loginBtnWrap'>
      {authenticate? (
        <div className="loginBtn" onClick={()=>setAuthenticate(false)}>
          <RiAccountCircleLine className='loginIcon' /><span>로그아웃</span>
        </div>
      ):(
        <div className="loginBtn" onClick={goToLogin}>
          <RiLoginCircleLine className='loginIcon' /><span>로그인</span>
        </div>
      )}
        
      </div>
      <h1>
        <Link to='/'>
          <img src={logoImage} alt="H&M" width={60}/>
        </Link>
      </h1>
      <nav>
        <ul className='menuList'>
          {menuList.map((menu,index) => (<li key={index}>{menu}</li>))}
        </ul>
        <div className='search'>
          <FiSearch />
          <input type="text" placeholder='제품검색' value={keyword} onKeyPress={(e)=>{searchKeyword(e)}} onChange={(e)=>{setKeyword(e.target.value)}}/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
