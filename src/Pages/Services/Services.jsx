import React from 'react'
import './services.css'
import CTA_btn from '../../Components/CTA_btn/CTA_btn';
import DesktopNavbar from '../../Components/Desktop-Navbar/DesktopNavbar';
import Footer from '../../Components/Footer/Footer';

const Services = () => {
  return (
    <div>
      <p>This is services</p>

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

export default Services
