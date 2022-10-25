// 배열 생성 방법
let array01 = new Array(3); // Array객체를 이용, 3개를 저장할 수 있는 배열 생성
console.log('array01? ',array01);

let array02 = new Array(1,2,3); // Array객체를 이용, 실제 아이템을 전달해서 배열 생성
console.log('array02? ',array02);

let array03 = Array.of(1,3,5,7); // static method 이용
console.log('array03? ',array03);

let array04 = [2,4,6,8,10]; // 배열 리터럴 이용(구체적인 값을 가지고 배열을 생성)
console.log('array04? ',array04);

let array05 = Array.from(array03); // 기존 배열로부터 값을 받아와 새로운 배열 생성
console.log('array05? ',array05);

let array06 = Array.from('Friday'); // iterable(순회, 반복이 가능 - 배열, 문자열 등)
console.log('array06? ',array06);   //문자 하나하나가 배열의 아이템이 됨

/*
    배열 Array
    - 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야한다.
    - 자바스크립트는 예외, 오브젝트와 거의 같음.
*/

console.log('=============오브젝트로부터 배열 생성=============');
// 오브젝트로부터 배열 생성
let array07 = Array.from({
    0: '안',
    1: '녕',
    2: '히',
    3: '히',
    length: 4,  //길이정보 필수
});
console.log('array07? ',array07);