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
  //status는 나중에 진행중/완료 구분 위함

  const handleAdd = (item) => setTodos([...todos,item]);

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => { 
      return todo.id === updated.id ? todo.status = updated : todo;
    }))
  }
  
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);
  // 필터링해주는 함수 실행

  return (
    <section>
      <ul>
        {filtered.map((item)=> (
          <Todo item={item} key={item.id} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      {/* <AddTodo todos={todos} setTodos={setTodos} /> */}
      <AddTodo onAdd={handleAdd} />
    </section>
  )
}
//todoList 컴포넌트 바깥 부분에 필터링하는 함수 정의
const getFilteredItems = (todos, filter) => {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter((item) => item.status == filter)
}
export default TodoList