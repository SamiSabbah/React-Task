import React, { useState } from 'react';
import { Radio, Space, Typography } from 'antd';

import './Dimensions.css';
import Video from './Video.js';

const { Title } = Typography;

const Dimensions = () => {
  const [value, setValue] = useState('all');

  const selectionChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <section className="main">
      <Title level={4} style={{ fontWeight: '700' }}>
        Dimensions
      </Title>

      <Radio.Group onChange={selectionChange} value={value} buttonStyle="solid">
        <Radio.Button value="all">All</Radio.Button>
        <Radio.Button value="trending">Trending</Radio.Button>
        <Radio.Button value="a">title</Radio.Button>
        <Radio.Button value="b">title</Radio.Button>
        <Radio.Button value="c">title</Radio.Button>
        <Radio.Button value="d">title</Radio.Button>
        <Radio.Button value="e">title</Radio.Button>
      </Radio.Group>

      <Space size="small" className="videos">
        <Video live likes={123} watches={431} username="Dim. or username" />
        <Video likes={123} watches={431} username="Dim. or username" />
        <Video likes={123} watches={431} username="Dim. or username" />
        <Video likes={123} watches={431} username="Dim. or username" />
        <Video likes={123} watches={431} username="Dim. or username" />
        <Video likes={123} watches={431} username="Dim. or username" />
      </Space>
    </section>
  );
};

export default Dimensions;
