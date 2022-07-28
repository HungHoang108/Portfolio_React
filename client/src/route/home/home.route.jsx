import React from 'react'
import './home.styles.scss'
import UniButton from '../../component/button/button.component'
import hungImg from '../../img/hung.png'

const Home = () => {
  return (
    <div className='home-box'>
      
        <div className='home-about-box'>
          <h3>About Me</h3>
          <div className='home-about-content'>
              <div className='home-about-img'>
                <img  src={hungImg} alt="personalImage" width={200}/>
              </div>
              <div className='home-about-text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt eos. Magnam pariatur culpa libero officia, eos quas voluptatem perferendis excepturi. Blanditiis sunt tempore odit eaque quo voluptas magni, consequuntur magnam modi fugiat vel excepturi quaerat sit exercitationem sint aut. Magnam vel esse impedit, ipsum dignissimos culpa obcaecati harum dolor!</p>
                  <UniButton variant="info" buttonName="Let's talk"/>
              </div>
          </div>
        </div>

        <div className='home-edu'>
          <h3>Education</h3>
          <div className='home-edu-school'>
            <div className='home-edu-xamk'>
              <h5>Haaga-Helia Ammattikorkeakokulu</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum, voluptates nulla tempore quasi veniam suscipit consequatur pariatur, officia eius quae alias! Facilis sit provident veritatis, accusantium officia ut dignissimos deserunt beatae? Obcaecati repudiandae, corporis, ad quis dolores ratione repellendus commodi, minima sunt quia veritatis unde libero aspernatur. Pariatur, earum. </p>
            </div>

            <div className='home-edu-helia'>
              <h5>South-Eastern Finland UAS</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, vitae reprehenderit iure esse assumenda adipisci sapiente facilis! Architecto aut aliquid consectetur, magni reprehenderit ab? Fugit nobis officia odio ipsa pariatur cumque, impedit dolores reprehenderit ad quo quod magnam magni ut nulla ab labore qui! Nulla cumque error exercitationem ullam ad, tenetur, vitae voluptate accusantium mollitia excepturi, iste quas dolores natus?</p>
            </div>
          </div>        
        </div>

        <div className='home-skill'>
          <div>
            <h3>Skills</h3>
            
            <div className='home-skill-tech'>
              <h5>Techs</h5>
              <div className='home-skill-tech-col'>
                  <h4>Html SCSS</h4>
                  <h4>JavaScript</h4>
                  <h4>ReactJs/Redux</h4>
                  <h4>NodeJs, Express</h4>
                  <h4>Bootstrap</h4>
                  <h4>RestAPI</h4>
                  <h4>MongoDB</h4>
                  <h4>Firebase</h4>
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
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Home