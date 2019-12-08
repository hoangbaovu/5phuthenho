import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

import { CSSTransition } from 'react-transition-group';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu';
import './less/Navbar.less';

type Props = {
  data: any,
}

const Navbar = ({ data }: Props) => {
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

  const onVisibleNav = () => {
    setNavVisibility(false);
  }

  const renderMenu = data.data.map((item: any, index: number) => {
    return (
      <Link
        activeClass="active"
        to={item.id}
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
        key={index}
        onClick={onVisibleNav}
      >
        {item.name}
      </Link>
    )
  });

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
          {renderMenu}
        </nav>
      </CSSTransition>
      <BurgerMenu toggle={toggleNav} visible={isNavVisible} />
    </div>
  )
}

export default Navbar;