import React from 'react';
import styled from 'styled-components';

type Props = {
  children: any;
  width: any,
  height: any,
}

// const Wrapper = styled.div`
//   width: {props => console.log(props.width) }
//   width: 600px;
//   height: 400px;
//   position: relative;
//   margin: -40px 0 30px;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

const Wrapper = styled.div.attrs({
  // or we can define dynamic ones
  width: (props: any) => props.width,
  height: (props: any) => props.height
})`
  /* here we use the dynamically computed props */
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RevealImageWrapper = ({children, width, height} : Props) => {

  return (
    <Wrapper width={width} height={height}>
      {children}
    </Wrapper>
  )
}

export default RevealImageWrapper;