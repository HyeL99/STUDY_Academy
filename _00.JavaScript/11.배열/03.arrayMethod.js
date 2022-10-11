// 배열의 함수들 정리
const fruits = ['🍇','🍎','🍋'];

// 특정 오브젝트가 배열인지 아닌지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray([])); // 빈 배열 전달 - true
console.log(Array.isArray({})); // 빈 오브젝트 전달 - false

// 특정 아이템의 위치를 찾을때(인덱스)  arrayName.indexOf(itemName)
console.log(fruits.indexOf('🍇'));  // 0
console.log(fruits.indexOf('🍋'));  // 2
console.log(fruits.indexOf('🍑'));  // -1 (없음 의미)

// 배열 안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍋'));  // true
console.log(fruits.includes('🍑'));  // false

console.log('========== 아이템 추가 ===============');

// 아이템 추가 - 제일 뒤에 추가
fruits.push('🍒','🍓'); //여러개 추가도 가능, 배열을 업데이트
console.log("fruits.push('🍒','🍓') - ",fruits);

// 아이템 추가 - 제일 앞에 추가
fruits.unshift('🍉');
console.log("fruits.unshift('🍉') - ",fruits);
console.log('아이템 개수는?',fruits.length);

console.log('========== 아이템 제거 ===============');

// 아이템 제거 - 제일 뒤 아이템 삭제
fruits.pop();
console.log('fruits.pop() - ',fruits);

// 아이템 제거 - 제일 앞 아이템 삭제
fruits.shift();
console.log('fruits.shift() - ',fruits);

console.log('========== 아이템 추가/제거 ===============');
// 아이템 제거 - 중간 아이템 추가 또는 삭제
fruits.splice(2,1); //인덱스번호 - 삭제아이템수 순서, 2번(3번쩨) 인덱스 아이템부터 1개 삭제
console.log('fruits.splice(2,1) - ',fruits,' - arrayName.splice(시작인덱스,삭제될 갯수))');
//삭제될 갯수가 생략될 경우 뒤에 있는 모든 아이템이 삭제됨.

fruits.splice(1,1,'🍓','🍈'); //arrayName.splice(시작인덱스,삭제될 갯수,그자리에 추가될 아이템(복수가능))
console.log('삭제하고 그 자리에 추가', fruits);

console.log('========== 숫자로 보기 ===============');

const num = [0,1,2,3,4,5,6,7,8,9];
console.log('num = [0,1,2,3,4,5,6,7,8,9]')
num.splice(7);
console.log('num.splice(7) - ',num);
num.splice(4,2);
console.log('num.splice(4,2) - ',num);
num.splice(3,1,'😀','😉');
console.log("num.splice(3,1,'😀','😉') - ",num);

console.log('========== 아이템 추가/제거 - splice ===============');

//기존 배열에서 새로운 배열을 잘라 가져옴
let newF = fruits.slice(0,2);   //.slice(시작인덱스,두번째 인덱스(해당 인덱스 이전까지 가져옴));
console.log(fruits);
console.log('fruits.slice(0,2) - ',newF);

newF = fruits.slice(-2);    //뒤에서 2개 아이템 잘라 가져옴
console.log('fruits.slice(-2) - ',newF);

console.log('========== array control ===============');

// 여러개의 배열을 붙임
const array01 = [1,2,3];
const array02 = [100,200,300];
const array03 = array01.concat(array02);
console.log('array01', array01);
console.log('array02', array02);
console.log('array03', array03);

//순서를 거꾸로
const array04 = array03.reverse();
console.log('array03.reverse() - ',array04);

//특정한 값으로 배열 아이템 채우기
array04.fill("😍");
console.log('array04.fill("😍") - ',array04);

array04.fill("👻",1,4); // array.fill('채울 아이템',시작인덱스,종료인덱스(해당 인덱스 이전에 끝남))
console.log('array04.fill("👻",1,4) - ',array04);

array04.fill("🐾",3); // 끝나는 인덱스를 쓰지 않으면 끝까지 모두 채움
console.log('array04.fill("🐾",3) - ',array04);

console.log('======================== .join() =============================');

const array05 = ['봄','여름','가을','겨울','2022','바다'];
console.log('array05 - ',array05);

let text = array05.join(); //배열을 하나의 문자열로 합침, 자동으로 배열 사이에 ','를 삽입
console.log('array05.join() - ',text);

text = array05.join(' | '); //배열 사이에 ' | '를 삽입
console.log('array05.join(" | ") - ',text);

console.log('========================== 중첩배열 ===========================');
// 중첩된 배열, 하나의 배열로 쫙 펴기
const array06 = [['🥞','🍨','🍭','🍰','🎂'],[1,2,3,4,5]];
console.log('중첩된 배열 array06 - ',array06);

console.log('array06.flat(0) - ',array06.flat(0));
console.log('array06.flat(1) - ',array06.flat(1));
//1단계까지 풀어줌, 배열 안에 배열이 또 있을 경우에는 숫자를 넣어준다.

console.log('중첩된 배열 풀어줬니? ',array06);

// array07 = array06.flat(0); // console.log('array07 - ',array07); - no
array07 = array06.flat();
console.log('array07 - ',array07); // console.log('array07 - ',array07); - yes

console.log('========================== 중첩배열 ===========================');
array07.fill(0);
console.log(array07);




