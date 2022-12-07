import React from 'react'
import styles from './Button1.module.css' //styles대신 다른 단어로도


const Button = () => {
    return (
        <button className={styles.button}>Button1</button>
    )
}

export default Button

//컴퍼넌트 안에 다른 컴퍼넌트나 요소가 사용되었을때는 { children }
//컴퍼넌트sms HTML태그처럼 열리고 닫힌 형태로 쓸 수 있다