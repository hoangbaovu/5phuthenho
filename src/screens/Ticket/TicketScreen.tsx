import React from 'react';
import { Layout } from 'antd';

import { 
  LandingNavbarData,
} from '../../components/Landing/data.landing';

import {
  LandingHeader,
} from '../../components/Landing';

import { Loader } from '../../components/Loader';

import { useLoaderScreen } from '../../shared/hooks';
import { Ticket } from '../../components/Ticket';

const { Content, Footer } = Layout;

const TicketScreen = () => {
  const loader = useLoaderScreen();

  return (
    <Layout className="layout">
        <Loader isLoader={!loader} />
        <LandingHeader data={LandingNavbarData} />
        <Content>
          <Ticket />
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2019 Made with ❤ by <a href="//fb.com/baobinhaquarius" target="_blank" rel="noopener noreferrer">Bảo Bình - Aquarius</a></Footer>
    </Layout>
  )
};

export default TicketScreen;