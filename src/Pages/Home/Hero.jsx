import React from 'react'
import CTA_btn from '../../Components/CTA_btn/CTA_btn'
import heroImg from '../../assets/images/home/heroDesktop.png' 
import './hero.css'

const Hero = () => {
  return (
    <div className='hero-section'>
        <img className='mobile-version-img' src={heroImg} alt="image" />
        {/* <img className='mobile-version-img' src="src\assets\images\home\heroDesktop.png" alt="image" /> */}
        <div className="discription">
          <h2>Unforgettable Events, All in One Place</h2>
          <h3>Weddings, Birthday parties, Gatherings and more...</h3>
          <CTA_btn />
        </div>
    </div>
  )
}

export default Hero
