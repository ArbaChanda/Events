import React from 'react'
import './imageCluster.css'
import about1 from '../../assets/images/services/about1.png'
import about2 from '../../assets/images/services/about3.png'
import about3 from '../../assets/images/services/about2.png'

const ImageCluster = () => {
  return (
    <>
    <div className="about-images">

            <div className="about1">
                <img src={about1} alt="img" />
            </div>

            <div className="about2">
                <img src={about2} alt="img" />
            </div>

            <div className="about3">
                <img src={about3} alt="img" />
            </div>
            
        </div>
    </>
  )
}

export default ImageCluster
