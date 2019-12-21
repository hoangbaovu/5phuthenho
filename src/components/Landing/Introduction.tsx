import React from 'react';
import { Row, Col } from 'antd';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { HeaderTitleLarge } from '../../shared/HeaderTitle';
import styled from 'styled-components';
import RevealImage from '../../shared/AniImage/RevealImage';

type Props = {
  id: string
}

const IntroductionContainer = styled.div`
  background: #f0f2f5;
  // background: #f0f2f5 url(../../assets/rules.jpg) no-repeat top right;

  padding: 100px 0 50px;
  min-height: 600px;
  overflow: hidden;
`;

const RulesParagraph = styled.p`
  font-size: 20px;
  line-height: 2em;
  text-align: center;
  margin: 0 auto;
  font-family: 'Pacifico', cursive;
  padding: 0 60px;
  text-align: justify;

  @media (max-width: 1200px) {
    padding: 15px;
    width: 100%;
  }
`;

const RulesLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-top: 100px;
`;

const LandingIntroduction = ({ id }: Props) => {
  return (
    <ScrollOverPack id={id} component={IntroductionContainer}>
      <QueueAnim
        key="text"
        leaveReverse
        type="bottom"
      >
        <div key="row">
          <Row type="flex" justify="start">
            <Col xs={24} md={24} lg={12} xl={12} xxl={12}>
              <RevealImage image="../../assets/intro.jpg" start="left" height="600" />
            </Col>
            <Col sm={24} md={24} lg={12} xl={12} xxl={8}>
              <RulesLeft>
                <HeaderTitleLarge title="Giới Thiệu" id={id} />
                <RulesParagraph>
                  Giữa cuộc sống hiện đại, chúng ta dường như đã quá vội vã, ồn ào mà bỏ quên những điều lặng lẽ, những chân tình ngày nào.
                  Sống vội, yêu vội, hay đâu đó có người còn chưa bắt kịp với nhịp yêu đương thời hiện đại.
                  Vậy xin mời bạn hãy bỏ điện thoại xuống, chúng ta hãy cùng nhau ngồi đây chuyện trò, kể cho nhau nghe những điều chân thật nhất của con người mình.
                  Đâu đó những tâm hồn sẽ chậm rãi tìm thấy nhau, những ánh mắt sẽ tình cờ chạm thấy nhau.
                  <br />
                  Chúng tôi gọi đó là duyên! Bạn đã sẵn sàng cho một tháng 12 ngọt ngào?
                </RulesParagraph>
              </RulesLeft>
            </Col>
          </Row>
          </div>
      </QueueAnim>
    </ScrollOverPack>
  )
}

export default LandingIntroduction;