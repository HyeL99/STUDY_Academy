/* 축약형 */

const x = 0;
const y = 0;


const aaa = {
    x : x,
    y : y,
};

//키 이름과 참조하고 있는 변수의 이름이 같으면 생략 가능
const bbb = {x,y};

console.log('aaa',aaa);
console.log('bbb',bbb);


function ddd(name, age){
    /*
    return {
        name : name,
        age : age,
    }
    */
    return {name, age}
}
const name = 'HyeL';
const age = 24;

console.log(ddd(name, age));
console.log(ddd('누리', 5))