import React from 'react';
import { Layout } from 'antd';

import { 
  LandingGuestsData,
  LandingTimeLineData,
  LandingNavbarData,
  LandingAddressData,
  LandingSponsorData,
  LandingCarouselData,
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

const LandingSGScreen = () => {
  const loader = useLoaderScreen();

  return (
    <Layout className="layout">
        <Loader isLoader={!loader} />
        <LandingHeader data={LandingNavbarData} />
        <LandingBanner />
        <Content>
          <LandingIntroduction key="introduction" id="introduction" />
          <LandingCarousel key="carousel" id="carousel" data={LandingCarouselData} />      
          <LandingRules key="rules" id="rules" />
          <LandingGuests key="guests" id="guests" data={LandingGuestsData} />
          <LandingTimeline key="timeline" id="timeline" data={LandingTimeLineData} />
          <LandingAddress key="address" id="address" data={LandingAddressData} city="saigon" />
          <LandingVideo key="video" id="video" data={LandingSponsorData} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2019 Made with ❤ by <a href="//fb.com/baobinhaquarius" target="_blank" rel="noopener noreferrer">Bảo Bình - Aquarius</a></Footer>
    </Layout>
  )
};

export default LandingSGScreen;