//todos의 상태를 저장해서 다시 열었을 때에도 유지하도록
import React,{useState, useEffect} from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'
import styles from './TodoList.module.css'

const TodoList = ({filter}) => {
  /*
  const [todos, setTodos] = useState([
    {id: 1, text:'아침산책', status:'completed'},
    {id: 2, text:'장보기', status:'active'},
    {id: 3, text:'유산소운동', status:'active'},
    {id: 4, text:'샴푸 구입', status:'active'},
  ])
  //status는 나중에 진행중/완료 구분 위함
  */
  // 미리 입력해둔 todos가 아니라 이미 저장된 값을 불러옴
  const [todos, setTodos] = useState(readTodosFromLocalStorage());
  // 들어갈 내용이 많아 함수로 만들어줬음
  

  const handleAdd = (item) => setTodos([...todos,item]);

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => { 
      return todo.id === updated.id ? todo.status = updated : todo;
    }))
  }
  
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);
  // 필터링해주는 함수 실행

  //todos가 업데이트할 때 적용
  //JSON.stringify(A) - [객체또는배열A] 를 JSON 문자열로 변환해서 localStorage에 저장
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  return (
    <section className={styles.container}>
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
  return todos.filter((item) => item.status === filter)
}

// localStorage에 저장된 todos를 가져와서 오브젝트형식으로 반환,
// 없으면 빈배열 반환
const readTodosFromLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  return todos?JSON.parse(todos):[];
}

export default TodoList