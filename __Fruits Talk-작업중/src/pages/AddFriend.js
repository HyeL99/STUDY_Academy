import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FindFriendCard from '../components/FindFriendCard';
import FriendsCard from '../components/FriendsCard';
import Navbar from '../components/Navbar'
import './AddFriend.scss'

const AddFriend = () => {
  const [searchEmail, setSearchEmail] = useState('');
  const [resultsList, setResultsList] = useState(['11','12','13'])
  const findFriend = (e) => {
    e.preventDefault();
  }
  return (
    <div id='addFriendPage'>
      <div className="top">
        <Link to='/home'><button>뒤로가기</button></Link>
        <h2>친구 추가</h2>
      </div>
      <div className="bottom">
        <form onSubmit={(e)=>findFriend(e)}>
          <input type="email" placeholder='친구 이메일' value={searchEmail} onChange={(e)=>setSearchEmail(e.target.value)} />
          <input type="submit" value="검색" />
        </form>

        <h3>검색결과 ({resultsList.length}명)</h3>
        <div className="resultContainer">
          {resultsList.map((item, index) => <FindFriendCard friendId={item} key={index} />)}
        </div>
      </div>
    </div>
  )
}

export default AddFriend
