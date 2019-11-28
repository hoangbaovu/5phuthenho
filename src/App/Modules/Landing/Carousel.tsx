import BannerAnim from 'rc-banner-anim';
import React from 'react';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

import './less/Carousel.less'

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

type Props = {
  id: string
}

const LandingCarousel = ({ id }: Props) => {

  return (
    <ScrollOverPack id={id} className="carousel">
      <QueueAnim
        className="container"
        key="text"
        leaveReverse
        type="top"
      >
        <BannerAnim key="carousel-banner" autoPlay>
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
      </QueueAnim>
    </ScrollOverPack>
  )
}

export default LandingCarousel;