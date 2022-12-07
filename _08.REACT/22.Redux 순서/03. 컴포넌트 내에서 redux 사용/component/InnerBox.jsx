import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const InnerBox = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch()
  const decrease = () => {
    dispatch({type:"DECREMENT"})
  }
  return (
    <div style={{border:'1px solid red'}}>
      여기는 Box 컴포넌트 내부에 있는 InnerBox입니다. <br />
      {count} <br />
      <button onClick={decrease}>감소</button>
    </div>
  )
}

export default InnerBox