/*
    컴포넌트를 여러개 거쳐서 전달하는 상황
    - Context API를 이용해서 간단하게 만듦
    - 프로젝트 안에서 전역적으로 사용할 수 있는 값을 관리
*/
import React, { createContext, useContext } from 'react'

const Child = ({text}) => {
    return <div>안녕하세요? &nbsp;&nbsp;{text}</div>
}
const Parent = ({text}) => {
    return <Child text={text} />
}
const GrandParent = ({text}) => {
    return <Parent text={text} />
}

const Context = () => {
    return (
        <div>
            <GrandParent text='Good😊' />
        </div>
    )
}

export default Context