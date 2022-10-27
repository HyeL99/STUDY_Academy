import React from 'react'

const Box = ({title}) => {
  return (
    <div className='box'>
      <h1>{title}</h1>
      <img src="scissors.png" className='itemImg'/>
      <h2>WIN</h2>
    </div>
  )
}

export default Box
