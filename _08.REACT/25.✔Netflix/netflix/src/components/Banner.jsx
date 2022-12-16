import React from 'react'

const Banner = ({movie}) => {
  console.log('banner',movie);
  return (
    <div id='banner' style={{background:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}) no-repeat top / cover`}}>
      <div className="banner-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default Banner
