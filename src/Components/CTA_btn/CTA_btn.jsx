import React from 'react'
import './cta_btn.css'
import { Link } from "react-router-dom";

const CTA_btn = () => {
  return (
    <div className="book-now-btn">
      <Link to={"/contact"}>
        <button className="cta-btn">Book Now</button>
      </Link>
    </div>
  )
}

export default CTA_btn
