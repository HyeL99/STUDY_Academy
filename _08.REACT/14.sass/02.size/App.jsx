import React,{useState} from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className='App'>
      <Button size='large'>노란버튼</Button>
      <Button size='medium'>노란버튼</Button>
      <Button size='small'>노란버튼</Button>
      <Button>노란버튼</Button>
    </div>
  );
}

export default App;
