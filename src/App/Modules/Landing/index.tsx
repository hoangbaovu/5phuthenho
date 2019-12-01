import React from 'react';
import { Layout } from 'antd';

import { 
  LandingGuestsData,
  LandingTimeLineData,
  LandingNavbarData,
} from './data.landing';

import LandingHeader from './Header';
import LandingBanner from './Banner';
import LandingIntroduction from './Introduction';
import LandingCarousel from './Carousel';
import LandingRules from './Rules';
import LandingGuests from './Guests';
import LandingTimeline from './TimeLine/TimeLine';

const { Content, Footer } = Layout;

const Landing = () => {
return (
  <Layout className="layout">
    <LandingHeader data={LandingNavbarData} />
    <LandingBanner />
    <Content>
      <LandingIntroduction key="introduction" id="introduction" />
      <LandingCarousel key="carousel" id="carousel" />      
      <LandingRules key="rules" id="rules" />
      <LandingGuests key="guests" id="guests" data={LandingGuestsData} />
      <LandingTimeline key="timeline" id="timeline" data={LandingTimeLineData} />
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2019 Made with ❤ by <a href="//fb.com/baobinhaquarius" target="_blank" rel="noopener noreferrer">Bảo Bình - Aquarius</a></Footer>
  </Layout>
)};

export default Landing;