import React from 'react'
import UniButton from '../../component/button/button.component'
import hungImg from '../../img/hung.png'


import './home.styles.scss'

const Home = () => {

  return (
    <div className='home-box'>
      
        <div className='home-about-box'>
          
          <div className='home-about-content'>
              <div className='home-about-img'>
                <img  src={hungImg} alt="personalImage" width={200}/>
              </div>

              <div className='home-about-textbox'>
                <div className='home-about-text'>
                  <p>Passionate Software engineer, proficient in HTML, CSS, Reactjs, Notejs, MongoDB, Expressjs .</p>
                </div>
                
              </div>
              <div className='home-about-button'>
                <UniButton variant="info" buttonName="Let's talk"/>
              </div>
          </div>
        </div>

        <div className='home-edu'>
          <h3>Education</h3>
          <div className='home-edu-school'>
            <div className='home-edu-xamk'>

              <h4>Haaga-Helia Ammattikorkeakokulu</h4>
              <p>The program focuses on training student to be not just a coder but a software engineer who are able to work on end to end proccess of a project from idea to final product. </p>
            </div>

            <div className='home-edu-helia'>
              <h4 >South-Eastern Finland UAS</h4>
              <p>BBA | Ecommerce | Digital business | International Entrepreneurship | International Business | Marketing</p>
            </div>
          </div>        
        </div>

        <div className='home-skill'>
          <div>
            <h3>My Skills</h3>
            
            <div className='home-skill-tech'>
              <h5>Tech</h5>
              <div className='home-skill-tech-col'>
                <div className='home-skill-item'><h4>Html SCSS</h4></div>
                <div className='home-skill-item'><h4>JavaScript</h4></div>
                <div className='home-skill-item'><h4>ReactJs/Redux</h4></div>
                <div className='home-skill-item'><h4>NodeJs, Express</h4></div>
                <div className='home-skill-item'><h4>Bootstrap</h4></div>
                <div className='home-skill-item'><h4>Rest API</h4></div>
                <div className='home-skill-item'><h4>Git</h4></div>
                <div className='home-skill-item'><h4>MongoDB</h4></div>
                <div className='home-skill-item'><h4>Firebase</h4></div>
              </div>
            </div>

            <div className='home-skill-business'>
              <h5>Business</h5>
              <div className='home-skill-business-col'>
                  <h4>Facebook/Pinterest Ads</h4>
                  <h4>Google/Bing Shopping Ads</h4>
                  <h4>E-commerce</h4>
                  <h4>Shopify</h4>
                  <h4>SEO</h4>
                  <h4>Digital Marketing</h4>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Home