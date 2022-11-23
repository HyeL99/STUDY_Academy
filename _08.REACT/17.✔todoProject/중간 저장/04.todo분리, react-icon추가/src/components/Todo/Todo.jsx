// https://react-icons.github.io/react-icons/  -아이콘 라이브러리
import React from 'react'
import {GrTrash} from 'react-icons/gr'

const Todo = ({item}) => {
  return (
    <li className={item.status=='active'? 'active':'done'}>
      <input type="checkbox" id={`item@${item.id}`} />
      <label htmlFor={`item@${item.id}`}>{item.text}</label>
      <button><GrTrash /></button>
    </li>
  )
}

export default Todo