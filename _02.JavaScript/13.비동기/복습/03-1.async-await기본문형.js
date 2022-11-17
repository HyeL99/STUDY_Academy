/*
Promise의 아쉬운점
- 몇번째에서 에러 발생했는지 모름
- 특정 조건에 따라 분기를 나누는 작업도 어려움
- 특정 값을 공유해가면서 작업 처리하기도 힘듦
- then들이 너무 중복

==> async/await 사용
    - Promise 사용시 then이 필요없음
*/

const sleep = (ms) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve()},ms)
  })
}
/*
async function process(){
  console.log('Hi')
  await sleep(1000);  //1초 쉬고 발생
  console.log('Bye')
}
*/

const process = async () => {
  console.log('Hi');
  await sleep(1000);  //1초 쉬고 발생
  console.log('Bye');
}

process();