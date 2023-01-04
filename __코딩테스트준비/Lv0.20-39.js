/*
  20. 나이 출력
  머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
*/
function solution20(age) {
  return 2022 - age + 1;
}
console.log('20',solution20(40));

/*
  21. 배열 뒤집기
  정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
*/
function solution21(num_list) {
  return num_list.reverse();
}
console.log('21',solution21([1, 1, 1, 1, 1, 2]));

/*
  22. 배열 뒤집기
  정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
*/
function solution22(my_string) {
  return my_string.split("").reverse().join("");
}
console.log('22',solution22("bread"));

/*
  23. 직각삼각형 출력하기
  "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
*/

function solution23(n) {
  console.log('23')
  let str = '';
  for(let i=1; i<=n; i++){
    console.log('*'.repeat(i))
  }
}
solution23(5)

/*
  24. 짝수 홀수 개수
  정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution24(num_list) {
  let even = num_list.filter(item => item % 2 === 0).length
  return [even,num_list.length - even]
}

console.log('24',solution24([1, 2, 3, 4, 5]));

/*
  25. 문자 반복 출력하기
  문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution25(my_string, n) {
  return my_string.split('').map(item => item.repeat(n)).join('');
}

console.log('25',solution25("aswe",5));

/*
  26. 특정 문자 제거하기
  문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution26(my_string, letter) {
  // let array = my_string.split('')
  // for(let i=0; i<array.length; i++){
  //   if(array[i] === letter){
  //     array.splice(i,1);
  //     i--;
  //   }
  // }
  // return array.join('');
  return my_string.split(letter).join('')
}

console.log('26',solution26("BcBdbe",	"B"));

/*
  27. 문자 반복 출력하기
  각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
*/

function solution27(angle) {
  if(angle >180 || angle < 0){
    console.log('error')
  } else if(angle === 180){
    return 4;
  } else if(angle > 90 && angle < 180){
    return 3;
  } else if(angle === 90){
    return 2;
  } else {
    return 1;
  }
}

console.log('27',solution27(180));

/*
  28. 양꼬치
  머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
*/

function solution28(n, k) {
  return 12000 * n + 2000 * Math.ceil(k - 0.1 * n)
}

console.log('28',solution28(64,6));

/*
  29. 짝수의 합
  정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution29(n) {
  let answer = 0;
    for(i=2; i<=n; i+=2){
        answer += i
    }
    return answer;
}

console.log('29',solution29(10));

/*
  30. 배열 자르기
  정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution30(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1)
}

console.log('30',solution30([1, 3, 5], 1, 2));

/*
  31. 외계행성의 나이
  우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
*/

function solution31(age) {
  let strArray = 'abcdefghij';
  let ageArray = String(age).split('');
  let rst = ageArray.map(item => strArray[item]);
  return rst.join('');
}

console.log('31',solution31(100));

/*
  32. 진료 순서 정하기
  외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution32(emergency) {
  let array = [...emergency].sort((a, b) => b - a);
  emergency.forEach(item =>array.indexOf(item) + 1)
  return emergency.map(item =>array.indexOf(item) + 1)
}

console.log('32',solution32([30, 10, 23, 6, 100]));

/*
  33. 순서쌍의 개수
  순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
*/

function solution33(n) {
  let array = [];
  for(let i=1; i<=n; i++){
    if(n % i === 0){
      array.push(`(${n / i},${i})`)
    }
  }
  return array.length;
}

console.log('33',solution33(30));

/*
  34. 개미 군단
  개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
*/

function solution34(hp) {
  let ant5 = Math.floor(hp / 5);
  let ant3 =  Math.floor(hp % 5 / 3);
  let ant1 = hp % 5 % 3
  return ant5 + ant3 + ant1;
}

console.log('34',solution34(999));

/*
  35. 모스부호 (1)
  머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
  모스부호는 다음과 같습니다.
  morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
  }
*/

function solution35(letter) {
  const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
  }

  letter.split(' ');
  
  return ant5 + ant3 + ant1;
}

console.log('35',solution35(999));