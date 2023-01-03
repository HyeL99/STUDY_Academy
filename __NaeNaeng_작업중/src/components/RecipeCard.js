import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({item}) => {
  return (
    <li>
      <Link to='#' className='shadowBottom'>
        <span class="img"></span>
        <div class="text">
          <h3>{item.title}</h3>
          <p class="writer">{item.writerEmail}</p>
          <div class="tag">
            게시물 태그<br />
            <p class="tagList">
              {item.tag.map((tagItem,index)=> {return <span key={index}>#{tagItem}&nbsp; &nbsp;</span>})}
            </p>
          </div>
          <span class="time">{item.time}분 소요</span>
        </div>
      </Link>
    </li>
  )
}

export default RecipeCard