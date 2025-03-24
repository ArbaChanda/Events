import React from 'react'
import './serviceType.css'
import { Link } from "react-router-dom";

const ServiceType = ({img, nameOfService}) => {
  return (
    <>
    <Link to='/gallery'>
    <div className="service-type-section">
        <img src={img} alt="img" className="service-type-section-img" />
        <h4>{nameOfService}</h4>
    </div>
    </Link>
    </>
  )
}

export default ServiceType
