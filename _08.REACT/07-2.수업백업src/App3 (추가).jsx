// useRef - 특정 DOM을 선택할때 사용
// useState -상태가 바뀌면 컴퍼넌트 전체가 리렌더링/ useRef- 바뀌는 부분이 있어도 리렌더링 x
// 배열을 추가, 제거, 수정 등을 하기 위해서는 고유 아이디값 관리 필요

import React, { useRef, useState }  from 'react';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUser'

function App() {
  const [inputs, setInputs ] = useState({
    username:'', email:''
  })  //input상태 관리
  const { username, email } = inputs;

  const onChange = (e)=> {  //onChange 함수
    const { name , value } = e.target;
    setInputs({ ...inputs, [name]: value })
  }

  const [users, setUsers] =useState([     //배열을 useState로 관리
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
  ]);
  const nextId = useRef(4);
  //위 배열의 id가 3까지라 4넣어줌, 굳이 리렌더링 될 필요가 없어서 간단한 변수로 관리 useRef사용


  const onCreate =()=> {
    // console.log('온크리에이트 함수 발생!!');
    const user = {  
      id: nextId.current,
      username,
      email
    }
    //console.log('nextId.current는?',nextId.current);
    nextId.current +=1;
    
    //setUsers([...users, user])
    setUsers(users.concat(user))  //concat 배열함수

    //if(username && email) setUsers([...users, user]); 
    //아무것도 입력 안했을대도 작동하는 것을 막기 위해

    setInputs({username:'', email:''})  //다시 깨끗한 input
  }


  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onCreate={onCreate} 
        onChange={onChange}
        />
      <UserList users={users}/>  
    </>
  );
}

export default App;
