import './NavStyles.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <h1>SN</h1>
      </Link>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/project'>Project</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;