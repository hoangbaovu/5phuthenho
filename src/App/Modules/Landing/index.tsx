import React from 'react';
import { Layout, Row, Col } from 'antd';
import LandingHeader from './Header';
import LandingBanner from './Banner';
const { Content, Footer } = Layout;

const Landing = () => (
  <Layout className="layout">
    <LandingHeader />
    <LandingBanner />
    <Content style={{ margin: '24px 16px 0' }}>
      <div className="container">
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2019 Made with &lt;3 <a href="//fb.com/baobinhaquarius" target="_blank" rel="noopener noreferrer">Bảo Bình - Aquarius</a></Footer>
  </Layout>
);

export default Landing;