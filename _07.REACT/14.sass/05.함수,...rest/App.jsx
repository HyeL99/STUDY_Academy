import React,{useState} from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className='App'>
      <div className="btnWrap">
        <Button size='large' color='yellow'>노란색버튼</Button>
        <Button size='medium' color='yellow'>노란색버튼</Button>
        <Button size='small' color='yellow'>노란색버튼</Button>
      </div>
      <div className="btnWrap">
        <Button size='large' color='lime'>라임색버튼</Button>
        <Button size='medium' color='lime'>라임색버튼</Button>
        <Button size='small' color='lime'>라임색버튼</Button>
      </div>
      <div className="btnWrap">
        <Button size='large' color='blue'>파란색버튼</Button>
        <Button size='medium' color='blue'>파란색버튼</Button>
        <Button size='small' color='blue'>파란색버튼</Button>
      </div>
      <div className="btnWrap">
        <Button size='large' color='grape'>보라색버튼</Button>
        <Button size='medium' color='grape'>보라색버튼</Button>
        <Button size='small' color='grape'>보라색버튼</Button>
      </div>
      <div className="btnWrap">
        <Button size='large' color='grape' outline={true}>보라색버튼</Button>
        <Button size='medium' color='grape'>보라색버튼</Button>
        <Button size='small' color='grape' outline={true}>보라색버튼</Button>
      </div>
      <div className="btnWrap">
        <Button size='large' color='lime' fullWidth>fullWidth 버튼</Button>
        <Button size='large' color='yellow' outline fullWidth
        onMouseMove={()=>{console.log('마우스가 움직임')}}
        >fullWidth 버튼</Button>
        <Button size='large' color='blue' fullWidth
        onClick={()=>{console.log('click!')}}
        >fullWidth 버튼</Button>
      </div>
    </div>
  );
}

export default App;
