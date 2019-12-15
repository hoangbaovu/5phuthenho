import React from 'react';
import styled, { css, keyframes } from 'styled-components';

type Props = {
  image: string,
  start?: string,
}

const aniImage = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0; }
  51% { opacity: 1; }
  100% { 
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const aniOverlay = css`
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(1);
  }
  51% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;

const aniOverlayRight = keyframes`
  ${aniOverlay}
  0% {
    transform-origin: 100% 50%;
  }
  50% {
    transform-origin: 100% 50%;
  }
  51% {
    transform-origin: 0% 50%;
  }
  100% {
    transform-origin: 0 50%;
  }
`;

const aniOverlayLeft = keyframes`
  ${aniOverlay}
  0% {
    transform-origin: 0% 50%;
  }
  50% {
    transform-origin: 0% 50%;
  }
  51% {
    transform-origin: 100% 50%;
  }
  100% {
    transform-origin: 100% 50%;
  }
`;


const ImageWrapper = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
  margin: -40px 0 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  heigth: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.3);
  animation: ${aniImage} 2s forwards;
`;

const ImageOverlay = css`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.palette.primary };
  position: absolute;
  transform: scaleX(0);
  transform-origin: 0% 50%;
`;

const ImageOverlayLeft = styled.div`
  ${ImageOverlay}
  animation: ${aniOverlayLeft} 2s;
`;

const ImageOverlayRight = styled.div`
  ${ImageOverlay}
  animation: ${aniOverlayRight} 2s;
`;

const RevealImage = ({ image, start }: Props) => {

  const renderImageOverlay = (start: string = 'left') => {
    switch(start) {
      case 'right':
        return <ImageOverlayRight />
      default:
        return <ImageOverlayLeft />
    }
  }

  return (
    <ImageWrapper>
      <ImageContainer>
        <Image src={image} alt="" />
          {renderImageOverlay(start)}
      </ImageContainer>
    </ImageWrapper>
  )
}

export default RevealImage;