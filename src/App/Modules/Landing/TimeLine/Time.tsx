import React from 'react';
import styled from 'styled-components';

type Props = {
  children: any
}

const TimeContainer = styled.p`
  color: ${props => props.theme.palette.black};
  font-size: ${props => props.theme.typography.fontSizeH6};
  font-weight: ${props => props.theme.typography.fontWeightBold};
  letter-spacing: 0.5rem;
`

const TimeContent = styled.span`
  background: #fff;
  padding: 10px;
  width: 60px;
`

const TimelineTime = ({ children }: Props) => {
  return (
    <TimeContainer>
      <TimeContent>
        {children}
      </TimeContent>
    </TimeContainer>
  )
}

export default TimelineTime;