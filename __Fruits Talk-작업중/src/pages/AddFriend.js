import React, { useState } from 'react'
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
    console.log(userData);
    let list = userData?.filter(item => item.userEmail === searchEmail);
    console.log(list);
    setResult(list[0]);
  }
  console.log(result);

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

        <h3>검색결과</h3>
        <div className="resultContainer">
          {result && <FindFriendCard friendItem={result}/>}
        </div>
      </div>
    </div>
  )
}

export default AddFriend
