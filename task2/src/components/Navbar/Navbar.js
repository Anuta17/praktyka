/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from 'react';
import './style.css';

export const Navbar = ({
  className,
  logo = 'https://c.animaapp.com/rGNOLBUh/img/logo.svg',
}) => {
  return (
    <div className={`navbar ${className}`}>
      <button className='button'>
        <div className='div-wrapper'>
          <div className='text-wrapper-13'>Contact us</div>
        </div>
      </button>

      <div className='text-wrapper-14'>Home</div>

      <div className='text-wrapper-15'>About us</div>

      <div className='text-wrapper-16'>Features</div>

      <div className='text-wrapper-17'>Pricing</div>

      <div className='text-wrapper-18'>FAQ</div>

      <div className='text-wrapper-19'>Blog</div>

      <img className='img' alt='Logo' src={logo} />
    </div>
  );
};