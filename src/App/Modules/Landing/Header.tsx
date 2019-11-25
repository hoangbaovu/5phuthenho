import React from 'react';
import Navbar from './Navbar';
import './less/Header.less';


const LandingHeader = () => {

  return (
    <header className="Header">
      <div className="container">
        <Navbar />
      </div>
    </header>
  )
};

export default LandingHeader;