import React,{useState} from 'react'

// const AddTodo = ({todos, setTodos}) => {
const AddTodo = ({onAdd}) => {
  const [text, setText] = useState('')

  //input 값 변화 인식할 때 함수
  const handleChange = (e) => setText(e.target.value);

  //form태그 고유의 submit기능이 작동될 때 함수
  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지
    //setTodos([...todos,{id:todos.length+1, text, status:'active'}])
    onAdd(text);  //onAdd함수 실행
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='할 일을 입력해주세요' onChange={handleChange} value={text}/>
      <button type='submit'>Add</button>
    </form>
  )
}

export default AddTodo