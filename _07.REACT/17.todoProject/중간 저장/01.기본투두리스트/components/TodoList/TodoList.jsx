import React,{useState} from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([
    {id: 1, text:'아침산책', status:'active'},
    {id: 2, text:'장보기', status:'active'},
    {id: 3, text:'유산소운동', status:'active'},
    {id: 4, text:'샴푸 구입', status:'active'},
  ])
  //status는 나중에 진행중/완료 구분 위함
  return (
    <section>
      <ul>
        {todos.map((item)=>{return (
          <li key={item.id}>
            {item.text}
          </li>
        )})}
      </ul>      
    </section>
  )
}

export default TodoList