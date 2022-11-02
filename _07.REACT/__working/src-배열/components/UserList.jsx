import React from 'react'

const User = ({item, onRemove, onToggle}) => {
    const {userName, email, id, active } = item; //추출

    return (
        <div className="" style={{display:'flex',alignItems:'center',padding:"5px"}}>
            <b style={{color: active ? 'green':'black', cursor:'pointer' }} onClick={()=> onToggle(id)}>
                @{userName}
            </b>
            <span>&nbsp;( {email} )</span>
            <button onClick={()=>onRemove(id)}>삭제</button>
        </div>
    )
}

const UserList = ({users, onRemove, onToggle}) => {

    return (
        <div>
            {/* { users.map( (user) => <Item user={user} /> )}
            //key값이 없다고 경고 */}
            {users.map((arrayItem)=><User item={arrayItem} key={arrayItem.id} onRemove={onRemove} onToggle={onToggle} />)}
        </div>
    )
}

export default UserList