import { Badge, Button, Col, Row, Typography, Space } from 'antd';
import {
  DownloadOutlined,
  FilterOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import React from 'react';

const { Text, Title } = Typography;

const iconStyle: React.CSSProperties = {
  color: '#288778',
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  whiteSpace: 'nowrap',
};

export const TopDashboardPanel = () => (
  <Row gutter={[16, 16]} align="middle">
    <Col xs={24} xl={12}>
      <Title style={titleStyle}>Dashboard</Title>
    </Col>
    <Col xs={24} xl={12}>
      <Space
        size="middle"
        wrap
        style={{ justifyContent: 'flex-end', width: '100%' }}
      >
        {' '}
        {/* Adjusted for better alignment */}
        <Button>
          Export to PDF <DownloadOutlined style={iconStyle} />
        </Button>
        <Button>
          Notes <Text type="secondary">(150)</Text>
          <MenuOutlined style={iconStyle} />
        </Button>
        <Button>
          <Space size="small">
            Filter
            <Badge count="7+" color="#288778" />
            <FilterOutlined style={iconStyle} />
          </Space>
        </Button>
      </Space>
    </Col>
  </Row>
);
