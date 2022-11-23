 //users 배열 부분을 UserList 컴퍼넌트에서 app으로 가져옴
//props로 배열 User 를 보내줌

import React from 'react';
import './App.css';
import UserList from './UserList'

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
  ]

  return (
    <>
      <UserList users={users}/>  
    </>
  );
}

export default App;
