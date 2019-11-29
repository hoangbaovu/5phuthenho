import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string,
  path?: string
}

const Title = styled.h2`
  font-size: ${props => props.theme.typography.fontSizeH4};
  font-weight: ${props => props.theme.typography.fontWeightBold};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .4em;
  margin-bottom: 80px;
`;

const Link = styled.a`
  position: relative;

  &:after {
    content: '';
    background: url(${require('../../../../assets/bg-love.png')}) no-repeat;
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

export const HeaderTitle = ({ title, path = "/"}: Props) => {
  return (
    <Title>
      <Link href={path}>{title}</Link>
    </Title>
  )
}