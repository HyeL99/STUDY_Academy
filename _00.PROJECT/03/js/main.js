//localStorage.setItem('myTimeItems',JSON.stringify(dataList));
// $(function(){
//   let dataList = JSON.parse(localStorage.getItem('myTimeItems'));
//   if(!dataList.holiday){
//     dataList = {...dataList,holiday:holidayList}
//   }
//   console.log(dataList);

// });

let datalist = [];
let prevDate = '';
let nextDate = '';
//url='https://my-json-server.typicode.com/HyeL99/CalendarDB'
//let response = fetch('db.json');
//dataList = response.json();
let dataList = JSON.parse(JSON.stringify(DB));
dataList = dataList.dataList;

const holidayList = [ //설(1.1),추석(8.15),석가탄신일(4.8)
  {
    name:'새해',
    month: '01',
    day: '01'
  },
  {
    name:'삼일절',
    month: '03',
    day: '01'
  },
  {
    name:'어린이날',
    month: '05',
    day: '05'
  },
  {
    name:'현충일',
    month: '06',
    day: '06'
  },
  {
    name:'광복절',
    month: '08',
    day: '15'
  },
  {
    name:'개천절',
    month: '10',
    day: '03'
  },
  {
    name:'한글날',
    month: '10',
    day: '09'
  },
  {
    name:'크리스마스',
    month: '12',
    day: '25'
  },
];
const lunarDays = [ // 2015-2030 구현 완
  {
    year: 2015,
    dayList:[
      {
        name:"설연휴",
        month:"02",
        day:"18"
      },
      {
        name:"설날",
        month:"02",
        day:"19"
      },
      {
        name:"설연휴",
        month:"02",
        day:"20"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"25"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"26"
      },
      {
        name:"추석",
        month:"09",
        day:"27"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"28"
      },
      {
        name:"대체공휴일",
        month:"09",
        day:"29"
      }
    ]
  },  //2015
  {
    year: 2016,
    dayList:[
      {
        name:"설연휴",
        month:"02",
        day:"07"
      },
      {
        name:"설날",
        month:"02",
        day:"08"
      },
      {
        name:"설연휴",
        month:"02",
        day:"09"
      },
      {
        name:"대체공휴일",
        month:"02",
        day:"10"
      },
      {
        name:"제20대 국회의원 선거",
        month:"04",
        day:"13"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"14"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"14"
      },
      {
        name:"추석",
        month:"09",
        day:"15"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"16"
      }
    ]
  },  //2016
  {
    year: 2017,
    dayList:[
      {
        name:"설연휴",
        month:"01",
        day:"27"
      },
      {
        name:"설날",
        month:"01",
        day:"28"
      },
      {
        name:"설연휴",
        month:"01",
        day:"29"
      },
      {
        name:"대체공휴일",
        month:"01",
        day:"30"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"03"
      },
      {
        name:"제19대 대통령 선거",
        month:"05",
        day:"09"
      },
      {
        name:"추석연휴",
        month:"10",
        day:"03"
      },
      {
        name:"추석",
        month:"10",
        day:"04"
      },
      {
        name:"추석연휴",
        month:"10",
        day:"05"
      },
      {
        name:"대체공휴일",
        month:"10",
        day:"06"
      },
    ]
  },  //2017
  {
    year: 2018,
    dayList:[
      {
        name:"설연휴",
        month:"02",
        day:"15"
      },
      {
        name:"설날",
        month:"02",
        day:"16"
      },
      {
        name:"설연휴",
        month:"02",
        day:"17"
      },
      {
        name:"대체공휴일",
        month:"05",
        day:"07"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"12"
      },
      {
        name:"제7회 전국동시지방선거",
        month:"06",
        day:"13"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"23"
      },
      {
        name:"추석",
        month:"09",
        day:"24"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"25"
      },
      {
        name:"대체공휴일",
        month:"09",
        day:"26"
      },
    ]
  },  //2018
  {
    year: 2019,
    dayList:[
      {
        name:"설연휴",
        month:"02",
        day:"04"
      },
      {
        name:"설날",
        month:"02",
        day:"05"
      },
      {
        name:"설연휴",
        month:"02",
        day:"06"
      },
      {
        name:"대체공휴일",
        month:"05",
        day:"06"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"12"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"12"
      },
      {
        name:"추석",
        month:"09",
        day:"13"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"14"
      },
    ]
  },  //2019
  {
    year: 2020,
    dayList:[
      {
        name:"설연휴",
        month:"01",
        day:"24"
      },
      {
        name:"설날",
        month:"01",
        day:"25"
      },
      {
        name:"설연휴",
        month:"01",
        day:"26"
      },
      {
        name:"대체공휴일",
        month:"01",
        day:"27"
      },
      {
        name:"제21대 국회의원 선거",
        month:"04",
        day:"15"
      },
      {
        name:"석가탄신일",
        month:"04",
        day:"30"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"30"
      },
      {
        name:"추석",
        month:"10",
        day:"01"
      },
      {
        name:"추석연휴",
        month:"10",
        day:"02"
      },
    ]
  },  //2020
  {
    year: 2021,
    dayList:[
      {
        name:"설연휴",
        month:"02",
        day:"11"
      },
      {
        name:"설날",
        month:"02",
        day:"12"
      },
      {
        name:"설연휴",
        month:"02",
        day:"13"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"19"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"20"
      },
      {
        name:"추석",
        month:"09",
        day:"21"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"22"
      },
    ]
  },  //2021
  {
    year: 2022,
    dayList:[
      {
        name:"설연휴",
        month:"01",
        day:"31"
      },
      {
        name:"설날",
        month:"02",
        day:"01"
      },
      {
        name:"설연휴",
        month:"02",
        day:"02"
      },
      {
        name:"제20대 대통령 선거",
        month:"03",
        day:"09"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"08"
      },
      {
        name:"제8회 전국동시지방선거",
        month:"06",
        day:"01"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"09"
      },
      {
        name:"추석",
        month:"09",
        day:"10"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"11"
      },
      {
        name:"대체공휴일",
        month:"09",
        day:"12"
      },
      {
        name:"대체공휴일",
        month:"10",
        day:"10"
      },
    ]
  },  //2022
  {
    year: 2023,
    dayList:[
      {
        name:"설연휴",
        month:"01",
        day:"21"
      },
      {
        name:"설날",
        month:"01",
        day:"22"
      },
      {
        name:"설연휴",
        month:"01",
        day:"23"
      },
      {
        name:"대체공휴일",
        month:"01",
        day:"24"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"27"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"28"
      },
      {
        name:"추석",
        month:"09",
        day:"29"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"30"
      }
    ]
  },  //2023
  {
    year: 2024,
    dayList:[
      {
        name:"설연휴",
        month:"02",
        day:"09"
      },
      {
        name:"설날",
        month:"02",
        day:"10"
      },
      {
        name:"설연휴",
        month:"02",
        day:"11"
      },
      {
        name:"대체공휴일",
        month:"02",
        day:"12"
      },
      {
        name:"제22대 국회의원 선거",
        month:"04",
        day:"10"
      },
      {
        name:"대체공휴일",
        month:"05",
        day:"06"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"15"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"16"
      },
      {
        name:"추석",
        month:"09",
        day:"17"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"18"
      }
    ]
  },  //2024
  {
    year: 2025,
    dayList:[
      {
        name:"설연휴",
        month:"01",
        day:"28"
      },
      {
        name:"설날",
        month:"01",
        day:"29"
      },
      {
        name:"설연휴",
        month:"01",
        day:"30"
      },
      {
        name:"대체공휴일",
        month:"03",
        day:"03"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"05"
      },
      {
        name:"대체공휴일",
        month:"05",
        day:"06"
      },
      {
        name:"추석연휴",
        month:"10",
        day:"06"
      },
      {
        name:"추석",
        month:"10",
        day:"07"
      },
      {
        name:"추석연휴",
        month:"10",
        day:"08"
      },
      {
        name:"대체공휴일",
        month:"10",
        day:"09"
      }
    ]
  },  //2025
  {
    year: 2026,
    dayList:[
      {
        name:"설연휴",
        month:"02",
        day:"16"
      },
      {
        name:"설날",
        month:"02",
        day:"17"
      },
      {
        name:"설연휴",
        month:"02",
        day:"18"
      },
      {
        name:"대체공휴일",
        month:"03",
        day:"02"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"24"
      },
      {
        name:"제9회 전국동시지방선거",
        month:"06",
        day:"03"
      },
      {
        name:"대체공휴일",
        month:"08",
        day:"17"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"24"
      },
      {
        name:"추석",
        month:"09",
        day:"25"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"26"
      },
      {
        name:"대체공휴일",
        month:"10",
        day:"05"
      }
    ]
  },  //2026
  {
    year: 2027,
    dayList:[
      {
        name:"설연휴",
        month:"02",
        day:"06"
      },
      {
        name:"설날",
        month:"02",
        day:"07"
      },
      {
        name:"설연휴",
        month:"02",
        day:"08"
      },
      {
        name:"대체공휴일",
        month:"02",
        day:"09"
      },
      {
        name:"제21대 대통령 선거",
        month:"03",
        day:"03"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"13"
      },
      {
        name:"대체공휴일",
        month:"08",
        day:"16"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"14"
      },
      {
        name:"추석",
        month:"09",
        day:"15"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"16"
      },
      {
        name:"대체공휴일",
        month:"10",
        day:"04"
      },
      {
        name:"대체공휴일",
        month:"10",
        day:"11"
      }
    ]
  },  //2027
  {
    year: 2028,
    dayList:[
      {
        name:"설연휴",
        month:"01",
        day:"26"
      },
      {
        name:"설날",
        month:"01",
        day:"27"
      },
      {
        name:"설연휴",
        month:"01",
        day:"28"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"02"
      },
      {
        name:"추석연휴",
        month:"10",
        day:"02"
      },
      {
        name:"추석",
        month:"10",
        day:"03"
      },
      {
        name:"추석연휴",
        month:"10",
        day:"04"
      },
      {
        name:"대체공휴일",
        month:"10",
        day:"05"
      }
    ]
  },  //2028
  {
    year: 2029,
    dayList:[
      {
        name:"설연휴",
        month:"02",
        day:"12"
      },
      {
        name:"설날",
        month:"02",
        day:"13"
      },
      {
        name:"설연휴",
        month:"02",
        day:"14"
      },
      {
        name:"대체공휴일",
        month:"05",
        day:"07"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"20"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"21"
      },
      {
        name:"추석",
        month:"09",
        day:"22"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"23"
      },
      {
        name:"대체공휴일",
        month:"09",
        day:"24"
      }
    ]
  },  //2029
  {
    year: 2030,
    dayList:[
      {
        name:"설연휴",
        month:"02",
        day:"02"
      },
      {
        name:"설날",
        month:"02",
        day:"03"
      },
      {
        name:"설연휴",
        month:"02",
        day:"04"
      },
      {
        name:"대체공휴일",
        month:"02",
        day:"05"
      },
      {
        name:"대체공휴일",
        month:"05",
        day:"06"
      },
      {
        name:"석가탄신일",
        month:"05",
        day:"09"
      },
      {
        name:"제10회 전국동시지방선거",
        month:"06",
        day:"12"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"11"
      },
      {
        name:"추석",
        month:"09",
        day:"12"
      },
      {
        name:"추석연휴",
        month:"09",
        day:"13"
      }
    ]
  }  //2030
];

//================================== 실행 함수 ==================================//
$(async function(){
  $('aside').on('click',function(){
    $(this).css('top','200vh')
  })

  const today = new Date();
  const todayObject = getDateObject(today);

  await renderCalendar(today);  //달력 불러옴
  getTodayList(todayObject);//오늘의 일정 불러오기(일정,공휴일)
  getYearList();  //year select list 불러옴
  updateCalendar(); //달력 업데이트 이벤트 추가
  openTimePage(todayObject.fullDate);

  getDdayList(todayObject);//디데이 일정 불러오기
  getTodoList();//투두리스트 불러오기
  addTodoItem();
  getTimeLine(todayObject);
  addDdayItem(todayObject);
  loadTopicList(dataList.topic);
  loadTimeLine(todayObject.fullDate)

  $('.todaySection .top #prevDay').on('click',function(){
    openTodayPage(prevDate);
  })
  $('.todaySection .top #nextDay').on('click',function(){
    openTodayPage(nextDate);
  })
});
//================================== 실행 함수 ==================================//
//타임테이블 화면 세팅
const openTimePage = (fullDate) => {
  $('.player').removeClass('on');
  $('.player').addClass('off');
  loadTimePage(fullDate);
  if(fullDate == getDateObject(new Date()).fullDate){
    setTimer(fullDate); //time.js에 선언되어있음
  } else {
    $('.player').off();
  }
}
const getTimeLi = (fullDate,state) => {
  let selectedDay = fullDate;
  let timeLineArray = [];
  let timeLineObject = [];

  dataList.topic.map((item)=>{
    timeLineObject = [...timeLineObject,{topic:item,time:[]}];
  })

  dataList.date.map(item => {
    if(item.date == selectedDay && item.timeTable.length>0){
      let array = timeLineArray;
      timeLineArray = array.concat(item.timeTable);
    }
  });
  timeLineArray.map((timeObject)=>{
    for (let topicObject of timeLineObject){
      if(topicObject.topic == timeObject.topic){
        let array = topicObject.time;
        array = [...array,{startTime:timeObject.startTime,endTime:timeObject.endTime}];
        topicObject.time = array;
      }
    }
  })
  let calculateTimeArray = [];

  for(let item of timeLineObject){
    let time=0;
    for(let timeItem of item.time){
      let startSec = new Date(timeItem.startTime).getTime();
      let endSec = new Date(timeItem.endTime).getTime();
      let  fullSec= endSec - startSec;
      time += fullSec;
    }
    let timeText = getTimeText(time)

    calculateTimeArray = [...calculateTimeArray,{topic:item.topic,time:getTimeText(time)}];
    time=0;
  };
  

  if(state == 'array'){
    return calculateTimeArray;
  }
  if(state == 'object'){
    return timeLineObject;
  }
}

//타임라인 로드
const loadTimePage = (fullDate) => {
  $('.player').off();

  $('.player').on('click',function(){
    if(fullDate == getDateObject(new Date()).fullDate){
      if($(this).hasClass('on')){ //타이머 종료, 값 반환 필요
        $(this).removeClass('on');
        $(this).addClass('off');
        timerOffSetting = true;
      }else{  //타이머 시작 필요
        timerOffSetting = false;
        $(this).removeClass('off');
        checkStartTime = `${fullDate} ${getThisTime()}`
        startTimer();
        $(this).addClass('on');
      }
    }
  })

  $('#timeTablePage .timeSection .date').text(`${fullDate.replaceAll('-','.')}(${getDayName(fullDate)})`);

  calculateTimeArray = getTimeLi(fullDate,'array');
  
  let contentHtml = '';
  calculateTimeArray.map(item => {
    contentHtml += `<li><span class='topic'>${item.topic}</span><span class='timer'>${item.time}</span></li>`;
  });
  
  $('#topicList').html(contentHtml);
  contentHtml = '';

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
  
  loadTimeLine(fullDate);


  $('#topicList li').on('click',function(){
    let selectedTitle = $(this).children('.topic').text();
    $('#selectedTopicPlace').text(selectedTitle);
  })
  $('.deleteTimelineItemBtn').off();
  $('.deleteTimelineItemBtn').on('click',function(){
    let select = $(this).siblings('.start').text().trim();
    select = select.substring(select.length-8,select.length);
    select = `${fullDate} ${select}`;
    for(let item of dataList.date){
      if(item.date == fullDate){
        let list = item.timeTable;
        list.map((el,index) => {
          if(el.startTime == select){
            list.splice(index,1);
          }
        })
        item.timeTable = list;
        break;
      }
    }
    loadTimePage(fullDate);
  })
}

// topic 렌더링
const loadTopicList = (listArray) => {
  let topicArray = listArray;
  let listHtml = '';
  topicArray.map(item => {
    listHtml += `<li><span>${item}</span><button class="deleteTopicItem">삭제</button></li>`;
  });
  $('#popupTopicList').html(listHtml);
  deleteTopicItem();
}

//타임테이블 페이지 타임라인 렌더링
const loadTimeLine = (fullDate) => {
  let setObject = getTimeLi(fullDate,'object');
  let timelineHtml = '';
  for(let item of setObject){
    let topic = item.topic;
    let innerHtml = '';
    if(item.time.length > 0){
      for(let time of item.time){
        let startTime = new Date(time.startTime).getTime();
        let endTime = new Date(time.endTime).getTime();
        startTime = time.startTime.substring(11);
        endTime = time.endTime.substring(11);
        innerHtml += `
          <hr>
          <div class='itemPlace'>
            <button class='deleteTimelineItemBtn'>X</button>
            <div class="start">
              시작시간: ${startTime}
            </div>
            <div class="end">
              종료시간: ${endTime}
            </div>
          </div>          
        `;
      }
  
      timelineHtml += `
        <li>
          <div class="top">
            ${topic}
          </div>
          <div class="bottom">
            ${innerHtml}
          </div>
        </li>
      `;
    }
  }
  if(timelineHtml.length == 0){
    timelineHtml = '아직 기록이 없습니다.'
  }
  $('#timeLineListAll').html(timelineHtml);
}

//day의 날짜 오브젝트 반환
const getDateObject = (day) => {
  let month = day.getMonth()+1;
  let date = day.getDate();
  if(month<10){
    month = `0${month}`;
  }
  if(date<10){
    date = `0${date}`;
  }

  return {
    fullDate: `${day.getFullYear()}-${month}-${date}`,
    year: day.getFullYear(),
    month: day.getMonth()+1,
    date: day.getDate()
  }
};

//홈화면,디데이팝업 디데이 일정 추가
const getDdayList = (dayObject) => {
  let listHTML = '';
  let pageHtml = '';
  if(dataList.dDay.length === 0){
    listHTML = '<li>d-day 일정이 없습니다.<li>';
    pageHtml = '<li><h3>d-day 일정이 없습니다.</h3></li>';
  } else {
    for(let item of dataList.dDay){
      listHTML += `<li>${item.name}<span>${getRestDayText(dayObject.fullDate,item.date)}</span></li>`;
      pageHtml += `
        <li>
          <h3>${item.name}</h3>
          <span>${getRestDayText(dayObject.fullDate,item.date)}</span>
          <button class="deleteD-day">휴지통</button>
        </li>
      `;
    }
  }
  $('#contentsBtn .d-day .contents').html(listHTML);
  $('#d-dayPage .d-daySection .d-dayList').html(pageHtml);
  deleteDdayItem(dayObject);
};
//디데이 남은날짜 계산, d-nn 형태로 반환
const getRestDayText = (todayDate,dDayDate) => {
  const today = new Date(todayDate);
  const dDay = new Date(dDayDate);
  const restTime = dDay.getTime()-today.getTime();
  const restDay = Math.floor(restTime / (1000*60*60*24));
  if(restDay > 0){
    return `D-${restDay}`
  } else if (restDay == 0) {
    return 'TODAY'
  } else {
    return `D+${-1*restDay}`
  }
};
//디데이 제거 이벤트
const deleteDdayItem = (dayObject) => {
  $('.deleteD-day').on('click',function(){
  let dDayList = dataList.dDay;
  let itemTitle = '';
    itemTitle = $(this).siblings('h3').text();
    dDayList.map((item,index)=>{
      if(item.name == itemTitle){
        dDayList.splice(index,1);
      }
    });
    dataList.dDay = dDayList;
    getDdayList(dayObject);
  });
};
//디데이 추가 이벤트
const addDdayItem = (dayObject) => {
  let dDayTitle = '';
  let dDayDate = '';

  $('#d-dayTitle').on('change',function(e){
    dDayTitle = e.currentTarget.value;
  });
  $('#d-dayDatepicker').on('change',function(){
    dDayDate = $(this).val();
  });

  $('#d-dayPopup .popupSubmit').on('click',function(){
    let dDayList = dataList.dDay;
    let addDdayItem = {name:dDayTitle, date:dDayDate}
    dDayList = [...dDayList,addDdayItem];
    dataList.dDay = dDayList;
    dDayTitle = '';
    dDayDate = '';
    $('#d-dayPopup form')[0].reset();
    getDdayList(dayObject); 
    $('#d-dayPopup').css('top','100vh');
  });

  $('#d-dayPopup .popupCancel').on('click',function(){
    dDayTitle = '';
    dDayDate = '';
    $('#d-dayPopup form')[0].reset();
    $('#d-dayPopup').css('top','100vh');
  });
};

//투두리스트 화면 투두리스트 추가
const getTodoList = () => {
  let listHTML = '';
  let checked = '';
  let startHtml = '';
  for(let item of dataList.todoList){
    if(item.done === true){
      checked = 'checked';
      startHtml = `<li id="todoItem@${item.id}"  class="done">`;
    } else {
      checked = '';
      startHtml = `<li id="todoItem@${item.id}">`;
    }

    listHTML += `
      ${startHtml}
        <input type="checkbox" id="checkItem@${item.id}" ${checked}>
        <label for="checkItem@${item.id}">${item.name}</label>
        <button class="deleteTodo">X</button>
      </li>
    `;
  }
  $('.todoListSection .todos').html(listHTML);

  deleteTodoItem();
  updateTodoItem();

  $('#todoListPage .closeBtn').on('click',function(){
    $('#todoListPage').css('top','100%');
  });
};
//투두리스트 화면 투두아이템 추가 이벤트
const addTodoItem = () => {
  let todoTitle = '';
  
  $('#todoTitle').on('change',function(e){
    todoTitle = e.target.value;
  });

  $('#addTodoItem').on('click',function(){
    let addItemId = dataList.todoList.length+1;
    let addItem = {id:addItemId, name:todoTitle, done:false};
    dataList.todoList.push(addItem);
    getTodoList();
  });
};
//투두리스트 화면 투두아이템 제거 이벤트
const deleteTodoItem = () => {
  $('.deleteTodo').on('click',function(){
    let todoList = dataList.todoList;
    let deleteItemID = $(this).parent('li').attr('id');
    deleteItemID = deleteItemID.replace('todoItem@','');
    $(this).parent('li').remove();

    todoList.map((item,index)=>{
      if(Number(item.id) === Number(deleteItemID)){
        todoList.splice(index,1);
      }
    });
    todoList.map((item,index)=>{
      item.id = index+1;
    });
    dataList.todoList = todoList;
    getTodoList();
  });
};
//투두리스트 화면 투두아이템 업데이트 이벤트
const updateTodoItem = () => {
  $('.todoListSection .todos li').on('click',function(){
    let todoList = dataList.todoList;
    let updateItemID = $(this).attr('id');
    updateItemID = updateItemID.replace('todoItem@','');

    todoList.map((item,index)=>{
      if(Number(item.id) === Number(updateItemID)){
        item.done = !item.done;
      }
    });
    dataList.todoList = todoList;
    getTodoList();
  });
};

//홈화면 달력 렌더링 함수
const renderCalendar = async (date) => {
  // 오늘의 년도와 월 불러오기
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth() + 1;

  $('.selectYearWrap button').text(viewYear);
  $('.selectMonthWrap button').text(viewMonth);

  //날짜와 요일 표시하기
  //document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth}월`;

  //지난달 마지막 날짜와 요일, 이번달 마지막 날짜와 요일 불러오기
  const prevLast = new Date(viewYear, viewMonth-1, 0);
  const thisLast = new Date(viewYear, viewMonth, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  //전체 달력에 필요한 날짜 불러오기
  //Dates 기본 배열들
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];
  //prevDates 계산
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }
  //newDates계산
  for (let i = 1; i <= 42-(prevDates.length + thisDates.length); i++) {
    nextDates.push(i);
  }
  //날짜에 맞춰 클라스 부여
  prevDates.forEach((date, i) => {
    prevDates[i] = `<li class="date other"><div class="num"><span>${date}</span></div><div class="view"></div></li>`;
  })
  thisDates.forEach((date, i) => {
    thisDates[i] = `<li class="date this"><div class="num"><span>${date}</span></div><div class="view"></div></li>`;
  })
  nextDates.forEach((date, i) => {
    nextDates[i] = `<li class="date other"><div class="num"><span>${date}</span></div><div class="view"></div></li>`;
  })
  //Dates합치기
  const dates = prevDates.concat(thisDates, nextDates);
  //캘린더 날짜 입력
  document.querySelector('.dates').innerHTML = dates.join('');

  //오늘 날짜 표시
  const today = new Date();

  if (viewMonth === today.getMonth()+1 && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
  //공휴일과 일정 표시
  showHolidayOnTheCalendar(date);
  viewScheduleDots(viewYear, viewMonth);

  //날짜 클릭하면 일정 팝업 뜨도록 하기
  $('#calendar .date').on('click',function(){
    $('#todayPage').css('top','50px');
    let date = $(this).children('.num').children('span').text();
    if(Number(date)<10){
      date = `0${date}`;
    }
    let month = viewMonth;
    if(Number(month)<10){
      month = `0${month}`;
    }
    let todayDate = `${viewYear}-${month}-${date}`;
    openTodayPage(todayDate);
  });
};
//오늘의 일정 페이지 렌더링
const openTodayPage = (fullDate) => {
  let selectedDate = fullDate;
  let currentDateObject = new Date(fullDate)
  let prevDateObject = new Date(currentDateObject.setDate(currentDateObject.getDate()-1));
  let nextDateObject = new Date(currentDateObject.setDate(currentDateObject.getDate()+2));
  prevDate = getDateObject(prevDateObject).fullDate;
  nextDate = getDateObject(nextDateObject).fullDate;

  $('.todaySection .top p').text(`${selectedDate.replaceAll('-','.')}(${getDayName(selectedDate)})`);
  $('.todaySection .top #prevDay').text(`${prevDate.replaceAll('-','.')}(${getDayName(prevDate)})`);
  $('.todaySection .top #nextDay').text(`${nextDate.replaceAll('-','.')}(${getDayName(nextDate)})`);

  getSelectedDayList(selectedDate);
}
//요일 반환
const getDayName = (day) => {
  const dayIndex = new Date(day).getDay();
  const dayNameList = ['일','월','화','수','목','금','토'];
  return dayNameList[dayIndex];
}
//하루 일정 및 타임테이블 받아오기
const getSelectedDayList = (fullDate) => {
  $('#scheduleList').html('');
  $('#diaryList').html('');

  let selectedYear = new Date(fullDate).getFullYear();
  let selectedMonth = new Date(fullDate).getMonth()+1;
  let selectedDate = new Date(fullDate).getDate();
  let selectedDayObject = {date:'',plan:[],timeTable:[],record:{}};

  let scheduleHtml = '';

  dataList.date.map(item => {
    if(item.date == fullDate){
      selectedDayObject = item;

      item.plan?item.plan.map(plan=>{
        scheduleHtml += `<li><span>${plan}</span><button class="deleteSchedule">삭제</button></li>`;
      }):'';
    }
  });

  holidayList.map((item)=>{
    if(item.month == selectedMonth && item.day == selectedDate){
      scheduleHtml += `<li>${item.name}</li>`;
    }
  });
  lunarDays.map((item)=>{
    if(item.year== selectedYear){
      item.dayList.map(day => {
        if(day.month == selectedMonth && day.day == selectedDate){
          scheduleHtml += `<li>${day.name}</li>`;
        }
      })
    }
  });

  if(scheduleHtml.length == 0){
    scheduleHtml = `<li>오늘은 일정이 없습니다.</li>`
  }
  $('#scheduleList').html(scheduleHtml);

  $('.deleteSchedule').off();
  $('.deleteSchedule').on('click',function(){
    let deleteItem = $(this).siblings('span').text();
    for(let item of dataList.date){
      if(item.date == fullDate){
        let list = item.plan;
        list.map((el,index)=>{
          if(el == deleteItem){
            list.splice(index,1);
          }
        })
        item.plan = list;
      }
    }
    getSelectedDayList(fullDate)
  })

  let diaryHtml = '';
  if(!selectedDayObject.record.story || !selectedDayObject){
    diaryHtml = `<li>아직 기록이 없습니다.</li>`
  } else {
    diaryHtml = `
      <li class="diaryPlace">
        ${selectedDayObject.record.img?(
          `<div>
            <img src=${selectedDayObject.record.img} alt="오늘의 기록 사진">
          </div>`
        ):(
          `<div>
            <img src='' alt="사진 첨부 필요">
          </div>`
        )}
        <div class="story">${selectedDayObject.record.story}</div>
      </li>
    `
  }
  $('#diaryList').html(diaryHtml);
  selectedDayObject = null;

  calculateTimeArray = getTimeLi(fullDate,'array');
  
  let timelineHtml = '';
  calculateTimeArray.map(item => {
    if(item.time !== '00:00:00'){
      timelineHtml += `<li><span class='topic'>${item.topic}</span><span class='timer'>${item.time}</span></li>`;
    }
  });
  if(timelineHtml.length == 0){
    timelineHtml = `<li>아직 기록이 없습니다.</li>`
  }
  $('#timeTableList').html(timelineHtml);
  timelineHtml = '';
}

//홈화면 달력에 공휴일 추가하는 함수
const showHolidayOnTheCalendar = (date) => {
  let selectYear = date.getFullYear();
  let selectMonth = date.getMonth()+1;

  let holidayArray = [];

  $('#calendar .date').removeClass('holiday');

  holidayList.map((item)=>{
    if(item.month == selectMonth){
      holidayArray = [...holidayArray,item];
    }
  });
  
  lunarDays.map((items)=>{
    if(items.year == selectYear){
      items.dayList.map((item)=>{
        if(Number(item.month) == Number(selectMonth)){
          holidayArray = [...holidayArray,item];
        }
      })
    }
  });

  const $thisMonthList = document.querySelectorAll('#calendar .this span');

  for(let holiday of holidayArray){
    for(let $day of $thisMonthList){
      if(Number($day.innerHTML) == Number(holiday.day)){
        $day.parentNode.parentNode.classList.add('holiday');
      }
    }
  }
};
//음력 구현된 년도 만큼 드롭다운메뉴 추가
const getYearList = () => {
  let yearList = [];
  let listHtml = '';
  lunarDays.map((item)=>{
    yearList = [...yearList,item.year];
  });
  for(let item of yearList){
    listHtml += `<li>${item}</li>`;
  }
  $('#selectYearList').html(listHtml);
  
  $('#selectYearList').slideUp();
  $('#selectMonthList').slideUp();

  $('#selectYear button').on('click',function(){
    $('#selectYearList').slideToggle();
    $('#selectMonthList').slideUp();
  });
  $('#selectMonth button').on('click',function(){
    $('#selectMonthList').slideToggle();
    $('#selectYearList').slideUp();
  });
};
//달력 업데이트 이벤트
const updateCalendar= () => {
  let selectedYear = new Date().getFullYear();
  let selectedMonth = new Date().getMonth() + 1;
  $('#selectYear button').text(selectedYear);
  $('#selectMonth button').text(selectedMonth);
  $('#selectYearList li').on('click',function(){
    selectedYear = $(this).text();
    $('#selectYear button').text(selectedYear);
    renderCalendar(new Date(`${selectedYear}-${selectedMonth}-01`));
    $('#selectYearList').slideUp();
  });
  $('#selectMonthList li').on('click',function(){
    selectedMonth = $(this).text();
    $('#selectMonth button').text(selectedMonth);
    renderCalendar(new Date(`${selectedYear}-${selectedMonth}-01`));
    $('#selectMonthList').slideUp();
  });
};








//달력에 일정 Dot 표시하는 함수
const viewScheduleDots = (selectedYear,selectedMonth) => {
  let scheduleList = [];
  let scheduleListAll = [];
  let dayFromSelectedYear = [];
  let dayFromSelectedMonth = [];
  let objectsFromDayArray = [];
  let itemYear = '';
  let itemMonth = '';

  scheduleList = [];
  scheduleListAll = [];
  dayFromSelectedYear = [];
  dayFromSelectedMonth = [];
  objectsFromDayArray = [];
  itemYear = '';
  itemMonth = '';

  for(let item of dataList.date){
    itemYear = new Date(item.date).getFullYear();
    itemMonth = new Date(item.date).getMonth() +1;
    if(itemYear == selectedYear && itemMonth == selectedMonth){
      scheduleList = [...scheduleList,item];
    }
  }

  lunarDays.map((day) => {
    if(day.year == selectedYear){
      dayFromSelectedYear = day.dayList;
    }
  });
  dayFromSelectedYear.map((day) => {
    if(day.month == selectedMonth){
      dayFromSelectedMonth = [...dayFromSelectedMonth,day];
    }
  });
  holidayList.map((day) => {
    if(day.month == selectedMonth){
      dayFromSelectedMonth = [...dayFromSelectedMonth,day];
    }
  });

  dayFromSelectedMonth.map((item) => {
    objectsFromDayArray = [...objectsFromDayArray,getScheduleObject(selectedYear,item)]
  });

  for(let i=0; i<objectsFromDayArray.length; i++){
    for(let j=0; j<i; j++){
      if(objectsFromDayArray[i].date == objectsFromDayArray[j].date){
        let array = objectsFromDayArray[j].plan.concat(objectsFromDayArray[i].plan)
        objectsFromDayArray[j] = {...objectsFromDayArray[j],plan:array}
        objectsFromDayArray.splice(i,1);
        i--;
      }
    }
  }
  if(scheduleList.length==0){
    objectsFromDayArray.map((selectedDay)=>{
      scheduleListAll = [
        ...scheduleListAll,
        {
          date:selectedDay.date,
          plan:selectedDay.plan,
          timeTable:selectedDay.timeTable?selectedDay.timeTable:[],
          record:selectedDay.record
        }
      ];
    });
  } else if(objectsFromDayArray.length==0){
    scheduleList.map((scheduleListItem)=>{
      scheduleListAll = [
        ...scheduleListAll,
        {
          date:scheduleListItem.date,
          plan:scheduleListItem.plan?scheduleListItem.plan:[],
          timeTable:scheduleListItem.timeTable?scheduleListItem.timeTable:[],
          record:scheduleListItem.record
        }
      ];
    });
  } else{
    objectsFromDayArray.map((selectedDay) => {  //일정 리스트를 만듦
      scheduleList.map((scheduleListItem,index) => {
        if(selectedDay.date == scheduleListItem.date){
          let planArray = scheduleListItem.plan.concat(selectedDay.plan);
          scheduleListAll = [
            ...scheduleListAll,
            {
              date:scheduleListItem.date,
              plan:planArray,
              timeTable:scheduleListItem.timeTable?scheduleListItem.timeTable:[],
              record:scheduleListItem.record
            }
          ];
          scheduleList.splice(index,1);
        } else {
          scheduleListAll = [
            ...scheduleListAll,
            {
              date:scheduleListItem.date,
              plan:scheduleListItem.plan?scheduleListItem.plan:[],
              timeTable:scheduleListItem.timeTable?scheduleListItem.timeTable:[],
              record:scheduleListItem.record
            }
          ];
          scheduleListAll = [
            ...scheduleListAll,
            {
              date:selectedDay.date,
              plan:selectedDay.plan?selectedDay.plan:[],
              timeTable:selectedDay.timeTable?selectedDay.timeTable:[],
              record:selectedDay.record
            }
          ];
        }
      });
    });
  }

  //dot표시
  for(let item of scheduleListAll){
    let date = new Date(item.date).getDate();
    let text = '';
    for(i=0; i<31; i++){
      if($(`#calendar .this:eq(${i}) .num span`).text() == date){
        $dotPlace = $(`#calendar .this:eq(${i}) .view`);
        if(item.plan.length>0){
          text += '<span class="scheduleDot">일정 있음</span>';
        }
        if(item.timeTable.length>0){
          text += '<span class="timelineDot">타임라인 있음</span>';
        }
        $dotPlace.html(text);

        if(item.record.story){
          text = '<span class="diaryDot">기록 있음</span>';
          $dotPlace.append(text);
        }
      }
    }
  }
}
//공휴일 일정 형식화된 오브젝트로 반환
const getScheduleObject = (selectedYear,object) => {//{name,month,day}
  return {
    date: `${selectedYear}-${object.month}-${object.day}`,
    plan: [`${object.name}`],
    timeTable:[],
    record:{}
  }
}
//홈화면 오늘의 일정 추가
const getTodayList = (dayObject) => {
  let listHTML = '';
  for(let item of dataList.date){
    if(item.date == dayObject.fullDate){
      item.plan.map((planName)=>{
        listHTML += `<li>${planName}</li>`;
      });
    }
  }
  //홈화면 오늘의 일정에 공휴일 관련 일정 추가
  for(let day of holidayList){
    if(day.month == dayObject.month && day.day == dayObject.date){
      listHTML += `<li>${day.name}</li>`;
    }
  }
  for(let selectedDayList of lunarDays){
    if(selectedDayList.year == dayObject.year){
      selectedDayList.dayList.map((day)=>{
        if(day.month == dayObject.month && day.day == dayObject.date){
          listHTML += `<li>${day.name}</li>`;
        }
      })
    }
  }
  if(listHTML.length === 0) {
    listHTML += `<li>오늘 일정은 없습니다.</li>`;
  }
  $('#contentsBtn .day .contents').html(listHTML);
}

//타임라인 불러오는 함수
const getTimeLine = (dayObject) => {
  let timelineList = [];
  let settimgTimeline = [];
  dataList.date.map((item)=>{
    if(item.date == dayObject.fullDate){
      timelineList = item.timeTable;
    };
  });
  timelineList.map((item) => {
    settimgTimeline = [...settimgTimeline]
  })

};
//초를 HH:mm:ss 형태로 바꿔주는 함수
const getTimeText = (fullSeconds) => {
  let hour = Math.floor(fullSeconds / (1000*60*60));
  let min = Math.floor((fullSeconds % (1000*60*60)) / (1000*60));
  let sec = Math.floor((fullSeconds % (1000*60)) / 1000);
  if(hour < 10){
    hour = `0${hour}`;
  }
  if(min < 10){
    min = `0${min}`;
  }
  if(sec < 10){
    sec = `0${sec}`;
  }
  return `${hour}:${min}:${sec}`;
};

/*
//json 서버로 데이터를 보내는 함수
const pushDataToJsonServer = (data) => {
  fetch(url,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data)
  }).then(res => console.log('fetch res',res));
  return false;
}

// const getDataToJsonServer = async (data) => {
//   await $.ajax({
//     type:"GET",
//     url: url,
//     dataType: "json",
//     success: function(res){
//       dataList = res;
//     },
//     error: function(e){console.log('에러 발생',e)}
//   });
//   return false;
// }
// const pushDataToJsonServer = async (data) => {
//   await $.ajax({
//     type:"POST",
//     url: url,
//     dataType: "json",
//     contentType:'application/json',
//     data:JSON.stringify(dataList),
//     success: function(res){
//       dataList = res;
//     },
//     beforeSend: function(){console.log('ajax 호출')},
//     success: function(){console.log('json서버로 데이터 전송완료')},
//     error: function(e){console.log('에러 발생',e)},
//     complete: function(e){
//       return false;
//     }
//   });
// }
*/