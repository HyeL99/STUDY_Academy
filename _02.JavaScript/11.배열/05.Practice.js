/*
    연습

    1. 배열 안의 특정 아이템을 교체하여 새로운 배열 생성 (사과 -> 딸기)
    2. 배열 안에 특정 아이템이 몇개 있는지 알아오기
    3. 배열 2개 중 겹치는 아이템 만으로 새로운 배열
*/

// 1. 배열 안의 특정 아이템을 교체하여 새로운 배열 생성 (사과 -> 바나나)
const fruits = ['🍒','🍋','🍎','🍉'];

const rst01 = replace(fruits,'🍎','🍌');
console.log(rst01);

function replace(array, a,b){
    let replaced = Array.from(array);
    for(let i=0; i<replaced.length; i++){
        if(replaced[i] == a) {
            replaced[i] = b;
        };
    }
    console.log(replaced);
    return replaced;
}


// 2. 배열 안에 특정 아이템이 몇개 있는지 알아오기
const foods = ['🥪','🥩','🥫','🧀','🥩','🍙','🍜','🧀','🧈','🧇','🌭','🌮','🥩','🍚','🍤','🍠','🧀'];
console.log(countItem(foods,'🧀'));

function countItem(array,item){
    let counter = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] == item) {
            counter++;
        };
    }
    return counter;
}

// 3. 배열 2개 중 겹치는 아이템 만으로 새로운 배열
// [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]
// rst - [2,4,6,8,10]

const array01 = [1,2,3,4,5,6,7,8,9,10];
const array02 = [2,4,6,8,10,12,14,16,18,20];

console.log(match(array01,array02));

function match(a,b){
    let rst = [];
    for(let i=0; i<array01.length; i++){
        if(array02.includes(array01[i])){
            rst.push(array01[i]);
        }
    }
    return rst;
}