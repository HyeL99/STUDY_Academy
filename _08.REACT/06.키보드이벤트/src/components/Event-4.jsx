//input의 갯수가 많아질 때 useState를 하나로 사용

import React,{useState} from 'react'

const Event = () => {
    // const [userName,setUserName] = useState('');
    // const [message,setMessage] = useState('');

    const [form, setForm] = useState({userName:'', message:''});
    //구조 분해 할당을 통해서 값 추출
    const {userName, message} = form;

    const onClick = () => {
        alert(userName + ' : ' + message);
        setForm({userName:'', message:''});
    }
    const onChange = (e) => {
        const nextForm = {...form, [e.target.name]:e.target.value}
        setForm(nextForm);
    }
    const onKeyPress = (e) => { //키보드 클릭했을 때 함수 발생
        if(e.key == 'Enter'){
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name='userName' placeholder='USER NAME' value={userName} onChange={onChange}/>
            <input type="text" name='message' placeholder='MESSAGE' value={message} onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default Event