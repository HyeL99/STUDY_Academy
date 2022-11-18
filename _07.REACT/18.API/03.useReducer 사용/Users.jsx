/*
  - REST API를 이용 (https://meetup.toast.com/posts/92)
  - axios 라이브러리 ($ npm install axios)
    - REST API 쉽게 사용하고, 프로미스 기반으로 처리하게 해줌
  - JSONPlaceholder (https://jsonplaceholder.typicode.com/)
    - 연습용 api제공
*/
/*
  useReducer로 요청 상태 관리
  
*/

import React, { useEffect, useReducer } from 'react'
//import { useState } from 'react'
import axios from 'axios'

/*
  reducer 함수 정의 LOADING,SUCCESS,ERROR
  -상태를 업데이트 하는 함수(컴퍼넌트 밖에 있음)
  상태를 변경하는 로직이 있는 함수
  state - 현재 상태(숫자,문자,배열,객체..), 
  action-dispatch에서 보낸 객체를 파라메터로 받아옴
*/

function reducer(state, action){   
  switch (action.type){
    case 'LOADING':
      return {
        loading:true,
        users:null,
        error:null
      };
    case 'SUCCESS':
      return {
        loading:false,
        users:action.users,
        error:null
      };
    case 'ERROR':
      return {
        loading:false,
        users:null,
        error:action.error
      };
    default :               //위에 case에서 해당사항이 없을때
      throw new Error('액션 타입이 없음')
  }
}
const initialState = {
  loading:false,
  users:null,
  error:null
}
const Users = () => {
  //useReducer 사용 초기값 설정
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [users,setUsers] = useState(null);
  // const [loading,setLoading] = useState(false);
  // const [error,setError] = useState(null);

  const fetchUsers = async () => {
    dispatch({type:'LOADING'});
    try{
      // setUsers(null);
      // setLoading(true);
      // setError(null);
      
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      // setUsers(res.data);
      dispatch({type:'SUCCESS', users:res.data})  //요청성공
    }catch(e){
      // setError(e)
      dispatch({type:"ERROR", error:true})  //요청실패
    }
    // setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  },[]);
  
  const {loading, error, users} = state;  //비구조할당
  
  if(loading) return <li style={{border:"2px solid blueviolet",padding:"5px",margin:"5px 0"}}>로딩중...</li>
  if(error) return <li style={{border:"2px solid blueviolet",padding:"5px",margin:"5px 0"}}>에러발생</li>
  if(!users) return null

  return (
    <div style={{height:"100%"}}>
      <ul style={{height: "95%",overflowY:"auto"}}>
        {users && users.map((item)=>(
          <li key={item.id} style={{border:"2px solid blueviolet",padding:"5px",margin:"5px 0"}}>
            {item.username} ({item.address.zipcode})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </div>
  )
}

export default Users
