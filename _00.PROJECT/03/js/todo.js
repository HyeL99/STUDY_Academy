/*
  홈화면 버튼 $('#contentsBtn .todoList')
  투두 서브페이지 $('#todoListPage')
*/
$(function(){
  /* 큰 서브페이지 열고 닫기 */
  $('#contentsBtn .todoList').on('click',function(){
    $('#todoListPage').css('top','50px');
  });
  $('#todoListPage .closeBtn').on('click',function(){
    $('#todoListPage').css('top','100%');
  });
  /* 필터링 */
  $('.filterBtns button').on('click',function(){
    $(this).addClass('active');
    $(this).siblings('button').removeClass('active');
  })
})