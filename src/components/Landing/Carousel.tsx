import BannerAnim from 'rc-banner-anim';
import React from 'react';

import './less/Carousel.less'

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

type Props = {
  id: string,
  data: any,
}

const LandingCarousel = ({ id, data }: Props) => {

  const renderCarousel = data.data.map((item: any, index: number) => {
    return (
      <Element key={index}
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="carousel__bg"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        />
      </Element>
    )
  });

  return (
    <div id={id} className="carousel">
      <div className="container">
        <BannerAnim key="carousel-banner" autoPlay>
          {renderCarousel}
        </BannerAnim>
      </div>
    </div>
  )
}

export default LandingCarousel;