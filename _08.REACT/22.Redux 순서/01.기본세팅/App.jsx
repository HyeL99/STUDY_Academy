import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type:'INCREMENT'})
    //클릭했을 때 액션(단순한 오브젝트)을 던져줌
    //반드시 type(액션의 이름)과 선택사항 payload가 있어야함
    setCount(count + 1);
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

  리덕스 사용 순서
  1.redux 폴더 생성 후 store.js 생성 (경로 무관)
  2. index.js에서 app을 Provider로 감싸주고 store 파라미터로 넘겨주기
*/