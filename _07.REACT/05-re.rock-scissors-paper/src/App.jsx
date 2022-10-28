import { getQueriesForElement } from '@testing-library/react';
import React,{useEffect, useState} from 'react'; //상태를 관리할 때 사용하는 hook 중 하나
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
function App() {
  const choice = {
    scissors:{
      name: 'Scissors',
      img: 'scissors.png',
    },
    rock:{
      name: 'Rock',
      img: 'rock.png',
    },
    paper:{
      name: 'Paper',
      img: 'paper.png',
    }
  }
  const [userSelect, setUserSelect] = useState();
  const [computerSelect, setComputerSelect] = useState();
  const [rst, setRst] = useState(''); //승패를 보여주는 state

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    
    //유저가 선택한 값과 컴퓨터가 선택한 값을 함수에 전달
    getRst(choice[userChoice],computerChoice);
  }

  const getRst = (user,com) => {
    if(user.name === com.name){
      setRst('tie');
    } else {
      switch (user.name) {
        case 'Scissors': 
          com.name === 'Paper' ? setRst('win') : setRst('lose');
          break;
        case 'Paper': 
          com.name === 'Rock' ? setRst('win') : setRst('lose');
          break;
        case 'Rock': 
          com.name === 'Scissors' ? setRst('win') : setRst('lose');
          break;
        default:
      }
    }
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    //객체  choice의 key값만 뽑아서 배열이 됨

    let randomItem = Math.floor(Math.random()*itemArray.length);

    return choice[itemArray[randomItem]]
  }


  return (
    <>
      <div className='main'>
        <Box title="USER" item={userSelect} rst={rst}/>
        <Box title="COMPUTER" item={computerSelect} rst={rst}/>
      </div>
      <p className={`main resultP ${rst}`}>{rst==''? 'game start' : rst}</p>
      <div className='main'>
        <button onClick={()=>play('scissors')}>가위</button>
        <button onClick={()=>play('rock')}>바위</button>
        <button onClick={()=>play('paper')}>보</button>
      </div>
    </>
  );
}
export default App;