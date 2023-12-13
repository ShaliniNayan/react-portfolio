import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectMain from '../components/ProjectMain';
import AboutMain from '../components/AboutMain';

const About = () => {
  return (
    <div>
      <Navbar />
      <ProjectMain heading='ABOUT ME' text='Full-Stack Developer' />
      <AboutMain />
      <Footer />
    </div>
  );
};

export default About;
