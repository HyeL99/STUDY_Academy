//useReducer를 이용한 Counter

import React, { useReducer } from 'react'

//reducer함수 만들기 -상태를 업데이트 하는 함수(컴퍼넌트 밖에 있음)
// 상태를 변경하는 로직이 있는 함수
// state - 현재 상태(숫자,문자,배열,객체..), 
// action-dispatch에서 보낸 객체를 파라메터로 받아옴
// 컴포넌트 바깥에서 작성, 다른 파일로 불러오는 것도 가능

function reducer(state, action){   
  switch (action.type){
    case 'INCREMENT':
      return state+1; 
    case 'DECREMENT':
      return state-1; 
    default :               //위에 case에서 해당사항이 없을때
    return state; 
  }
}

export default function Counter() {

  const [number, dispatch] = useReducer(reducer, 0);
 // state - 현재 상태, dispatch - 액션으로 보내는 함수
 // 첫번째 파라메터는 연결되는 함수명, 두번째 - 초기값


  const increase  = () => {
    dispatch({ type:'INCREMENT'})   //type을 보내줌
  }
  const decrease  = () => {
    dispatch(({ type:'DECREMENT'}))
  }

  return (
    <div>
      <h1> {number} </h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  )
}
