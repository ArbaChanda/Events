import React from 'react'
import './hero.css'
import CTA_btn from '../../Components/CTA_btn/CTA_btn'
import heroImg from '../../assets/images/services/serviceHero.png' 

const Hero = () => {
  return (
   <div className='services-hero-section'>
        <img className='hero-img' src={heroImg} alt="image" />
        <div className="discription">
          <h2>Your Event, Our Expertise</h2>
          <h3>We offter a wide range of services tailored to make your occasion perfect.</h3>
          <CTA_btn />
        </div>
    </div>
  )
}

export default Hero
