import React from 'react';
import { Layout } from 'antd';

import { 
  LandingGuestsData,
  LandingTimeLineData,
  LandingNavbarData,
  LandingAddressData,
  LandingSponsorData,
} from './data.landing';

import LandingHeader from './Header';
import LandingBanner from './Banner';
import LandingIntroduction from './Introduction';
import LandingCarousel from './Carousel';
import LandingRules from './Rules';
import LandingGuests from './Guests';
import LandingTimeline from './TimeLine/TimeLine';
import LandingVideo from './Video';
import LandingAddress from './Address';

const { Content, Footer } = Layout;

const Landing = () => {
return (
  <Layout className="layout">
    <LandingHeader data={LandingNavbarData} />
    <LandingBanner />
    <Content>
      <h2>Sài Gòn</h2>
      <LandingIntroduction key="introduction" id="introduction" />
      <LandingCarousel key="carousel" id="carousel" />      
      <LandingRules key="rules" id="rules" />
      <LandingGuests key="guests" id="guests" data={LandingGuestsData} />
      <LandingTimeline key="timeline" id="timeline" data={LandingTimeLineData} />
      <LandingAddress key="address" id="address" data={LandingAddressData} />
      <LandingVideo key="video" id="video" data={LandingSponsorData} />
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2019 Made with ❤ by <a href="//fb.com/baobinhaquarius" target="_blank" rel="noopener noreferrer">Bảo Bình - Aquarius</a></Footer>
  </Layout>
)};

export default Landing;