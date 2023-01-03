import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from './CategoryItem';
import './SectionCategory.scss'



const SectionCategory = () => {
  const categoryList = useSelector(state => state.dataList.categorys);
  return (
    <section id='sectionCategory'>
      <div className="inner">
        <h2>[레시피 분류]</h2>
        <ul>
          {categoryList.map((item,index)=>{
            return (
              <CategoryItem key={index} item={item} />
            )
          })}
        </ul>
        
      </div>
    </section>
  )
}

export default SectionCategory