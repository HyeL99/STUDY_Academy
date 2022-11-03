// 

import React, { useRef, useState, useMemo, useCallback }  from 'react';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUser'



function countActiveUsers(users){
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs ] = useState({
    username:'', email:''
  })  
  const { username, email } = inputs;


 
  const onChange = useCallback((e)=> {  
    const { name , value } = e.target;
    setInputs({ ...inputs, [name]: value })
  }, [inputs])

  const [users, setUsers] =useState([     
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
 


  const onCreate =()=> {
    const user = {  
      id: nextId.current,
      username,
      email
    }

    nextId.current +=1;
    
   
    setUsers(users.concat(user))  


    setInputs({username:'', email:''}) 
  }


  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }
  
  const onToggle = (id) => {
    setUsers( users.map( user =>  user.id === id ? 
    { ...user, active:!user.active } : user ))
  }


 
  const count = useMemo(()=>countActiveUsers(users),[users])


  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onCreate={onCreate} 
        onChange={onChange}
        /><br/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />  <br />
      <div>Active 상태의 사용자 수 : {count}</div>
    </>
  );
}

export default App;
