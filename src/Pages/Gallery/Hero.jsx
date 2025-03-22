import React from 'react'
import CTA_btn from '../../Components/CTA_btn/CTA_btn'
import heroImg from '../../assets/images/gallery/galleryHero.png' 
import './hero.css'

const Hero = () => {
  return (
    <div className='hero-section'>
        <img className='hero-img' src={heroImg} alt="image" />
        <div className="discription">
          <h2>A glimpse into unforgettable moments—celebrations, laughter, and memories made. Scroll through and relive the magic of past events</h2>
          <CTA_btn />
        </div>
    </div>
  )
}

export default Hero
