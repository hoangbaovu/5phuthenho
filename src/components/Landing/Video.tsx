import React from 'react';
import styled from 'styled-components';
import { useSmallScreen } from '../../shared/hooks';

type Props = {
  id: string,
  data: any,
}

const VideoWrapper = styled.div`
  position: relative;
`;

const VideoContent = styled.div`
  content: '';
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
`;

const VideoBackground = styled.video`
  position: static;
  width: 100%;
  height: 600px;
  left: 0;
  top: 0;
  filter: blur(2px);
  object-fit: fill;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const SponsorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SponsorLink = styled.a`
  cursor: pointer;
`;

const SponsorLogo = styled.img`
  border-radius: 25px;
  width: 200px;
  transition: all .3s ease-in-out;
  margin: 0 25px;

  ${SponsorLink}:hover & {
    opacity: .8;
  }

  @media (max-width: 768px) {
    margin: 0 5px;
    width: 100px;
  }
`;

const LandingVideo = ({ id, data }: Props) => {

  const isSmallScreen = useSmallScreen();

  const renderSponsor = data.data.map((item: any, index: number) => {
    return (
      <SponsorLink href={item.path} key={index} target="_blank" title={item.name}>
        <SponsorLogo src={item.source} alt={item.name} />
      </SponsorLink>
    )
  });

  const renderVideoType = data.type.map((item: string, index: number) => {
    return (
      <source src={`${data.source}.${item}`} type={`video/${item}`} key={index} />
    )
  });

  const renderVideo = isSmallScreen || renderVideoType;

  return (
    <VideoWrapper id={id}>
      <VideoContent>
        <div className="container">
          <SponsorContainer>
            {renderSponsor}
          </SponsorContainer>
        </div>
      </VideoContent>
      <VideoBackground autoPlay muted loop poster={`${data.source}.${data.poster}`}>
        {renderVideo}
      </VideoBackground>
    </VideoWrapper>
  )
}

export default LandingVideo;