import './FooterStyles.css';

import React from 'react';
import {
  FaAngellist,
  FaGithubSquare,
  FaHome,
  FaLinkedinIn,
  FaMailBulk,
  FaMediumM,
  FaTwitter,
} from 'react-icons/fa';

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
        <div className='right'>
          <h4>About Myself</h4>
          <p>
            Innovative Full-Stack Developer proficient in Ruby on Rails, React,
            and Material-UI, with a knack for crafting seamless APIs. Elevated
            user experience by implementing Jest for rigorous testing, ensuring
            top-notch reliability and functionality. Excels in delivering
            cutting-edge solutions that blend performance and aesthetics to
            create remarkable digital experiences. Let's connect to discuss how
            we can collaborate and take your projects to the next level.
          </p>
          <div className='social'>
            <FaTwitter
              size={25}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaLinkedinIn
              size={25}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaMediumM
              size={25}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaGithubSquare
              size={25}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaAngellist
              size={25}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
