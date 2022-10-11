/*
    함수 Function
    특정한 일을 수행하는 코드의 집합
    가독성, 재사용가능, 유지보수성

    함수 만드는 방법
    1. 선언적 함수 (일반)
        function 함수명(Parameters){
            실행구문
        }
        함수명(Parameters);       //위에서 정의한 함수를 호출

    2. 함수표현식 (함수 이름이 없는 함수, 변수를 함수처럼 사용, 함수도 객체이기 때문에 가능)
        const 변수명 = function(){
            실행구문
        }
        변수명(Parameters);     //함수호출
    
    3. 즉시 실행 함수 (재호출 불가)
        - 프런트엔드쪽에서 즉각적으로 실행할 때 사용, 많이 사용하지도 않고 권장하지도 않음.

        .addEventListener('click',function(){실행구문}) //따로 함수를 호출할 수 없음
        (function (){실행문})();

    ++ 함수명은 수행하는 일을 잘 나타낼 수 있는 이름
    ++ 매개변수(인자) 역시 의미있는 이름
*/

// 1. 선언적 함수
function add(a,b){
    return a+b;
}
console.log('add(3,7) ? ',add(3,7));


// 2. 함수표현식
const subt = function(a,b){
    return a-b;
}
console.log('subt(3,7) ? ',subt(3,7));

// 3. 즉시 실행 함수
(function (){
    console.log('🍦');
})();