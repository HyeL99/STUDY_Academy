import React from 'react';

const Hello01 = ({class01, color, name, special}) => {
    return (
        <div className={class01} style={{ color: color }}>
            {/*special ? <b>*</b> : null}안녕하세요! {name ? name + '님!' : ''*/}
            {special && <b>*</b>}안녕하세요! {name ? name + '님!' : ''}
        </div>
    )
}
//props가 설정되지 않았을 때, defaultProps
Hello01.defaultProps = {
    class: '',
    color: 'inherit'
}
export default Hello01;

/*
    삼항연산자 사용
    - special ? <b>*</b> : null
    
    삼항연산자 대신 &&(앤드연산자, 모든 값이 true일 때에만 성립)를 사용하면 더 깔끔
    - 둘중 하나라도 false라면 아예 보여주지 않음
    - special && <b>*</b>
*/