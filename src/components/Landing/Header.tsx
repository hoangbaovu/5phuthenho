import React from 'react';
import Navbar from './Navbar';
import './less/Header.less';

type Props = {
  data: any,
}

const LandingHeader = ({ data }: Props) => {

  return (
    <header className="Header">
      <div className="container">
        <Navbar data={data} />
      </div>
    </header>
  )
};

export default LandingHeader;