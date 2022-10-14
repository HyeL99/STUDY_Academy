// XMLHttpRequest() - 외부데이터를 불러들이는 객체
const xhr = new XMLHttpRequest();

xhr.open('get','data.html',true);  // 데이터 요청 준비
xhr.send();  // 데이터 요청 전송

xhr.onload = function(){
    if(xhr.status == 200){   //서버의 응답이 정상이라면 Http status code = 200 (xhr.status=200)
        //가져온 데이터를 #content에 넣어준다.
        document.getElementById('content').innerHTML = xhr.responseText;
    }
}
