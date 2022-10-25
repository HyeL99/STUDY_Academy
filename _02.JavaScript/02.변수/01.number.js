// 숫자열 타입 -> 숫자는 아무거나 다 됨 (무한대수도 가능)
let integer = 123; //정수 선언
console.log('정수', integer);

let negative = -123; //음수 선언;
console.log('음수', negative);

let double = 1.23; //실수
console.log('실수', double);

console.log(0 / 123); //0
console.log(123 / 0); //Infinity
console.log(123 / -0); //Infinity
console.log(123 / 'a'); //NaN(Not a Number);