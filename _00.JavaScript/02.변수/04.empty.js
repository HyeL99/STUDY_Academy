/* null & undefined */

let vari;
console.log('let vari; ? ',vari); // undefined. 메모리상 어떤 데이터도 들어있지 않음.

vari = null; //변수가 비었다고 선언
console.log('vari = null; ?',vari);

let acticeItem; //변수 안에 내용이 있는자 없는지 모르는 상태
activeItem = null;  //변수 안 내용이 없는 상태
console.log('activeItem ?', activeItem);

console.log('typeof null ?',typeof null);       // object 라고 표시
console.log('typeof undefined ?',typeof undefined);  // undefined 라고 표시