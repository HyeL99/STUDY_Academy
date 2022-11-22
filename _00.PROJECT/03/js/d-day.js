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


  /* input 입력 이벤트 */
  let dDayTitle = '';
  let dDayDate = '';

  $('#d-dayTitle').on('change',function(e){
    dDayTitle = e.currentTarget.value;
    console.log('dDayTitle',dDayTitle);
  });
  $('#d-dayDatepicker').on('change',function(){
    dDayDate = $(this).val();
    console.log('dDayDate',dDayDate);
  });

  /* 등록,취소 이벤트 */
  $('#d-dayPopup .popupSubmit').on('click',function(){
    if(!dDayTitle || !dDayDate){
      alert('일정명과 날짜를 모두 입력해주세요')
      return;
    }
    const restDay = getRestDay(dDayDate);

    let dDayText = '';

    if(restDay > 0){
      dDayText = `D-${restDay}`
    } else if (restDay == 0) {
      dDayText = 'TODAY'
    } else {
      dDayText = `D+${-1*restDay}`
    }

    const addHtml = `
      <li id="${Math.random()*10000/100}">
        <h3>${dDayTitle}</h3>
        <span>${dDayText}</span>
        <button class="deleteD-day">휴지통</button>
      </li>
    `;

    $('.d-dayList').append(addHtml);
    /*가져온 json 배열을 수정하고 다시 업로드하는 코드 필요*/
    $('#d-dayPopup').css('top','100vh');
    $('#d-dayPopup form')[0].reset();
    
    dDayTitle='';
    dDayDate = '';
    deleteDday(); //새로 추가되는 li에 이벤트 부여 필요
  });

  $('#d-dayPopup .popupCancel').on('click',function(){
    $('#d-dayPopup form')[0].reset();
    dDayTitle='';
    dDayDate = '';
    $('#d-dayPopup').css('top','100vh');
  });

  deleteDday();
})

const getRestDay = (dDayDate) => {
  const today = new Date(getToday());
  const dDay = new Date(dDayDate);
  const restTime = dDay.getTime()-today.getTime();
  const restDay = Math.floor(restTime / (1000*60*60*24));
  return restDay;
}
const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const fullDateText = `${year}-${month}-${date}`;
  return fullDateText;
}

const deleteDday = () => {
    /* 휴지통 버튼 누르면 d-day 아이템 삭제 */
    $('#d-dayPage .deleteD-day').on('click',function(){
      const $li = $(this).parent('li');
      deleteItemId = $li.attr('id')
      console.log(deleteItemId);
      /*가져온 json 배열을 수정하고 다시 업로드하는 코드 필요*/
      $li.remove();
    });
}