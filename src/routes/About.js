import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectMain from '../components/ProjectMain';

const About = () => {
  return (
    <div>
      <Navbar />
      <ProjectMain heading='ABOUT ME' text='Full-Stack Developer' />
      <Footer />
    </div>
  );
};

export default About;
