import React, { useState } from 'react'

const Input = () => {
    // input창의 내용이 바뀔 때마다 발생하는 함수
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value)
    }
    const onReset = () => {
        setText('');
    }
    return (
        <div>
            <input onChange={onChange} type="text" value={text} />
            <button onClick={onReset}>초기화</button>
            <div>입력값: <span id="inputValue">{text}</span></div>
        </div>
    )
}

export default Input