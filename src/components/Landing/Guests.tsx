import React from 'react';
import { Row } from 'antd';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import { HeaderTitle } from '../../shared/HeaderTitle';
import LandingGuestsInfo from './GuestsInfo';

type Props = {
  data: any,
  id: string,
}

const Guests = styled.div`
  background: #fef8f8 url(../../assets/bg_intro.jpg) no-repeat top;
  padding: 100px 0;
  min-height: 100vh;
`;

const LandingGuests = ({ data, id }: Props) => {

  const getGuests = data.data.map((item: any, index: number) => {
    return <LandingGuestsInfo key={index} id={index} data={item} />;
  });

  return (
    <ScrollOverPack id={id} component={Guests}>
      <QueueAnim
        className="container"
        key="text"
        leaveReverse
        type="bottom"
      >
        <div key="h2">
          <HeaderTitle key="h23" title={data.heading} id={id} />
        </div>

        <Row type="flex" justify="space-around" align="middle" key="test" style={{ marginTop: '150px' }}>
          {getGuests}
        </Row>
      </QueueAnim>
    </ScrollOverPack>
  )
}

export default LandingGuests;