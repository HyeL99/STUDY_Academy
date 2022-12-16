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
  #moonMenu 열고 닫는 이벤트
=====================================*/
$('#moonMenu').on('click',function(){
  $(this).toggleClass('openMenu');
  $('#openMenu').toggleClass('openMenu');
});

/*=====================================
  #sideMenuM 열고 닫는 이벤트
=====================================*/
$('#openSideMenuM').on('click',function(){
  $('#openSideMenuM').toggleClass('open');
  $('#sideMenuM').toggleClass('open');
  $('#menuBack').toggleClass('open');
  if($('#openSideMenuM').hasClass('open')){
    $('#openSideMenuM').html('CLOSE')
  } else {
    $('#openSideMenuM').html('MENU')
  }
});
$('#sideMenuM a').on('click',function(){
  $('#openSideMenuM').removeClass('open');
  $('#sideMenuM').removeClass('open');
  $('#menuBack').removeClass('open');
});

/*=====================================
  위로 올라가는 이벤트
=====================================*/
$('#mobileHome h1').on('click',function(){
  $('#mobileHome').scrollTop(0)
})