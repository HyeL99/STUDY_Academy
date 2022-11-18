$(function(){
  $('#contentsBtn .day').on('click',function(){
    $('#todayPage').css('top','50px');
  });
  $('#calendar .date').on('click',function(){
    $('#todayPage').css('top','50px');
  });
  $('#todayPage .closeBtn').on('click',function(){
    $('#todayPage').css('top','100%');
  });
})