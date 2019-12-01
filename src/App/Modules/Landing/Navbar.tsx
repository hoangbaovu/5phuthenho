import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

import { Icon } from 'antd';

import { CSSTransition } from 'react-transition-group';
import Logo from './Logo';
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
      >
        {item.name}
      </Link>
    )
  });

  console.log(renderMenu);

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