import React from 'react'
import './Button.scss'
import classNames from 'classnames';

const Button = ({children, size='medium', color='yellow', outline, fullWidth}) => {
  return (
    <>
      {/* <button className={['Button', size].join(" ")}>{children}</button> */}
      {/* <button className={`Button ${size}`}>{children}</button> */}
      <button className={classNames('Button',size,color,{outline,fullWidth})}>{children}</button>
    </>
  )
}
// Button.defaultProps = {
//   size:'medium',
// }
export default Button

/*
  yarn add classnames  - classnames 라이브러리 설치
*/