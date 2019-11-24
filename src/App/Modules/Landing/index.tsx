import React from 'react';
import { Layout } from 'antd';
import LandingHeader from './Header';
const { Content, Footer } = Layout;

const Landing: React.FC = () => (
  <>
    <Layout>
      <LandingHeader />
      <Content style={{ margin: '24px 16px 0' }}>
        <div>content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2019 Made with &lt;3 <a href="//fb.com/baobinhaquarius" target="_blank" rel="noopener noreferrer">Bảo Bình - Aquarius</a></Footer>
    </Layout>
  </>
);

export default Landing;