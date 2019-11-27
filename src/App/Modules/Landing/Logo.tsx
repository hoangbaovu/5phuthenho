import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './less/Logo.less';

type Props = {
  title: string
  image: string
}

const Logo = ({title, image}: Props) => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Link
      to="/"
      className="Logo"
      onClick={scrollToTop}
    >
      <img src={image} alt={title} />
    </Link>
  )
};

export default Logo;