import React,{useState} from 'react'
// useState - 리액트에서 제공하는 함수(hook)

function Counter() {
    let [number, setNumber] = useState(0);
    // useState(0) - 기본상태를 0으로 하겠다. 호출될 때 배열 반환
    // let [변수, 변수값을 바꾸는 함수명] = useState(초기값)

    const increase = () => {
        setNumber(++number);
        console.log(number);
    }
    const decrease = () => {
        setNumber(--number);
        console.log(number)
    }

    return (
        <>
        <h1 id="h1Num">{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        </>
    );
}

export default Counter;