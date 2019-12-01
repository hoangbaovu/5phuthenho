import React from 'react';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { HeaderTitle } from '../../Shared/HeaderTitle';
import styled from 'styled-components';
import TimeLineContent from './Content';

type Props = {
  id: string,
  data: any,
}

const TimeLineWrapper = styled(ScrollOverPack)`
  background: #fff;
  padding: 100px 0;
  min-height: 100vh;
`;

const LandingTimeline = ({ id, data }: Props) => {
  
  return (
    <TimeLineWrapper id={id}>
    <QueueAnim
      className="container"
      key="text"
      leaveReverse
      type="bottom"
    >
      <div key="h2">
        <HeaderTitle key="h23" title={data.heading} id={id} />
      </div>
      <div key="timeline-table">
        <TimeLineContent  />
      </div>
    </QueueAnim>
  </TimeLineWrapper>
  )
}

export default LandingTimeline;