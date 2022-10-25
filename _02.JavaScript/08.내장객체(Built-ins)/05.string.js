/*
    문자열 String
*/

const textObj = new String('Hello World 😀');
const text = 'Hello Korea!';

console.log(textObj);
console.log(text);

console.log('text의 문자 수는(띄어쓰기 포함)? ', text.length);
// '.'을 찍으면 사용가능한 모든 프로퍼티와 메서드를 확인할 수 있다.
console.log('첫번째 문자는? ',text[0]);  // 배열처럼 인덱스를 이용해서 몇번째 문자인지 알아올 수 있다.
console.log('다섯번째 문자는? ',text[4]);

console.log('=================================');

console.log('오브젝트처럼 첫번째 문자를 알아오면? ',text.charAt(0));
console.log('l은 앞에서 몇번째 문자? ',text.indexOf('l')+1); //인덱스이므로 0부터 계산, +1해줌
console.log('o은 뒤에서 역순으로 몇번째 문자? ',text.lastIndexOf('o')); //인덱스이므로 0부터 계산, +1해줌
//없는 문자의 인덱스를 요청할 때에는 -1 반환

console.log('b가 문자열 내에 있는지 확인(boolean)?',text.includes('b'));
console.log('b가 문자열 내에 있는지 확인(boolean)?',text.includes('ko'));
console.log('b가 문자열 내에 있는지 확인(boolean)?',text.includes('Ko'));

console.log('=================================');

console.log('K로 시작(boolean)? ',text.startsWith('K'));
console.log('H로 시작(boolean)? ',text.startsWith('H'));
console.log('h로 시작(boolean)? ',text.startsWith('h'));

console.log('!로 끝(boolean)? ',text.endsWith('!'));

console.log('대문자로 변경', text.toUpperCase());
console.log('소문자로 변경', text.toLowerCase());

console.log('=================================');

console.log('앞에서 문자 2개를 잘라보자 ', text.slice(2));  // llo Korea!
console.log('끝에서 문자 2개를 잘라서 가져오자', text.slice(-2));   // a!

console.log('=================================');

const space = '               space';
console.log('space: "',space,'"');
console.log('공백 잘라내기:',space.trim());

console.log('=================================');

const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

console.log('스페이스를 기준으로 문자열을 끊어 배열로 만들어줌:',longText.split(' '));
console.log('스페이스를 기준으로 문자열을 끊어 만든 배열에서 2개를 가져옴:',longText.split(' ',2));