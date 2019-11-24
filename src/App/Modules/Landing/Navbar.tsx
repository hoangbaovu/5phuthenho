import React, { useState, useEffect } from 'react';
import { Icon } from 'antd';

import { CSSTransition } from 'react-transition-group';
import Logo from './Logo';
import './less/Navbar.less';

const Navbar = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <div className="Navbar">
      <Logo title="Logo" image={require("../../../assets/logo.png")} />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className={`Nav ${isNavVisible && 'active'}`}>
          <a href="/">Giới thiệu</a>
          <a href="/">Thể lệ</a>
          <a href="/">Lover</a>
          <a href="/">Liên hệ</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        {isNavVisible ? (
          <Icon type="close" style={{ cursor: "pointer" }} />
        ) : (
          <Icon type="menu" style={{ cursor: "pointer" }} />
        ) } 
      </button>
    </div>
  )
}

export default Navbar;