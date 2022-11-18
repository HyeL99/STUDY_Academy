import React,{useState,useEffect} from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'

const TodoList = ({filter}) => {
  const [todos, setTodos] = useState([
    {id: 1, text:'아침산책', status:'completed'},
    {id: 2, text:'장보기', status:'active'},
    {id: 3, text:'유산소운동', status:'active'},
    {id: 4, text:'샴푸 구입', status:'active'},
  ])

  const handleAdd = (item) => setTodos([...todos,item]);

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => { 
      return todo.id === updated.id ? todo.status = updated : todo;
    }))
  }
  
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));

  //status는 나중에 진행중/완료 구분 위함
  return (
    <section>
      <ul>
        {todos.map((item)=> (
          <Todo item={item} key={item.id} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      {/* <AddTodo todos={todos} setTodos={setTodos} /> */}
      <AddTodo onAdd={handleAdd} />
    </section>
  )
}

export default TodoList