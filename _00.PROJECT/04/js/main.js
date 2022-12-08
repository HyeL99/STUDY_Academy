const $intro = document.querySelector('#intro');
const $introBox = document.querySelector('#intro box');

$introBox.addEventListener('click',function(){
  $intro.classList.addClass('loadingComplete')
})