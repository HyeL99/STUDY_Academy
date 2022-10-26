import React,{useState} from 'react';
import { useEffect } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  //array를 이용해서 아이템을 모아줌

  const addItem =() => {
    setTodoList([...todoList, inputValue]);
    // 기존의 아이템을 유지하고, 새로운 아이템(inputValue)을 추가
    setInputValue('');
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={addItem} >추가</button>
      <TodoBoard todoList={todoList} />
      {/* todoList깂을 props를 이용해서 TodoBoard에 전달 */}
    </>
  );
}

export default App;