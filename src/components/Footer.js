import './FooterStyles.css';

import React from 'react';
import { FaHome, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Indore</p>
              <p>India</p>
            </div>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              shalininayan@outlook.com
            </h4>
          </div>
        </div>
        <div className='right'></div>
      </div>
    </div>
  );
};

export default Footer;
