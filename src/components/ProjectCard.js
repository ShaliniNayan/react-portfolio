import './ProjectCardStyles.css';

import React from 'react';
import leader from '../images/leader.png';
import { NavLink } from 'react-router-dom';

const ProjectCard = () => {
  return (
    <div className='project-card'>
          <img src={leader} alt='Leader-board' />
          <h2 className='project-title'>Leader-Board</h2>
          <div className='project-details'>
            <p>
              This is a JavaScript project for a Leaderboard list app, which
              uses modern web development tools and techniques such as webpack
              and ES6 modules.
            </p>
            <div className='project-btns'>
              <NavLink
                to='https://github.com/ShaliniNayan/Leaderboard'
                className='btn'
              >
                View
              </NavLink>
              <NavLink
                to='https://shalininayan.github.io/Leaderboard/'
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
