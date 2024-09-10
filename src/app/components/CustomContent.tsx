import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const customContentStyle: React.CSSProperties = {
  padding: '20px 40px',
  maxWidth: '1100px',
  width: '100%',
  margin: '0 auto',
};

const CustomContent = ({ children }: React.PropsWithChildren) => {
  return <Content style={customContentStyle}>{children}</Content>;
};

export default CustomContent;
