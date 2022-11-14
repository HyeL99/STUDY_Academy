let date = new Date();

const renderCalendar = () => {
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
renderCalendar();

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