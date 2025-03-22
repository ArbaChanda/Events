import React from 'react'
import './gallery.css'
import CTA_btn from '../../Components/CTA_btn/CTA_btn';
import DesktopNavbar from '../../Components/Desktop-Navbar/DesktopNavbar';
import MobileNavbar from '../../Components/Mobile-Navbar/MobileNavbar';
import Footer from '../../Components/Footer/Footer';
import Hero from './Hero';
import Pictures from './Pictures';

const Gallery = () => {
  return (
    <div>

        {/* Mobile navbar  */}
      <div className='navbar'>
        <MobileNavbar />
      </div>

      <Hero />
      
      <Pictures />

      <div className="call-to-action">
      <CTA_btn />
      </div>

      <div className="partition"></div>
      <div className="footerNav">
      <DesktopNavbar />   
      </div>
      <div className="partition2"></div>

      <Footer />
    </div>
  )
}

export default Gallery
