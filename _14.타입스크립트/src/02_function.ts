//function sum (x,y){ }  //type선언안했다고 에러

function sum(x:number,y:number):number { //젤뒤 number는 결과물의 type설정
  return x+y;  
} 
const result = sum(1 ,5);

function sumArray(numbers:number[]):number {
  return numbers.reduce((acc, current) => acc + current, 0)
}
//숫자배열을 parameter로 가져와서 총합을 구하는 함수
//reduce(acc-과거요소,현재요소) - 0부터 시작해서 number안에 있는 모든 숫자를 더해줌, 초기값 0
const total = sumArray([1,2,3,4,5])
console.log('total은?',total)

/* function retrunNothing():void {
    console.log('아무말이나!!')
  }*/
function returnNothing():string|number{
  return 8;  //숫자 문자 다 됨
}

const aa = returnNothing()
console.log(aa)