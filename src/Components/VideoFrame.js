import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import {Spin } from 'antd';
import "./Stylesheets/VideoFrame.css";

const VideoFrame = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(true);
  const showModal = () => {
    if(props.from!=="history")
      props.onClick();
    else{
      props.onClick(props.record.bucket_id,props.record.bucket_title,props.record.video_id,props.record.video_name,props.record.video_link)
    }
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onLoadHandler = async () => {
    setIframeLoaded(false);
  }

return (
  <>
    <Button size="middle" className="open-video" type="primary" onClick={showModal}>PLAY
    </Button>
    <Modal
    destroyOnClose
    className='video-modal'
    title="MEDIA PLAYER"
    visible={isModalVisible}
    onCancel={handleCancel}>
    <Spin size="large" tip="Loading..." spinning={iframeLoaded} className="video-modal-spin"/>
    <iframe className="videoplayer" src={props.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
            allowfullscreen style={{overflow:"hidden", height:"100%", width:"100%"}} height="100%" width="100%" 
            onLoad={onLoadHandler} title="Youtube Video"></iframe>
    </Modal>
  </>
);
};

export default VideoFrame;