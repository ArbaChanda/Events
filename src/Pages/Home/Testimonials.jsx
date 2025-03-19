import React from 'react'
import './testimonials.css'
import TestimonialCard from '../../Components/TestimonialCard/TestimonialCard';
import testimonial1 from '../../assets/images/home/testimonial1.png'
import testimonial2 from '../../assets/images/home/testimonial2.png'
import testimonial3 from '../../assets/images/home/testimonial3.png'
import testimonial4 from '../../assets/images/home/testimonial4.png'
import testimonial5 from '../../assets/images/home/testimonial5.png'
import testimonial6 from '../../assets/images/home/testimonial6.png'

const Testimonials = () => {
  return (
    <>
    <div className='testimonials-section'>
      <h3 className='testimonials-title'>Appreciation from our clients!!</h3>
      <div className="testimonials">

        <TestimonialCard 
          image={testimonial1}
          name="Silvia Torres"
          content="I highly recommend this salon. They are very professional and their staff knows everything very friendly service was amazing. "
        />

        <TestimonialCard 
          image={testimonial2}
          name="Mr. Hernández"
          content="The best event venue in Colorado..!"
        />

        <TestimonialCard 
          image={testimonial3}
          name="Noemi Garay"
          content="it has all the attention and they are very kind the salon is not to be said beautiful 💚"
        />

        <TestimonialCard 
          image={testimonial4}
          name="Veronica Reyes"
          content="Elegance, quality and service is what you experience at Salon Madrid. I recommend it, look no further."
        />

        <TestimonialCard 
          image={testimonial5}
          name="Martha Cervantes"
          content="Well in reality the whole event was very good!! I like it a lot!! And the living room is perfect 👍 👍"
        />

        <TestimonialCard 
          image={testimonial6}
          name="Bianca Berrios"
          content="This place is beautiful, clean and organized! Food is really good! The owner and all personnel are nice and always willing to help! This is the place to book your event"
        />

      </div>
    </div>
    </>
  )
}

export default Testimonials
