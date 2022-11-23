import React from 'react'

// const Box = (props) => {
//   return (
//     <div className = "box">
//       BOX0{props.num}<br />
//       {props.name}
//     </div>
//   )
// }
    const Box = ({num, name}) => {
        const clickBtn = () => {
        alert('LET USE REACT COMPONENT!!')
    }

    return (
        <div className = "box">
        BOX0{num}<br />
        {name}<br />
        <button onClick={clickBtn}>클릭!</button>
        </div>
    )
}

export default Box;
/*
    props, 다른 이름도 가능, 컴포넌트에 다이나믹한 값을 주고 싶을 때 사용
*/