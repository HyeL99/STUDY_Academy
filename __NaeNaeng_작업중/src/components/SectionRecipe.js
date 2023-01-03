import React from 'react';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';
import './SectionRecipe.scss';

const SectionRecipe = () => {
  let recipeList = useSelector(state => state.dataList.recipes)
  if(recipeList.length > 8){
    recipeList = recipeList.slice(0,8);
  }
  return (
    <section id='sectionRecipe'>
      <div className="inner">
        <h2>[업로드된 레시피]</h2>
        <ul className='scrollBottom'>
          {recipeList.map((item,index)=><RecipeCard item={item} key={index}/>)}
        </ul>
      </div>
    </section>
  )
}

export default SectionRecipe