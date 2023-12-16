import './FormStyles.css';

import React from 'react';

const Form = () => {
  return (
    <div className='form'>
      <form>
        <label>Name</label>
        <input typeof='text'></input>
        <label>Email</label>
        <input typeof='email'></input>
        <label>Message</label>
        <textarea rows='6' placeholder='Write Your Message here' />
        <button className='btn'>Get in touch</button>
      </form>
    </div>
  );
};

export default Form;
