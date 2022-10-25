/*
    함수표현식 (함수 이름이 없는 함수, 변수를 함수처럼 사용, 함수도 객체이기 때문에 가능)
        const 변수명 = function(){
            실행구문
        }
        변수명(Parameters);     //함수호출

    화살표함수
        const 변수명 = (매개변수) =>{실행구문}
*/

//함수표현식
let add = function(a,b){
    return a+b;
}
console.log(`add함수 실행 : ${add(2,7)}`)

//화살표함수
let add2 = (a,b) => {return a+b}
console.log(`add2함수 실행 : ${add2(3,8)}`)

//화살표함수 (실행구 1개)   return 생략
let add3 = (a,b) => a+b;
console.log(`add3함수 실행 : ${add3(4,9)}`)