import React from 'react';

const Hello = (props) => {
    return (
        <div className={props.class} style={{ color: props.color }}>안녕하세요! {props.name ? props.name + '님!' : ''}</div>
    )
}
//props가 설정되지 않았을 때, defaultProps
Hello.defaultProps = {
    name: 'no-name',
    class: ''
}
export default Hello;

/*
    {{객체}}
    - 밖의 중괄호는 자바스크립트 사용을 위해 사용해줌을 의미
    - 안의 중괄호는 객체를 위미(style sheet 삽입)
*/