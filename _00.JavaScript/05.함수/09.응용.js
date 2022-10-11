/*
    주어진 숫자만큼 0부터 나열하는 함수
*/
function iterate(max, action){
    for(let i=0; i<=max;i++){
        action(i);
    }
}
function printNum(num){
    console.log(num);
}

console.log('iterate(5, printNum)');
iterate(5, printNum);
console.log('iterate(10, printNum)');
iterate(10, printNum);


/*
    주어진 숫자의 개수만큼 0부터 짝수만 나열하는 함수
*/
function iterate(max, action){
    for(let i=0; i<max; i++){
        action(i);
    }
}
function printEven(num){
    console.log(num*2);
}

console.log('iterate(5, printEven)');
iterate(5, printEven);
console.log('iterate(10, printEven)');
iterate(10, printEven);