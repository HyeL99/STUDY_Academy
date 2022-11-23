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
      email:'blueDragon@naver.com',
      active: true 
    },
    { id:2, 
      username:'sisisaa', 
      email:'sisisaa007@daum.net',
      active: false  
    },
    { id:3, 
      username:'d3456dddd', 
      email:'d3456@gmail.com',
      active: false  
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

  //삭제함수
  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }
  //filter함수
  //users배열 중에 파라메터 id로 가져온 것과 일치하지 않은 것만 추출해서 새로운 배열로 만들어줌

  //id를 누르면 색 변환, 특정 아이템만 업데이트 시에도 map 사용
  const onToggle = (id) => {
    setUsers( users.map( user =>  user.id === id ? 
    { ...user, active:!user.active } : user ))
  }
  //클릭을 하면 파라메터 id로 받아온 onToggle함수가 실행
  //map을 이용 각각의 user를 돌려주면서 받아온 id값과 같은 id가지고 있는 user의 active의 밸류를 반대로 바꿔준다

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onCreate={onCreate} 
        onChange={onChange}
        />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />  
    </>
  );
}

export default App;
