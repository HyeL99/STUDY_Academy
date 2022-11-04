/*
    onToggle, onRemove
    - 두 함수를 createUser 컴포넌트에 주기 위해서는 userList를 통해야함
    - 이를 해결하기 위해 context API를 통해서 직접 넣어주거나, dispatch만 따로 넣어준다. 
*/

import React, { createContext, useCallback, useMemo, useReducer, useRef }  from 'react';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUser'
import useInputs from './useInputs';

export const UserDispatch = createContext(null);
//UserDispatch(일종의 컴포넌트 됨)로 context를 만들어줌
// null - 기본값 필요 없어서 사용

const initialState = {
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


function reducer(state, action){
    switch(action.type){
        case 'CREATE_USER' :
            return {
                ...state,
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

function countActiveUsers(users){
    return users.filter(user => user.active).length;
}

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const nextId = useRef(4);

    const [form, onChange, reset] = useInputs({username:'',email:''});
    const {username, email} = form;

    const onCreate = useCallback(() => {
        dispatch({type:'CREATE_USER', user:{id:nextId.current,username,email}})
        reset()
        nextId.current +=1;
    },[username,email]);

    const count = useMemo(()=>countActiveUsers(users),[users]);

    // const onToggle = (id) => {
    //     dispatch({type:'TOGGLE_USER', id})
    // }
    // const onRemove = (id) => {
    //     dispatch({type:'DELETE_USER', id})
    // }

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser username={username} email={email}  onCreate={onCreate} />{/* onChange={onChange}*/}<br/>
            {/* <UserList users={users} onToggle={onToggle} onRemove={onRemove} /> */}
            <UserList users={users} />
            <br />
            <div>Active 상태의 사용자 수 : {count} </div>
        </UserDispatch.Provider>
    );
}

export default App;
