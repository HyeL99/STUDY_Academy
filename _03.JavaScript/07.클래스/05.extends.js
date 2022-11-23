/*
    확장 Extends
*/

/*
class Tiger {
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('냠냠');
    }
    sleep(){
        console.log('zzz...');
    }
}
class Puddy {
    constructor(color){
        this.color = color;
    };
    eat(){
        console.log('냠냠');
    };
    sleep(){
        console.log('zzz...');
    };
    play(){
        console.log("🐾🐾⚽")
    };
}
*/

class Animal {
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('냠냠');
    }
    sleep(){
        console.log('zzz...');
    }
}

// class Tiger는 class Aniaml을 상속받는다.
class Tiger extends Animal{}
class Puppy extends Animal{
    constructor(color, ownerName){  //원래 있던 color도 받아와야함
        super(color)                //상속하고 있는 class Aniaml을 가르킴
        this.ownerName = ownerName;
    }
    get play(){                         //class Animal에 없는 것 추가
        console.log("🐾🐾⚽")
    }

    // overiding - 자식클래스에서 부모 클래스에 있는 함수를 고침(덮음)
    eat(){
        //super.eat() //부모클래스의 함수 받아옴, 안써도 에러는 미발생
        console.log('츄릅');
    }
}

const tiger = new Tiger('yellow&black');    //tiger 객체 생성

console.log(tiger)
tiger.sleep();
tiger.eat();

const puppy = new Puppy('brown', 'HyeL');
console.log(puppy);
puppy.sleep();
puppy.eat();
puppy.play; //접근자 property를 사용했기 때문에 ()없이 호출