import React from 'react'
import './about.css'
import ImageCluster from '../../Components/Image-Cluster/ImageCluster';

const About = () => {
  return (
    <>
    <div className="about">


        <div className="about-overview">
            <h3>What we offer</h3>
            <p>Salon Madrid stands out as a refined and adaptable event venue, perfect for a wide range of gatherings. Whether it's an elegant wedding, a lively celebration, or a professional corporate event, the space is designed to accommodate diverse occasions with style and sophistication.
            <br />
            <br />
            With a strong emphasis on seamless event planning, Salon Madrid ensures that every detail is thoughtfully considered. From its inviting ambiance to its versatile amenities, the venue is tailored to create memorable experiences. A dedicated team is always available to assist with inquiries, making it easy for guests and planners to explore the possibilities and bring their vision to life.</p>
        </div>


        <ImageCluster />


    </div>
    </>
  )
}

export default About
