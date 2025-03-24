import React from 'react'
import './contact.css'
import Hero from './Hero';
import Form from './Form';
import DesktopNavbar from '../../Components/Desktop-Navbar/DesktopNavbar';
import MobileNavbar from '../../Components/Mobile-Navbar/MobileNavbar';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  return (
    <div>

      <div className='navbar'>
        {/* Mobile navbar  */}
        <MobileNavbar />
      </div>

      <Hero />

      <Form />

      <div className="partition"></div>
      <div className="footerNav">
      <DesktopNavbar />   
      </div>
      <div className="partition2"></div>

      <Footer />
    </div>
  )
}

export default Contact
