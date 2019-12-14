import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";

type Props = {
  source: string,
  to?: string,
  width: string,
}

type MaskLinkProps = {
  readonly source: string;
  readonly width: string;
};

const MaskLink: any = styled(Link)<MaskLinkProps>`
  background-position: -550px 0;
  position: relative;
  display: block;
  width: ${props => `${props.width}px`};
  height: auto;
  text-align:center;
  margin: 50px auto;
  -webkit-filter: drop-shadow(1px 1px 2px rgba(0,0,0,.5));
  filter: drop-shadow(1px 1px 2px rgba(0,0,0,.5));

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover,
  &:focus {
    background-position: 50px 0;
    transition: all 1s;
  }

  &::after {
    content:'';
    position: absolute;
    pointer-events: none;
    top:0; left:0; right:0; bottom: 0;
    background: radial-gradient(circle farthest-side at 0 0, rgba(255,255,255,0) 90%,rgba(255,255,255,.8) 98%,rgba(255,255,255,0) 100%) no-repeat;
    background-position: inherit; 
    -webkit-mask: ${props => `url(${props.source}) center`};
    mask: ${props => `url(${props.source}) center`};
  }
`;

const MaskLinkImage = styled.img`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ShineEffect = ({...props}: Props) => {

  const { to, source } = props;
  return (
    <>
      <MaskLink
          {...props}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
          key={to}
        >
          <MaskLinkImage src={source} alt="5 Phút Hẹn Hò" />
      </MaskLink>
      <svg height="0">
        <mask id="mask-firefox">
          <image xlinkHref={source} filter="url(#filter)" /> 
        </mask>
        
        <filter id="filter">
          <feFlood floodColor="white" />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
      </svg>
    </>
  )
}

export default ShineEffect;