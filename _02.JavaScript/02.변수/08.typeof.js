let vari;
console.log(`vari? ${vari},    typeof vari? ${typeof vari}`);   // undefined -자바스크립트는 할당된 값에 따라 타입 결정

vari = 1004;
console.log(`vari? ${vari},         typeof vari? ${typeof vari}`);   // number(숫자열)

vari = '1004';  //따옴표 안에 문자나 숫자를 넣으면 문자열로 인식한다.
console.log(`vari? ${vari},         typeof vari? ${typeof vari}`);   // string(문자열)

vari = function(){};
console.log(`vari? ${vari}, typeof vari? ${typeof vari}`);   // function(함수)

/*
    c언어 같은 경우에는 
        int 변수명 = '';
        선언할 때 타입을 정의해야하며, 타입 변경이 불가능하다.
    자바스크립트의 경우에는
        let 변수명 = '';
        동적이기 때문에 타입을 정의할 필요가 없으며, 대입 값에 따라 타입 변경이 가능하다.
*/