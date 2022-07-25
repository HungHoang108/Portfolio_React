import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import './nav-bar.styles.scss'

const NavBar = () => {
  return (
    <Fragment>
    <div className='nav-bar-box'>

        <div className='nav-bar-route'>
            <div>
                <Link to='/'>Home</Link>
            </div>

            <div>
                <Link to='/project'>Projects</Link>
            </div>

            <div>
                <Link to='contact'>Contact</Link>
            </div>

            <div>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>

        <div className='nav-bar-headline'>
            <h2>Hung Van Hoang</h2>
        </div>
        <div className='nav-bar-subheadline'>
            <h4>Full-stack Web developer</h4>
        </div>

    </div>
    <Outlet/>
    </Fragment>
  )
}

export default NavBar