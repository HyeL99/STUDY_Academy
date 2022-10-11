/*
    참조 : 변수에 다른 변수를 대입했을 때 해당 변수가 대입된 변수의 주소를 받는 것을 참조라고 한다.
*/
//원시타입 - 값이 복사되어 전달됨
let a = 1;
let b = a;

console.log('a = ? ',a);
console.log('b = ? ',b);

//객체타입 - 참조값)(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
    name:"사과",
    color: "빨강",
    type: "과일",
};

let banana = apple;
console.log('banana = ? ',banana);