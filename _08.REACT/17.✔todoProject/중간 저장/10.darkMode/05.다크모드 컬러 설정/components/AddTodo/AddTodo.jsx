import React,{useState} from 'react'
// 자동 고유key값 생성 https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css'

// const AddTodo = ({todos, setTodos}) => {
const AddTodo = ({onAdd}) => {
  const [text, setText] = useState('')

  //input 값 변화 인식할 때 함수
  const handleChange = (e) => setText(e.target.value);

  //form태그 고유의 submit기능이 작동될 때 함수
  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지
    if(text.trim().length === 0) {
      setText('');
      return;
    }
    //입력된 것이 없을 때 함수 미발생, 스페이스바 여백은 못골라냄
    //setTodos([...todos,{id:todos.length+1, text, status:'active'}])
    //.trim() - 빈 부분을 잘라줌
    //.replace(/ +/g, " ") - 연속되는 공백을 하나로 대체
    onAdd({id:uuidv4(), text:text.trim().replace(/ +/g, " "), status:'active'});  //onAdd함수 실행
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" placeholder='할 일을 입력해주세요' onChange={handleChange} value={text} autoFocus />
      <button type='submit'>Add</button>
    </form>
  )
}

export default AddTodo