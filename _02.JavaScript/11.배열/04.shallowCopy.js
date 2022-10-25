/*
    얕은 복사 - Shallow Copy
*/

// 오브젝트 만들기
const hamburg = {name : '🍔', price : 4500};
const donut = {name : '🍩', price : 2000};
const cake = {name : '🍰', price : 7000};
const steak = {name : '🥩', price : 10000};

const store01 = [hamburg, donut];   //배열을 이용해서 가게 생성

const store02 = Array.from(store01);
//Array에 있는 static 함수 from을 이용해 새로운 배열 생성
console.log('store01',store01);
console.log('store02',store02);

store01.push(steak)
console.log('store01에 steak 추가 후 store1',store01);
console.log('store01에 steak 추가 후 store02',store02);

store02.push(cake)
console.log('store02에 cake 추가 후 store1',store01);
console.log('store02에 cake 추가 후 store02',store02);
//store01에 추가했을 때에는 store01만 달라짐 - 서로 다른 배열이 만들어졌다는 것을 확인, store01만 steak 추가
//store02에 추가했을 때에는 store02만 달라짐 - 서로 다른 배열이 만들어졌다는 것을 확인, store02만 cake 추가


//오브젝트를 변경
hamburg.price = 4300;
console.log('hamburg 가격 수정 후 store01', store01);
console.log('hamburg 가격 수정 후 store02', store02);
//오브젝트를 바꾸니 배열은 수정하지 않았어도 자동으로 바뀜 -> 이게 Shallow Copy