import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardProps,
  Divider,
  Tooltip,
  Typography,
} from 'antd';
import { CommentOutlined } from '@ant-design/icons';

const iconStyle: React.CSSProperties = {
  color: '#8c8c8c',
};

const avatarStyle: React.CSSProperties = {
  border: '2px solid #1890ff',
};

const { Text } = Typography;

export const ChartCard = (props: CardProps) => (
  <Card {...props} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    {props.children}
    <Divider />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Tooltip title="User Avatar" placement="top">
        <Avatar src="https://i.pravatar.cc/150?img=5" style={avatarStyle} />
      </Tooltip>
      <Button type="text">
        <Text type="secondary">Comments</Text>
        <CommentOutlined style={iconStyle} />
      </Button>
    </div>
  </Card>
);
