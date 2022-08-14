import { Divider, Typography } from 'antd';
import React from 'react';
import Heart from '../Icons/Heart';
import ManGroup from '../Icons/ManGroup';

import './Video.css';

const { Text } = Typography;

const Video = ({ live, likes, watches, username }) => {
  return (
    <section className="video">
      {live && <span className="live">LIVE</span>}

      <div className="stats">
        <Text className="white">{username}</Text>
        <Divider style={{ backgroundColor: '#ccc' }} />
        <div className="statNumber">
          <span className="statNumber">
            <ManGroup color="#FFF" /> <Text className="white">{watches}</Text>
          </span>
          <span className="statNumber">
            <Heart color="#FFF" /> <Text className="white">{likes}</Text>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Video;
