//interface   -클래스(객체를 생성하기 위한 템플릿) 또는 객체를 위한 타입을 지정 할 때 사용되는 문법입니다.

interface Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}
const pp: Person = {  //객체 pp를 Person타입으로 선언
  name: '전지현',
  age: 20   //위에 age에 ? 가 없는 상태에서 이 age를 지우면 에러
  //skills: 'javascript'  // 이게 있으면 에러-위에서 지정안해줬음
};


//Developer는 Person을 상속 받음
interface Developer extends Person {
  //name: string;
  //age?: number;
  skills: string[];
}

//name,age 부분이중첩! - 상속 받을 수 있다
const ee: Developer = {
  name: '정우성',
  skills: ['javascript', 'react']
};

