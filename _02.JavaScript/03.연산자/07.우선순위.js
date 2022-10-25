/*
    연산자 우선순위(Priority)
*/

let a=2;
let b=3;
let result = a + b * 4;     //곱셈, 나눗셈 먼저 계산

console.log(`a + b * 4  = ? ${a + b * 4}`);
console.log(`(a + b) * 4  = ? ${(a + b) * 4}`);     // 괄호 먼저 계산

result = a++ + b + 4;                       //연산을 끝내고 result에 대입하고 난 뒤 a++ 해준다.
console.log(`a++ + b + 4 ? ${result}`);     //9
console.log(`a++ ? ${a}`);

a = 2;
result = a++ + b * 4;                       //연산을 끝내고 result에 대입하고 난 뒤 a++ 해준다.
console.log(`a++ + b * 4 ? ${result}`);     //14
console.log(`a++ ? ${a}`);