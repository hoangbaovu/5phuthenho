import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';

type Props = {
  title: string
  image: string
}

const StyleLogo = styled(Link)`
  grid-area: logo;
  height: 70px;
  width: 70px;

  &:hover {
    border: 0 !important;
  }
`;

const Image = styled.img`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: all .3s ease-in-out;
  z-index: 999999;

  &:hover {
    opacity: .8;
  }
`;

const Logo = ({title, image}: Props) => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <StyleLogo
      id="logo"
      to="logo"
      spy={true} smooth={true}
      onClick={scrollToTop}
    >
      <Image src={image} alt={title} />
    </StyleLogo>
  )
};

export default Logo;