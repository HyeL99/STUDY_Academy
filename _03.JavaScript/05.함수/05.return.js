/*
    memory
*/

function add(a,b){
    return a+b;
}
function subt(a,b){ //return을 명시하지 않으면 undefined 반환
    a+b;
}

const sum = add;    //add가 가리키는 메모리 주소를 sum에 복사
console.log('add(1,2) 함수 실행 ? ',add(1,2));
console.log('sum(1,2) 함수 실행 ? ',sum(1,2));
console.log('sum() 함수 실행 ? ',sum());  //NaN
console.log('subt(1,2) 함수 실행 ? ',subt(1,2))  //undefined


function write(ttt) {       //특정한 일을 수행하거나 변환하지 않는 함수는 return 생략
    console.log('글자가 나올까 ? ',ttt);
}
write('hello');

function print(num){
    if(num < 0){    //조건에 맞으면 리턴으로 함수를 종료
        return; // return undefined의 축약;
    }
    console.log(num);
}
print(12);
print(-5);
print(5);