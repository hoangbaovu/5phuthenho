import React from 'react';
import { Layout } from 'antd';
import LandingHeader from './Header';
import LandingBanner from './Banner';
import LandingIntroduction from './Introduction';
import LandingCarousel from './Carousel';
import LandingRules from './Rules';

const { Content, Footer } = Layout;

const Landing = () => {
return (
  <Layout className="layout">
    <LandingHeader />
    <LandingBanner />
    <Content>
      <LandingIntroduction id="introduction" />
      <LandingCarousel id="carousel" />      
      <LandingRules id="rules" />
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2019 Made with &lt;3 by <a href="//fb.com/baobinhaquarius" target="_blank" rel="noopener noreferrer">Bảo Bình - Aquarius</a></Footer>
  </Layout>
)};

export default Landing;