'use client';
import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import CustomHeader from './components/Header';
import CustomContent from './components/CustomContent';
import { Dashboard } from './dashboard/Dashboard';
import theme from './theme/theme';

const App = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <Layout>
        <CustomHeader />
        <CustomContent>
          <Dashboard />
        </CustomContent>
      </Layout>
    </div>
  </ConfigProvider>
);

export default App;
