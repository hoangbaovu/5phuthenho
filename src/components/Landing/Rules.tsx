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

const RulesContainer = styled.div`
  background: #f0f2f5;
  // background: #f0f2f5 url(../../assets/rules.jpg) no-repeat top right;

  padding: 50px 0 100px;
  min-height: 600px;
  overflow: hidden;
`;

const RulesParagraph = styled.p`
  font-size: 20px;
  line-height: 2em;
  text-align: center;
  margin: 0 auto;
  font-family: 'Pacifico', cursive;
  padding-right: 60px;
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

const LandingRules = ({ id }: Props) => {
  return (
    <ScrollOverPack id={id} component={RulesContainer}>
      <QueueAnim
        key="text"
        leaveReverse
        type="bottom"
      >
        <div key="row">
          <Row type="flex" justify="center">
            <Col sm={24} md={24} lg={24} xl={24} xxl={8}>
              <RulesLeft>
                <HeaderTitleLarge key="h2" title="Thể Lệ" id={id} />
                <RulesParagraph>
                  Đơn giản là sẽ có 20 bạn nam và 20 bạn nữ cùng tham gia, mỗi cặp sẽ có 5 phút để trò chuyện với nhau nhưng không được phép lộ thông tin cá nhân của mình.
                  Hết 5 phút chuyện trò, bạn nữ ngồi im tại chỗ còn bạn nam đứng lên di chuyển sang bàn bên cạnh.
                  Vậy thì quá tuyệt khi một buổi chiều được gặp gỡ tận 20 người khác giới, trò chuyện và làm quen cùng họ.
                  Và còn tuyệt hơn nữa nếu cô gái hay chàng trai bạn thích cũng chọn bạn ở cuối chương trình!!!
                  <br />
                  Chúc mừng bạn đã có một mùa đông không lạnh!!!
                </RulesParagraph>
              </RulesLeft>
            </Col>
            <Col xs={24} md={24} lg={24} xl={15} xxl={6}>
              <RevealImage image="../../assets/rules.jpg" start="left" width="872" height="600" />
            </Col>
          </Row>
          </div>
      </QueueAnim>
    </ScrollOverPack>
  )
}

export default LandingRules;