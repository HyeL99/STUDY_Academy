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

let selectedFullDay = new Date();

//달력 렌더링하는 함수
const renderCalendar = (date) => {
  // 오늘의 년도와 월 불러오기
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  //날짜와 요일 표시하기
  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  //지난달 마지막 날짜와 요일, 이번달 마지막 날짜와 요일 불러오기
  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth+1, 0);

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
  for (let i = 1; i < 14 - TLDay; i++) {
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
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
}

//달력에 공휴일 추가하는 함수
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
  console.log('holidayArray',holidayArray);

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

renderCalendar(selectedFullDay);  //달력 불러옴
showHolidayOnTheCalendar(selectedFullDay);  //공휴일 표시




/*
const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}
const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}
const goToday = () => {
  date = new Date();
  renderCalendar();
}

*/

//일정 추가하는 함수