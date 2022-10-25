/*
    단항연산자 Unary operator
    +(양) -(음) !(부정)
*/

let a = 123;
let bool = true;
console.log(`a = 123, +a=? ${+a}`);     // 123
console.log(`a = 123, -a=? ${-a}`);     // -123
console.log(`bool = true, !bool=? ${!bool}`);     // false
console.log(`bool = true, !!bool=? ${!!bool}`);     // true

a = -456;
bool = false;
console.log(`a = -456, +a=? ${+a}`);        // -456
console.log(`a = -456, -a=? ${-a}`);        // 456
console.log(`bool = false, !bool=? ${!bool}`);       // true
console.log(`bool = false, !!bool=? ${!!bool}`);       // false

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인 가능 (0은 없다는 의미 1은 있다는 의미)
console.log(false);
console.log(+ false);   // false는 0으로 간주
console.log(null);
console.log(+ null);    // 0
console.log('');
console.log(+ '');      //0
console.log(+ true);    // true는 0으로 간주
console.log('asdfd');
console.log(+ 'asdfd');     //NaN(Not a Number)
console.log(undefined);
console.log(+ undefined);   //NaN(Not a Number)
console.log(1)
console.log(!1) //false - !값을 boolean 타입으로 변환
console.log(!!1) //true - !!값을 boolean 타입으로 변환