// 

import React, { useCallback, useMemo, useReducer, useRef }  from 'react';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUser'


const initialState = {   //inputs,  users배열 초기화
    inputs: { username:'', email:'' },
    users : [     
        {
            id:1, 
            username:'blueDragon', 
            email:'blueDragon@naver.com',
            active: true
        },
        {
            id:2, 
            username:'sisisaa', 
            email:'sisisaa007@daum.net',
            active: false
        },
        {
            id:3, 
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
            return {...state, inputs:{
                ...state.inputs,
                [action.name]:action.value
            }};
        case 'CREATE_USER' :
            return {
                ...state,
                inputs:initialState.inputs,
                users: state.users.concat(action.user)
            }
        case 'TOGGLE_USER' :
            return {
                ...state,
                users : state.users.map(user =>  user.id === action.id ? { ...user, active:!user.active } : user)
              }
        case 'DELETE_USER' :
            return {
                ...state,
                users : state.users.filter(user =>  user.id !== action.id)
              }
        default :
            throw new Error('no action')
    }
}

//active된 아이템 숫자를 세주는 함수
function countActiveUsers(users){
    //console.log('active 유저 수를 세는 중');
    return users.filter(user => user.active).length;
}

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);
    // state - 현재상태, dispatch - 액션을 발생시키는 함수(전달해주는 역할)
    // 파라미터 (함수, 초기값)
    const { users } = state;// 비구조화 할당, users배열만 추출
    const { username, email} = state.inputs
    const nextId = useRef(4);

    const onChange = useCallback((e)=> {  //onChange 함수
        const { name , value } = e.target;
        dispatch({type:'CHANGE_INPUT', name,value})
    },[]);

    const onCreate = useCallback(() => {
        dispatch({type:'CREATE_USER', user:{id:nextId.current,username,email}})
        nextId.current +=1;
    },[username,email]);

    const count = useMemo(()=>countActiveUsers(users),[users]);
    // active가 적용된 user의 수를 나타내는 변수 count
    // useMemo - users배열이 바뀔 때만 작동
    const onToggle = (id) => {
      dispatch({type:'TOGGLE_USER', id})
    }
    const onRemove = (id) => {
      dispatch({type:'DELETE_USER', id})
    }

    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} /><br/>
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <br />
            <div>Active 상태의 사용자 수 : {count} </div>
        </>
    );
}

export default App;
