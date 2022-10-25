/*
    일급객체(first-class Object)
    일급함수(first-class Function)
    - 일반 객체처럼 모든 연산이 가능
    - 함수의 매개변수로 전달

    콜백함수 Callback Function
    나중에 호출되는 함수, 보통 함수의 매개변수로 호출된다.
    // func : 콜백함수 (나중에 호출하는 함수) - 외부로부터 주어지는 함수
    // 함수를 바로 호출해서 반환된 값이 전달되는 것이 아니라 나중에 필요한 순간에 호출  
*/

const add = (a,b) => a+b;
const multiply = (a,b) => a*b;

function calc(a,b,func){
    let rst = func(a,b);
    console.log(`함수 calc 결과 : `,rst)
}
calc(1,2,add);
calc(1,2,multiply);