$('a').on('click',function(){
  let url = $(this).attr('href');

  $('#introPage .box').animate({
    opacity: 0,
    transform: 'scale(2)'
  },300,function(){
    document.location.href = url;
  })
  return false;
})