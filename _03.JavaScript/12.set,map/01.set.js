/*
    set - 정보의 집합
    배열과 달리 순서(index)가 없으며, 아이템 중복이 불가능하다.
    key값이 없고 value값만 존재
*/
const set01 = new Set(['월','화','수']);    //set 생성
console.log(set01);
console.log('set의 아이템 갯수 확인',set01.size);
console.log('set의 아이템 존재 확인', set01.has('월'));
console.log('set의 아이템 존재 확인', set01.has(6));

set01.forEach((item) => console.log('forEach() 사용 - ',item));

//순회
for(let value of set01.values()){
    console.log('for.. of 사용 - ',value);
}

//추가
set01.add('목');
console.log('set01.add("") - ',set01);
set01.add('목');
console.log('set01.add("") 한번 더 - ',set01);
// 아이템 중복 불가, 이미 있는 아이템을 한번 더 넣어도 set 내에 아이템 추가 불가

//삭제
set01.delete('화');
console.log('set 내 특정 아이템 삭제 - ',set01);

set01.clear();
console.log('set 내 아이템 전체삭제 - ',set01);

// 오브젝트
const obj01 = {name : '🍔', price : 4500};
const obj02 = {name : '🍩', price : 2000};

const obj04 = {name : '🥩', price : 10000};

const objs = new Set([obj01, obj02]);
console.log('objs? ',objs);

obj01.price = 3000;
console.log('obj01 price 인하',obj01);
console.log('obj01 price 인하',objs);
//Shallow copy - 바뀐 값이 set에도 연결되어있음

const obj03 = {name : '🍰', price : 7000};
objs.add(obj03);
console.log('obj03 추가',objs);

console.log('entries???', objs.entries())