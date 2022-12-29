import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AccountButton from './AccountButton';
import './Header.scss';
import logo from '../assets/logo.png'
import { FaSearch } from 'react-icons/fa' ; 

const Header = () => {
  const [keyword,setKeyword] = useState('')
  const navigate = useNavigate();

  const search = async (e) => {
    e.preventDefault();
    let word = keyword;
    word = word.trim().replace(/ +/g, " ");
    console.log(word);

    if(word === '' || word === ' '){
      alert('검색어를 입력해주세요!');
    }else{
      navigate(`/search/${word}`);
      setKeyword('')
    }
  }
  
  return (
    <div id='header' className='shadowBottom'>
      <div className="inner">
        <Link to='/'><h1><img src={logo} alt="내냉" /></h1></Link>
        <form onSubmit={search}>
          <button type="submit"><FaSearch /></button>
          <input type="text" placeholder='원하는 레시피를 찾아가세요!' value={keyword} onChange={(e)=>setKeyword(e.target.value)} />
        </form>
        <div className="menus">
          <Link to='/category'>카테고리</Link>
          <AccountButton />
        </div>
      </div>
    </div>
  )
}

export default Header
