/*
    증감연산자 Increment & Decrement Operator
*/

let a = 0;
console.log(a);

a++;        // a = a + 1;
console.log(a)

a--;        // a = a - 1;
console.log(a)

/*
    주의!
    a++ 필요한 연산을 먼저 하고, 그 뒤 값을 증가시킴
*/
let b = 0;
let c = b++;    // b를 c에 대입하고 b값 1 증가
console.log('c = ?',c);
console.log('b = ?',b);

b = 0;
c = ++b;    // b값이 1 증가한 뒤 b를 c에 대입
console.log('c = ?',c);
console.log('b = ?',b);


