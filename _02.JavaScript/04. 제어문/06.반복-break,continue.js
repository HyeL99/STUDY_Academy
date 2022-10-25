/*
    반복문 제어 명령어
    break       // 반복문 종료
    continue    // 컨티뉴 하위 명령어를 무시하고 다음 반복루프 실행
*/

for(let i=0; i<20; i++){
    console.log(i);
    if(i == 10) {
        console.log('i=10이므로 종료')
        break;
    }
}

for(let i=0; i<20; i++){
    console.log(i);
    if(i == 10) {
        continue;
        console.log('i=10이므로 종료')
        break;
    }
}