//주어진 시간(초)가 지나면 callback함수를 호출함
//단, 시간이 0보다 작으면 에러 던짐

function runDelay(aa,bb){
  if(!aa){
    throw new Error('callback함수를 전달해야 함');
  }
  if(!bb || bb < 0){
    throw new Error('시간은 0보다 커야');
  }

  setTimeout(aa, bb * 1000);
}


try{
  runDelay(()=> { console.log('타이머 완료') },2);
}
catch(error){
  console.log('실패했어요 ㅠㅠ');
}