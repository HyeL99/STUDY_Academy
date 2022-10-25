/*
    math 수학
*/
console.log(Math.PI);
console.log('-5의 절대값 ? ',Math.abs(-5)); //양수화

console.log('소수점 이하를 버림 ? ', Math.floor(13.534));   // floor : 바닥
console.log('소수점 이하를 올림 ? ', Math.ceil(13.534));    // ceil : 천장

console.log('반올림 124.2', Math.round(124.2))
console.log('반올림 124.6', Math.round(124.6))
console.log('정수만 반환(소수점 이하 버림)', Math.trunc(124.5))
console.log('정수만 반환(소수점 이하 버림)', Math.trunc(-124.5))

console.log('최댓값 반환', Math.max(17,5,3,7,56,13,53));
console.log('최솟값 반환', Math.min(17,5,3,7,56,13,53));

console.log('625의제곱근 반환', Math.sqrt(625));

console.log('=====================================');

console.log('랜덤값 반환(0-1) : ', Math.random());   // 0-1 사이의 값을 랜덤으로 반환
console.log('랜덤값 반환(1-10) : ', Math.trunc(Math.random()*10 + 1));   // 1-10 사이의 값을 랜덤으로 반환
// 랜덤값에 10을 곱하면 0.xxx - 9.xxx 사이의 수가 랜덤으로 나온다. +1해줌
console.log('랜덤값 반환(0-3) : ', Math.trunc(Math.random()*4)); 
