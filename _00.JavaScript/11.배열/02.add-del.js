const vehicle = ['🚗','🚌','🚖','🚅','🚢'];

//배열 아이템을 참조하는(선택) 방법
console.log(vehicle[0]);    // 자동차
console.log(vehicle[4]);    // 배

console.log('vehicle.length? ',vehicle.length);

console.log('========= all array item =========');
for(let i=0; i<vehicle.length; i++){
    console.log(vehicle[i]);
}

//아이템 추가, 삭제, 수정
//인덱스로 접근하는 방법은 좋지 않음. 
console.log('========= 아이템 추가, 삭제, 수정 =========');
console.log(vehicle);

vehicle[6] = '🚀';
console.log('vehicle[6] = "🚀" 추가',vehicle);   //아이템은 차례대로 들어가지 않고 빈 아이템이 들어있는 상태로 추가

vehicle[vehicle.length] = "🚁"
console.log('vehicle[vehicle.length] = "🚁" 추가',vehicle);//아이템을 배열의 마지막에 추가하고 싶을 때

vehicle[6] = "🛸";
console.log('vehicle[6] = "🛸" 수정',vehicle);

delete vehicle[3];
console.log('delete vehicle[3]',vehicle);