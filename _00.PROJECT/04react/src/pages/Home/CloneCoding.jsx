import React from 'react';
import { useSelector } from 'react-redux';
import './CloneCoding.scss'
import CloneCodingCard from '../../components/CloneCodingCard';

const CloneCoding = () => {
  const cloneList = useSelector(state => state.clones)
  return (
    <div id='cloneCoding' className='scrollContainer'>
      <h2>CLONE CODING</h2>
      <ul>
          {cloneList.map((item,index)=>(
            <CloneCodingCard clone={item} key={index} />
          ))}
      </ul>
    </div>
  )
}

export default CloneCoding