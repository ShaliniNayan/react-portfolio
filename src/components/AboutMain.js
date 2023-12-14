import { Link } from 'react-router-dom';
import './AboutMainStyles.css';
import HtmlCssJS from '../images/js-html-css.png';
import ReactRedux from '../images/react-redux.png';
import Ruby from '../images/ruby.png';
import Rails from '../images/rails.png';
import Git from '../images/git.png';
import Github from '../images/github.png';
import Npm from '../images/npm.png';
import Postgresql from '../images/postgresql.png';

import React from 'react';

const AboutMain = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Let me Introduce myself</h1>
        <p>
          I'am Shalini Nayan innovative Full-Stack Developer proficient in Ruby
          on Rails, React, and Material-UI, with a knack for crafting seamless
          APIs. Elevated user experience by implementing Jest for rigorous
          testing, ensuring top-notch reliability and functionality. Excels in
          delivering cutting-edge solutions that blend performance and
          aesthetics to create remarkable digital experiences.Let's connect to
          discuss how we can collaborate and take your projects to the next
          level.
        </p>
        <Link to='/contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>

      <div className='right'>
        <h1>Languages & Frameworks</h1>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={HtmlCssJS} />
            <img src={ReactRedux} />
            <img src={Ruby} />
            <img src={Rails} />
            <img src={Git} />
            <img src={Github} />
            <img src={Npm} />
            <img src={Postgresql} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
