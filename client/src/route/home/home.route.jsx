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
                  
                  <p><span className='home-about-text-hello'>Hello!</span>  My name is Hung Evan, I'm a full-stack developer trainee at
                Integrify with a strong e-commerce background and a passion for building scalable applications. I've been focusing
                on improving my skills in JavaScript and ReactJS, and now I'm also learning TypeScript, C#, and .NET. As an eager
                learner, I'm always looking for new challenges and opportunities to grow as a developer. Please don't hesitate to
                contact me if you're interested in collaborating or learning more about my work.</p>
                </div>
                
              </div>
              <div className='home-about-button'>
                <UniButton url="mailto:hung.hoang@myy.haaga-helia.fi" variant="info" buttonName="Let's talk"/>
              </div>
          </div>
        </div>

        <div className='home-edu'>
          <h3>Education</h3>
          <div className='home-edu-school'>
            <div className='home-edu-helia'>
              <h4>Haaga-Helia Ammattikorkeakokulu <span><h6>Business Information Technology | Software Engineering</h6></span> </h4>
              <p>Identify, design, and create software apps based on client needs with suitable methods and tools. Understanding the importance of testing and quality insurance in a successful project. <br /><br /><span><h5 className='home-edu-haaga-hashtag'>#fontenddev #fullstack #backend</h5></span></p>
            </div>

            <div className='home-edu-xamk'>
              <h4 >South-Eastern Finland UAS | <span><h6>International Business | Trade & Marketing</h6></span></h4>
              <p>BBA | Ecommerce | Digital business | International Entrepreneurship | International Business | Marketing 
              <br /><br /><span><h5 className='home-edu-haaga-hashtag'>#marketing #ecom #trade #teamwork</h5></span>
              </p>
            </div>
          </div>        
        </div>

        <div className='home-skill'>
          <div>
            <h3>My Skills</h3>
            
            <div className='home-skill-tech'>
              <div className='home-skill-tech-col'>
                <div>
                  <div>Frontend</div>
                  <hr />
                  <div className='home-skill-item'><h4>Html SCSS</h4></div>
                  <div className='home-skill-item'><h4>JavaScript/TypeScript</h4></div>
                  <div className='home-skill-item'><h4>ReactJ/Redux</h4></div>
                  <div className='home-skill-item'><h4>Bootstrap</h4></div>
                </div>
                <div>
                  <div>Backend</div>
                  <hr />
                  <div className='home-skill-item'><h4>NodeJs/Express</h4></div>
                  <div className='home-skill-item'><h4>MongoDB</h4></div>
                  <div className='home-skill-item'><h4>C# .NET</h4></div>
                </div>
                <div>
                  <div>Others</div>
                  <hr />
                  <div className='home-skill-item'><h4>Git</h4></div>
                  <div className='home-skill-item'><h4>Jest</h4></div>
                  <div className='home-skill-item'><h4>Rest API</h4></div>
                </div>
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
