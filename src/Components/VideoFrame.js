import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import "./Stylesheets/VideoFrame.css";

const VideoFrame = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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

return (
  <>
    <Button size="middle" className="open-video" type="primary" onClick={showModal}>PLAY
    </Button>
    <Modal
    destroyOnClose
    className='video-modal'
    title="MEDIA PLAYER"
    visible={isModalVisible}
    onCancel={handleCancel}
    
    footer={[
        
      ]}>
          
      <div className='videoplayer-div'>
      <iframe classname="videoplayer" src={props.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      allowfullscreen></iframe>
      </div>

    </Modal>
  </>
);
};

export default VideoFrame;