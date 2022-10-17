/*
    1. object shorthand assignment
    - key값과  value의 변수이름이 같을 경우 생략 가능
*/

let name00 = 'David';
let age = '20';

let man00 = {
    name00: name00, // value값을 위 변수에서 받아옴. key값과  value의 변수이름이 같음.
    age: age
}
let man01 = {
    name00, age   // key값과  value의 변수이름이 같을 경우 생략 가능
}

console.log(man00,man01);

/*
    2. 구조 분해 할당 destructuring
    - 구조화된 배열 또는 객체를 Destructuring(비구조화, 파괴)하여 개별적인 변수에 할당하는 것
*/

let cat = {
    name02 : '누리',
    color02: 'gold',
    house02 : 'street',
}

// let name02 = cat.name02;
// let color02 = cat['color02'];

let {name02, color02} = cat;    // key값을 변수로 선언하고(일괄처리), 오브젝트가 할당된다.

console.log(name02, color02);

/*
    3. 2.와 동일, destructuring 배열에 적용
*/

let array = [1,2,3,4,5];
let [first, second] = array; // 배열에서 앞에 2개를 변수로 만들고 array배열을 할당한다.

console.log(first, second);

let [a,b,...rest03] = array;  //...arrayName  앞에 2개를 제외한 나머지
console.log(a,b,rest03);

let {house02,...rest02} = cat; // rest02 - object cat의 house02 key값을 제외한 나머지
console.log(house02, rest02);

/*
    4. spread 문법
*/

let dog = {
    name04 : 'Choco',
    color04 : 'brown',
    size04 : 'big',
}
let dog02 = {...dog}
let dog03 = dog;

console.log('dog02 - ',dog02);
console.log('dog03 - ',dog03);

dog02 = {...dog, character:'nice'}
dog.name04 = 'Maru';

console.log('name 수정 후 dog - ', dog)
console.log('dog02 - ',dog02);
console.log('dog03 - ',dog03);
console.log('dog == dog02 - ',dog == dog02);    //false, 기존 오브젝트와 다르게 만들어짐(얕은 복사)
console.log('dog == dog03 - ',dog == dog03);    // true,

/*
    5. 삼항연산자
    조건문(boolean값 반환) ? true실행문 : false실행문
*/
