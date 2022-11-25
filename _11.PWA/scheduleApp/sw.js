// var CACHE_NAME = 'pwa-offline-v1';  //Cache Storage에 저장될 이름
var CACHE_NAME = 'pwa-offline-v2';

// var FILES_TO_CACHE = [  //캐싱할 웹자원(이미지, css, html 등...) 목록을 배열로 설정
//   '/',
//   'assets/img/logoClock.png'
// ];

var FILES_TO_CACHE = [
  "index.html",
  "css/main.css",
  "assets/img/diaryPen.png",
  "assets/img/dot.png",
  "assets/img/headerPoint.png",
  "assets/img/iconCalendar.svg",
  "assets/img/iconClock.svg",
  "assets/img/iconClockCheck.svg",
  "assets/img/line.png",
  "assets/img/logoClock-bright.png",
  "assets/img/logoClock.png",
  "assets/img/mainIcon.png",
  "assets/img/pause.png",
  "assets/img/play.png",
  "assets/img/title.png",
  "js/addDBtem.js",
  "js/d-day.js",
  "js/layout.js",
  "js/loadCalendar.js",
  "js/main.js",
  "js/time.js",
  "js/today.js",
  "js/todo.js",
  "js/음력.js",
  "images/Icon.png",
  "images/Icon_x128.png",
  "images/Icon_x48.png",
  "images/Icon_x512.png",
  "images/screenshot1.png",
  "images/screenshot2.png",
  "images/screenshot3.png",
  "images/screenshot4.png",
  "images/screenshot5.png"
]
 
//서비스워커 설치 (웹자원 캐싱)
self.addEventListener("install",function(event){
  event.waitUntil(  //install 이벤트가 끝날 때까지
    caches.open(CACHE_NAME)
    // CACHE_NAME 변수 이름으로 캐시 스토리지에 캐시 생성 -> pwa파일 나옴
    // caches - 캐시스토리지에 접근할 수 있는 예약어
    .then(function(cache){ // 캐싱이 성공했을 때(위의 결과물 캐시파일)
      return cache.addAll(FILES_TO_CACHE);  //위에서 나온 pwa파일에 웹자원 추가
    })
    .catch(function(error){
      return console.log("에러발생\n",error);
    })
  );
});

//서비스워커 설치 후 네트워크 요청이 있을 때는 캐시로 돌려줌(캐시된 자원으로)
self.addEventListener('fetch',function(event){
  console.log('serviceWorker fetch');
  if (event.request.mode !== 'navigate') { // page navigation 제외
    return;
  }
  
  event.respondWith( // 결과에 대한 응답을 알려주는 API
    caches.match(event.request)  // caches.match() - 네트워크에 요청에 해당하는 캐싱을 반환
    .then(function(response){
      return response || fetch(event.request);
      // 캐시에 없을 때는  fetch API (네트워크로 가서 가져옴)
    })
    .catch(function(error){
      return console.log('에러발생\n',error);
    })
  );
});

//서비스워커 활성화 및 업데이트
self.addEventListener("activate",function(event){
  var newCacheList = ['pwa-offline-v2'];  //바뀐내용

  event.waitUntil(  //내부 동작이 끝날때까지 기다려줌
    caches.keys()  //객체 안의 모든 키들, 스토리지 안의 모든 목록을 확인
    .then(function(cacheList){  //위의 목록을 가져옴
      return Promise.all(  //여러 비동기 작업을 동시에 처리하여 결과를 얻고자 할때
        cacheList.map(function(cacheName){
          //새로운 서비스워커에서 사용할 캐시 이외의 것들은 모두 삭제
          if(newCacheList.indexOf(cacheName) === -1){
            return caches.delete(cacheName);
            /*
            //새로운 newCacheList의 아이템이 기존 캐시에 없을 경우 -1반환
            ------------------------------
             배열.indexOf('찾을문자)
              - 찾을 문자가 배열 내에 몇번째에 있는지 반환
              - 배열에 찾을 문자가 없으면 -1 반환
            */
          }
        })
      )
    })
    .catch(function(error){
      return console.log('에러발생\n',error);
    })
  );
});