import React,{useState} from 'react';
import './App.css';
import Button01 from './components/Button01';
import Button02 from './components/Button02';
/* 버튼2번에 있는 css 파일이 최종으로 덮어짐*/

function App() {
  return (
    <div>
      <div className="">
        <Button01>버튼1</Button01>
        <Button02>버튼2</Button02>
      </div>
    </div>
  );
}

export default App;

/*
  Design

  SASS
  Bootstrap //잘 안씀
  CSS Modules (post CSS)  //가장 많이 쓰임
  tailwind  //최근에 뜨는 것
  Styled Component
*/