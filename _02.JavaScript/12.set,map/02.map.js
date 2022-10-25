/*
    map - data 정리 관련
    key값과 value값이 있으며, key값은 중복이 불가능하다.
    배열과 달리 순서(index)가 없으며, set과 달리 value값의 중복이 가능하다.
    오브젝트와 비슷하다.

    const map = new Map([[key01, value01],[key02,value02],...])
*/
const map01 = [['key01','🍋'],['key02','🍑']];  //중첩배열
console.log('map01? ',map01);   //array

const map02 = new Map([['key01','🍋'],['key02','🍑']]);
console.log('map02? ',map02);   //map

//사이즈 확인
console.log('map02의 아이템 갯수? ',map02.size);
//존재 유무 확인
console.log('map02의 아이템 중에 key01 키값이 있니? ',map02.has('key01'));
console.log('map02의 아이템 중에 key 키값이 있니? ',map02.has('key'));
//순회
map02.forEach((item) =>console.log(item));  //매개변수 1개 - value
map02.forEach((item,key) =>console.log(item, key)); //매개변수 2개 - value,key
map02.forEach((item,key,map) =>console.log(item, key,map)); //매개변수 3개 - value,key,map전체

console.log('only value',map02.values());
console.log('only key', map02.keys());
console.log('only key', map02.entries());

//찾기
console.log('key01의 value값은? ',map02.get('key01'));
console.log('key02의 value값은? ',map02.get('key02'));
console.log('key03의 value값은? ',map02.get('key03'));  //key03 자체가 없음, undefined 반환

//추가
map02.set('key03','🍈');
console.log('key03 추가 - ',map02);
map02.set('key04','🍉','key05','🍍');   //.set()은 앞의 2개의 값만 인식함
console.log('key04,key05 동시추가(불가능) - ',map02);

//삭제
map02.delete('key03');  //key값에 부합하는 아이템 삭제
console.log('key03 삭제',map02);

//전부삭제
map02.clear();  //key값에 부합하는 아이템 삭제
console.log('전부삭제',map02);