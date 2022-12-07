import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {
  const count = useSelector((state)=>state.count);
  //useSelector의 매개변수는 함수
  //그 함수는 상태를 전달하는 역할
  //state는 함수의 매개변수로 줌(store에 있는 모든 state 전달)
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type:'INCREMENT', payload:{num:1}})
    //클릭했을 때 액션(단순한 오브젝트)을 던져줌
    //반드시 type(액션의 이름)과 선택사항 payload가 있어야함
  }
  const increase5 = () => {
    dispatch({type:'INCREMENT', payload:{num:5}})
    //payload - 옵션, 함수의 매개변수역할, 내가 원하는 정보를 보내줄 수 있음
  }
  const increase3 = () => {
    dispatch({type:'INCREMENT', payload:{num:3}})
  }
  return (
    <>
      <div className="wrap" style={{border:'1px solid blue'}}>
        <h1>{count}</h1>
        <button onClick={increase}>1증가</button>
        <button onClick={increase3}>3증가</button>
        <button onClick={increase5}>5증가</button>
      </div>
      <br /><br />
      <Box />
    </>
  );
}

export default App;

/*
  추가한 소스
  $ yarn add redux (리덕스 사용을 위해 설치)
  $ yarn add react-redux (리액트 리덕스 사용을 위해 설치)
*/