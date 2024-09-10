import React from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const customHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#148BA6',
  padding: '0 20px',
  height: '64px',
};

const customTitleStyle: React.CSSProperties = {
  color: '#FAFAFA',
  fontSize: '24px',
  fontWeight: 'bold',
};

const CustomHeader = () => {
  return (
    <Header style={customHeaderStyle}>
      <Title level={3} style={customTitleStyle}>
        Interactive Data Dashboard
      </Title>
    </Header>
  );
};

export default CustomHeader;
