/*=====================================
  #sourceCard 열고 닫는 이벤트
=====================================*/
$('#handleSourceBtn').on('click',function(){
  $('#sourceCard').toggleClass('open');
});
$('#closeSourceBtn').on('click',function(){
  $('#sourceCard').removeClass('open');
});

/*=====================================
  Menu 열고 닫는 이벤트
=====================================*/
$('#moonMenu').on('click',function(){
  $(this).toggleClass('openMenu');
  $('#openMenu').toggleClass('openMenu');
});