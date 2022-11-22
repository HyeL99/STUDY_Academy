let scheduleTitle = '';
let scheduleContent = '';
let scheduleDate = '';
  
let diaryImageUrl = '';
let diaryContent = '';

let selectedDay = '';

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

  /*================== 일정 입력 관련 이벤트 ================== */
  $("#scheduleDatepicker").datepicker()
  $('#scheduleDatepicker').datepicker('setDate', 'today');

  /* input 입력 이벤트 */
  scheduleTitle = '';
  scheduleContent = '';
  scheduleDate = '';

  $('#editScheduleBtn').on('click',function(){
    $('#editSchedulePopup').css('top','0');
  });

  $('#scheduleTitle').on('change',function(e){
    scheduleTitle = e.currentTarget.value;
    console.log('scheduleTitle',scheduleTitle);
  });
  $('#scheduleContent').on('change',function(e){
    scheduleContent = e.currentTarget.value;
    console.log('scheduleContent',scheduleContent);
  });
  $('#scheduleDatepicker').on('change',function(){
    scheduleDate = $(this).val();
    console.log('scheduleDate',scheduleDate);
  });

  

  $('#editSchedulePopup .popupSubmit').on('click',function(){
    /* ======= 받아온 값 넣는 이벤트 필요 ======*/

    $('#editSchedulePopup form')[0].reset();
    scheduleTitle = '';
    scheduleContent = '';
    scheduleDate = '';
    $('#editSchedulePopup').css('top','100vh');
  });
  $('#editSchedulePopup .popupCancel').on('click',function(){
    $('#editSchedulePopup form')[0].reset();
    scheduleTitle = '';
    scheduleContent = '';
    scheduleDate = '';
    $('#editSchedulePopup').css('top','100vh');
  });

  /*================== 일기 입력 관련 이벤트 ================== */
  diaryImageUrl = '';
  diaryContent = '';

  $("#diaryDatepicker").datepicker()
  $('#diaryDatepicker').datepicker('setDate', 'today');

  $('#editDiaryBtn').on('click',function(){
    $('#editDiaryPopup').css('top','0');
    $('#preview').attr('src','');
    $('#preview').attr('alt','No Image');
  });
  $("#diaryFile").on('change',function(){
      readURL(this);
      $('#imgArea').attr('alt','첨부이미지');
  });

  $('#diaryContent').on('change',function(e){
    diaryContent = e.currentTarget.value;
    console.log('diaryContent',diaryContent);
  });

  $('#editDiaryPopup .popupSubmit').on('click',function(){
    /* ======= 받아온 값 넣는 이벤트 필요 ======*/
    $('#editSchedulePopup form')[0].reset();
    scheduleTitle = '';
    scheduleContent = '';
    scheduleDate = '';
    $('.uploadName').attr('value','');
    setImage('');
    $('#editDiaryPopup').css('top','100vh');
  });

  $('#editDiaryPopup .popupCancel').on('click',function(){
    $('#editSchedulePopup form')[0].reset();
    scheduleTitle = '';
    scheduleContent = '';
    scheduleDate = '';
    $('.uploadName').attr('value','');
    setImage('');
    $('#editDiaryPopup').css('top','100vh');
  });
});

const readURL = (input) => {
  let filename ='';
  if(input.files && input.files[0]){
    let reader = new FileReader();
    reader.readAsDataURL(input.files[0]);

    if(window.FileReader){  // modern browser
      filename = input.files[0].name;
    } 
    else {  // old IE
      filename = input.val().split('/').pop().split('\\').pop();  // 파일명만 추출
    }
    $('.uploadName').attr('value',filename);

    reader.onload = function(e){
      setImage(e.target.result)
    }
  }
}
const setImage = (link) => {
  diaryImageUrl = link == '' ? '' : link;
  console.log('diaryImageUrl',diaryImageUrl);

  let img = `
    <img
      id='preview'
      src="${link == '' ? '' : link}"
      alt="${link == '' ? 'No Image' : '첨부이미지'}"
    />
  `;
  $('#imgViewer').html(img);
}