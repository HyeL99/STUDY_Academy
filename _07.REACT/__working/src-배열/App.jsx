//useCallback (hook 함수)
//useMemo 비슷
//특정 함수를 새로 만들지 않고 재사용

import React,{useMemo, useRef, useState, useCallback} from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

//active된 아이템 숫자를 세주는 함수
function countActiveUsers(users){
  //console.log('active 유저 수를 세는 중');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs ] = useState({
    username:'', email:''
  })  //input상태 관리

  const [users, setUsers] =useState([     //배열을 useState로 관리
    {//기쁨이
        id:1,
        userName: 'Joy',
        email : 'Joy@example.com',
        active: true 
    },
    {//슬픔이
        id:2,
        userName: 'Sadness',
        email : 'Sadness@example.com',
        active: false,
    },
    {//버럭이
        id:3,
        userName: 'Anger',
        email : 'Anger@example.com',
        active: false,
    },
    {//까칠이
        id:4,
        userName: 'Disgust',
        email : 'Disgust@example.com',
        active: false,
    },
    {//소심이
        id:5,
        userName: 'Fear',
        email : 'Fear@example.com',
        active: false,
    },
  ]);

  const { userName, email } = inputs;

  //useCallback함수 적용
  const onChange = useCallback((e)=> {  //onChange 함수
    const { name , value } = e.target;
    setInputs({ ...inputs, [name]: value })
  }, [inputs])

  const nextId = useRef(6);
  //위 배열의 id가 5까지라 6넣어줌, 굳이 리렌더링 될 필요가 없어서 간단한 변수로 관리 useRef사용

  const onCreate =()=> {
    // console.log('온크리에이트 함수 발생!!');
    const user = {  
      id: nextId.current,
      userName,
      email
    }
    //console.log('nextId.current는?',nextId.current);
    nextId.current +=1;
    
    //setUsers([...users, user])
    setUsers(users.concat(user))  //concat 배열함수

    //if(userName && email) setUsers([...users, user]); 
    //아무것도 입력 안했을대도 작동하는 것을 막기 위해

    setInputs({userName:'', email:''})  //다시 깨끗한 input
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

  //countActiveUsers함수 호출
  const count = useMemo(()=>countActiveUsers(users),[users])
  // useMemo가 함수 형태로
  // deps에 넣는 값이 바뀌어야만 useMem가 작동 -> 콘솔에서 확인!

  return (
    <>
      <CreateUser userName={userName} email={email} onCreate={onCreate} onChange={onChange}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>

      <div>Active 상태의 사용자 수 : {count}</div>
    </>
  );
}

export default App;
