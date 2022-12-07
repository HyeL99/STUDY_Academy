import React from 'react'
import aa from './Button2.module.css'


const Button = () => {
    return (
        <button className={aa.button}>Button2</button>
    )
}

export default Button

//컴퍼넌트 안에 다른 컴퍼넌트나 요소가 사용되었을때는 { children }
//컴퍼넌트sms HTML태그처럼 열리고 닫힌 형태로 쓸 수 있다