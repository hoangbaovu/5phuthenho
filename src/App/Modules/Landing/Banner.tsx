import React from 'react';
import { Parallax } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;
  border-color: #666;
  background-image: url(../../../../assets/banners/banner-2.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

const BannerTextWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 20%;
  margin: auto;
  left: 0;
  right: 0;
  font-size: 14px;
  color: #fff;
  width: 800px;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const BannerTextTitle = styled.div`
  width: 800px;
  max-height: 519px;
  margin: auto;
  display: inline-block;
  font-size: 40px;
  position: relative;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const BannerTextContent = styled.div`
  font-family: 'Pacifico', cursive;
  font-size: 1.8em;
  letter-spacing: 1px;
  margin-bottom: 20px;
  word-wrap: break-word;
  min-height: 24px;
  text-shadow: 2px 1px 11px rgba(150, 150, 150, 1);

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const BannerTextDescription = styled(Parallax)`
  filter: blur(0px);
`;

const LandingBanner = () => {

  const logoAni: Object = {
    y: '-=10',
    yoyo: true,
    repeat: -1,
  }

  const textAni: Object = [
    { x: 0, opacity: 1, playScale: [0, 0.2] },
  ]

  return (
    <BannerWrapper>
      <div className="container">
        <BannerTextWrapper>
          <QueueAnim
            key="QueueAnim"
            type={['bottom', 'top']}
            duration={300}
          >
            <BannerTextTitle key="1">
              <TweenOne
                animation={logoAni}
                key="2"
              >
                <img src="../../../../assets/banners/5phuthenho_logo_effects.png" width="100%" alt="img" />
              </TweenOne>
            </BannerTextTitle>
            <BannerTextContent key="3">
              <BannerTextDescription
                animation={textAni}
              >
                <Texty>"Mỗi cuộc gặp gỡ trong đời đều là duyên phận, không có đúng sai"</Texty>
              </BannerTextDescription>
            </BannerTextContent>
          </QueueAnim>
        </BannerTextWrapper>
      </div>
    </BannerWrapper>
  )
};

export default LandingBanner;