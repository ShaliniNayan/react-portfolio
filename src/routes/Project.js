import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectMain from '../components/ProjectMain';
import ProjectCard from '../components/ProjectCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <ProjectMain heading='PROJECTS' text='Some of my most recent works' />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Project;
