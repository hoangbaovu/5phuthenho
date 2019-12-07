import React from 'react';
import { Row, Col } from 'antd';
import { Link } from "react-scroll";
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import styled, { keyframes } from 'styled-components';
import { HeaderTitle } from '../Shared/HeaderTitle';

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
    padding: 20px;
    width: 100%;
  }
`;

const IntroductionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IntroductionLeftImage = styled.img`
  width: 100%;
  height: 100%;
  outline: 10px double #fff;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const IntroductionButton = styled(Link)`
  color: ${props => props.theme.palette.black};
  display: flex;
  width: 330px;
  height: 68px;
  justify-content: center;
  align-items: center;

  position: relative;
  margin: auto;
  padding: 19px 22px;
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

const pulse = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
    transform-origin: center;
  }
  50% {
    transform: translateX(10px);
    opacity: .5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const IntroductionButtonSVG = styled.svg`
  position: relative;
  top: 2px;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #222;
  stroke-width: 2;
  transition: all .3s ease;
  animation: ${pulse} infinite 1s linear;
  width: 23px;
  height: 23px;

  ${IntroductionButton}:hover & {
    stroke: #ff6aa4;
    transform: translateX(0);
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
    margin-top: 40px;
  }
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
          <Row key="row">
            <Col xs={24} md={10}>
              <IntroductionLeft>
                <IntroductionLeftImage src="../../../assets/intro.jpg" alt="" />
                <IntroductionButton
                  activeClass="active"
                  to="rules"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {1500}
                  key="rules2"
                >
                  <IntroductionButtonSpan>Đăng ký</IntroductionButtonSpan>
                  <IntroductionButtonSVG viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </IntroductionButtonSVG>
                </IntroductionButton>
              </IntroductionLeft>
            </Col>
            <Col xs={24} md={14}>
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
            </Col>
          </Row>
      </QueueAnim>
    </ScrollOverPack>
  )
}

export default LandingIntroduction;