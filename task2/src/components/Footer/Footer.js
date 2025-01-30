import React from 'react';
import './style.css';

export const Footer = ({
  className,
  socialMediaIcon = 'https://c.animaapp.com/rGNOLBUh/img/social-media-icon@2x.png',
  logo = 'https://c.animaapp.com/rGNOLBUh/img/logo-1.svg',
  text = 'Copyright 2021, Finsweet.com',
}) => {
  return (
    <div className={`footer ${className}`}>
      <div className='overlap'>
        <div className='overlap-group'>
          <div className='content'>
            <img
              className='social-media-icon'
              alt='Social media icon'
              src={socialMediaIcon}
            />

            <p className='text-wrapper'>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>

            <p className='div'>
              We are always open to discuss your project and improve your online
              presence.
            </p>

            <div className='text-wrapper-2'>Lets Talk!</div>
          </div>

          <img className='logo' alt='Logo' src={logo} />
        </div>

        <div className='contact-info'>
          <div className='info'>
            <div className='text-wrapper-3'>contact@website.com</div>

            <div className='text-wrapper-4'>Email me at</div>

            <div className='text-wrapper-5'>0927 6277 28525</div>

            <div className='text-wrapper-6'>Call us</div>
          </div>
        </div>
      </div>

      <div className='footer-links'>
        <div className='overlap-group-2'>
          <div className='copyright'>{text}</div>

          <div className='text-wrapper-7'>Home</div>

          <div className='text-wrapper-8'>About us</div>

          <div className='text-wrapper-9'>Features</div>

          <div className='text-wrapper-10'>Pricing</div>

          <div className='text-wrapper-11'>FAQ</div>

          <div className='text-wrapper-12'>Blog</div>
        </div>
      </div>
    </div>
  );
};
