// let - 재할당 가능
let a = 3;
a = 5;
console.log(a);

/*
    const - 재할당 불가능
    1) 상수
    2) 상수 변수(constant variable)
*/
const tt = 'hello';
// tt = 'goodbye';// !!TypeError: Assignment to constant variable. 오류발생
console.log(tt);

const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
}
console.log(apple);

// 변수 전체를 할당하는 것이 아니라 속성 중 하나만 재할당 하는 것은 가능
// 곧, 객체 내부의 속성값은 변경 가능
apple.name = '사과';    // 객체 속성값 변경
console.log(apple);