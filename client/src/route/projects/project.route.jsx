import React from 'react'
import ProjectCard from '../../component/card/card.component'
import EcomImg from '../../img/ecom.png'
import HsApi from '../../img/Helsiki-API.png'
import NoteKeeper from '../../img/NoteKeeper.png'
import Natour from '../../img/Na-tours.png'
import Portfolio from '../../img/portfolio.png'
import drumKit from '../../img/drumKit.png'

import './project.styles.scss'

const Project = () => {
  return (
    <div className='project-route'>
      <div className='project-route-card'>
      <ProjectCard
      title='E-commerce website'
      description='An Udemy course project with Front-End: ReactJs and back-end: Firebase'
      image={EcomImg}
      gitHubUrl='https://github.com/HungHoang108/ecom-web'
      url='https://genuine-cupcake-ce7602.netlify.app/'
      />
      <ProjectCard
      title='Search Helsinki'
      description='The app using Helsinki open API data to allow users search for places, events and incoming activities in the city. Stacks: Reactjs, NodeJs'
      image={HsApi}
      gitHubUrl='https://github.com/HungHoang108/Helsinki_ApiData'
      />
      <ProjectCard
      title='Note Keeper'
      description='A full-stack app which allows user to take notes. Stack: MongoDB, Express, React, Nodejs'
      image={NoteKeeper}
      gitHubUrl='https://github.com/HungHoang108/NoteKeeper-FullStack/tree/master'
      />
      <ProjectCard
      title='My Portfolio'
      description='The app is this website you are looking at. Made with Reactjs, SCSS, and Bootstrap'
      image={Portfolio}
      gitHubUrl='https://github.com/HungHoang108/Portfolio_React'
      />

      <ProjectCard
      title='Natours'
      description='An Udemy course project with advanced Html and CSS'
      image={Natour}
      gitHubUrl='https://github.com/HungHoang108/Advanced-Css-Natours'
      />

      <ProjectCard
      title='DrumkitOnline'
      description='A challange from my Udemy course - The Complete 2022 Web Development Bootcamp by Dr. Angela Yu. The drumkit allows users to play directly on the browswer by keyboards or mouse control. Stack: Html, CSS, JavsScript'
      image={drumKit}
      url='https://hunghoang108.github.io/DrumkitOnline/'
      gitHubUrl='https://github.com/HungHoang108/DrumkitOnline'
      />
      </div>

    </div>
  )
}

export default Project