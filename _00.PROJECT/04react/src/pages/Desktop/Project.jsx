import React from 'react'
import { useSelector } from 'react-redux'
import './Project.scss'
import ProjectCard from '../../componentsD/ProjectCard'
import ProjectHeader from '../../componentsD/ProjectHeader'

const Project = ({setCurrentPage,setScrollH}) => {
  const projectList = useSelector(state => state.projects);

  return (
    <div id='projectPage'>
      <ProjectHeader setCurrentPage={setCurrentPage} setScrollH={setScrollH} />
      <ul className='projectContainer'>
        {projectList.map((item,index) => {
          return <ProjectCard project={item} key={index} />
        })}
      </ul>
    </div>
  )
}

export default Project