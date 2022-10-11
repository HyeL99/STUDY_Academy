/* 블리언 타입 */
console.clear()
let aa = true; //문자지만 따옴표를 쓰지 않으면 블리언
console.log(aa);
console.log(!aa); // !: 반대 의미

console.log(0);
console.log(!0);    //true - 없지않다는 의미
console.log(!!0);   //false
console.log('');    //빈공간
console.log(!'');   //true
console.log(!!'');  //false
console.log(null);  //아무것도 없음
console.log(!null);   //true
console.log(!!null);  //false

let bb;
console.log('변수 bb는? ',bb);  //undefined -비어있는 값

console.log(Infinity);
console.log(!!Infinity);    //true

console.log('3 < 2 ? ',3 < 2);
console.log('3 = 2 ? ',3 == 2);
console.log('3 > 2 ? ',3 > 2);