import React from 'react';
import { Layout } from 'antd';

import { 
  LandingGuestsData,
  LandingTimeLineData,
  LandingNavbarData,
  LandingAddressData,
  LandingSponsorData,
} from '../../components/Landing/data.landing';

import {
  LandingHeader,
  LandingBanner,
  LandingIntroduction,
  LandingCarousel,
  LandingRules,
  LandingGuests,
  LandingTimeline,
  LandingVideo,
  LandingAddress,
} from '../../components/Landing';

import { Loader } from '../../components/Loader';

import { useLoaderScreen } from '../../shared/hooks';

const { Content, Footer } = Layout;

const LandingHNScreen = () => {
  const loader = useLoaderScreen();

  return (
    <Layout className="layout">
        <Loader isLoader={!loader} />
        <LandingHeader data={LandingNavbarData} />
        <LandingBanner />
        <Content>
          <LandingIntroduction key="introduction" id="introduction" />
          <LandingCarousel key="carousel" id="carousel" />      
          <LandingRules key="rules" id="rules" />
          <LandingGuests key="guests" id="guests" data={LandingGuestsData} />
          <LandingTimeline key="timeline" id="timeline" data={LandingTimeLineData} />
          <LandingAddress key="address" id="address" data={LandingAddressData} city="hanoi" />
          <LandingVideo key="video" id="video" data={LandingSponsorData} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2019 Made with ❤ by <a href="//fb.com/baobinhaquarius" target="_blank" rel="noopener noreferrer">Bảo Bình - Aquarius</a></Footer>
    </Layout>
  )
};

export default LandingHNScreen;