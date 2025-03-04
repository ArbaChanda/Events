import React from 'react'
import './App.css';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    {/* <Home /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Gallery" element={<Gallery />} />
    </Routes>
    </>
  )
}

export default App
