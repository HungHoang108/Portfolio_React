import React from 'react'
import ProjectCard from '../../component/card/card.component'

import './project.styles.scss'

const Project = () => {
  return (
    <div className='project-route'>
      <div className='project-route-card'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      </div>

    </div>
  )
}

export default Project