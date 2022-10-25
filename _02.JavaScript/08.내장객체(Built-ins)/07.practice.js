//문자열을 한줄씩 출력
const text = 'Hello World :)'
for(let i=0; i<text.length; i++){
    console.log(text[i]);
}

//1초에 한번씩 시각 출력(날짜포함) setInterval(시간차 반복)
setInterval(function(){
    const now = new Date();
    console.log(now.toLocaleString());
},1000);