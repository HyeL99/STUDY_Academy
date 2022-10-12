/*
  promise
  - "콜백이 중첩(callback hell)"을 해결하기 위해
  - 가독성을 높이고, 에러 처리를 쉽게 할 수 있게
  - 비동기적으로 수행하는 작업의 결과를 알려준다.

  3가지 상태를 가진다.
  - 대기(pending) : 초기 상태, 이행하지도 거부하지도 않은 상태
  - 이해(fulfilled) : 작업이 성공적으로 완료
  - 거부(rejected) : 작업 실패
*/

//주어진 시간(초)가 지나면 callback함수를 호출함
//단, 시간이 0보다 작으면 에러 던짐
/*
function runDelay(aa,bb){
  if(!aa){
    throw new Error('callback함수를 전달해야 함');
  }
  if(!bb || bb < 0){
    throw new Error('시간은 0보다 커야');
  }

  setTimeout(aa, bb * 1000);
}*/
function runDelay(min){
  return new Promise((resolve,reject)=>{
    if(!min || min<0) {
      reject(new Error('min는 없거나 0보다 작습니다.'));
    }
    setTimeout(resolve, min*1000);
  });
}
/*
  resolve - 해결하다 (실행)
  reject - 거부하다 (실패)

  resolve - then을 호출
  reject - catch ghcnf, 실패했을 때
*/

/*
functionName(parameters)
.then(필요한 일을 수행)
.catch(에러처리)
.finally(최종적으로, 생략가능)

위와 아래는 동일
runDelay(2).then(필요한 일을 수행).catch(에러처리).finally(최종적으로, 생략가능)
*/
runDelay(0.5)
.then(()=> {console.log('타이머 완료')})
.catch(console.error)
.finally(()=>{console.log('end')})

/*
try{
  runDelay(()=> { console.log('타이머 완료') },1);
}
catch(error){
  console.log('실패했어요 ㅠㅠ');
}
*/
