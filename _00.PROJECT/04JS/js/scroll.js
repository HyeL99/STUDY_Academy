let scrollPage = 0;
let maxScroll = $('.home').prop('scrollHeight') -  $('.home').prop('clientHeight')

$('.home').on('wheel',function(e){
  e.preventDefault();

  if($('.home').is(':animated')) return;

  let wheel = e.originalEvent.deltaY;
  const winH = $(window).height();

  if(wheel > 0){  console.log('down')
    let currentPosition = $('.home').scrollTop();
    let nextPosition = '';
    if(currentPosition > winH*4){
      nextPosition = currentPosition + winH + $('#projectHeader').innerHeight();
    } else {
      nextPosition = currentPosition + winH;
    }
    $('.home').animate({scrollTop: nextPosition});
  } else {  console.log('up')
    let currentPosition = $('.home').scrollTop();
    if(currentPosition < maxScroll && currentPosition > maxScroll - $('.home').prop('clientHeight') - 10){
      nextPosition = currentPosition - winH - $('#projectHeader').innerHeight();
    } else {
      nextPosition = currentPosition - winH;
    }
    console.log(currentPosition, nextPosition, maxScroll-winH)
    $('.home').animate({scrollTop: nextPosition});
  }
})

$('.planetIcon').on('click',function(){
  const winH = $(window).height();
  page = Number($(this).attr('data-page')) + 1;
  
  $('.home').animate({scrollTop:winH * page})
});

$('#openMenu button').on('click',function(){
  const winH = $(window).height();
  page = Number($(this).attr('data-page'))-1;
  $('#openMenu').removeClass('openMenu');
  $('#moonMenu').removeClass('openMenu');
  if(page>=6){
    $('.home').animate({scrollTop:winH * page + $('#projectHeader').innerHeight()})
  } else {
    $('.home').animate({scrollTop:winH * page})
  }
  
})
