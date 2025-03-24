import React from 'react'
import './types.css'
import ServiceType from '../../Components/ServiceType/ServiceType';
import service1 from '../../assets/images/services/about2.png'
import service2 from '../../assets/images/services/about3.png'
import service3 from '../../assets/images/services/about4.png'
import service4 from '../../assets/images/services/about5.png'

const Types = () => {
  return (
    <>
    <div className="types">
        <h3 className='types-heading'>Types Of Services</h3>
        <div className="types-of-services">

            <ServiceType 
            img={service1}
            nameOfService="Weddings" />
            <ServiceType 
            img={service2}
            nameOfService="Birthday Parties" />
            <ServiceType 
            img={service3}
            nameOfService="Formal Dinners" />
            <ServiceType 
            img={service4}
            nameOfService="Graduation Parties" />

        </div>
    </div>
    </>
  )
}

export default Types
