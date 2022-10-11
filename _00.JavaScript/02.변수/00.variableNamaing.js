let a = 20220902;
console.log(a);

let b = '수박';
console.log(b);

//한줄 주석처리
/*  여러줄 주석처리
let c = [1,2,3,4];
console.log(c);
*/

/*
    // 변수 정리
    변수 : 데이터를 담는 공간
    1. 원시(단일데이터, primitive) -- number(숫자), string(문자), boolean(참/거짓)
    2. 객체(복합데이터, object) -- 함수, 배열 ... 원시를 제외한 모든 것
*/
/*
    변수 이름을 만들 때 규칙
    1. 영어(대, 소문자 구분), 숫자, 특수문자 (_, $)
    2. 구체적인 의미가 있는 단어 ex.a(X) name(O)
    3. 변수 이름 문법
    3.1. 카멜케이스 camelCase(첫 단어를 제외한 모든 단어의 첫 문자 대문자로)
    3.2. 파스칼 표기법 PascalCase(모든 단어 첫 문자 대문자로)
    3.3. 언더바 표기법 under_bar(언더바"_"로 두 단어를 이어줌)
    4. 이미 정해진 let, function 등의 예약어 X
        - 예약어 리스트
        - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar#%ED%82%A4%EC%9B%8C%EB%93%9C
    5. 숫자로 시작 X

*/

let c;  //변수 선언
c = '바나나'; // = : 대입연산자 (변수 c에 문자 '딸기'를 대입한다.)
console.log(c);

let d = '우유';  //선언과 대입을 동시에
console.log(c+d);