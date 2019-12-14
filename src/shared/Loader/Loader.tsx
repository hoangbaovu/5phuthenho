import React from 'react';
import './Loader.less';

type Props = {
  isLoader: boolean,
}

const Loader = ({ isLoader }: Props) => {
  return (
    <div className={`loader-container ${isLoader ? 'active' : 'remove'}`}>
      <div className="loader-logo"></div>
      <h2 className="loader-desc">Chờ em 5 phút ...❤!</h2>
    </div>
  )
}

export default Loader;