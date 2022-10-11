const num1 = 123;
const num2 = new Number(123);

console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

console.log('사용할 수 있는 가장 큰 값', Number.MAX_VALUE);
console.log('사용할 수 있는 가장 작은 값', Number.MIN_VALUE);
console.log('사용할 수 있는 가장 큰 수', Number.MAX_SAFE_INTEGER);
console.log('사용할 수 있는 가장 작은 수', Number.MIN_SAFE_INTEGER);

const num3 = 1234.526;
console.log('num3',num3)
console.log('숫자를 문자열로 반환',num3.toString())
console.log('소수를 반올림하여 문자열로 반환',num3.toFixed())
console.log('한국',num3.toLocaleString('ko-KR'));
console.log('이집트',num3.toLocaleString('ar-EG'));  //각국의 언어로 표기

console.log('============================');
console.log('유효숫자 n개 노출(반올림)',num3.toPrecision(5));
console.log('유효숫자 n개 노출(반올림)',num3.toPrecision(2));
/* 물리와 화학에서 쓰이는 그 유효숫자의 개념 맞음. 12345 = 1.2*e+4 */