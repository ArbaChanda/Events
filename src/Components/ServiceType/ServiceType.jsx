import React from 'react'
import './serviceType.css'

const ServiceType = ({img, nameOfService}) => {
  return (
    <>
    <div className="service-type-section">
        <img src={img} alt="img" className="service-type-section-img" />
        <h4>{nameOfService}</h4>
    </div>
    </>
  )
}

export default ServiceType
