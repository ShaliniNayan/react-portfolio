import './HomeMainStyles.css';

import React from 'react';

import IntroImg from '../images/intro-bg1.jpeg';
import { Link } from 'react-router-dom';

const HomeMain = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg' />
      </div>
      <div className='content'>
        <h1>I’m Shalini Nayan</h1>
        <p>
          Passionate Full-Stack Software Engineer skilled in React, Ruby on
          Rails, and writing reusable code for efficient, user-friendly systems.
          Led a team to complete a 3-week project in half the time with a 99%
          acceptance rate, showcasing exceptional leadership and commitment to
          quality results.
        </p>

        <div>
          <Link to='/project' className='btn'>
            Projects
          </Link>
          <Link to='/contact' className='btn btn-light'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
