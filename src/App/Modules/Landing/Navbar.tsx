import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

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
      <Logo
        title="Logo"
        image={require("../../../assets/logo.png")}
      />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className={`Nav ${isNavVisible && 'active'}`}>
          <Link
            activeClass="active"
            to="introduction"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
            Giới thiệu
          </Link>
          <Link
            activeClass="active"
            to="rules"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
            Thể lệ
          </Link>
          <Link
            activeClass="active"
            to="guests"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
            Khách mời
          </Link>
          <Link
            activeClass="active"
            to="lover"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
            Lover
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
            Liên hệ
          </Link>
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