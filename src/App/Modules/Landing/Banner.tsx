import React from 'react';
import { Icon } from 'antd';
import { Parallax } from 'rc-scroll-anim';
import { Link } from "react-scroll";
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import styled from 'styled-components';
import ShineEffect from './ShineEffect';


const BannerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;
  border-color: #666;
  background: url(../../../../assets/banners/banner-3.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

const BannerTextWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 100px;
  margin: auto;
  left: 0;
  right: 0;
  font-size: 14px;
  color: #fff;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const BannerTextTitle = styled.div`
  margin: auto;
  display: inline-block;
  position: relative;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const BannerTextContent = styled.div`
  color: ${props => props.theme.palette.black };
  font-family: 'Pacifico', cursive;
  font-size: 2.2em;
  letter-spacing: 1px;
  line-height: 2em;
  margin: 50px 0;
  word-wrap: break-word;
  min-height: 24px;
  text-shadow: 1px 2px 3px rgba(255,255,255,1);

  @media (max-width: 320px) {
    margin: -80px 0 0;
    font-size: 1em;
  }

  @media (max-width: 768px) {
    margin: -50px 0 0;
    font-size: 2em;
  }
`;

const BannerTextDescription = styled(Parallax)`
  filter: blur(0px);
`;

// const BannerFrame = styled.img`
//   margin: 50px 0;
// `;

const BannerNext = styled.div`
  bottom: 10px;
  display: block;
  left: 50%;
  position: absolute;
  right: 0;
  transform: translateX(-50%);
  width: 64px;
`;

const BannerNextLink = styled(Link)`
  display: block;
  cursor: pointer;
  width: 64px;
  height: 64px;
`;

const BannerNextIcon = styled(Icon)`
  font-size: 64px;
  transition: all .1s linear;

  ${BannerNextLink}:active & {
    transform: translateY(80px);
  }
`;

const LandingBanner = () => {

  const logoAni: Object = {
    y: '-=10',
    yoyo: true,
    repeat: -1,
    duration: 900,
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
                <ShineEffect source="../../../../assets/banners/5phuthenho_logo_banner.png" to="introduction" width="500" />
              </TweenOne>
            </BannerTextTitle>
            <BannerTextContent key="3">
              <BannerTextDescription
                animation={textAni}
              >
                <Texty>"Mỗi cuộc gặp gỡ trong đời đều là duyên phận, không có đúng sai."</Texty>
              </BannerTextDescription>
            </BannerTextContent>
            {/* <TweenOne
              animation={{ 
                scale: 1, 
                duration: 1000,
                delay: 3500,
              }}
              style={{ transform: 'scale(0)' }}
            >
              <BannerFrame key="4" src="../../../../assets/title_frame.png" alt=""/>
            </TweenOne> */}
          </QueueAnim>
        </BannerTextWrapper>
        <BannerNext key="next">
          <TweenOne
            animation={logoAni}
            key="2"
          >
            <BannerNextLink
              to="introduction"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {1000}
              key="next"
            >
              <BannerNextIcon type="arrow-down" />
            </BannerNextLink>
          </TweenOne>
        </BannerNext>
      </div>
    </BannerWrapper>
  )
};

export default LandingBanner;