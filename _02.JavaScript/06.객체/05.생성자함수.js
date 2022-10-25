/*
    생성자 함수 Construction Function
    객체를 만드는 역할을 하는 함수
*/
/* 비슷한 객체가 반복😥
let greenApple = {
    name: "청사과",
    color: 'green',
    emoji : '🍏',
    display : ()=>{console.log(`${this.name} : ${this.emoji}`)},
}
let banana = {
    name: "바나나",
    color:'yello',        //따옴표 속 특수문자는 가능
    emoji : '🍌',
    display : ()=>{console.log(`${this.name} : ${this.emoji}`)},
}
let peach = {
    name: "복숭아",
    color:'pink',        //따옴표 속 특수문자는 가능
    emoji : '🍑',
    display : ()=>{console.log(`${this.name} : ${this.emoji}`)},
}
*/

// 생성자 함수 템플릿
function Fruit(name, color, emoji){   //함수명 대문자로 시작
    this.name = name;
    this.color = color;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name} : ${this.emoji}`)
    }
    return this; //생략가능
}

let greenApple = new Fruit('청사과', 'green', '🍏');
console.log(greenApple);
let cherry = new Fruit('체리', 'red', '🍒');    //항상 new를 붙여서 실행, 정해진 템플릿을 이용해서 원하는 데이터만 전달
console.log(cherry);
console.log(cherry.emoji);  //일반 객체처럼 사용
let peach = new Fruit('복숭아', 'pink', '🍑');
console.log(peach);
let grape = new Fruit('포도', 'purple', '🍇');
console.log(grape);

