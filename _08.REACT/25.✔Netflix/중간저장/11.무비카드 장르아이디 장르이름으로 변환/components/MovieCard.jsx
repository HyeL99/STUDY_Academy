import React from 'react'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MovieCard = ({movie}) => {
const {title,poster_path,release_date, genre_ids,vote_average,adult} = movie;
  let realeaseDateArray = release_date.split('-');
  const genreList = useSelector(state=>state.movie.genreList);

  return (
    <div className="cardWarp">
      <div  className='cardImageWrap'>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_multi_faces${poster_path}`} alt="" />
      </div>
      <div className="cardInfo">
        <div className="top">
          <h3>{title}</h3>
          <div className="badgePlace">
            <div className="rate">
              {adult ? <Badge bg="danger">19+</Badge>:<Badge bg="success">R</Badge>}<br />
            </div>
            <div className="genres">
              {genre_ids.map((item,index) => <Badge bg="secondary" key={index}>{genreList.find(genre=> genre.id===item).name}</Badge>)}
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>
            ⭐{vote_average}
          </p>
          <p>🎬{`${realeaseDateArray[0]}년 ${realeaseDateArray[1]}월 ${realeaseDateArray[2]}일`}</p>
        </div>
      </div>
    </div>
    
  )
}

export default MovieCard
