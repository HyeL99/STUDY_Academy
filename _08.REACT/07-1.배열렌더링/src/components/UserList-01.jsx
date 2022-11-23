import React from 'react'

const UserList = () => {
    const users = [
        {//기쁨이
            id:1,
            userName: '@Joy',
            email : 'Joy@example.com',
            img : 'Joy.jpg'
        },
        {//슬픔이
            id:2,
            userName: '@Sadness',
            email : 'Sadness@example.com',
            img : 'Sadness.jpg'
        },
        {//버럭이
            id:3,
            userName: '@Anger',
            email : 'Anger@example.com',
            img : 'Anger.jpg'
        },
        {//까칠이
            id:4,
            userName: '@Disgust',
            email : 'Disgust@example.com',
            img : 'Disgust.jpg'
        },
        {//소심이
            id:5,
            userName: '@Fear',
            email : 'Fear@example.com',
            img : 'Fear.jpg'
        }
    ]
    return (
        <div>
            <div className="">
                <b>{users[0].userName}</b> <span>( {users[0].email} )</span>
            </div>
            <div className="">
                <b>{users[1].userName}</b> <span>( {users[1].email} )</span>
            </div>
            <div className="">
                <b>{users[2].userName}</b> <span>( {users[2].email} )</span>
            </div>
            <div className="">
                <b>{users[3].userName}</b> <span>( {users[3].email} )</span>
            </div>
            <div className="">
                <b>{users[4].userName}</b> <span>( {users[4].email} )</span>
            </div>
        </div>
    )
}

export default UserList