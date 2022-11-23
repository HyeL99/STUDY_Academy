/*
    컴포넌트를 여러개 거쳐서 전달하는 상황
    - Context API를 이용해서 간단하게 만듦
    - 프로젝트 안에서 전역적으로 사용할 수 있는 값을 관리
*/
import React, { createContext, useContext } from 'react'
// createContext()로 만든 변수(MyContext)는 컴포넌트처럼 쓰이기 때문에 대문자로 시작해야함
const MyContext = createContext('defaultValue')

const Child = () => {
    const text = useContext(MyContext);
    return <div>안녕하세요? &nbsp;&nbsp;{text}</div>
}
const Parent = () => {
    return <Child />
}
const GrandParent = () => {
    return <Parent />
}

const Context = () => {
    return (
        <div>
            <MyContext.Provider value='Good😊'>
                <GrandParent />
            </MyContext.Provider>
        </div>
    )
}
/*
    createContext로 만들어준 컴포넌트에는 Provider라는 내장 프로퍼티가 존재
    contextName.Provider를 통해 value값 설정
*/

export default Context