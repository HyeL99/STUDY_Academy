import React,{useState} from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoList />
    </>
  );
}

export default App;
