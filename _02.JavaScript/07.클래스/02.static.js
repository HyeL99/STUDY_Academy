/*
    static, 정적 프로퍼티, 메서드
    재사용성을 높이는 방법
    클래스에 한번만 만들어지고 각 인스턴스에는 들어있지 않음.
*/

class Fruit{   //함수명 대문자로 시작
    static taste = 'JMT';   // 고정된 프로퍼티 만듦
    constructor(name, color, emoji){
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }
    //클래스 레벨의 메서드
    static maden(){
        return new Fruit('banana', 'yellow', '🍌');
    }

    // 인스턴스 레벨의 메서드
    display = () => {       //this 필요X
        console.log(`${this.name} : ${this.emoji}`)
    }
}

console.log(Fruit.taste);

const aaa = Fruit.maden();
console.log(aaa);

let apple = new Fruit('사과', 'red', '🍎');
console.log(apple);
console.log(apple.taste);

let greenApple = new Fruit('청사과', 'green', '🍏');
let cherry = new Fruit('체리', 'red', '🍒');
let peach = new Fruit('복숭아', 'pink', '🍑');
let grape = new Fruit('포도', 'purple', '🍇');
let orange = new Fruit('오렌지', 'orange', '🍊');

console.log(greenApple);
console.log(cherry);
console.log(peach);
console.log(grape);
console.log(orange);