import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import './less/Banner.less';

const LandingBanner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-text-wrapper">
          <QueueAnim
            key="QueueAnim"
            type={['bottom', 'top']}
            delay={1000}
          >
            <div key="1" className="banner-title">
            <TweenOne
                animation={{
                  y: '-=10',
                  yoyo: true,
                  repeat: -1,
                  duration: 1000,
                }}
                key="2"
              >
                <img src={require("../../../assets/banners/5phuthenho_logo_effects.png")} width="100%" alt="img" />
              </TweenOne>
            </div>
            <div key="3" className="banner-content">
              <Texty>"Mỗi cuộc gặp gỡ trong đời đều là duyên phận, không có đúng sai"</Texty>
            </div>
          </QueueAnim>
        </div>
      </div>
    </div>
  )
};

export default LandingBanner;