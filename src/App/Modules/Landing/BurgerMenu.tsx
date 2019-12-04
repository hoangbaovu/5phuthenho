import React from 'react';
import styled from 'styled-components';
type Props = {
  toggle: any,
  visible: boolean,
}

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  margin: 0 20px 0 0;
  cursor: "pointer";
`;

const MenuLine = styled.span`
  display: block;
  width: 40px;
  height: 5px;
  background: red;
  margin: 12px 30px 0 0;
  transition: all .1s ease-in-out;

  ${Menu}.active & {
    width: 40px;
    
    &:nth-child(1) {
      width: 40px;
      transform: translateY(17px) rotate(45deg);
    }
    
    &:nth-child(2) {
      opacity: 0;
    }
    
    &:nth-child(3) {
      width: 40px;
      transform: translateY(-17px) rotate(-45deg);
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