/*
    매개변수(인자, 인수) Parameters

*/
function add(a,b,c){  //a, b: 매개변수
    console.log(arguments);  //arguments : 전달된 매개변수의 정보를 출력해주는 속성, 배열처럼 인식
    console.log(`arguments[0] ? ${arguments[0]}`);   //첫번째 매개변수 호출
    console.log(`arguments[1] ? ${arguments[1]}`);   //두번째 매개변수 호출
    console.log(`arguments[2] ? ${arguments[2]}`);   //세번째 매개변수 호출
    return a+b+c;
}
console.log(`add(5,6,7) ? ${add(5,6,7)}`);

function add2(a,b){
    console.log(arguments);
    console.log('add2 실행 : ',a+b);
}
add2();
add2(7,8);

// 매개변수에 기본값을 설정할 수 있다. default parameters
function add3(a = 1, b = 4){
    console.log(arguments)
    console.log('add3 실행 : ',a+b);
}
add3();
add3(5,9);

//매개변수의 개수를 유동적으로 사용
function sum(...nnn){
    console.log(nnn);
    let result = 0;
    for(let num of nnn){
        result += num;
    }
    console.log(result);
}
sum(1,2,3,4,5,6,7,8,9);