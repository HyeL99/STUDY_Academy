import React,{useState,useEffect} from 'react'
import AddTodo from '../AddTodo/AddTodo'

const TodoList = () => {
  const [todos, setTodos] = useState([
    {id: 1, text:'아침산책', status:'active'},
    {id: 2, text:'장보기', status:'active'},
    {id: 3, text:'유산소운동', status:'active'},
    {id: 4, text:'샴푸 구입', status:'active'},
  ])

  const handleAdd = (item) => {
    console.log(item)
  }
  
  //status는 나중에 진행중/완료 구분 위함
  return (
    <section>
      <ul>
        {todos.map((item)=> (
          <li key={item.id} className={item.status=='active'? 'active':'done'}>
            {item.text}
            <input type="checkbox" id={`item${item.id}`} />
            <label htmlFor={`item${item.id}`}>완료</label>
          </li>
        ))}
      </ul>
      {/* <AddTodo todos={todos} setTodos={setTodos} /> */}
      <AddTodo onAdd={handleAdd} />
    </section>
  )
}

export default TodoList