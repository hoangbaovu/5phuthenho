import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";

type Props = {
  id?: string,
  title: string,
  path?: string
}

const Title = styled.h2`
  font-size: ${props => props.theme.typography.fontSizeH3};
  font-weight: ${props => props.theme.typography.fontWeightBold};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .3em;
  margin: 200px 0 80px 0;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.typography.fontSizeH4};
    margin: 0 0 80px 0;
  }
`;

const SLink = styled(Link)`
  position: relative;
  color: ${props => props.theme.palette.black};

  &:after {
    content: '';
    background: url(${require('../../assets/bg-love.png')}) no-repeat;
    position: absolute;
    top: -50px;
    left: 50%;
    width: 109px;
    height: 160px;
    transform: translateX(-50%);
  }

  &:hover {
    color: ${props => props.theme.palette.secondary};
  }
`;

export const HeaderTitleLarge = ({ id = "#", title, path = "/"}: Props) => {
  return (
    <Title>
      <SLink
        to={id ? id : path}
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
      >{title}</SLink>
    </Title>
  )
}

export default HeaderTitleLarge;