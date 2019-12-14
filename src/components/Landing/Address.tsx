import React from 'react';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import styled from 'styled-components';
import { HeaderTitle } from '../../shared/HeaderTitle';

type Props = {
  id: string,
  data: any,
}

const AddressWrapper = styled.div`
  background: #f7e9e8;
  padding: 100px 0;
  min-height: 500px;
  background-image: url(../../assets/bg_left.png), url(../../assets/bg_right.png);
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;

  @media (max-width: 768px) {
    background-image: initial;
  }
`;

const Content = styled.div`
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


const Name = styled.h4`
  font-size: 2.2em;
  margin-bottom: 30px;
`;

const Location = styled.h5`
  font-size: 1.2em;
`;


const LandingAddress = ({ id, data }: Props) => {
  return (
    <ScrollOverPack id={id} component={AddressWrapper}>
      <QueueAnim
        className="container"
        leaveReverse
        key="text"
        type="top"
      >
        <div key="h2">
          <HeaderTitle title={data.heading} id={id} />
        </div>
        <Content key="p">
          <Name>{data.nameAddress}</Name>
          <Location>{data.location}</Location>
        </Content>
      </QueueAnim>
    </ScrollOverPack>
  )
}

export default LandingAddress;