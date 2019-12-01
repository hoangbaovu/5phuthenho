import React from 'react';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import styled from 'styled-components';
import { HeaderTitle } from '../Shared/HeaderTitle';

type Props = {
  id: string
}

const Introduction = styled.div`
  background: #f7e9e8;
  padding: 100px 0;
  min-height: 500px;
`;

const Content = styled.p`
  width: 768px;
  font-size: 20px;
  line-height: 2em;
  text-align: center;
  margin: 0 auto;
  font-family: 'Pacifico', cursive;

  @media (max-width: 1200px) {
    padding: 20px;
    width: 100%;
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
        <div key="h2">
          <HeaderTitle title="Giới thiệu" id={id} />
        </div>
        <Content key="p">
          Giữa cuộc sống hiện đại, chúng ta dường như đã quá vội vã, ồn ào mà bỏ quên những điều lặng lẽ, những chân tình ngày nào.
          Sống vội, yêu vội, hay đâu đó có người còn chưa bắt kịp với nhịp yêu đương thời hiện đại.
          Vậy xin mời các bạn hãy bỏ điện thoại xuống, chúng ta hãy cùng nhau ngồi đây chuyện trò, kể cho nhau nghe những điều chân thật nhất của con người mình.
          Đâu đó những tâm hồn sẽ chậm rãi tìm thấy nhau, những ánh mắt sẽ tình cờ chạm thấy nhau.
          <br key="br" />
          Chúng tôi gọi đó là duyên! Bạn đã sẵn sàng cho một tháng 12 ngọt ngào?
        </Content>
      </QueueAnim>
    </ScrollOverPack>
  )
}

export default LandingIntroduction;