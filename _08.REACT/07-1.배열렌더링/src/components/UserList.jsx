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

    const User = ({item}) => {
        return (
            <div className="" style={{display:'flex',alignItems:'center',padding:"5px"}}>
                <img src={item.img} alt={item.userName}  style={{width: "100px", marginRight:'10px'}}/>
                <b>@{item.userName}</b> <span>&nbsp;( {item.email} )</span>
            </div>
        )
    }
    return (
        <div>
            {/* 
                //map함수로 축약
                <User item={users[0]}/>
                <User item={users[1]}/>
                <User item={users[2]}/>
                <User item={users[3]}/>
                <User item={users[4]}/> 
            */}
            {users.map((arrayItem)=><User item={arrayItem} key={arrayItem.id}/>)}
        </div>
    )
}

export default UserList
//key값이 없다고 경고 - 배열을 렌더릥 할때는 key값이 있어야 효율적인 렌더링 가능