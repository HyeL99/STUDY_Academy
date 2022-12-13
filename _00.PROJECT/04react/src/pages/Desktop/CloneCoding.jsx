import React from 'react';
import { useSelector } from 'react-redux';
import './CloneCoding.scss'
import CloneCodingCard from '../../components/CloneCodingCard';

const CloneCoding = () => {
  const cloneList = useSelector(state => state.clones)
  return (
    <div id='cloneCoding' className='scrollContainer'>
      <div className="top">
        <span>행성 아이콘</span>
        <h2>CLONE CODING</h2>
      </div>
      <ul>
          {cloneList.map((item,index)=>(
            <CloneCodingCard clone={item} key={index} />
          ))}
      </ul>
    </div>
  )
}

export default CloneCoding