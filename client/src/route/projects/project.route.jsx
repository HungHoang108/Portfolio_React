import React from 'react'
import ProjectCard from '../../component/card/card.component'
import EcomImg from '../../img/ecom.png'
import HsApi from '../../img/Helsiki-API.png'
import NoteKeeper from '../../img/NoteKeeper.png'
import Natour from '../../img/Na-tours.png'
import JokeRank from '../../img/JokeRank.png'
import drumKit from '../../img/drumKit.png'

import './project.styles.scss'

const Project = () => {
  return (
    <div className='project-route'>
      <div className='project-route-card'>

      <ProjectCard
      title='Search Helsinki'
      description='The app using Helsinki open API data to allow users search for places, events and incoming activities in the city. Stacks: Reactjs, NodeJs'
      image={HsApi}
      gitHubUrl='https://github.com/HungHoang108/Helsinki_ApiData'
      />
      <ProjectCard
      title='Note Keeper'
      description='A full-MERN stack app which allows user register, login with Google or Email/username to take notes. Stack: MongoDB, Express, React, Nodejs, Firebase (authentication).'
      image={NoteKeeper}
      gitHubUrl='https://github.com/HungHoang108/NoteKeeper-FullStack/tree/master'
      />
            <ProjectCard
      title='Crwn E-com'
      description='A fully functional Udemy project with Front-End: ReactJs, back-end: Firebase, and Stripe payment'
      image={EcomImg}
      gitHubUrl='https://github.com/HungHoang108/ecom-web'
      url='https://crwnclothing-ecom.netlify.app/'
      />
      <ProjectCard
      title='JokeRank'
      description='A basic crud C# .Net app with authentification and search. Allowing users to register, login and create posts'
      image={JokeRank}
      gitHubUrl='https://github.com/HungHoang108/JokeRank'
      />

      <ProjectCard
      title='Natours'
      description='An Udemy course project with advanced Html and CSS.'
      image={Natour}
      gitHubUrl='https://github.com/HungHoang108/Advanced-Css-Natours'
      />

      <ProjectCard
      title='DrumkitOnline'
      description='An Udemy project, the drumkit allows users to play music directly on the browser using keyboards or mouse control. Stack: Html, CSS, JavsScript.'
      image={drumKit}
      url='https://hunghoang108.github.io/DrumkitOnline/'
      gitHubUrl='https://github.com/HungHoang108/DrumkitOnline'
      />
      </div>

    </div>
  )
}

export default Project