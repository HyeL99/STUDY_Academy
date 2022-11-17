/* Promise 문법
const myPromise = new Promise((resolve,reject)=>{
  //함수 파라미터로 받아옴(성공했을때,실패했을때)
  setTimeout(()=>{
    //resolve(1);         //1초 뒤에 성공하는 프로미스
    reject(new Error)   //1초 뒤에 실패하는 프로미스
  },1000)
})


//프로미스가 끝나고 할 작업 설정
myPromise
  .then((res)=>{console.log(res)})
  .catch((e)=>{console.log(e)})
*/


const increaseAndPrint = (n, callback) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let value = n+1;
      console.log(value);
    
      if(value === 6){
        const getError = new Error();
        getError.name = '5가 되었을 때 getError 발생'
        reject(getError);
        return;
      }

      resolve(value)
    },1000)
  });
}

// increaseAndPrint(0)
//   .then((res)=>{return increaseAndPrint(res)})  //1
//   .then((res)=>{return increaseAndPrint(res)})  //2
//   .then((res)=>{return increaseAndPrint(res)})  //3
//   .then((res)=>{return increaseAndPrint(res)})  //4
//   .then((res)=>{return increaseAndPrint(res)})  //5
//   .then((res)=>{return increaseAndPrint(res)})  //6
//   .then((res)=>{return increaseAndPrint(res)})  //7
//   .then((res)=>{return increaseAndPrint(res)})  //8
//   .catch((e)=>console.log('작업끝!\n',e));

increaseAndPrint(0)
  .then(increaseAndPrint)  //1
  .then(increaseAndPrint)  //2
  .then(increaseAndPrint)  //3
  .then(increaseAndPrint)  //4
  .then(increaseAndPrint)  //5
  .then(increaseAndPrint)  //6
  .then(increaseAndPrint)  //7
  .then(increaseAndPrint)  //8
  .catch((e)=>console.log('작업끝!\n',e));
/*
  아쉬운점
  - 몇번째에서 에러 발생했는지 모름
  - 특정 조건에 따라 분기를 나누는 작업도 어려움
  - 특정 값을 공유해가면서 작업 처리하기도 힘듦
  - then들이 너무 중복

  ==> async/await 사용
*/