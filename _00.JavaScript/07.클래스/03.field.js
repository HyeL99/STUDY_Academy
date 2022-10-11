/*
    비공개로 사용, 접근제어자 - 캡슐화(외부에서 수정 불가)
    Private / Public(기본)
*/
class Fruit{
    #name;
    #tyle = 'fruit';    // ★★★        내부에서 움직이는 변수

    constructor(name, color, emoji){
        this.#name = name;
        this.color = color;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.#name} : ${this.emoji}`)
    }
}

let greenApple = new Fruit('청사과', 'green', '🍏');
// let cherry = new Fruit('체리', 'red', '🍒');
// let peach = new Fruit('복숭아', 'pink', '🍑');
// let grape = new Fruit('포도', 'purple', '🍇');
// let orange = new Fruit('오렌지', 'orange', '🍊');

console.log(greenApple);
// console.log(cherry);
// console.log(peach);
// console.log(grape);
// console.log(orange);

greenApple.display();

// console.log(greenApple.name);        //에러발생
console.log(greenApple.type)    //undefined - 가져올 수 없음