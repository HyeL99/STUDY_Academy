// 

import React, { useCallback, useReducer }  from 'react';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUser'


const initialState = {   //inputs,  users배열 초기화
  inputs: { username:'', email:'' },
  users : [     
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
  ]
}

//reducer함수 정의
function reducer(state, action){
  switch(action.type){
    case 'CHANGE_INPUT' :
      return {...state, inputs:{...state.inputs, [action.name]:action.value}};
    default :
      throw new Error('no action')
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // state - 현재상태, dispatch - 액션을 발생시키는 함수(전달해주는 역할)
  // 파라미터 (함수, 초기값)
  const { users } = state;// 비구조화 할당, users배열만 추출
  const { username, email} = state.inputs

  const onChange = useCallback((e)=> {  //onChange 함수
    const { name , value } = e.target;
    dispatch({type:'CHANGE_INPUT', name,value})
  },[])

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange}/><br/>
      <UserList users={users} />
      <br />
      <div>Active 상태의 사용자 수 : 0 </div>
    </>
  );
}

export default App;
