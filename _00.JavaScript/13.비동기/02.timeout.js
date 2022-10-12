/*
  자바스크립트 엔진에 있는 call Stack은 한번에 하나의 일만 할 수 있음
  but 자바스크립트 호스트환경 Web에서 제공하는 Web API들은 비동기적으로 처리해준다(node)
  DOM API, setTimeout, setInterval, fetch, event Listner
*/

function execute(){
  console.log('1');

  setTimeout(() => {
    console.log('2')
  },3000) 

  console.log('3');
}
//3초 후에 실행하라고 콜백함수를 던져만 놓고 3초가 지나면  Task Queue에 들어가고 콜백함수를 call stack에 가져와서 실행

execute();

// setTimeout(실행할 내용,시간(ms단위))