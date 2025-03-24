// import React from 'react'
// import './mobileNavbar.css'
// import Button from '../Button/Button';
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const MobileNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle dropdown
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div className='mobile-nav'>
//       <Link to='/'><h1 className='heading'>Salon Madrid</h1></Link>
//         <Button onClick={toggleMenu}/>
//     </div>
    
//   )
// }

// export default MobileNavbar

import React, { useState } from "react";
import "./mobileNavbar.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-nav">
      {/* Logo */}
      <Link to="/">
        <h1 className="heading">Salon Madrid</h1>
      </Link>

      {/* Hamburger Button */}
      <Button onClick={toggleMenu} />

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="mobile-menu">
          <h1 className="mobile-menu-heading">Salon Madrid</h1>
          <button className="close-btn" onClick={toggleMenu}>&times;</button> 
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNavbar;
