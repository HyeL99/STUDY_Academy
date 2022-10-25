/*
    삼항 조건 연산자 (Ternary Operator)
    조건문 ? true실행문 : false실행문;
*/

let fruit = 'orange';

if(fruit == 'apple'){
    console.log('🍎');
} else {
    console.log('🍉');
}

fruit = 'apple';
fruit == 'apple' ? console.log('🍎') : console.log('🍉');

// ---------------------------------------------------------------

fruit = 'melon';
let emoji = fruit == 'apple' ? '🍎' : '🍦';
console.log(emoji)
emoji = fruit == 'melon' ? '🍈' : '🍦';
console.log(emoji)