//interface   -클래스(객체를 생성하기 위한 템플릿) 또는 객체를 위한 타입을 지정 할 때 사용되는 문법입니다.

interface Shape {
  getArea():number;
}

//클라스Circle이 Shape 인터페이스를 구현하도록 처리
//클라스 Circle이 Shape에 있어야 되는 모든 조건을 충족
class Circle implements Shape{
  radius:number;
  constructor(radius:number){
    this.radius = radius;
  }
  getArea(){
    //return 5;
    return this.radius*this.radius*Math.PI;
  }
}

class Rectangle implements Shape{
  width:number;
  height:number;
  constructor(width:number,height:number) {
    this.width =width;
    this.height=height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2,5)

console.log(circle.radius);
console.log(rectangle.width);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});