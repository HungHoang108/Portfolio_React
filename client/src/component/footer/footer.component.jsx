import React from 'react'
import './footer.styles.scss'

const Footer = () => {
  return (
    <div className='footer-box'>
        <div className='footer-social-link'>
            <a class="footer-link" href="https://www.linkedin.com/in/vhunghoang/">LinkedIn</a>
            <a class="footer-link" href="https://twitter.com/">Twitter</a>
            <a class="footer-link" href="https://github.com/HungHoang108">Github</a>
            
        </div>
        <div className='footer-copyright'>
            <p>The web is made using Reactjs, SCSS, Bootstrap</p>
            <p>© Hung Hoang. 2022</p>
        </div>
    </div>
  )
}

export default Footer