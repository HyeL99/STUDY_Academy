let time = 0;
let timerOffSetting = true;
const startTimer = () => {
  console.log('timer 실행')
  const timer = setInterval(function(){
    if(timerOffSetting === true) {
      clearInterval(timer);
      console.log('clearTimer!');
      stopTimer();
    } else {
      time++;
    
      let hour = Math.floor(time / (60*60));
      let min = Math.floor((time % (60*60)) / 60);
      let sec = Math.floor((time % 60));

      if(hour<10){
        hour = `0${hour}`;
      }
      if(min<10){
        min = `0${min}`;
      }
      if(sec<10){
        sec = `0${sec}`;
      }
      
      let timerText = `${hour}:${min}:${sec}`;
      console.log(timerText);
      $('#timerNumber').html(timerText);
      console.log('timer 작동');
    }
  },1000);
}

let checkStartTime = '';
let checkEndTime = '';

//타이머 클릭이벤트 넣는 함수
const setTimer = (fullDate) => {
  $('.player').on('click',function(){
    if(fullDate == getDateObject(new Date()).fullDate){
      console.log('클릭실행');
      if($(this).hasClass('on')){ //타이머 종료, 값 반환 필요
        console.log('on 실행');
        $(this).removeClass('on');
        $(this).addClass('off');
        timerOffSetting = true;
      }else{  //타이머 시작 필요
        console.log('off 실행');
        timerOffSetting = false;
        $(this).removeClass('off');
        checkStartTime = `${fullDate} ${getThisTime()}`
        startTimer();
        $(this).addClass('on');
      }
    }
  })
}
//현재시각 반환하는 함수
const getThisTime = () => {
  let today = new Date();
  let hour = today.getHours(); // 시
  let min = today.getMinutes();  // 분
  let sec = today.getSeconds();  // 초
  if(hour<10){
    hour = `0${hour}`;
  }
  if(min<10){
    min = `0${min}`;
  }
  if(sec<10){
    sec = `0${sec}`;
  }
  let thisTime = `${hour}:${min}:${sec}`;
  return thisTime;
}
//타이머 멈추고 실행하는 함수
const stopTimer = () => {
  let fullDate = getDateObject(new Date()).fullDate;
  checkEndTime = `${fullDate} ${getThisTime()}`
  let selectedTopic = $('#selectedTopicPlace').text();
  let selectedDayFullDate = $('#timeTablePage .timeSection .date').text();
  selectedDayFullDate = selectedDayFullDate.substring(0, 10);
  selectedDayFullDate = selectedDayFullDate.replaceAll('.','-');
  console.log(selectedDayFullDate)

  dataList.date.map(item => {
    if(item.date == fullDate){
      let list = item.timeTable;
      list = [...list,{topic:selectedTopic,startTime:checkStartTime,endTime:checkEndTime}];
      item.timeTable = list;
      checkStartTime = '';
      checkEndTime = '';
      time=0;
      $('#timerNumber').text(`00:00:00`);
      console.log(dataList);
    }
  })
  if(checkStartTime !== ''){
    let list = dataList.date;
    list = [...list,{date:fullDate,plan:[],record:{},timeTable:[{topic:selectedTopic,startTime:checkStartTime,endTime:checkEndTime}]}];
    dataList.date = list;
    checkStartTime = '';
    checkEndTime = '';
    time=0;
    $('#timerNumber').text(`00:00:00`);
    console.log(dataList);
  }
  loadTimePage(selectedDayFullDate);
}

let topicItemList = [];

const deleteTopicItem = () => {
  $('.deleteTopicItem').on('click',function(){
    topicItemList = [...dataList.topic]
    console.log(topicItemList)
    console.log('삭제실행')
    let itemName = $(this).siblings('span').text();
    let deleteCheck = confirm(`TOPIC ${itemName}을 정말 삭제하시겠습니까?`);

    if(deleteCheck == true){
      console.log(itemName);
      topicItemList.map((item,index)=>{
        if(item == itemName){
          topicItemList.splice(index,1);
        }
      })
      console.log('dataList.topic',dataList.topic)
      loadTopicList(topicItemList);
      deleteCheck = false;
    }
    /* json에서 목록 지워야함 */
  });
}

$(function(){
  $('#contentsBtn .timeTable').on('click',function(){
    let today = new Date();
    console.log('.timeTable today',getDateObject(today).fullDate)
    loadTimePage(getDateObject(today).fullDate);
    $('#timeTablePage').css('top','50px');
  });

  $('#timerBtn').on('click',function(){
    let today = new Date();
    console.log('#timerBtn today',getDateObject(today).fullDate)
    loadTimePage(getDateObject(today).fullDate);
    $('#timeTablePage').css('top','50px');
  });

  $('#timeTablePage .closeBtn').on('click',function(){
    let selectedDate = $('.todaySection .top p').text();
    selectedDate =  selectedDate.substring(0, 10);
    selectedDate =  selectedDate.replaceAll('.','-');
    
    $('#timeTablePage').css('top','100%');
    renderCalendar(new Date());
    getSelectedDayList(selectedDate);
  });

  $('#todayTimeTableArticle').on('click',function(){
     let selectedDate = $('.todaySection .top p').text();
     selectedDate =  selectedDate.substring(0, 10);
     selectedDate =  selectedDate.replaceAll('.','-');

     loadTimePage(selectedDate);
    $('#timeTablePage').css('top','50px');
  });
  /*================== TOPIC 입력 관련 이벤트 ================== */
  let topicTitle = '';

  $('#topicTitle').on('change',function(e){
    topicTitle = e.target.value;
  });

  $('#editTopicPopup form').on('submit',function(e){
    e.preventDefault();
    if(topicTitle !== ''){
      let list = dataList.topic;
      list  = [...list,topicTitle];
      console.log('dataList.topic',dataList.topic)
      $('#editTopicPopup form')[0].reset();
      topicTitle = '';
      return false;
    } else {
      alert('TOPIC을 입력해주세요.')
      return false;
    }
  });
  
  $('#editTopicPopup .popupSubmit').on('click',function(){
    let selectedDate = $('#timeTablePage .timeSection .date').text();
    selectedDate =  selectedDate.substring(0, 10);
    selectedDate =  selectedDate.replaceAll('.','-');
    console.log(selectedDate);

    dataList.topic = topicItemList;
    loadTimePage(selectedDate);
    $('#editTopicPopup').css('top','100vh');
  });

  $('#editTopicPopup .popupCancel').on('click',function(){
    topicItemList = dataList.topic;
    loadTopicList(topicItemList);
    $('#editTopicPopup').css('top','100vh');
  });

  $('#editTopicBtn').on('click',function(){
    topicItemList = dataList.topic;
    $('#editTopicPopup').css('top','0');
    console.log(dataList.topic)
    loadTopicList(dataList.topic);
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

  let selectedValue = '';
  let timeStart = '';
  let timeEnd = '';

  $('.selectBoxWrap label').on('click',function(){
    let listHtml = '';
    dataList.topic.map(item => {
      listHtml += `
        <li class="selectItem">${item}</li>
      `;
    });
    $('#editTimelinePopup form .selectBoxWrap .selectList').html(listHtml);
    $('.selectItem').off();
    $('.selectItem').on('click',function(){
      selectedValue = $(this).text();
      $('#selectTopic').attr('value',selectedValue);
      $('.selectList').slideUp(100);
    });
    $('.selectList').slideToggle(100);
  });

  $('#editTimelineBtn').on('click',function(){
    $('#editTimelinePopup').css('top','0vh');
  })

  $('#editTimelinePopup .popupSubmit').on('click',function(){
    let startH = $('#startTime').attr('data-timepicki-tim');
    let startM = $('#startTime').attr('data-timepicki-mini');
    let endH = $('#endTime').attr('data-timepicki-tim');
    let endM = $('#endTime').attr('data-timepicki-mini');

    let selectedDate = $('#timeTablePage .timeSection .date').text();
    selectedDate =  selectedDate.substring(0, 10);
    selectedDate =  selectedDate.replaceAll('.','-');

    if(selectedValue == ''){
      alert('TOPIC을 선택해주세요.');
    }else if(startH < endH || startH == endH && startM < endM){

      timeStart = `${selectedDate} ${startH}:${startM}:00`;
      timeEnd = `${selectedDate} ${endH}:${endM}:00`;

      let object = {topic:selectedValue,startTime:timeStart,endTime:timeEnd};

      let unChange = true;

      for(let item of dataList.date){
        if(item.date == selectedDate){
          let array = item.timeTable;
          array = [...array,object];
          item.timeTable = array;
          unChange = false;
        }
      }
      if(unChange){
        let list = {date:selectedDate, plan:[],record:{},timeTable:[object]};
        let data = dataList.date;
        data = [...data,list];
        dataList.date = data;
        unChange = false;
      }
      loadTimePage(selectedDate);
      selectedValue = '';
      timeStart = '';
      timeEnd = '';
      $('#selectTopic').attr('value','');
      $('.timePicki').val('');

      $('#editTimelinePopup').css('top','100vh');

    } else {
      alert('시간 설정을 다시 해주세요.')
    }
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
