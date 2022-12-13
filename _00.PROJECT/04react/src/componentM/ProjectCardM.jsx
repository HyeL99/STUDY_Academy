import React from 'react'

const ProjectCardM = ({project}) => {
  const {id,name,working,contribution,tool,page,contents, git, demo, preview} = project;
  return (
    <div>ProjectCardM {name}</div>
  )
}

export default ProjectCardM