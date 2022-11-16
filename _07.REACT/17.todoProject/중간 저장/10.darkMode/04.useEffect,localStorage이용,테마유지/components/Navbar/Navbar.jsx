//다크모드 콘텍스트 연결
import React from 'react'
import styles from './Navbar.module.css'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { useDarkMode } from '../context/DarkModeContext'

export default function Navbar({filters, filter, onFilterChange}) {
  const {darkMode, toggleDarkMode} = useDarkMode();

  let onIndex =0;

  filters.map((item,index) => {item === filter? onIndex = onIndex+index : onIndex = onIndex});

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode && <BsFillMoonStarsFill />}
        {darkMode && <BsFillSunFill />}        
      </button>
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