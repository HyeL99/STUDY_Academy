//localStorage.setItem('myTimeItems',JSON.stringify(dataList));
// $(function(){
//   let dataList = JSON.parse(localStorage.getItem('myTimeItems'));
//   if(!dataList.holiday){
//     dataList = {...dataList,holiday:holidayList}
//   }
//   console.log(dataList);
// });

let dataList = {
  date: [
    {
      date:"2022-11-29",
      plan: ["러프스케치 마감"],
      timeTable:[
        {
          topic:"topic01",
          startTime:"2022-11-29 09:00:00",
          endTime:"2022-11-29 12:30:00"
        },
        {
          topic:"topic02",
          startTime:"2022-11-29 13:08:00",
          endTime:"2022-11-29 15:29:00"
        },
        {
          topic:"topic01",
          startTime:"2022-11-29 17:16:00",
          endTime:"2022-11-29 20:00:00"
        }
      ],
      record:{
        img:"",
        story:"2022-11-25 오늘의 일기"
      }
    },
    {
      date:"2022-11-16",
      timeTable:[
        {
          topic:"topic02",
          startTime:"2022-11-16 09:00:00",
          endTime:"2022-11-16 12:30:00"
        },
        {
          topic:"topic03",
          startTime:"2022-11-16 13:08:00",
          endTime:"2022-11-16 16:27:00"
        },
        {
          topic:"topic03",
          startTime:"2022-11-16 17:16:00",
          endTime:"2022-11-16 20:00:00"
        }
      ]
    }
  ],
  dDay: [
    {
      name:"종강😊",
      date:"2023-01-03"
    }
  ],
  todoList: [
    {
      id: 1,
      name:"1번 투두리스트",
      done:false
    },
    {
      id: 2,
      name:"2번 투두리스트",
      done:true
    },
    {
      id: 3,
      name:"3번 투두리스트",
      done:false
    },
    {
      id: 4,
      name:"4번 투두리스트",
      done:false
    }
  ],
  topic: ["topic01","topic02","topic03"],
  holiday:[]
}
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
  {
    name:"test01",
    month:"11",
    day:"29"
  },
  {
    name:"test03",
    month:"11",
    day:"30"
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
      {
        name:"test02",
        month:"11",
        day:"29"
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
  const today = new Date();
  const todayObject = getDateObject(today);
  console.log('todayObject',todayObject);

  await renderCalendar(today);  //달력 불러옴
  getTodayList(todayObject);//오늘의 일정 불러오기(일정,공휴일)
  getYearList();  //year select list 불러옴
  updateCalendar(); //달력 업데이트 이벤트 추가

  getDdayList(todayObject);//디데이 일정 불러오기
  getTodoList();//투두리스트 불러오기
  getTimeLine(todayObject);
});
//================================== 실행 함수 ==================================//

//day의 날짜 오브젝트 반환
const getDateObject = (day) => {
  return {
    fullDate: `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`,
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
  addDdayItem(dayObject);
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
    console.log(dDayList);
    getDdayList(dayObject);
  });
};
//디데이 추가 이벤트
const addDdayItem = (dayObject) => {
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

  addTodoItem();
  deleteTodoItem();
  updateTodoItem();
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
    console.log(addItem);
    dataList.todoList.push(addItem);
    console.log(dataList);
    getTodoList();
  });
};
//투두리스트 화면 투두아이템 제거 이벤트
const deleteTodoItem = () => {
  $('.deleteTodo').on('click',function(){
    let todoList = dataList.todoList;
    let deleteItemID = $(this).parent('li').attr('id');
    deleteItemID = deleteItemID.replace('todoItem@','');
    console.log(deleteItemID);
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
    console.log(dataList);
    getTodoList();
  });
};
//투두리스트 화면 투두아이템 업데이트 이벤트
const updateTodoItem = () => {
  $('.todoListSection .todos li').on('click',function(){
    let todoList = dataList.todoList;
    let updateItemID = $(this).attr('id');
    updateItemID = updateItemID.replace('todoItem@','');
    console.log(updateItemID);

    todoList.map((item,index)=>{
      if(Number(item.id) === Number(updateItemID)){
        item.done = !item.done;
      }
    });
    dataList.todoList = todoList;
    console.log(dataList);
    getTodoList();
  });
};

//홈화면 달력 렌더링 함수
const renderCalendar = async (date) => {
  // 오늘의 년도와 월 불러오기
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth() + 1;
  
  console.log('yy,mm',viewYear, viewMonth);

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
  });
};
//홈화면 달력에 공휴일 추가하는 함수
const showHolidayOnTheCalendar = (date) => {
  let selectYear = date.getFullYear();
  let selectMonth = date.getMonth()+1;

  console.log('selectYear',selectYear);
  console.log('selectMonth',selectMonth);

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
        console.log($day);
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
  });
  $('#selectMonth button').on('click',function(){
    $('#selectMonthList').slideToggle();
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
    console.log(new Date(`${selectedYear}-${selectedMonth}-01`));
    renderCalendar(new Date(`${selectedYear}-${selectedMonth}-01`));
    $('#selectYearList').slideUp();
  });
  $('#selectMonthList li').on('click',function(){
    selectedMonth = $(this).text();
    $('#selectMonth button').text(selectedMonth);
    console.log(new Date(`${selectedYear}-${selectedMonth}-01`));
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

  for(let item of dataList.date){
    itemYear = new Date(item.date).getFullYear();
    itemMonth = new Date(item.date).getMonth() +1;
    console.log('selectedMonth',selectedMonth);
    if(itemYear == selectedYear && itemMonth == selectedMonth){
      scheduleList = [...scheduleList,item];
    }
  }

  lunarDays.map((day) => {
    if(day.year == selectedYear){
      dayFromSelectedYear = day.dayList;
    }
  });
  console.log('dayFromSelectedYear',dayFromSelectedYear);
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
  console.log('objectsFromDayArray',objectsFromDayArray);
  console.log('scheduleList',scheduleList);
  objectsFromDayArray.map((selectedDay) => {  //일정 리스트를 만듦
    scheduleList.map((scheduleListItem,index) => {
      if(selectedDay.date == scheduleListItem.date){
        let planArray = scheduleListItem.plan.concat(selectedDay.plan);
        scheduleListAll = [
          ...scheduleListAll,
          {
            date:scheduleListItem.date,
            plan:planArray,
            timeTable:scheduleListItem.timeTable
          }
        ];
        scheduleList.splice(index,1);
      } else {
        scheduleListAll = [
          ...scheduleListAll,
          {
            date:scheduleListItem.date,
            plan:scheduleListItem.plan,
            timeTable:scheduleListItem.timeTable
          }
        ];
        scheduleListAll = [
          ...scheduleListAll,
          {
            date:selectedDay.date,
            plan:selectedDay.plan,
            timeTable:selectedDay.timeTable
          }
        ];
      }
    });
  });
  console.log(`scheduleListAll`,scheduleListAll);
  //dot표시
  for(let item of scheduleListAll){

  }
}
//공휴일 일정 형식화된 오브젝트로 반환
const getScheduleObject = (selectedYear,object) => {//{name,month,day}
  return {
    date: `${selectedYear}-${object.month}-${object.day}`,
    plan: [`${object.name}`]
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
      console.log('timelineList',timelineList);
    };
  });
  timelineList.map((item) => {
    settimgTimeline = [...settimgTimeline]
  })

};
//초를 HH:mm:ss 형태로 바꿔주는 함수
const getTimeText = (fullSeconds) => {
  let hour = fullSeconds / (1000*60*60);
  let min = (fullSeconds % (1000*60*60)) / (1000*60);
  let sec = (time % (1000*60)) / 1000;
  return `${hour}:${min}:${sec<10 ? '0'+sec : sec}`;
};