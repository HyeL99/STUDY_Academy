// 입력값 useState 이용해 저장
import React,{useState} from 'react'

const Event = () => {
    const [userName,setUserName] = useState('');
    const [message,setMessage] = useState('');
    const onClick = () => {
        alert(userName + ':' + message);
    }
    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }
    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name='userName' placeholder='USER NAME' value={userName} onChange={(e)=>onChangeUserName(e)}/>
            <input type="text" name='message' placeholder='MESSAGE' value={message} onChange={(e)=>onChangeMessage(e)} />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default Event