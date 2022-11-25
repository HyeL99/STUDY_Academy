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
      date:"2022-11-25",
      plan : "러프스케치 마감",
      timeTable:[
        {
          topic:"topic01",
          startTime:"2022-11-25 09:00:00",
          endTime:"2022-11-25 12:30:00"
        },
        {
          topic:"topic02",
          startTime:"2022-11-25 13:08:00",
          endTime:"2022-11-25 15:27:00"
        },
        {
          topic:"topic01",
          startTime:"2022-11-25 17:16:00",
          endTime:"2022-11-25 20:00:00"
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
$(function(){
  const today = new Date();
  const todayObject = getDateObject(today);
  console.log(todayObject);

  getTodayList(todayObject);
  getDdayList(todayObject);
  getTodoItem();

  let todoTitle;
  $('#todoTitle').on('change',function(e){
    todoTitle = e.target.value;
  });

  //추가 버튼 클릭 시 투두 아이템 추가
  $('#addTodoItem').on('click',function(){
    let addItemId = dataList.todoList.length+1;
    let addItem = {id:addItemId,name:todoTitle,done:false};
    console.log(addItem);
    dataList.todoList.push(addItem);
    console.log(dataList);
    getTodoItem();
  })
})

//day의 날짜 오브젝트 반환
const getDateObject = (day) => {
  return {
    fullDate: `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`,
    year: day.getFullYear(),
    month: day.getMonth()+1,
    date: day.getDate()
  }
}
//홈화면 오늘의 일정 추가
const getTodayList = (dayObject) => {
  let listHTML = '';
  for(let item of dataList.date){
    if(item.date == dayObject.fullDate){
      listHTML += `<li>${item.plan}</li>`;
    }
  }
  if(listHTML.length === 0) {
    listHTML = `<li>오늘 일정은 없습니다.</li>`;
  }
  $('#contentsBtn .day .contents').html(listHTML);
}

//홈화면 디데이 일정 추가
const getDdayList = (dayObject) => {
  let listHTML = '';
  console.log(listHTML)
  if(dataList.dDay.length === 0){
    listHTML = '<li>d-day 일정이 없습니다.<li>';
  } else {
    for(let item of dataList.dDay){
      listHTML += `<li>${item.name}<span>${getRestDayText(dayObject.fullDate,item.date)}</span></li>`;
    }
  }
  console.log(listHTML)
  $('#contentsBtn .d-day .contents').html(listHTML);
}

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
}

//투두리스트 화면 투두리스트 추가
const getTodoItem = () => {
  console.log(dataList.todoList)
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
}
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
    getTodoItem();
  });
}

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
    getTodoItem();
  });
}
