import React from 'react';
import './less/ShineEffect.less';
import styled from 'styled-components';

type Props = {
  source: string,
}

interface MaskLinkProps {
  readonly source: string;
};

const MaskLink: any = styled.a<MaskLinkProps>`
  background-position: -550px 0;
  position: relative;
  display: block;
  width: 500px;
  height: 251px;
  text-align:center;
  margin: 50px auto;
  -webkit-filter: drop-shadow(1px 1px 2px rgba(0,0,0,.5));
  filter: drop-shadow(1px 1px 2px rgba(0,0,0,.5));

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

const ShineEffect = ({ source }: Props) => {
  return (
    <>
    <MaskLink href="//ineo.vn" source={source}>
      <img src={source} alt="5 Phút Hẹn Hò" />
    </MaskLink>
    <svg height="0">
      <mask id="mask-firefox">
        <image width="500" height="251" xlinkHref={source} filter="url(#filter)" /> 
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