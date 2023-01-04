//04복사해서 사용
//Type Alias - 특정 타입에 별칭을 붙이는 용도로 사용, interface와 비슷(객체에 대한 type설정)

type PersonA = {
	//interface대신에 type
	name: string;
	age?: number;
};
const ppA: PersonA = {
	//객체 pp를 Person타입으로 선언
	name: "전지현",
	age: 20,
};

////type 으로 상속 받을때  & 연산자
type DeveloperA = PersonA & {
	skills: string[];
};

const eeA: DeveloperA = {
	name: "정우성",
	skills: ["javascript", "react"],
};

//interface로는 못하는 것을 할 수 있다
type People = PersonA[];
const people: People = [ppA, eeA];

type Color = "red" | "orange" | "yellow";
const colorA: Color = "orange";
