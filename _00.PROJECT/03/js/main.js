/*
  datepicker https://its-easy.tistory.com/12
*/
$(function(){
  $('#d-dayPage .deleteD-day').on('click',function(){
    const $li = $(this).parent('li');
    deleteItemId = $li.attr('id')
    console.log(deleteItemId);
    /*가져온 json 배열을 수정하고 다시 업로드하는 코드 필요*/
    $li.remove();
  })

  // datepicker 설정
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
  })
  console.log($.datepicker);
  
  $("#d-dayDatepicker").datepicker()
  $('#addD-dayItemBtn').on('click',function(){
    //#d-dayPopup이 보여야함
  })

  $('#datepicker').datepicker('setDate', 'today');
})