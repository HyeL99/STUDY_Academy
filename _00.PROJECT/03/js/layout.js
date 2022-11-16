const $dayArticle = document.querySelector('#contentsBtn .day');
const $dDayArticle = document.querySelector('#contentsBtn .d-day');
const $timeTableArticle = document.querySelector('#contentsBtn .timeTable');
const $todoListArticle = document.querySelector('#contentsBtn .todoList');
const $timerBtn = document.querySelector('#timerBtn')
const $date = document.querySelectorAll('#calendar .date');

const $enterPage = document.querySelector('aside');

const $todayPage = document.querySelector('#todayPage');
const $dDayPage = document.querySelector('#d-dayPage');
const $timeTablePage = document.querySelector('#timeTablePage');
const $todoListPage = document.querySelector('#todoListPage');

for(let $item of $date) {
  $item.addEventListener('click',function(){
    $todayPage.style.top = '50px';
    $todayPage.querySelector('.closeBtn').addEventListener('click',function(){
      $todayPage.style.top = '100%';
    });
  })
}
$dayArticle.addEventListener('click',function(){ console.log('$dayArticle')
  $todayPage.style.top = '50px';
  $todayPage.querySelector('.closeBtn').addEventListener('click',function(){
    $todayPage.style.top = '100%';
  });
});
$dDayArticle.addEventListener('click',function(){ console.log('$dDayArticle')

  $dDayPage.style.top = '50px';
  $dDayPage.querySelector('.closeBtn').addEventListener('click',function(){
    $dDayPage.style.top = '100%';
  });
});
$todoListArticle.addEventListener('click',function(){ console.log('$todoListArticle')

  $todoListPage.style.top = '50px';
  $todoListPage.querySelector('.closeBtn').addEventListener('click',function(){
    $todoListPage.style.top = '100%';
  });
});
$timeTableArticle.addEventListener('click',function(){ console.log('$timeTableArticle')
  $timeTablePage.style.top = '50px';
  $timeTablePage.querySelector('.closeBtn').addEventListener('click',function(){
    $timeTablePage.style.top = '100%';
  });
});

$timerBtn.addEventListener('click',function(){ console.log('$timeTableArticle')
  $timeTablePage.style.top = '50px';
  $timeTablePage.querySelector('.closeBtn').addEventListener('click',function(){
    $timeTablePage.style.top = '100%';
  });
});