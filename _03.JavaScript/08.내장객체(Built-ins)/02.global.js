/* 
global - 특정 객체에 속하지 않는 프로퍼티와 메서드. 최상위객체
-오브젝트를 통하지 않고 바로 호출 가능. 프로그램이 꼬일 수 있어서 자제. 
 */

console.log(globalThis); //node에서 사용할 수 있는 global객체
console.log(this); //모듈에 있는 정보를 출력. 현재 아무것도 없음. 

eval('const num = 2; console.log(num) ');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseInt('숫자지만 문자열', '-12.34'));//문자열
console.log(parseInt('-12.34'));//문자열 안에 있는 숫자 (실수)를 정수로 변화
console.log(parseFloat()); //문자열이지만 숫자가 있으면 숫자로 변환. 
// URI(uniform resource identifier, 인터넷 식별자 ) > URL
//아스키 문자로만 구성 되어야 함
//한글이나 특수문자는 이스케이프 처리

const URL = 'http://네이버.com';
const enURL = encodeURI(URL); //아스키 문자로 인코딩
console.log(enURL);
const deURL = decodeURI(URL); //아스키 문자에서 디코딩
console.log(deURL);