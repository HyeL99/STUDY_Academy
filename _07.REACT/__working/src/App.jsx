// useState - 상태가 바뀌면 컴포넌트 전체가 리렌더링
// useRef - 특정DOM을 선택할 때 사용 - 바뀌는 부분이 있어도 리렌더링 되지 않음
// 배열을 추가, 제거, 수정 등을 하기 위해서는 고유 아이디값 관리 필요

import React,{useState} from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

function App() {
  //users 배열 부분을 UserList 컴포넌트에서 app으로 가져옴
  const users = [
    {//기쁨이
        id:1,
        userName: 'Joy',
        email : 'Joy@example.com',
    },
    {//슬픔이
        id:2,
        userName: 'Sadness',
        email : 'Sadness@example.com',
    },
    {//버럭이
        id:3,
        userName: 'Anger',
        email : 'Anger@example.com',
    },
    {//까칠이
        id:4,
        userName: 'Disgust',
        email : 'Disgust@example.com',
    },
    {//소심이
        id:5,
        userName: 'Fear',
        email : 'Fear@example.com',
    }
]
  return (
    <>
      <CreateUser />
      {/* props로 배열 users를 보내줌 */}
      <UserList users={users}/>
    </>
  );
}

export default App;
