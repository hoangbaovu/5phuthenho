import React from 'react';
import { Col } from 'antd';
import TweenOne from 'rc-tween-one';

type Props = {
  id: number,
  data: any,
}

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
    <Col md={data.md} key={data.name}>
      <TweenOne
        key="image"
        animation={animation}
      >
        <div>
          <div className="image-wrapper">
            <img src={data.info.image} alt={data.info.name} />
          </div>
          <h2>{data.info.name}</h2>
          <div>{data.info.subTitle}</div>
        </div>
      </TweenOne>
    </Col>
  )
}

export default LandingGuestsInfo;