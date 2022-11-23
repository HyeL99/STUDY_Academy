/*
    useRef - 특정 DOM을 직접 선택해야할 때 useRef hook 사용
*/
import React, { useState } from 'react'
import { useRef } from 'react';

const Input = () => {
    const [inputs, setInputs] = useState({
        id:'',
        nick:'',
    })

    const focusInput = useRef();    // focusInput이라는 객체 생성
    const {id, nick} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        const nextInputs = {
            ...inputs,
            [name]:value,
        }
        setInputs(nextInputs);
    }
    const onReset = () => {
        setInputs({
            id:'',
            nick:'',
        });
        focusInput.current.focus(); // current는 DOM을 가리키게 되고(ref가 지정된 부분), focus함수 호출
    }
    return (
        <div>
            <input name='id' onChange={onChange} type="text" placeholder='아이디' value={id} ref={focusInput} />
            {/* 
                ref - 참조(reference) 
                react에서 특정 dom부분을 참조할 때 사용, 많이 사용X
            */}
            <input name='nick' onChange={onChange} type="text" placeholder='닉네임' value={nick} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>입력값 : </b>
                아이디 {id} (닉네임 {nick})
            </div>
        </div>
    )
}

export default Input