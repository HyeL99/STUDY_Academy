import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FindFriendCard from '../components/FindFriendCard';
import './AddFriend.scss'

const AddFriend = () => {
  const [searchEmail, setSearchEmail] = useState('');
  const [result, setResult] = useState();
  const userData = useSelector(state => state.userDataList.userData)
  const findFriend = (e) => {
    e.preventDefault();
    let list = userData?.filter(item => item.userEmail === searchEmail);
    setResult(list[0]);
  }

  return (
    <div id='addFriendPage'>
      <div className="top">
        <Link to='/home'>
          <button>
            <BiArrowBack/>
            <span className="ex">뒤로 가기</span>
          </button>
        </Link>
        <h2>친구 추가</h2>
      </div>
      <div className="bottom">
        <form onSubmit={(e)=>findFriend(e)}>
          <input type="email" placeholder='친구 이메일을 정확하게 입력해주세요.' value={searchEmail} onChange={(e)=>setSearchEmail(e.target.value)} />
          <input type="submit" value="검색" />
        </form>

        <h3>검색결과</h3>
        <div className="resultContainer">
          {result && <FindFriendCard friendItem={result}/>}
        </div>
      </div>
    </div>
  )
}

export default AddFriend
