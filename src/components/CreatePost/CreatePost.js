import React, { useState } from 'react';
import { Avatar, Button, Divider, Input, Space, Typography } from 'antd';

import logo from '../../assets/vverse.png';
import photoIcon from '../../assets/photoIcon.png';
import avatarPic from '../../assets/avatar.png';
import './CreatePost.css';

const { Text } = Typography;

const CreatePost = () => {
  const [postInput, setPostInput] = useState('');

  return (
    <section className="main">
      <div className="top">
        <Space align="center">
          <Text type="secondary">
            <img width={16} src={logo} alt="logo" /> Dimension
          </Text>
        </Space>

        <Space align="center">
          <Divider type="vertical" />
          <Text type="secondary">
            <img width={10} src={photoIcon} alt="logo" /> Photo/Video
          </Text>
        </Space>
      </div>

      <Divider />

      <div className="bottom">
        <Avatar size={40} src={avatarPic} />
        <form className="form">
          <Input
            className="postInput"
            value={postInput}
            onChange={(e) => setPostInput(e.target.value)}
            placeholder="Try mix reality lens"
          />
          <Button type="primary" disabled={!postInput}>
            Post
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
