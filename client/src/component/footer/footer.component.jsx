import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter, BsBootstrapFill } from "react-icons/bs";
import { FaReact, FaSass } from "react-icons/fa";
import './footer.styles.scss'

const Footer = () => {
  return (
    <div className='footer-box'>
        <div className='footer-social-link'>
            <a class="footer-link" href="https://www.linkedin.com/in/vhunghoang/"> <BsLinkedin size='2rem'/> LinkedIn</a>
            <a class="footer-link" href="https://twitter.com/"><BsTwitter size='2rem'/> Twitter</a>
            <a class="footer-link" href="https://github.com/HungHoang108"><BsGithub size='2rem'/> Github</a>
            
        </div>
        <div className='footer-copyright'>
            
            <p>© Made by Hung Hoang. 2022</p>
            <p><FaReact size='1.5rem'/> React <BsBootstrapFill size='1.5rem'/> Bootstrap & <FaSass size='1.5rem'/>SCSS <br />and Emailjs</p>
        </div>
    </div>
  )
}

export default Footer