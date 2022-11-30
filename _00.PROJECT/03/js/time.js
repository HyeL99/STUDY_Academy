let time = 0;
let timerOff = true;
const startTimer = () => {
  const timer = setInterval(function(){
    let hour = Math.floor(time / (60*60*1000));
    let min = Math.floor((time % (60*60*1000)) / (60 * 1000));
    let sec = Math.floor((time % (60*1000)) / 1000);
    if(hour<10){
      hour = `0${hour}`;
    }
    if(min<10){
      min = `0${min}`;
    }
    if(sec<10){
      sec = `0${sec}`;
    }
    $('#timerNumber').text(`${hour}:${min}:${sec}`);
    time++;
    if(timerOff){
      clearInterval(timer);
    }
  },1000);
}

let checkStartTime = '';
let checkEndTime = '';
const setTimer = () => {
  $('.player').on('click',function(){
    if($(this).hasClass('on')){ //타이머 종료, 값 반환 필요
      $(this).removeClass('on');
      $(this).addClass('off');
      timerOff = true;
      let selectedTopic = $('#selectedTopicPlace').text();


    }else{  //타이머 시작 필요
      $(this).removeClass('off');
      $(this).addClass('on');
      timerOff = false;
      startTimer();
      let today = new Date();
      let hours = today.getHours(); // 시
      let minutes = today.getMinutes();  // 분
      let seconds = today.getSeconds();  // 초
    }
  })
}





$(function(){
  $('#contentsBtn .timeTable').on('click',function(){
    $('#timeTablePage').css('top','50px');
  });
  $('#timerBtn').on('click',function(){
    let today = new Date();
    openTimePage(getDateObject(today).fullDate);
    $('#timeTablePage').css('top','50px');
  });
  $('#timeTablePage .closeBtn').on('click',function(){
    $('#timeTablePage').css('top','100%');
  });

  $('#todayTimeTableArticle').on('click',function(){
     let selectedDate = $('.todaySection .top p').text();
     selectedDate =  selectedDate.substring(0, 10);
     selectedDate =  selectedDate.replaceAll('.','-');
     openTimePage(selectedDate);
    $('#timeTablePage').css('top','50px');

  });
  /*================== TOPIC 입력 관련 이벤트 ================== */
  let topicTitle = '';

  $('#topicTitle').on('change',function(e){
    topicTitle = e.target.value;
  });
  $('#addTopic').on('click',function(){
    if(topicTitle !== ''){
      topicHtml = `<li>${topicTitle}<button class="deleteTopicItem">삭제</button></li>`;
      $('#popupTopicList').append(topicHtml);
      $('#editTopicPopup form')[0].reset();
      topicTitle = '';
      deleteTopicItem();
      return false;
    } else {
      alert('TOPIC을 입력해주세요.')
      return false;
    }
    
  });
  $('#editTopicPopup .popupSubmit').on('click',function(){
    $('#editTopicPopup').css('top','100vh');
  });
  $('#editTopicPopup .popupCancel').on('click',function(){
    $('#editTopicPopup').css('top','100vh');
  });
  $('#editTopicBtn').on('click',function(){
    $('#editTopicPopup').css('top','0');
  });
  deleteTopicItem();


  /*================== TIMELINE 입력 관련 이벤트 ================== */
  $('.timePicki').timepicki({
    increase_direction: 'up',
    max_hour_value:24,
    show_meridian:false,
    step_size_hours:1,
    step_size_minutes:5,
    overflow_minutes:true,
    start_time: ["09", "30", "AM"],
    disable_keyboard_mobile: false,
    custom_classes:"timePickiCSS"
  });
  
  $('.selectList').slideUp();

  $('.selectBoxWrap label').on('click',function(){
    $('.selectList').slideToggle(100);
  });

  let selectedValue = '';
  let timeStart = '';
  let timeEnd = '';

  $('.selectItem').on('click',function(){
    selectedValue = $(this).text();
    $('#selectTopic').attr('value',selectedValue);
    $('.selectList').slideUp(100);
  });

  $('#editTimelineBtn').on('click',function(){
    $('#editTimelinePopup').css('top','0vh');
  })
  $('#editTimelinePopup .popupSubmit').on('click',function(){
    selectedValue = '';
    timeStart = '';
    timeEnd = '';
    $('#selectTopic').attr('value','');
    $('.timePicki').val('');
    $('#editTimelinePopup').css('top','100vh');
  });
  $('#editTimelinePopup .popupCancel').on('click',function(){
    selectedValue = '';
    timeStart = '';
    timeEnd = '';
    $('#selectTopic').attr('value','');
    $('.timePicki').val('');
    $('#editTimelinePopup').css('top','100vh');
  });

  /*================== TIMER 관련 이벤트 ================== */
  let currentTopic = '코딩';
});

const deleteTopicItem = () => {
  $('.deleteTopicItem').on('click',function(){
    $(this).parent('li').remove();
    /* json에서 목록 지워야함 */
  })
}
const deleteItem = (e) => {
  console.log(e.target);
  $this = e.target;
  $($this).parent('li').remove();
}