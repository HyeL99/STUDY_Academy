import React from 'react';

const Hello01 = ({class01, color, name}) => {
    return (
        <div className={class01} style={{ color: color }}>안녕하세요! {name ? name + '님!' : ''}</div>
    )
}
//props가 설정되지 않았을 때, defaultProps
Hello01.defaultProps = {
    name: '...',
    class: '',
    color: 'inherit'
}
export default Hello01;

/*
    {{객체}}
    - 밖의 중괄호는 자바스크립트 사용을 위해 사용해줌을 의미
    - 안의 중괄호는 객체를 위미(style sheet 삽입)
*/