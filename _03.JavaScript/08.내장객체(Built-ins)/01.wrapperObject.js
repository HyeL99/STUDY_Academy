/*
    내장객체 (Built-ins Object)

    - Wrapper Object
        원시값(숫자나 문자)을 관련된 내장객체로 변환
        Number()
*/

const num = 1234;   //Number 원시타입
console.log(num);
console.log(num.toString());    // .toString() 숫자를 문자열로
//num 뒤에 .을 찍어보면 사용할 수 있는 매서드 리스트를 볼 수 있다.
// 숫자 원시타입이 Number 객체로 감싸짐

const text = "        Text        ";    //string 문자열, 원시타입
console.log(text)
console.log(text.length);               // String 객체 - 문자 갯수를 알아오는 객체
console.log(text.trim());               //여백을 없애주는 매서드
console.log(text.toLowerCase());