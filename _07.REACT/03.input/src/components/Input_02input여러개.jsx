import React, { useState } from 'react'

const Input = () => {
    // input창의 내용이 바뀔 때마다 발생하는 함수
    const [inputs, setInputs] = useState({
        id:'',
        nick:'',
    })
    const {id, nick} = inputs;  //구조 분해 할당을 통해 추출

    const onChange = (e) => {
        // if(e.target.name == 'id') setInputs({id:e.target.value, nick});
        // if(e.target.name == 'nick') setInputs({id,nick:e.target.value});
        const {name, value} = e.target;
        const nextInputs = {
            ...inputs,
            [name]:value,
        }

        // react에서는 기준 객체를 업데이트할때 기존 객체 복사 뒤 덮어씌우는 방식
        setInputs(nextInputs);
    }
    const onReset = () => {
        setInputs({
            id:'',
            nick:'',
        });
    }
    return (
        <div>
            <input name='id' onChange={onChange} type="text" placeholder='아이디' value={id} />
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