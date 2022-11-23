/*
    spread 연산자(...)의 사용 - Array, Set, Map 등 그룹이 된 상태의 아이템들을 하나하나 낱개로 풀어줌
    주어진 배열에서 중복 제거 - set 이용
*/
console.log('주어진 배열에서 중복 제거 ======================================');
const foods = ['🥪','🍣','🥩','🍱','🍱','🍣','🍕','🍕','🍱'];

console.log('foods? ',foods);

// spread 연산자(...)의 사용
console.log('...foods? ',...foods);

let result = new Set(foods);
console.log(result);

// spread 연산자(...)의 사용
console.log(...result);

console.log('=============== delDD() 함수 선언 및 이용');

console.log(delDD(foods));

function delDD(array){
    return [...new Set(array)]
}

/*
    주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들기
*/
console.log('주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들기 ======================================');

const set01 = new Set([1,2,3,4,5,6,7]);
const set02 = new Set([2,4,6,8,10]);

console.log('set01? ',set01);
console.log('set02? ',set02);

console.log('result? ',findInter(set01,set02));

function findInter(set1,set2){
    const result = [...set1].filter((item)=> set2.has(item));
    // console.log(result);
    return new Set(result);
}

