import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react';
import './App.css';
import UserList from './components/UserList';

function App() {
  //users 배열 부분을 UserList 컴포넌트에서 app으로 가져옴
  const users = [
    {//기쁨이
        id:1,
        userName: 'Joy',
        email : 'Joy@example.com',
        img : 'Joy.jpg'
    },
    {//슬픔이
        id:2,
        userName: 'Sadness',
        email : 'Sadness@example.com',
        img : 'Sadness.jpg'
    },
    {//버럭이
        id:3,
        userName: 'Anger',
        email : 'Anger@example.com',
        img : 'Anger.jpg'
    },
    {//까칠이
        id:4,
        userName: 'Disgust',
        email : 'Disgust@example.com',
        img : 'Disgust.jpg'
    },
    {//소심이
        id:5,
        userName: 'Fear',
        email : 'Fear@example.com',
        img : 'Fear.jpg'
    }
]
  return (
    <>
      {/* props로 배열 users를 보내줌 */}
      <UserList users={users}/>
    </>
  );
}

export default App;
