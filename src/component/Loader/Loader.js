import React from 'react';
import './Loader.css';

const Loader = (props) => {
  return (
    <div className='loader-container'>
      <div className='loader'>
        <div className='loader-circle'></div>
        <div className='loader-circle'></div>
        <div className='loader-circle'></div>
        <div className='loader-shadow'></div>
        <div className='loader-shadow'></div>
        <div className='loader-shadow'></div>
      </div>
      <div className='loading-text'>
        <span>Kolkata Satta Pro</span>
        <span>Welcome</span>
        <span>Please wait, we are preparing your result</span>
      </div>
    </div>
  );
};

export default Loader;

