//키보드 이벤트

import React,{useState} from 'react'

const Event = () => {
    const [userName,setUserName] = useState('');
    const [message,setMessage] = useState('');
    const onClick = () => {
        alert(userName + ':' + message);
        setUserName('');
        setMessage('');
    }
    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }
    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }
    const onKeyPress = (e) => { //키보드 클릭했을 때 함수 발생
        if(e.key == 'Enter'){
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name='userName' placeholder='USER NAME' value={userName} onChange={onChangeUserName}/>
            <input type="text" name='message' placeholder='MESSAGE' value={message} onChange={onChangeMessage} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default Event