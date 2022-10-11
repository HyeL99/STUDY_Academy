/*  
    반복문(Loop Statement)

    for(초기화식(변수선언문);조건문;증감식){실행문}
    for(let i=0; i<3; i++){
        실행문(3번반복 / i=0,1,2)
    }

    실행순서
    1. 변수선언문
    2. 초기식이 참이면 실행문 수행
    3. 증감식 수행
    4. 조건이 거짓이 될때까지 2,3번 반복
*/

for(let i=0; i<7; i++){
    console.log(i);
}

//중첩

for(let i=0; i<3; i++){
    for(let j=0; j<2; j++){
        console.log(`i는 ${i}   j는 ${j}`);
    }
}