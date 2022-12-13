import React from 'react'
import { useSelector } from 'react-redux';
import CloneCardM from '../../componentM/CloneCardM';

const CloneM = () => {
  const cloneList = useSelector(state => state.clones);
  return (
    <div id='cloneCodingM'>
      <h2>CLONE CODING</h2>
      <ul>
        {cloneList.map((item,index)=>(
          <CloneCardM clone={item} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default CloneM