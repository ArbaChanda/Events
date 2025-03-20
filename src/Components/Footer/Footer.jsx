import React from 'react'
import './footer.css'
import footerImg from '../../assets/images/home/footer.jpg'

const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className="footer-img">
            <img src={footerImg} alt="img" />
        </div>

        <div className="socials">
            <a href="https://www.facebook.com/salonmadrideventcenter/" target='_blank' rel="noopener noreferrer">FACEBOOK</a>
            <a href="https://www.instagram.com/explore/locations/321233775/salon-madrid-event-center/?hl=en" target='_blank' rel="noopener noreferrer">INSTAGRAM</a>
        </div>

        <h4 className='footer-quote'>Whether it's a small gathering or a grand celebration, we’re here to make every moment special and every memory unforgettable</h4>

        <div className="footer-contact">
            <p>(720) 979-2001</p>
            <p>ml@salonmadridco.com</p>
            <p>6495 Monaco St commerce city, CO 80022</p>
        </div>
    </footer>
    </>
  )
}

export default Footer
