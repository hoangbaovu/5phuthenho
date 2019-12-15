import React from 'react';
import { Row, Col } from 'antd';
import { Link } from "react-scroll";
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import styled, { keyframes, css } from 'styled-components';
import { HeaderTitle } from '../../shared/HeaderTitle';
import RevealImage from '../../shared/AniImage/RevealImage';

type Props = {
  id: string
}

const Introduction = styled.div`
  background: #f7e9e8;
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroductionCol = styled(Col)`
  @media (max-width: 768px) {
    &:nth-child(1) {
      order: 2;
    }
  
    &:nth-child(2) {
      order: 1;
    }
  }
`;

const Content = styled.p`
  font-size: 20px;
  line-height: 2em;
  text-align: center;
  margin: 0 auto;
  font-family: 'Pacifico', cursive;
  display: inline-block;
  text-align: justify;

  &::first-letter {
    margin-top: -10px;
    font-size: 4rem;
    float: left;
    line-height: 1;
  }

  @media (max-width: 1200px) {
    padding: 15px;
    width: 100%;
  }
`;

const IntroductionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const IntroductionButton = styled(Link)`
  color: ${props => props.theme.palette.black};
  display: flex;
  width: 320px;
  height: 74px;
  justify-content: center;
  align-items: center;

  position: relative;
  margin: 30px 0;
  transition: all .2s ease;

  &:hover {
    &:before {
      border-radius: 70px;
      width: 100%;
      background: rgba(255, 255, 255, 1);
    }
  }

  &:active {
    transform: scale(.8);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 70px;
    background: ${props => props.theme.palette.primary};
    width: 70px;
    height: 70px;
    transition: all .3s ease;
  }
`;

const IntroductionButtonSpan = styled.span`
  position: relative;
  font-size: 2.8em;
  line-height: 18px;
  font-weight: 900;
  letter-spacing: .25em;
  text-transform: uppercase;
  vertical-align: middle;
`;

const aniArrow = css`
  0% {
    opacity: 1;
    transform-origin: center;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
`;

const aniArrowLeft = keyframes`
  ${aniArrow};
  0% {
    transform: translateY(0)  rotate(90deg);
  }
  50% {
    transform: translateY(10px)  rotate(90deg);
  }
  100% {
    transform: translateY(0)  rotate(90deg);
  }
`;

const aniArrowRight = keyframes`
  ${aniArrow};
  0% {
    transform: translateX(0) rotate(180deg);
  }
  50% {
    transform: translateX(10px) rotate(180deg);
  }
  100% {
    transform: translateX(0) rotate(180deg);
  }
`;

const IntroductionButtonSVG = styled.svg`
  animation: ${aniArrowRight} infinite 1s linear;
  fill: none;
  height: 23px;
  margin-left: 10px;
  position: relative;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  stroke: #222;
  top: 0;
  transition: all .3s ease;
  width: 23px;

  ${IntroductionButton}:hover & {
    top: -5px;
    stroke: #ff6aa4;
    animation: ${aniArrowLeft} infinite 1s linear;
  }
`;

const IntroductionRight = styled.div`
  background: ${props => props.theme.palette.white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  margin-top: -70px;
  padding: 70px 31px;

  @media (max-width: 768px) {
    background: #f7e9e8;
    border-radius: 0;
    border-bottom: 0;
    box-shadow: none;
    margin-top: 0;
    padding: 0;
  }
`;

const IntroductionLeftImage = styled(RevealImage)`
  margin: -40px 0 30px !important;
`;

const LandingIntroduction = ({ id }: Props) => {
  return (
    <ScrollOverPack id={id} component={Introduction}>
      <QueueAnim
        className="container"
        leaveReverse
        key="text"
        type="top"
      >
          <Row key="row" type="flex">
            <IntroductionCol xs={24} md={10}>
              <IntroductionLeft>
                <IntroductionLeftImage image="../../assets/intro.jpg" start="right" width="600" height="400" />
                <IntroductionButton
                  activeClass="active"
                  to="rules"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {1500}
                  key="rules2"
                >
                  <IntroductionButtonSpan>Thể lệ</IntroductionButtonSpan>
                  <IntroductionButtonSVG viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </IntroductionButtonSVG>
                </IntroductionButton>
              </IntroductionLeft>
            </IntroductionCol>
            <IntroductionCol xs={24} md={14}>
              <IntroductionRight>
                <HeaderTitle title="Giới thiệu" id={id} />
                <Content key="p">
                  Giữa cuộc sống hiện đại, chúng ta dường như đã quá vội vã, ồn ào mà bỏ quên những điều lặng lẽ, những chân tình ngày nào.
                  Sống vội, yêu vội, hay đâu đó có người còn chưa bắt kịp với nhịp yêu đương thời hiện đại.
                  Vậy xin mời bạn hãy bỏ điện thoại xuống, chúng ta hãy cùng nhau ngồi đây chuyện trò, kể cho nhau nghe những điều chân thật nhất của con người mình.
                  Đâu đó những tâm hồn sẽ chậm rãi tìm thấy nhau, những ánh mắt sẽ tình cờ chạm thấy nhau.
                  <br />
                  Chúng tôi gọi đó là duyên! Bạn đã sẵn sàng cho một tháng 12 ngọt ngào?                  
                </Content>
              </IntroductionRight>
            </IntroductionCol>
          </Row>
      </QueueAnim>
    </ScrollOverPack>
  )
}

export default LandingIntroduction;