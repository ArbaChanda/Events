import React from 'react'
import './testimonialCard.css'

const TestimonialCard = ({image, name, content}) => {
  return (
    <>
    <div className="testimonial-card">
        <div className="testimonial-card-header">
           <img src={image} alt="img" />
            <p>{name}</p>
        </div>
        <div className="testimonial-card-content">
            <p>{content}</p>
        </div>
    </div>
    </>
  )
}

export default TestimonialCard
