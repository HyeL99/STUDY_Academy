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
  07. 숫자 비교하기
  정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
*/

const solution07 = (num1,num2) => num1 === num2 ? 1 : -1;

console.log('07',solution07(1, 2),solution07(2, 2));

/*
  08. 분수의 덧셈
  첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/
let q08_denum1 = 9;
let q08_num1 = 2;
let q08_denum2 = 1;
let q08_num2 = 3;

const solution08 = (denum1, num1, denum2, num2) => {
    let topNum = (denum1 * num2 + denum2 * num1);
    let bottomNum = num1 * num2;
    let num = 1;
    for(let i=1; i<=bottomNum; i++){
        if(topNum % i === 0 && bottomNum % i === 0){
          num = i;
        }
    }
    return [topNum / num, bottomNum / num];
}

console.log('08',solution08(1,2,3,4));

/*
  09. 배열 두 배 만들기
  정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
*/
const solution09 = (numbers) => {
  return numbers.map(item => item*2);
}

console.log('09',solution09([1,2,3,4]));

/*
  10. 나머지 구하기
  정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
*/
const solution10 = (num1, num2) => {
  return num1 % num2;
}

console.log('10',solution10(12,5));

/*
  11. 중앙값 구하기
  중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
*/
const solution11 = (array) => {
  array = array.sort((a,b)=>a-b);
  let middle = Math.floor(array.length / 2);
  return array[middle];
}

console.log('11',solution11([9, -1, 0]));

/*
  12. 최빈값 구하기
  최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
*/
const solution12 = (array) => {
  array = array.sort((a,b)=>a-b);
  let maxNum = array[array.length-1];
  let maxLength = 0;
  let maxNumbers = [];
  for(let i=0; i<=maxNum; i++){
    let currentLength = array.filter(item => item === i).length;
    if(currentLength > maxLength ){
      maxLength = currentLength;
      maxNumbers = [i];
    } else if(currentLength === maxLength){
      maxNumbers.push(i);
      console.log(maxNumbers)
    }
  }
  return maxNumbers.length>1? -1 : maxNumbers[0];
}

console.log('12',solution12([0,0,1,2,3,4,5,5,5,6,6,6,7,5,8,9,9,9,10]));

/*
  13. 짝수는 싫어요
  정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
*/
const solution13 = (n) => {
  let array = [];
  for(let i=0; i<=n; i++){
    if( i % 2 !== 0){
      array.push(i)
    }
  }
  return array;
}

console.log('13',solution13(7));

/*
  14. 피자 나눠 먹기 (1)
  머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
*/
const solution14 = (n) => {
  return Math.ceil(n / 7)
}

console.log('14',solution14(8));

/*
  15. 피자 나눠 먹기 (2)
  머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/
const solution15 = (n) => {
  let i = 1;
  while(1){
    if((i * 6) % n === 0){
      break;
    }
    i++;
  }
  return i;
}
console.log('15',solution15(15));

/*
  16. 피자 나눠 먹기 (3)
  머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/
const solution16 = (slice, n) => {
  return Math.ceil(n / slice);
}
console.log('16',solution16(7,15));

/*
  17. 배열의 평균값
  정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
*/
const solution17 = (numbers) => {
  let answer = 0;
  numbers.map(item => {
    answer += item;
  })
  return answer / numbers.length;
}
console.log('17',solution17([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));

/*
  18. 옷가게 할인 받기
  머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
  구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
*/
const solution18 = (price) => {
  if(price >= 500000){
    return price * 0.8;
  } else if(price >= 300000){
    return price * 0.9;
  } else if(price >= 100000){
    return price * 0.95;
  } else {
    return price
  }
}
console.log('18',solution18(150000));

/*
  19. 아이스 아메리카노
  머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/
const solution19 = (money) => {
  return [Math.floor(money / 5500),money % 5500]
}
console.log('19',solution19(150000));