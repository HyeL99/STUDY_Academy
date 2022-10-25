// XMLHttpRequest() - 외부데이터를 불러들이는 객체
const xhr = new XMLHttpRequest();

xhr.open('get','data.json',true);  // 데이터 요청 준비
xhr.send();  // 데이터 요청 전송

xhr.onload = function(){
    if(xhr.status == 200){   //서버의 응답이 정상이라면 Http status code = 200 (xhr.status=200)
        let resObj = JSON.parse(xhr.responseText);
        // JSON.parse - json의 문자열을 자바스크립트 객체로 변환

        let newContent = ``;
        for(let item of resObj.events) {
            newContent += `
            <div class="event">
                <img src="${item.map}" alt="${item.imgAlt}" class="">
                <p class="">
                    <strong>${item.location}</strong><br>
                    ${item.date}
                </p>
            </div>
            `;
        }
        document.getElementById('content').innerHTML = newContent;
    }
    console.log(resObj);
}
    
