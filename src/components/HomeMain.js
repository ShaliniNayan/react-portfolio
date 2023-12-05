import './HomeMainStyles.css';

import React from 'react';

import IntroImg from '../images/intro-bg.jpg';
import { Link } from 'react-router-dom';

const HomeMain = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg' />
      </div>
      <div className='content'>
        <p>
          {' '}
          I’m a software developer! I can help you build a product , feature or
          website Look through some of my work and experience! If you like what
          you see and have a project you need coded, don’t hestiate to contact
          me.
        </p>
      </div>
      <div>
        <Link to='/project' className='btn'>
          Projects
        </Link>
        <Link to='/contact' className='btn btn-light'>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HomeMain;
