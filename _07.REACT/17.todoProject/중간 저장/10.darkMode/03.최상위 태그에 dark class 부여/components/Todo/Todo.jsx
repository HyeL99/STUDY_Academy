// https://react-icons.github.io/react-icons/  -아이콘 라이브러리
import React from 'react'
import {GrTrash} from 'react-icons/gr'
import styles from './Todo.module.css'

const Todo = ({item, onUpdate, onDelete}) => {
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({...item, status});
  }

  const handleDelete = () => onDelete(item);

  return (
    <li className={`${styles.todo} ${item.status=='active'? styles.active:styles.completed}`}>
      <input type="checkbox" id={`item@${item.id}`} checked={ item.status=='completed'?'checked':''} onChange={handleChange}/>
      <label htmlFor={`item@${item.id}`}>{item.text}</label>
      <button onClick={handleDelete}><GrTrash /></button>
    </li>
  )
}

export default Todo