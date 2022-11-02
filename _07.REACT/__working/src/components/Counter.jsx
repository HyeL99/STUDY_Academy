// useReducer를 이용한 Counter
// useReducer - 줄이는..?
import React, { useReducer } from 'react'

// reducer함수 생성 - 상태 업데이트 함수(컴포넌트 외부 선언)
// state - 현재 상태 (숫자, 문자, 배열, 객체, ...)
// action - 액션 객체를 파라미터로 받아옴
// 상태를 변경하는 로직이 있는 함수
// 컴포넌트 바깥에서 작성, 다른 파일로 불러오는 것도 가능
const reducer = (state,action) => {    // 이거 리덕스에서 봤던 것 같은데,,, 나중에 확인해보기
    switch (action.type) {
        case 'INCREMENT': return ++state;
        case 'DECREMENT': return --state;
        default : //위의 cass에 해당 사항
            return state;
    }
}


const Counter = () => {
    const [num, dispatch] = useReducer(reducer, 0);
    // state - 현재 상태 (숫자, 문자, 배열, 객체, ...), dispatch - 액션 객체를 파라미터로 받아옴
    // 첫번째 파라미터는 함수명
    // 두번째 파라미터는 초기값

    const increase = () => {
        dispatch({type: 'INCREMENT'})
    }
    const decrease = () => {
        dispatch({type: 'DECREMENT'})
    }
    
    return (
        <div>
            <h1>숫자 : {num}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
}

export default Counter