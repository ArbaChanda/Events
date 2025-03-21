import React from 'react'
import './home.css'
import Hero from './Hero';
import MobileNavbar from '../../Components/Mobile-Navbar/MobileNavbar';
import Section from '../../Components/Section(home)/SectionHome';
import img1 from "../../assets/images/home/img1.jpg";
import img2 from "../../assets/images/home/img2.png";
import img3 from "../../assets/images/home/img3.png";
import Testimonials from './Testimonials';
import CTA_btn from '../../Components/CTA_btn/CTA_btn';
import DesktopNavbar from '../../Components/Desktop-Navbar/DesktopNavbar';
import Footer from '../../Components/Footer/Footer';


const Home = () => {
  console.log(img1, img2, img3)
  return (
    <>
      <div className='navbar'>

        {/* Mobile navbar  */}
        <MobileNavbar />

      </div>

      <Hero />

      <Section
        title="Unmatched Ambiance & Comfort"
        text="Experience the perfect blend of elegance and comfort. Our indoor venue is designed to provide a welcoming and stylish atmosphere for any event..."
        image={img1}
        reverse={false} // Image on right
      />
      <Section
        title="Professional Audio & DJ Setup"
        text="Bring your events to life with high-quality sound and lighting. Whether you need a crystal-clear microphone setup for speeches or a DJ booth with an electrifying party vibe..."
        image={img2}
        reverse={true} // Image on left
      />
      <Section
        title="Hassle-Free Event Planning"
        text="We handle the details so you can enjoy the moment. Our dedicated team ensures your event is set up exactly as you envision it..."
        image={img3}
        reverse={false} // Image on right
      />

      <Testimonials />

      <div className="call-to-action">
      <CTA_btn />
      </div>

      <div className="footerNav">
      <DesktopNavbar />   
      </div>

      <Footer />
    </>
  )
}

export default Home
