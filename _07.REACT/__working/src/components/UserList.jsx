import React from 'react'

const UserList = ({users}) => {

    //컴포넌트 내부 컴포넌트
    const User = ({item}) => {
        return (
            <div className="" style={{display:'flex',alignItems:'center',padding:"5px"}}>
                <b>@{item.userName}</b> <span>&nbsp;( {item.email} )</span>
            </div>
        )
    }

    return (
        <div>
            {users.map((arrayItem)=><User item={arrayItem} key={arrayItem.id}/>)}
        </div>
    )
}

export default UserList