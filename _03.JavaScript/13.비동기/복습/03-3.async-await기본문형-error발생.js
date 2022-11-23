/*
  에러를 강제로 발생 시킬 때는 throw
  에러를 잡아낼 때는 try catch
*/

const sleep = (ms) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve()},ms)
  })
}

//에러를 강제로 만드는 함수
const makeError = async () => {
  await sleep(1000);
  const error = new Error();
  throw error;
}

//에러 핸들링 추가
const process = async () => {
  try{
    await makeError();
  }catch(e){
    console.log(e);
  };
}

process();