import React from 'react';
import { TopDashboardPanel } from './TopDashboardPanel';
import { CovidCharts } from './CovidCharts';
import { Space } from 'antd';

export const Dashboard = () => (
  <Space direction="vertical" size="large" style={{ width: '100%' }}>
    <TopDashboardPanel />
    <CovidCharts />
  </Space>
);
