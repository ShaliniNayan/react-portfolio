import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectMain from '../components/ProjectMain';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ProjectMain
        heading='CONTACT ME'
        text='If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I would love to help with it'
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
