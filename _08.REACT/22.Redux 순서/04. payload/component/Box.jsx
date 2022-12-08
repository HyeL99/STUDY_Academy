//여기서도 count 값을 사용
//useSelector를 이용하여 직접 가져다 쓰면 됨
import React from 'react'
import { useSelector } from 'react-redux'
import InnerBox from './InnerBox';

const Box = () => {
  const count = useSelector(state => state.count);
  return (
    <div style={{border:'1px solid blue'}}>
      <div>여기는 Box 컴포넌트 내부 {count}</div>
      <br />
      <InnerBox />
    </div>
    
  )
}

export default Box