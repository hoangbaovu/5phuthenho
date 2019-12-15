import React from 'react';
import styled from 'styled-components';

type Props = {
  children: any;
  width: any,
  height: any,
}


const Wrapper = styled.div`
  /* here we use the dynamically computed props */
  position: relative;

  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const RevealImageWrapper = ({children, width, height} : Props) => {

  return (
    <Wrapper style={{
      width: `${width}px`,
      height: `${height}px`
    }}>
      {children}
    </Wrapper>
  )
}

export default RevealImageWrapper;