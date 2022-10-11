//문자열 타입
let string = '안녕하세요'; //문자열 선언
string = 'hello!' //문자열 대입 값은 따옴표 안에 집어넣어야 한다. 벱틱(``)사용가능
console.log('문자열', string);

string:"'따옴표가 보이게?'";
console.log('문자열', string);

//특수문자를 출력하는 법
string="'따옴표가 보이게?'";
console.log('문자열', string); //따옴표를 줄력하고 싵으렴 안쪽에
string = "'똑같은 홑따옴표 쓸래'"
console.log('문자열', string);
string = '줄바꿈 되도록 \n줄바꿈\t탭 \\백슬래시 두번'
console.log('문자열', string);

/*
    = 템플릿 리터럴
        내장된 표현식을 허용하는 문자열 방법
        따옴표 대신 벡틱 이용, ${placeholder} 로 표현식을 감싼다.
*/
let id = 'Rainy';
//기존방식
let greetings = '안녕하세요 ' + id + '님😊\n즐거운 하루 보내세요!!';
console.log(greetings);
// ES6 방식
greetings = `안녕! ${id}님!(╹ڡ╹ )\n만나서 반가워!!`
console.log(greetings);

console.log(`1 + 1 = ${1 + 1}`);