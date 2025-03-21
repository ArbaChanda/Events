import React from 'react'
import './contact.css'
import CTA_btn from '../../Components/CTA_btn/CTA_btn';
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

      <p>this is contact</p>

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

export default Contact
