import React from 'react'
import './sectionHome.css'

const Section = ({title, text, image, reverse}) => {
  return (
    <>
      <section className={`home-section ${reverse ? "reverse" : ""}`}>
        <div className="home-section-discription">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className="section-img">
          <img src={image} alt='img' />
        </div>
      </section>
    </>
  )
}

export default Section
