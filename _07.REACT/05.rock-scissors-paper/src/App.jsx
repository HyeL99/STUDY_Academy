import React,{useState} from 'react';
import './App.css';
import Box from './components/Box';

/*
  1. 박스 2개(타이틀, 사진, 결과)
  2. 박스 하단에 가위바위보 버튼
  3. 버튼을 클릭 -> 클릭한 아이템이 유저박스에 보임
  4. 버튼을 클릭 -> 컴퓨터가 아이템을 랜덤하게 선택
  5. 3,4번의 승패 나눔
  6. 결과에 따라 박스 테두리색, 글씨 색이 변함(승-파랑/패-회색)
*/

// 사진 아이템을 저장할 수 있는 객체 scissors, rock, paper
const Choice = {
  scissors : { name : 'Scissors', img:'scissors.png' },
  rock : { name : 'Rock', img:'rock.png' },
  paper : { name : 'Paper', img:'paper.png' }
}
function App() {
  const play = (userChoice) => {
    console.log("가위바위보 버튼 선택!", userChoice);
  }
  return (
    <>
      <main className="main">
        <Box title="Mine"/>
        <Box title="Computer"/>
      </main>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
        </div>
    </>
  );
}

export default App;
