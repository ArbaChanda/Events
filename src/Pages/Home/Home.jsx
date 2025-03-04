import React from 'react'
import './home.css'
import Button from '../../Components/Button/Button';
import Hero from './Hero';
import DesktopNavbar from '../../Components/Desktop-Navbar/DesktopNavbar';
import MobileNavbar from '../../Components/Mobile-Navbar/MobileNavbar';

const Home = () => {
  return (
    <>
      <div className='navbar'>

        {/* Mobile navbar  */}
        <MobileNavbar />

        {/* Desktop navbar  */}
        <DesktopNavbar />

      </div>
      <Hero />
    </>
  )
}

export default Home
