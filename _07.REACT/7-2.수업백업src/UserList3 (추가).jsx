//컴포넌트 안에 또 컴포넌트

import React from 'react'

 //또다른 컴퍼넌트 추가
const Item = ({ user }) => {    
  return (
    <div>
      <b>{user.username}</b><span> ( {user.email} )</span>
    </div>
  )
}


const UserList = ({users}) => {  //props로 users(배열)받아옴

  return (
    <>
      {/* { users.map( (user) => <Item user={user} /> )}
      //key값이 없다고 경고 */}

      { users.map( (user) => <Item user={user} key={user.id} /> )}
      
    </> 
  )
}

export default UserList

//key값이 없다고 경고 -  배열을 렌더링 할때는 key이 있어야 효율적으로 렌더링 가능


