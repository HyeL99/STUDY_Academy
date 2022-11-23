/*
    겍체 Object - 복합데이터(그룹화시킴)
        속성(property) : 객체 내의 변수, 특징
        method() : 객체의 일부로 선언된 함수, 작업명령

    만드는 법
    1. object literal (key : value, ... )
    2. new Object()     - Object 클라스를 이용//let obj = new Object;
    3. Object.create()  - Object 클라스 안의 create 함수 이용

    key - 문자, 숫자, 심볼, ...
    value - 원시값(문자, 숫자, ...), 객체(함수)
*/

let apple = {
    name: "사과",
    price : 1000,
    /*apple-color: 'red',     //특수문자를 사용할 수 없음*/
    'apple-color':'red',        //따옴표 속 특수문자는 가능
    shape : '🍎',
    display : ()=>{console.log(`${apple.name} : ${apple.shape}`)},
    3: 1004,            //key가 숫자로 시작하면 최상단으로 올라감
}

// 오브젝트, value값에 접근하기 위해
console.log(apple.shape);
console.log(apple['apple-color']);  //key값이 문자열일 경우 .생략 후 대괄호로 호출(배열의 아이템처럼)
console.log(apple['name']);
apple.display();

// apple.display            마침표 표기법 dot notation
// apple['apple-color']     대괄호 표기법 brancket notation