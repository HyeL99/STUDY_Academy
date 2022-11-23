/*
    num의 숫자가 짝수이면 '👍', 홀수이면 '👎'
*/

let num = 4;
let answer = num % 2 == 0 ? '👍' : '👎';
console.log(`num = 4 , answer ? ${answer}`);

num = 7;
answer = num % 2 == 0 ? '👍' : '👎';
console.log(`num = 7 , answer ? ${answer}`);

// if (num % 2 == 0){
//     console.log('👍');
// } else {
//     console.log('👎');
// }
