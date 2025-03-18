import React from 'react'
import './desktopNavbar.css'
import { Link } from 'react-router-dom';

const DesktopNavbar = () => {
  return (
    <div className='desktop-nav'>
      {/* Desktop version  */}
        <h1>Salon Madrid</h1>
        <div className="desktop-nav-components">
          <ul>
          <Link className='nav-components' to='/'>Home</Link>
          <Link className='nav-components' to='/services'>Services</Link>
          <Link className='nav-components' to='/contact'>Contact</Link>
          <Link className='nav-components' to='/gallery'>Gallery</Link>
          </ul>
        </div>
    </div>
  )
}

export default DesktopNavbar
