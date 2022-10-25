import React from 'react';

const Hello02 = (props) => {
    console.log(props)
    return (
        <div className={props.class01} style={{ color: props.color }}>안녕하세요! {props.name ? props.name + '님!' : ''}</div>
    )
}
export default Hello02;

/*
    {{객체}}
    - 밖의 중괄호는 자바스크립트 사용을 위해 사용해줌을 의미
    - 안의 중괄호는 객체를 위미(style sheet 삽입)
*/