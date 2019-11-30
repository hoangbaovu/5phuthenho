import React from 'react';
import { Col } from 'antd';
import TweenOne from 'rc-tween-one';
import styled from 'styled-components';

type Props = {
  id: number,
  data: any,
}

const GuestInfo = styled(TweenOne)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 95%;
`;

const Name = styled.h3`
  color: ${props => props.theme.palette.primary};
  font-size: ${props => props.theme.typography.fontSizeH4};
  font-family: ${props => props.theme.typography.fontFamilySecondary};
  font-weight: ${props => props.theme.typography.fontWeightBold};
  margin-top: 30px;
`;

const JobTitle = styled.h4`
  color: ${props => props.theme.palette.black};
  font-size: 1rem;
  font-weight: ${props => props.theme.typography.fontWeightBold};
`;

const LandingGuestsInfo = ({ data, id }: Props) => {

  const getDelay = (id: number, delay: number = 300) => id * delay;

  const animation: Object = {
    y: 30,
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
    duration: 2000,
    delay: getDelay(id),
  }

  return (
    <Col xs={data.xs} md={data.md} key={data.name}>
      <GuestInfo
        key="image"
        animation={animation}
      >
        <Image src={data.info.image} alt={data.info.name} />
        <Name>{data.info.name}</Name>
        <JobTitle>{data.info.subTitle}</JobTitle>
      </GuestInfo>
    </Col>
  )
}

export default LandingGuestsInfo;