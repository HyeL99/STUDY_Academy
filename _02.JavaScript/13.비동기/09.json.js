/*
    JSON
    - 자바스크립트에서 사용되는 객체를 서버와 주고 받기 편한 문자열로 만든 파일
    - 오브젝트 형태의 텍스트 포맷
*/

const nuri = {
    name: 'nuri',
    age : 3,
    type : 'cat',
    eat : () => console.log('냠냠')
}
console.log('object nuri', nuri);
nuri.eat();

const json = JSON.stringify(nuri);
console.log('JSON nuri',json);
/*
    JSON.stringify()
    - json 형태의 문자열로 변환(serializing)
    - 함수는 포함되지 않음(객체의 프로퍼티만)
*/

const obj = JSON.parse(json);
console.log('object nuri',obj);