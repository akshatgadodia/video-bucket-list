import "./Stylesheets/BucketEdit.css";
import { Button, Modal, Input } from 'antd';
import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import Spinner from "./Spinner";

const BucketEdit = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name,setName] = useState('');
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setLoading(true);
    let response = await fetch(`/api/buckets/${props.id}`,{method: "GET"});
    let data = await response.json();
    data.bucket_title=name;
    await fetch(`/api/buckets/${props.id}`, {
        method: 'PUT', mode: 'cors',credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    response = await fetch("/api/buckets",{method: "GET"});
    response = await response.json();
    props.setData(response);
    setName('');
    setLoading(false)
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Spinner loading={loading}/>
      <Button type="text" size="large" onClick={showModal}><EditOutlined/></Button>
      <Modal
      title="EDIT BUCKET"
      destroyOnClose
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={[
          <Button className="add-btn" key="submit" type="primary" visible={isModalVisible} onClick={handleOk} onOk={handleOk} onCancel={handleCancel}>
            OK
          </Button>
        ]}>
            <div className="enter-bucket">
            <p className="select-bucket-p">BUCKET NAME</p>
            <Input className="bucket-text-box" placeholder="Please Enter" onChange={event=>{setName(event.target.value)}}/>
        </div>
      </Modal>
    </>
  );
};

export default BucketEdit;