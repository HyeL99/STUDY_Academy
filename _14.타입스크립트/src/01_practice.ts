const message:string = 'hollo world'
//문자열 말고 다른 것이 들어오면 에러(따옴표뺀 숫자)
console.log(message)

let count =0;   //:number를 생략해도 넘버타입
count +=1;
count = '문자열'; //에러
const done: boolean = false;

const numbers:number[] = [1,2,3];
const msg:string[] =  ['hello', 'world'];

msg.push[1];  //에러-문자열 배열이라서

let underTheSea:string | undefined = undefined;
// | -or 문자열일 수도 언디파인일 수도있다

let happyNewyear:number | null=null;
//특정값이 null일 수도 숫자일 수도

let color:'red' | 'ornage' | 'yellow' = 'red'
//문자열중 red,ornage, yellow 중 하나만을 넣을 수 있는데 레드
console.log('color는?',color)
color="red";  //코드힌트가 3개로 뜸
color="green" //에러 뜸 

