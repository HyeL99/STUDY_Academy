import React from 'react'

const Banner = ({movie}) => {
  console.log('banner',movie);
  return (
    <div className='banner' style={{background:`url(https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces${movie.poster_path}) no-repeat center / cover`}}>
      <div className="banner-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default Banner
