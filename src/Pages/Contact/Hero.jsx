import React from 'react'
import './hero.css'
import CTA_btn from '../../Components/CTA_btn/CTA_btn'
import heroImg from '../../assets/images/contact/contactHero.png'

const Hero = () => {
  return (
    <>
        <div className='hero-section'>
            <img className='contact-hero-img' src={heroImg} alt="image" />
            <div className="discription">
                <h2>Get in Touch – Let's Make Something Amazing Together!</h2>
                <CTA_btn />
        </div>
        </div>
    </>
  )
}

export default Hero
