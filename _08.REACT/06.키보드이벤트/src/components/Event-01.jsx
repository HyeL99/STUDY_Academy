// 기본 세팅
import React,{useState} from 'react'

const Event = () => {
    const [,] = useState('');
    const onClick = () => {
        alert("click");
    }
    const onChangeUserName = () => {
        console.log('username change')
    }
    const onChangeMessage = () => {
        console.log('message change')
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name='userName' placeholder='USER NAME' value='' onChange={onChangeUserName}/>
            <input type="text" name='message' placeholder='MESSAGE' value='' onChange={onChangeMessage} />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default Event