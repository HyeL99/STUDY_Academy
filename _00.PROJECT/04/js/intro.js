$('a:not(#openMobileBtn)').on('click',function(){
  let url = $(this).attr('href');

  $('#introPage .box').animate({
    opacity: 0,
    transform: 'scale(2)'
  },300,function(){
    document.location.href = url;
  })
  return false;
})

$('#openMobileBtn').on('click',function(e){
  e.preventDefault();
  window.open(this.href, '', 'width=414, height=896');  //iPhoneXR크기
  return false;
})