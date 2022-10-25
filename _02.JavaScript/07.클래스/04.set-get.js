/*
    접근자 프로퍼티 Accessor Property - 변수처럼 보이지만 실제로는 함수
    함수 앞에 get을 붙임
*/
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        //this.fullName = `${this.lastName}${this.firstName}`;
        //업데이트 불가로 인해 사용 불가능
    }
    get fullName(){
        return `${this.lastName}${this.firstName}`;
    }
    set fullName(value){
        console.log('set 추가 : ',value)
    }
}

const member = new Student('철수', '김');
//console.log(member.fullName());
console.log(member.fullName);

member.firstName = '영희';
//console.log(member.fullName);   //업데이트 안됨
console.log(member.fullName);

member.fullName = '김바둑';     //set 호출
console.log(member.fullName);
/*
    함수 형식으로 호출
    -> property처럼 하고싶음
    -> 
*/