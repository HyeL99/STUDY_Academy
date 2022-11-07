import React from 'react'
import styles from './Button02.module.css'

const Button02 = () => {
    return (
        <div>
            <button className={styles.button}>Button02</button>
        </div>
    )
}

export default Button02

/*
    컴포넌트 안에 다른 컴포넌트나 요소가 사용되었을 때에는 {children}사용
    컴포넌트는 HTML 태그처럼 마크업 형태로 쓸 수 있다.
*/