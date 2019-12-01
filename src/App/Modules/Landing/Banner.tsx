import React from 'react';
import { Parallax } from 'rc-scroll-anim';
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
                <img src="../../../../assets/banners/5phuthenho_logo_effects.png" width="100%" alt="img" />
              </TweenOne>
            </div>
            <div key="3" className="banner-content">
              <Parallax
                animation={[
                  { x: 0, opacity: 1, playScale: [0, 0.2] },
                  { y: 5, playScale: [0, 0.3] },
                  { blur: '10px', playScale: [0, 0.5] },
                ]}
                style={{ transform: 'translateX(-100px)', filter: 'blur(0px)', opacity: 0 }}
                className="code-box-shape"
              >
                <Texty>"Mỗi cuộc gặp gỡ trong đời đều là duyên phận, không có đúng sai"</Texty>
              </Parallax>
            </div>
          </QueueAnim>
        </div>
      </div>
    </div>
  )
};

export default LandingBanner;