import './ProjectCardStyles.css';

import React from 'react';
import leader from '../images/leader.png';
import { NavLink } from 'react-router-dom';

const ProjectCard = () => {
  return (
    <div className='project-card'>
          <img src={leader} alt='Leader-board' />
          <h2 className='project-title'>Project-Title</h2>
          <div className='project-details'>
            <p>
             This is description of the project.
            </p>
            <div className='project-btns'>
              <NavLink
                to='url.com'
                className='btn'
              >
                View
              </NavLink>
              <NavLink
                to='url.com'
                className='btn'
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
  );
};

export default ProjectCard;
