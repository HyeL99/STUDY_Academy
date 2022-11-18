import React from 'react'

export default function Navbar({filters, filter, onFilterChange}) {

  return (
    <header>
      <ul>
        {filters.map((item,index)=>{
          return (
            <li key={index}>
              <button onClick={()=>{onFilterChange(item)}}>
                {item}
              </button>
            </li>
          )
        })}
      </ul>
    </header>
  )
}