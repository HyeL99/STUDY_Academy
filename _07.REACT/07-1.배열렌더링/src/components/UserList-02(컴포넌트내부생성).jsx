import React from 'react'

const UserList = () => {
    const users = [
        {//기쁨이
            id:1,
            userName: 'Joy',
            email : 'Joy@example.com',
            img : 'Joy.jpg'
        },
        {//슬픔이
            id:2,
            userName: 'Sadness',
            email : 'Sadness@example.com',
            img : 'Sadness.jpg'
        },
        {//버럭이
            id:3,
            userName: 'Anger',
            email : 'Anger@example.com',
            img : 'Anger.jpg'
        },
        {//까칠이
            id:4,
            userName: 'Disgust',
            email : 'Disgust@example.com',
            img : 'Disgust.jpg'
        },
        {//소심이
            id:5,
            userName: 'Fear',
            email : 'Fear@example.com',
            img : 'Fear.jpg'
        }
    ]

    //또다른 컴포넌트 추가
    const User = ({item}) => {
        return (
            <div className="" style={{display:'flex',alignItems:'center',padding:"5px"}}>
                <img src={item.img} alt={item.userName}  style={{width: "100px", marginRight:'10px'}}/>
                <b>@{item.userName}</b> <span>( {item.email} )</span>
            </div>
        )
    }
    return (
        <div>
            <User item={users[0]}/>
            <User item={users[1]}/>
            <User item={users[2]}/>
            <User item={users[3]}/>
            <User item={users[4]}/>
        </div>
    )
}

export default UserList