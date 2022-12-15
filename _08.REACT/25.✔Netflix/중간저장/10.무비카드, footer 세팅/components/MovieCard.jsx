import React from 'react'

const MovieCard = ({movie}) => {
  const {title,poster_path,release_date} = movie;
  let realeaseDateArray = release_date.split('-');
  return (
    <div className="cardWarp">
      <div>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_multi_faces${poster_path}`} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{`${realeaseDateArray[0]}년 ${realeaseDateArray[1]}월 ${realeaseDateArray[2]}일`}</p>
    </div>
    
  )
}

export default MovieCard
