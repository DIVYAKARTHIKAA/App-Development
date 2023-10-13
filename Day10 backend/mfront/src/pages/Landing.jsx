import React from 'react'

import Slide from './Slide';
import Footer from './Footer';

import '../assests/css/Landing.css';
import './Landing.css'
import Navbar3 from './Navbar3';

const Landing = () => {
  return (
    <>
    <div className="control-container">
    <Navbar3/>
    <Slide/>
    <Footer/>
    </div>
    </>
  );
}
export default Landing