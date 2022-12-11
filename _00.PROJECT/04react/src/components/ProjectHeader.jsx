import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ProjectHeader.scss'
import $ from 'jquery'

const ProjectHeader = ({setCurrentPage,setScrollH}) => {
  const projectList = useSelector(state => state.projects);
  
  const dispatch = useDispatch();
  const scrollProject = async (page) => {
    let setPage = Number(page)+1;
    setScrollH(setPage * $(window).height());
    console.log(setPage);
    await setCurrentPage(++setPage);
  }
  return (
    <div id='projectHeader'>
      <span className="backBar"></span>
      <h2>PROJECTS</h2>
      <nav>
        <ul>
          {projectList.map((item,index)=>(
            <li key={index}>
              <div className="planetIcon" onClick={async ()=> await scrollProject(index)}></div>
              <p>{item.name}</p>
            </li>
            ))}
        </ul>
      </nav>
      <div>우주선아이콘</div>
    </div>
  )
}

export default ProjectHeader