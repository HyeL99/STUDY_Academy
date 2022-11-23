import React from 'react'
import TodoItem from './TodoItem';

const TodoBoard = ({todoList}) => {
    return (
        <>
            <h1 className='h1'>Todo List</h1>
            {todoList.map(item => <TodoItem item={item} />)}
        </>
    )
}

export default TodoBoard;