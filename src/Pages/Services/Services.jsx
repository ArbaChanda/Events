import React from 'react'
import './services.css'
import CTA_btn from '../../Components/CTA_btn/CTA_btn';
import DesktopNavbar from '../../Components/Desktop-Navbar/DesktopNavbar';
import Footer from '../../Components/Footer/Footer';
import Hero from './Hero';
import About from './About';
import Types from './Types';

const Services = () => {
  return (
    <div>
      <Hero />

      <About />

      <Types />

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
