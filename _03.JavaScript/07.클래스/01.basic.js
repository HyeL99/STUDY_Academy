/*
    객체지향 프로그래밍
    1) 생성자함수 - 이전방식
    2) 클래스 - 객체를 생성할 수 있는 템플릿
*/

class Fruit{   //함수명 대문자로 시작
    constructor(name, color, emoji){
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }
    display = () => {       //this 필요X
        console.log(`${this.name} : ${this.emoji}`)
    }
}

// 생성자 함수와 사용법 동일
// 인스턴스 - 클래스를 통해서 만들어진 객체
let greenApple = new Fruit('청사과', 'green', '🍏');
// greenApple는 Fruit 클래스의 인스턴스임을 의미
let cherry = new Fruit('체리', 'red', '🍒');    //항상 new를 붙여서 실행, 정해진 템플릿을 이용해서 원하는 데이터만 전달
let peach = new Fruit('복숭아', 'pink', '🍑');
let grape = new Fruit('포도', 'purple', '🍇');
let orange = new Fruit('오렌지', 'orange', '🍊');

console.log(greenApple);
console.log(cherry);
console.log(peach);
console.log(grape);
console.log(orange);
greenApple.display();