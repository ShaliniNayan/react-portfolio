import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectMain from '../components/ProjectMain';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <ProjectMain heading='PROJECTS' text='Some of my most recent works' />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
