import React from 'react';
import { Avatar, Badge, Space, Typography } from 'antd';

import avatarPic from '../../assets/avatar.png';
import './Frindes.css';

const { Title } = Typography;

const frindes = [
  { image: avatarPic, online: true },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
  { image: avatarPic, online: false },
];

const Frindes = () => (
  <section className="main">
    <Title level={4} style={{ fontWeight: '700' }}>
      Friends
    </Title>

    <Space size="small" className="frindes">
      {frindes.map((frinde, inedx) =>
        frinde.online ? (
          <Badge offset={[-5, 10]} dot color="#8BC747" key={inedx}>
            <Avatar size={55} src={frinde.image} />
          </Badge>
        ) : (
          <Avatar key={inedx} size={55} src={frinde.image} />
        )
      )}
    </Space>
  </section>
);

export default Frindes;
