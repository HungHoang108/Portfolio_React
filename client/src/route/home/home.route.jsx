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
                  
                  <p><span className='home-about-text-hello'>Hello!</span>  My name is Hung, a software engineering student at Haaga-Helia UAS. I am passionate about programming and solving problems. My friends see me as a trustworthy person with ambition and a never-give-up mindset.</p>
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
              {/* <h5>Business Information Technology</h5> */}
              {/* <p>The program is a combination between tech and business. Technology will however be a major part which covers a full process of software development</p> */}
              <p>Identify, design and create software app based on client's needs with suitable methods and tools. Understanding importance of testing and quality inssurance 
                in a successful project. <br /><br /><span><h5 className='home-edu-haaga-hashtag'>#fontenddev #fullstack #backend</h5></span></p>
              
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
              <h5>Tech</h5>
              <div className='home-skill-tech-col'>
                <div className='home-skill-item'><h4>Html SCSS</h4></div>
                <div className='home-skill-item'><h4>JavaScript</h4></div>
                <div className='home-skill-item'><h4>ReactJ, Redux</h4></div>
                <div className='home-skill-item'><h4>NodeJs, Express</h4></div>
                <div className='home-skill-item'><h4>Bootstrap</h4></div>
                <div className='home-skill-item'><h4>Rest API</h4></div>
                <div className='home-skill-item'><h4>Git</h4></div>
                <div className='home-skill-item'><h4>MongoDB/SQL</h4></div>
                <div className='home-skill-item'><h4>Firebase</h4></div>
                <div className='home-skill-item'><h4>TypeScirpt</h4></div>
                <div className='home-skill-item'><h4>Java</h4></div>
                <div className='home-skill-item'><h4>C# .NET</h4></div>
                <div className='home-skill-item'><h4>Jest</h4></div>
                <div className='home-skill-item'><h4>Azure</h4></div>
                {/* <div className='home-skill-item'><h4>TypeScript</h4></div>
                <div className='home-skill-item'><h4>Jest</h4></div>
                <div className='home-skill-item'><h4>Firebase</h4></div> */}
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