/*
    == 배열을 사용하는 함수들 ==
    일급함수(first-class function)  - 일반 객체(변수)처럼 사용

    고차함수(higher-order function) - 다른 함수를 인자로 받거나 반환.
                                    - 절차형이 아니라 함수들끼리 엮어놓음

    .forEach() / .find() / .findIndex() / .some() / .every()
    .filter() / .map() / .flatMap() / .sort()
*/

console.log('==================== .forEach() ====================');

const fruits = ['🍏','🍉','🍌','🍑'];
/*
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
*/
/*
fruits.forEach(function(item, index){
    console.log(`${index +1}번째 값 : ${item}`);
});
*/
fruits.forEach((item, index) =>  console.log(`${index +1}번째 값 : ${item}`));
/*
    고차함수 .forEach(콜백함수) 사용
        콜백함수 - function(배열의 요소, 요소의 순서(index), 배열전체){}
        배열을 돌면서 (콜백함수)가 작동, 배열의 아이마다 한번씩 돌아감
        콜백함수로 화살표 함수 사용 가능
        콜백함수의 명령어가 한줄일 때에는 중괄호도 생략 가능하다.
*/

console.log('==================== .find() .findIndex() ====================');

const item01 = {name : '🍔', price : 4500};
const item02 = {name : '🍩', price : 2000};
const item03 = {name : '🍰', price : 7000};
const item04 = {name : '🥩', price : 10000};
const products = [item01, item02, item03, item02];

//도넛 찾기 - .find (제일 처음 조건에 부합한 아이템 반환)
/*
let found = products.find(function(item){
    return item.name == '🍕';
})
*/
// 실행구가 1개일 때에는 {중괄호}가 생략 가능, 이때는 return도 같이 생략
let found = products.find((item) => item.name == '🍩');
found != undefined? console.log('도넛 찾음!!', found):console.log('도넛 없음!!', found);

found = products.findIndex((item) => item.name == '🍩');
found != undefined? console.log('도넛의 인덱스값 ?', found):console.log('도넛 없음!!', found);

/*
    .find() - 제일 처음 조건에 부합한 아이템 반환
    .findIndex() - 제일 처음 조건에 부합한 아이템의 인덱스를 반환
*/
console.log('==================== .some() .every() ====================');

let result = products.some((item) => item.name == '🍩');
console.log('도넛이 한개라도 있니 ? ', result);

result = products.every((item) => item.name == '🍩');
console.log('아이템이 전부 도넛이니 ? ', result);
/*
    .some() - 하나라도 있으면 true(boolean값), 화살표함수로
    .every() - 배열의 특정 아이템(item.name)이 해당 아이템이면 true(boolean값)
*/

console.log('==================== .filter() ====================');

result = products.filter((item) => item.name == '🍩');
console.log('도넛이 포함된 모든 아이템 ', result);
// .filter() - 조건에 맞는 아이템을 새로운 배열로 생성

console.log('==================== .map() ====================');

const nums = [1,2,3,4,5];
result = nums.map((item)=> item*10);
console.log('map 이용',result);
// .map() - 배열의 아이템들을 각각 다른 아이템으로 매핑, 새로운 배열 생성

result = nums.map(function(item){
    if(item % 2 == 0){
        return item*2;
    } else {
        return item;
    }
});
console.log('조건 추가 매핑',result);

result = nums.map((item) => [1,2])
console.log('각 아이템에 새로운 아이템 내용 대입',result);

console.log('==================== .flatMap() ====================');
result = nums.flatMap((item)=>[1,2]);
console.log('각 아이템에 새로운 아이템 내용 대입',result);
// .flatMap() - 중첩된 배열을 낱개로 만들어서 새로운 배열로 만듦

console.log('==================== 응용 ====================');
result = ['sunday','morning'].map((text) => text.split(''));
console.log('문자열 배열을 map',result);
//[ 's', 'u', 'n', 'd', 'a', 'y' ],[ 'm', 'o', 'r','n', 'i', 'n','g' ]]

result = ['blue','ocean'].flatMap((text) => text.split(''));
console.log('문자열 배열을 flatMap',result);
// 알파벳 하나씩 배열값으로

console.log('==================== .sort() ====================');

const texts = ['zoo','hi','abc'];
texts.sort();
console.log('sort를 호출', texts); // 알파벳 순서대로 오름차순 정렬
/*
    .sort() - 배열의 아이템들을 정렬
        문자열 형태의 오름차순(1,2,3,...,a,b,c,...)으로 아이템 정렬
        기존의 배열을 변경(새로 만드는 것이 아님);
*/

const numbers = [15,2,1,8,14,3,15];
numbers.sort();
console.log('numbers에 sort 호출', numbers);
//문자열 형태로 앞자리만 인식하여 숫자의 크기를 따질 수 없음 (10이 5보다 먼저 나옴);

numbers.sort( (a,b) => a-b );
console.log('numbers에 (a,b) => a-b 이용해서 sort 호출', numbers);
// (a,b) => a-b  - 순서대로 a,b에 넣고 양수/음수(true/false)의 값으로 위치를 이동시켜러 올림차순으로 만듦
// 내부적인 알고리즘이 작동
