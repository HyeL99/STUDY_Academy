import React from 'react';
//import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  //const [count, setCount] = useState(0);
  const count = useSelector((state)=>state.count);
  //useSelector의 매개변수는 함수
  //그 함수는 상태를 전달하는 역할
  //state는 함수의 매개변수로 줌(store에 있는 모든 state 전달)
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type:'INCREMENT'})
    //클릭했을 때 액션(단순한 오브젝트)을 던져줌
    //반드시 type(액션의 이름)과 선택사항 payload가 있어야함
    //setCount(count + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
    </>
  );
}

export default App;

/*
  추가한 소스
  $ yarn add redux (리덕스 사용을 위해 설치)
  $ yarn add react-redux (리액트 리덕스 사용을 위해 설치)
*/