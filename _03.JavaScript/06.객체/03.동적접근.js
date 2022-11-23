
const obj = {
    name : "누리",
    age : 4,
}

/* 코딩하는 시점, 정적으로 접근이 확정 (value가 이미 정해짐) */
console.log(obj);
console.log(`obj.name ? ${obj.name}`);
console.log(`obj.age ? ${obj.age}`);    //value값을 얻을 수 있음.

//
obj.name = '나비';  //value값 수정
console.log(obj);

obj.color = 'cheese';   //ket, value 값 추가
console.log('obj에 color 키 추가 : ',obj);




/* 동적으로 속성에 접근하고 싶을 때는 대괄호 표기법 사용 */
function getValue(object, key) {
    //return object.key;     //key가 뭔지 몰라서 작동하지 않음
    return obj[key];
}
console.log(`getValue(obj, 'name') ? ${getValue(obj, 'name')}`)
console.log(`getValue(obj, 'color') ? ${getValue(obj, 'color')}`)




/* 동적으로 추가 */
function addKey(object, key, value) {
    object[key] = value;
}
addKey(obj, 'kind', 'cat');
console.log("addKey(obj, 'kind', 'cat') ? ",obj);
addKey(obj, 'character', 'cute');
console.log("addKey(obj, 'character', 'cute') ? ",obj);