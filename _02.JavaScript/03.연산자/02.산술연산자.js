/*
    산술연산자 +(더하기) -(빼기) *(곱하기) /(나누기) %(나머지) **(제곱)
*/

let num1 = 5;
let num2 = 2;
console.log(`num1(5) + num2(2) = ? ${num1 + num2}`);
console.log(`num1(5) - num2(2) = ? ${num1 - num2}`);
console.log(`num1(5) * num2(2) = ? ${num1 * num2}`);
console.log(`num1(5) / num2(2) = ? ${num1 / num2}`);
console.log(`num1(5) % num2(2) = ? ${num1 % num2}`);
console.log(`num1(5) ** num2(2) = ? ${num1 ** num2}`); // ** : ES7방식에서 추가됨

// + 연산자 주의점! - 문자열과 문자열, 숫자열과 문자열을 더하면 그냥 나열한다.
let text1 = 'red'+'shoes';
console.log(`'red'+'shoes' = ? ${'red'+'shoes'}`);

let text2 = '25'+'편의점';
console.log(`'25'+'편의점' = ? ${'25'+'편의점'}`);

let text3 = 25+'편의점';
console.log(`25+'편의점' = ? ${25+'편의점'}`);

//${변수} : 템플릿 문자열 / + (문자결합연산자) 대신에 사용, 백틱(백쿼드)``와 함께 사용

let subject, score;

subject = 'JavaScript';
score = 95;

console.log(subject + ' 과목 성적은? ' + score + '점 입니다.');
console.log('${subject} 과목 성적은? ${score}점 입니다.');
console.log(`${subject} 과목 성적은? ${score}점 입니다.`);