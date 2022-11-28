// useRef - 특정 DOM을 선택할때 사용
// useState -상태가 바뀌면 컴퍼넌트 전체가 리렌더링/ useRef- 바뀌는 부분이 있어도 리렌더링 x
// 배열을 추가, 제거, 수정 등을 하기 위해서는 고유 아이디값 관리 필요

import React, { useRef }  from 'react';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUser'

function App() {

  const users =[  
    { id:1, 
      username:'blueDragon', 
      email:'blueDragon@naver.com' 
    },
    { id:2, 
      username:'sisisaa', 
      email:'sisisaa007@daum.net' 
    },
    { id:3, 
      username:'d3456dddd', 
      email:'d3456@gmail.com' 
    },
  ];

  const onCreate =()=> {
    console.log('온크리에이트 함수 발생!!');
  }


  return (
    <>
      <CreateUser/>
      <UserList users={users}/>  
    </>
  );
}

export default App;
