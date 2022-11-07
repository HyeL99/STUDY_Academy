// Context API 를 사용한 전역값 관리
import React,{useContext} from 'react' // useContext
import { UserDispatch } from './App';  // export한 것을 불러옴

const Item = ({user}) => {
  const {username, email, id, active } = user;

  const dispatch = useContext(UserDispatch);  //context 사용 선언

  return (
    // 컨텍스트에서 만들어진 dispatch 사용
    <div>
      <b 
        style={ {color: active ? 'green':'black', cursor:'pointer' }} 
        onClick={ ()=> {dispatch({type:'TOGGLE_USER', id})} } >
        {username}
      </b>
      <span> ( {email} )</span>
      <button onClick={() =>{dispatch({type:'DELETE_USER', id})} } >삭제</button>
    </div>
  )
}


const UserList = ({users}) => {
  return (
    <>
      { users.map( (user) => 
        <Item 
        user={user} 
        key={user.id}
        /> )
        }      
    </> 
  )
}

export default UserList