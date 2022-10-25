import './App.css';
import React from 'react';

/*export default function App()*/
function App() {
  const name = "여러분";
  const style = { color: 'orange', fontSize: '25px' }

  const clickMe = () => {
    alert('✨뾰로롱✨');
  }

  return (
    /* <div id="container"> */
    <React.Fragment>
      <h1 className='title'>안녕</h1>
      <h2 style={style} onClick={clickMe}>{name}! 좋은 하루 + click me!</h2>
      {['💜', '💛', '💙'].map(item => <h3>{item}</h3>)}
      <p>
        오늘은 REACT의 기본 문법을 살펴 보는 시간이에요!<br />
        어렵지 않아요!
      </p>
    </React.Fragment>
    /* </div> */
  )
}
export default App;

/*
  array.map(callback function) - 배열을 돌리면서 콜백함수 호출
*/

/*
  REACT
  1. html + javascript => jsx(js파일도 작동)
  2. 수정을 하면 새로 리로드를 하지 않아도 자동으로 적용
  3. !!! class가 아니라 className !!!
  4. 1요소가 리턴 되어야 함 -> 형제 노드를 쓸 수 없고 감싸주어야 함
      (감싸주는 태그는 태그네임 없이 비워놔도 가능)
      <></>, <React.Fragment>를 쓰기도 함
  5. 자바스크립트 코드(변수, 함수) 사용시 {js} 형태로 사용
  6. 태그는 꼭 쌍으로 있어야 하며, 홀로 존재하는 태그는 항상 닫아줘야함
      ex. <br />,<img /> etc.
  7. 내부에서 스타일 시트를 사용할 때에는 객체형태로 정의
      ex. <p style={{color:'orange', fontSize:'25px'}}></p>
  8. onClick=함수명 ==> onClick={함수명}
*/
