import React from 'react';
import styled from 'styled-components';

type Props = {
  children: any
}

const TitleContainer = styled.p`
`

const TitleContent = styled.span`
  background: #fff;
  width: 60px;
  text-align: center;
  color: ${props => props.theme.palette.primary};
  font-size: ${props => props.theme.typography.fontSizeH5};
  font-family: ${props => props.theme.typography.fontFamilySecondary};
  font-weight: ${props => props.theme.typography.fontWeightBold};
  letter-spacing: 0.5rem;
`

const TimelineTitle = ({ children }: Props) => {
  return (
    <TitleContainer>
      <TitleContent>
        {children}
      </TitleContent>
    </TitleContainer>
  )
}

export default TimelineTitle;