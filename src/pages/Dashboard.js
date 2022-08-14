import { Space } from 'antd';
import React from 'react';
import CreatePost from '../components/CreatePost/CreatePost';
import Dimensions from '../components/Dimensions/Dimensions';
import Frindes from '../components/Frindes/Frindes';

const Dashboard = () => (
  <main className="container">
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Frindes />
      <CreatePost />
      <Dimensions />
    </Space>
  </main>
);

export default Dashboard;
