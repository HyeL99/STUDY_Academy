import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar({filters, filter, onFilterChange}) {
  let onIndex =0;
  filters.map((item,index) => {item === filter? onIndex = onIndex+index : onIndex = onIndex});
  console.log(onIndex)
  return (
    <header className={styles.header}>
      <ul>
        {filters.map((item,index)=>{
          return (
            <li key={index} className={index==onIndex? styles.on :''}>
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