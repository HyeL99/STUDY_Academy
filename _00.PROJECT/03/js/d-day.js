/*
  datepicker https://its-easy.tistory.com/12
*/
$(function(){
  /* 큰 서브페이지 열고 닫기 */
  $('#contentsBtn .d-day').on('click',function(){
    $('#d-dayPage').css('top','50px');
  });
  $('#d-dayPage .closeBtn').on('click',function(){
    $('#d-dayPage').css('top','100%');
  });

  /* 추가하기 버튼 클릭시 입력 팝업 띄우기 */
  $('#addD-dayItemBtn').on('click',function(){
    $('#d-dayPopup').css('top','0');
  });

  /* datepicker 설정 */
  $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    showOtherMonths: true,
    showMonthAfterYear:true,
    changeYear: true,
    changeMonth: true,
    yearSuffix: "년",
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    yearRange:"2002:2042"
  });
  
  $("#d-dayDatepicker").datepicker()

  $('#datepicker').datepicker('setDate', 'today');
});