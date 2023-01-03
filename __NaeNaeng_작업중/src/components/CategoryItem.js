import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  console.log(item.img)
  return (
    <li>
      <Link className='shadowBottom'><img src={item.img} alt={item.name} /></Link>
    </li>
  )
}

export default CategoryItem