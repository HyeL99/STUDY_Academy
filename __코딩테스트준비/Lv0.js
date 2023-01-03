/*
  00. 중복된 숫자 개수
  정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
*/
let q00_array = [1,1,1,2,3,4,4,5,6,7,8];
let q00_n = 1;

function solution00(array, n) {
  return  array.filter(item => item === n).length;
}
console.log('00',solution00(q00_array, q00_n));

/*
  01. 머쓱이보다 키 큰 사람
  머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
*/
let q01_array = [149, 180, 192, 170];
let q01_height = 167;

function solution01(array, height) {
  return array.filter(item => item > height).length
}
console.log('01',solution01(q01_array,q01_height));

/*
  02. 두 수의 합
  정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
*/
let q02_num1 = 5;
let q02_num2 = 10;

function solution02(num1, num2) {
  var answer = num1 + num2;
  return answer;
}
console.log('02',solution02(q02_num1, q02_num2));

/*
  03. 두 수의 차
  정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.
*/
let q03_num1 = 50;
let q03_num2 = 10;

function solution03(num1, num2) {
  var answer = num1 - num2;
  return answer;
}
console.log('03',solution03(q03_num1, q03_num2));

/*
  04. 두 수의 곱
  정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.
*/
let q04_num1 = 50;
let q04_num2 = 10;

function solution04(num1, num2) {
  return num1 * num2;
}
console.log('04',solution04(q04_num1, q04_num2));

/*
  05. 몫 구하기
  정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
*/
let q05_num1 = 7;
let q05_num2 = 2;

const solution05 = (num1,num2) => Math.floor(num1/num2);

console.log('05',solution05(q05_num1, q05_num2));

/*
  06. 두 수의 나눗셈
  정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성해주세요.
*/
let q06_num1 = 7;
let q06_num2 = 2;

const solution06 = (num1,num2) => Math.floor(num1/num2)

console.log('06',solution06(q06_num1, q06_num2));


/*
  # 짝수의 합
  정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
*/
let n = 20;

function solution(n) {
  var answer = 0;
  for(i=0; i<=n; i+=2){
      answer += i
  }
  return answer;
}

console.log('01',solution(n));

/*
  # 짝수의 합
  정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
*/