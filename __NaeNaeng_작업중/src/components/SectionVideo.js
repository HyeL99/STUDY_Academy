import React from 'react'
import { useSelector } from 'react-redux';
import VideoCard from './VideoCard';
import './SectionVideo.scss'

const SectionVideo = () => {
  let videoList = useSelector(state => state.dataList.videos)
  if(videoList.length > 4){
    videoList = videoList.slice(0,4);
  }
  return (
    <section id='sectionVideo'>
      <div className="inner">
        <h2>[추천 레시피 영상]</h2>
        <ul>
          {videoList.map((item,index)=><VideoCard item={item} key={index}/>)}
        </ul>
      </div>
    </section>
  )
}

export default SectionVideo