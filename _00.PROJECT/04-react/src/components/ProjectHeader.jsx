import React from 'react'
import { useSelector } from 'react-redux'
import './ProjectHeader.scss'

const ProjectHeader = () => {
  const projectList = useSelector(state => state.projects);
  return (
    <div id='projectHeader'>
      <span className="backBar"></span>
      <h2>PROJECTS</h2>
      <nav>
        <ul>
          {projectList.map((item,index)=>(
            <li key={index}>
              <div className="planetIcon"></div>
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