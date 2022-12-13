import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCardM from '../../componentM/ProjectCardM';

const ProjectM = () => {
  const projectList = useSelector(state => state.projects);

  return (
    <div id='projectM'>
      <h2>PROJECT</h2>
      <ul className='projectContainer'>
        {projectList.map((item,index) => {
          return <ProjectCardM project={item} key={index} />
        })}
      </ul>
    </div>
  )
}

export default ProjectM