/*
    for.. of / spread
    Iteration Protocol(Interface) - 반복/순회할 수 있는 함수(문법)
    Iterable    - 반복이 가능한 객체
                - Iteration Protocol을 준수한 객체
                - Iterator
*/

const array01 = ['하늘','산','태평양'];
for(let item of array01) {
    console.log('item of array01',item);
}
for(let item of array01.values()) {
    console.log('item of array01.values()',item);
}
/*
for.. of
for(변수(배열의 아이템, 무조건 변수의 형태) of 배열){실행문..}
배열은 순회가 가능, for.. of 사용 가능
*/

const obj = { fav01: '하늘', fav02: '산'};
/*
!! TypeError: obj is not iterable - 객체는 반복이 가능한 객체가 아님.
for(let item of obj) {
    console.log(item);
}
*/

const itrt = array01.values();
console.log(itrt);
console.log('첫번째 itrt.next()',itrt.next());   //다음값을 반환
//{ value: '하늘', done: false }
//done - 끝났는지 안끝났는지 (boolean값)
console.log('두번째 itrt.next()',itrt.next());
console.log('세번째 itrt.next().value',itrt.next().value);
console.log('네번째 itrt.next()',itrt.next());
console.log('한바퀴 돌렸니?',itrt.next().done);

/*
    while 이용
*/
const itrt02 = array01.values();
console.log(itrt02);

while(true){
    const item = itrt02.next();
    if(item.done) break;
    console.log(item.value);
}

const array03 = ['월','화','수','목','금'];
for(let item of array03.entries()) {
    console.log('entries??',item);
}
// .entries() - index,value 나열
