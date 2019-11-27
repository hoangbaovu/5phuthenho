import BannerAnim from 'rc-banner-anim';
import React from 'react';

import './less/Carousel.less'

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

type Props = {
  id: string
}

const LandingCarousel = ({ id }: Props) => {

  return (
    <div className="carousel" id={id}>
      <div className="container">
        <BannerAnim autoPlay>
          <Element key="aaa"
            prefixCls="banner-user-elem"
          >
            <BgElement
              key="bg"
              className="carousel__bg"
              style={{
                backgroundImage: `url(${require("../../../assets/carousel/carousel-1.jpg")})`,
              }}
            />
          </Element>
          <Element key="bbb"
            prefixCls="banner-user-elem"
          >
            <BgElement
              key="bg"
              className="carousel__bg"
              style={{
                backgroundImage: `url(${require("../../../assets/carousel/carousel-2.jpg")})`,
              }}
            />
          </Element>
          <Element key="ccc"
            prefixCls="banner-user-elem"
          >
            <BgElement
              key="bg"
              className="carousel__bg"
              style={{
                backgroundImage: `url(${require("../../../assets/carousel/carousel-3.jpg")})`,
              }}
            />
          </Element>
        </BannerAnim>
      </div>
    </div>
  )
}

export default LandingCarousel;