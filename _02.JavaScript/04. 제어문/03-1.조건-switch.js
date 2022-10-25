/*
    switch 문
    정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우

    switch(변수명){
        case 변수값 : 실행문; break;
        ...
        default : 실행문 (위의 조건에 해당하지 않는 경우 실행)
    }
*/
let day = 5;    //1-월요일, 2-화요일, ... , 7-일요일
let dayName = '';

if(day == 1){
    dayName = '월'
}else if(day == 2){
    dayName = '화'
}else if(day == 3){
    dayName = '수'
}else if(day == 4){
    dayName = '목'
}else if(day == 5){
    dayName = '금'
}else if(day == 6){
    dayName = '토'
}else if(day == 7){
    dayName = '일'
}else {
    dayName = 'no data'
}
console.log(`day = ${day}, 오늘은 ${dayName}요일 입니다.`);


day = 3;
setDayName(day)
console.log(`day = ${day}, 오늘은 ${dayName}요일 입니다.`);

day = 10;
setDayName(day)
console.log(`day = ${day}, 오늘은 ${dayName}요일 입니다.`);


function setDayName(day){
    switch(day){
        case 1: dayName = '월'; break;
        case 2: dayName = '화'; break;
        case 3: dayName = '수'; break;
        case 4: dayName = '목'; break;
        case 5: dayName = '금'; break;
        case 6: dayName = '토'; break;
        case 7: dayName = '일'; break;
        default: dayName = 'no data';
    }
}

//조건을 여러개 사용시
 let aa = 'okay';
 let msg = '';

 switch(aa){
    case 'okay':
    case 'good':
        msg = `컨디션 굿!`;
        break;
    case 'bad':
    case 'terrible':
    case 'not good':
        msg = `컨디션 배드ㅠㅠ`
        break;
    default: msg = '컨디션 그저 그래..';
 }
 console.log(msg);