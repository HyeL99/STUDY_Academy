const $dayArticle = document.querySelector('#contentsBtn .day');
const $dDayArticle = document.querySelector('#contentsBtn .d-day');
const $timeTableArticle = document.querySelector('#contentsBtn .timeTable');
const $todoListArticle = document.querySelector('#contentsBtn .todoList');

const $subContainer = document.querySelector('#subContainer');
const $enterPage = document.querySelector('aside');

const $todayPage = document.querySelector('#todayPage');
const $dDayPage = document.querySelector('#d-dayPage');
const $timeTablePage = document.querySelector('#timeTablePage');
const $todoListPage = document.querySelector('#todoListPage');


$dayArticle.addEventListener('click',function(){
  $subContainer.style.display = 'block';
  $todayPage.style.display = 'block';
  $todayPage.querySelector('.closeBtn').addEventListener('click',function(){
    $subContainer.style.display = 'none';
    $todayPage.style.display = 'none';
  });
});

$dDayArticle.addEventListener('click',function(){
  $subContainer.style.display = 'block';
  $dDayPage.style.display = 'block';
  $dDayPage.querySelector('.closeBtn').addEventListener('click',function(){
    $subContainer.style.display = 'none';
    $dDayPage.style.display = 'none';
  });
});

$timeTableArticle.addEventListener('click',function(){
  $subContainer.style.display = 'block';
  $timeTablePage.style.display = 'block';
  $timeTablePage.querySelector('.closeBtn').addEventListener('click',function(){
    $subContainer.style.display = 'none';
    $timeTablePage.style.display = 'none';
  });
});
$todoListArticle.addEventListener('click',function(){
  $subContainer.style.display = 'block';
  $todoListPage.style.display = 'block';
  $todoListPage.querySelector('.closeBtn').addEventListener('click',function(){
    $subContainer.style.display = 'none';
    $todoListPage.style.display = 'none';
  });
});