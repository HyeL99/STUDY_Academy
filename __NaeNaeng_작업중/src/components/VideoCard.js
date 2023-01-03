import React from 'react'

const VideoCard = ({item}) => {
  return (
    <li>
      <a href={item.link}>
        <img src={item.thumbnail} alt={item.title} />
        <h3>{item.title}</h3>
      </a>
    </li>
  )
}

export default VideoCard