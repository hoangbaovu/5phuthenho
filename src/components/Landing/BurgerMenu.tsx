import React from 'react';
import styled from 'styled-components';
type Props = {
  toggle: any,
  visible: boolean,
}

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin: -10px 20px 0 0;
  cursor: pointer;
  z-index: 999999;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuLine = styled.span`
  background: ${props => props.theme.palette.primary};
  display: block;
  height: 4px;
  margin: 10px 0 0 0;
  transition: all .1s ease-in-out;
  width: 36px;

  ${Menu}.active & {
    
    &:nth-child(1) {
      transform: translateY(14px) rotate(45deg);
    }
    
    &:nth-child(2) {
      opacity: 0;
    }
    
    &:nth-child(3) {
      transform: translateY(-14px) rotate(-45deg);
    }
  }
`;

const BurgerMenu = ({ toggle, visible}: Props) => {
  return(
    <Menu onClick={toggle} className={`${visible && 'active'}`}>
      <MenuLine />
      <MenuLine />
      <MenuLine />
    </Menu>
  )
}

export default BurgerMenu;