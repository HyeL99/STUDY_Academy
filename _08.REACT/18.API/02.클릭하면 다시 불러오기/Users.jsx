/*
  - REST API를 이용 (https://meetup.toast.com/posts/92)
  - axios 라이브러리 ($ npm install axios)
    - REST API 쉽게 사용하고, 프로미스 기반으로 처리하게 해줌
  - JSONPlaceholder (https://jsonplaceholder.typicode.com/)
    - 연습용 api제공
*/
/*
  특정 버튼을 눌러서 API요청을 다시 하는 방법
  fetchUsers 함수 정의 부분을 useEffect 밖으로 뺀다.
*/

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {
  const [users,setUsers] = useState(null);  // usersAPI 존재 유무 확인
  const [loading,setLoading] = useState(false);  // 현재 로딩중 여부 확인
  const [error,setError] = useState(null);  // 에러 발생 여부 확인
  
  const fetchUsers = async () => {
    try{
      setUsers(null);
      setLoading(true);
      setError(null);

      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data); //.data는 정해져 있는 것, 가져온 데이터를  users로 설정
    }catch(e){
      setError(e)
    }
    setLoading(false);  //로딩이 끝났으니 loading 값을 false로 바꿈
  }

  useEffect(() => { //deps가 비어있으면 화면 로드시에만 작동
    fetchUsers();
  },[]);
  
  //console.log(users);
  
  // 3가지 상태에 따른 렌더링
  if(loading) return <li style={{border:"2px solid blueviolet",padding:"5px",margin:"5px 0"}}>로딩중...</li>
  if(error) return <li style={{border:"2px solid blueviolet",padding:"5px",margin:"5px 0"}}>에러발생</li>
  if(!users) return null; //로딩은 끝났는데 아직 users 배열이 유효하지 않음

  return (
    <div style={{height:"100%"}}>
      <ul style={{height: "95%",overflowY:"auto"}}>
        {users && users.map((item)=>(
          <li key={item.id} style={{border:"2px solid blueviolet",padding:"5px",margin:"5px 0"}}>
            {item.username} ({item.email})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </div>
  )
}

export default Users
