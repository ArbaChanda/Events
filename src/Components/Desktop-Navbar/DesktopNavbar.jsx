import React from 'react'
import './desktopNavbar.css'

const DesktopNavbar = () => {
  return (
    <div className='desktop-nav'>
      {/* Desktop version  */}
        <h1>Salon Madrid</h1>
        <div className="desktop-nav-components">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Gallery</li>
          </ul>
        </div>
    </div>
  )
}

export default DesktopNavbar
