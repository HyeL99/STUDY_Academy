//컴포넌트 안에 또 컴포넌트

import React from 'react'

 //또다른 컴퍼넌트 추가
const Item = ({ user, onRemove, onToggle }) => {   //onToggle추가
  const {username, email, id, active } = user; //추출
  return (
    <div>
      <b 
        style={ {color: active ? 'green':'black', cursor:'pointer' }} 
        onClick={ ()=> onToggle(id) }
        >
        {username}
      </b>
      <span> ( {email} )</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
}


const UserList = ({users, onRemove, onToggle}) => {  //props로 users(배열)받아옴

  return (
    <>
      {/* { users.map( (user) => <Item user={user} /> )}
      //key값이 없다고 경고 */}

      { users.map( (user) => 
        <Item 
        user={user} 
        key={user.id}
        onRemove={onRemove} 
        onToggle={onToggle} 
        /> )
        }      
    </> 
  )
}

export default UserList

//key값이 없다고 경고 -  배열을 렌더링 할때는 key이 있어야 효율적으로 렌더링 가능


