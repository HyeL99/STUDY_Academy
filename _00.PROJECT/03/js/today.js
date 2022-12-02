let scheduleTitle = '';
let scheduleContent = '';
let scheduleDate = '';
  
let diaryImageUrl = '';
let diaryContent = '';
let diaryDate = '';

let selectedDay = '';

$(function(){
  $('#contentsBtn .day').on('click',function(){
    $('#todayPage').css('top','50px');
  });
  $('#todayPage .closeBtn').on('click',function(){
    $('#todayPage').css('top','100%');

    todayArray = getTimeLi(getDateObject(new Date()).fullDate,'array');

    let articleHtml = '';
    todayArray.map(item => {
      if(item.time !== '00:00:00'){
        articleHtml += `<li><span class='topic'>${item.topic}</span><span class='timer'>${item.time}</span></li>`;
      }
    });
    if(articleHtml.length == 0){
      articleHtml = `<li>아직 기록이 없습니다.</li>`;
    }
    $('#contentsBtn .timeTable .contents').html(articleHtml);

    renderCalendar(new Date());
  });

  /*================== 일정 입력 관련 이벤트 ================== */
  $("#scheduleDatepicker").datepicker()
  $('#scheduleDatepicker').datepicker('setDate', 'today');

  /* input 입력 이벤트 */
  scheduleTitle = '';
  scheduleDate = $('#scheduleDatepicker').val();

  $('#editScheduleBtn').on('click',function(){
    $('#editSchedulePopup').css('top','0');
    scheduleDate = $('.todaySection .top p').text();
    scheduleDate = scheduleDate.substring(0, 10);
    scheduleDate = scheduleDate.replaceAll('.','-');
    $('#scheduleDatepicker').val(scheduleDate);

  });

  $('#scheduleTitle').on('change',function(e){
    scheduleTitle = e.currentTarget.value;
    console.log('scheduleTitle',scheduleTitle);
  });
  $('#scheduleDatepicker').on('change',function(){
    scheduleDate = $(this).val();
    console.log('scheduleDate',scheduleDate);
  });

  $('#editSchedulePopup .popupSubmit').on('click',function(){
    console.log( scheduleDate)
    let unChange = true;
    dataList.date.map((item)=>{
      if(item.date == scheduleDate){
        let array = item.plan
        if(item.plan){
          item.plan = [...array,scheduleTitle];
        }else{
          item.plan = [scheduleTitle];
        }
        unChange = false;
      }
    })
    if(unChange){
      let array = dataList.date;
      dataList.date = [...array,{date:scheduleDate,plan:[scheduleTitle],timeTable:[],record:{}}];
    }
    openTodayPage(scheduleDate);
    $('#editSchedulePopup form')[0].reset();
    scheduleTitle = '';
    scheduleDate = '';
    $('#editSchedulePopup').css('top','100vh');
  });

  $('#editSchedulePopup .popupCancel').on('click',function(){
    $('#editSchedulePopup form')[0].reset();
    scheduleTitle = '';
    scheduleDate = '';
    $('#editSchedulePopup').css('top','100vh');
  });

  /*================== 일기 입력 관련 이벤트 ================== */
  diaryImageUrl = '';
  diaryContent = '';
  diaryDate = $('#diaryDatepicker').val();

  $("#diaryDatepicker").datepicker()
  $('#diaryDatepicker').datepicker('setDate', 'today');

  $('#editDiaryBtn').on('click',function(){
    diaryDate = $('.todaySection .top p').text();
    diaryDate = diaryDate.substring(0, 10);
    diaryDate = diaryDate.replaceAll('.','-');
    $('#diaryDatepicker').val(diaryDate);

    console.log('diaryDate',diaryDate);
    $('#editDiaryPopup').css('top','0');
    $('#preview').attr('src','');
    $('#preview').attr('alt','No Image');
    $('#diaryContent').value='';
    dataList.date.map(item=>{
      if(item.date == diaryDate && item.record){
        $('#preview').attr('src',item.record.img);
        $('#imgArea').attr('alt','첨부이미지');
        $('#diaryContent').value = item.record.story;
      }
    })
  });

  $('#diaryDatepicker').on('change',function(){
    diaryDate = $(this).val();
    console.log('diaryDate',diaryDate);
    $('#preview').attr('src','');
    $('#preview').attr('alt','No Image');
    $('#diaryContent').value='';
    dataList.date.map(item=>{
      if(item.date == diaryDate && item.record){
        $('#preview').attr('src',item.record.img);
        $('#imgArea').attr('alt','첨부이미지');
        $('#diaryContent').value = item.record.story;
      }
    })
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
    diaryDate = $('#diaryDatepicker').val();
    console.log(diaryDate,diaryContent)
    let fileURL = $('#preview').attr('src');
    let unChange = true;
    dataList.date.map((item)=>{
      if(item.date == diaryDate){
        item.record = {
          img: fileURL,
          story:diaryContent
        }
        unChange=false;
      }
    })
    
    if(unChange){
      let array = dataList.date;
      dataList.date = [...array,{date:diaryDate,record:{img: fileURL,story:diaryContent},timeTable:[],plan:[]}];
    }
    console.log(dataList.date);

    openTodayPage(diaryDate);
    $('.uploadName').attr('value','');
    setImage('');
    $('#editDiaryPopup').css('top','100vh');
  });

  $('#editDiaryPopup .popupCancel').on('click',function(){
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
  let img = `
    <img
      id='preview'
      src="${link == '' ? '' : link}"
      alt="${link == '' ? 'No Image' : '첨부이미지'}"
    />
  `;
  $('#imgViewer').html(img);
}