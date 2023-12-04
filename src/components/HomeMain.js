import './HomeMainStyles.css';

import React from 'react';

import IntroImg from '../images/intro-bg.jpg';

const HomeMain = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg' />
      </div>
    </div>
  );
};

export default HomeMain;
