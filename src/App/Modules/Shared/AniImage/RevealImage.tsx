import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  image: string,
}

const ImageDiv = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
  margin: -40px 0 30px;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 600px;
  height: 400px;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 40px;
`;

const aniImage = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0; }
  51% { opacity: 1; }
  100% { 
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const aniOverlay = keyframes`
  0% {
    transform: scaleX(0);
    transform-origin: 0% 50%;
  }
  50% {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
  51% {
    transform: scaleX(1);
    transform-origin: 100% 50%;
  }
  100% {
    transform: scaleX(0);
    transform-origin: 100% 50%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  heigth: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.3);
  animation: ${aniImage} 2s;
  animation-fill-mode: forwards;
`;

const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 106, 164, 1);
  position: absolute;
  transform: scaleX(0);
  transform-origin: 0% 50%;
  animation: ${aniOverlay} 2s;
`;

const RevealImage = ({ image }: Props) => {
  return (
    <ImageDiv>
      <ImageContainer>
        <Image src={image} alt="" />
          <ImageOverlay></ImageOverlay>
      </ImageContainer>
    </ImageDiv>
  )
}

export default RevealImage;