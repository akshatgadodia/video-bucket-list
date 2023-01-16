import { Select } from 'antd';
import React from 'react';
import "./Stylesheets/Dropdown.css";

const { Option } = Select;

const Dropdown = (props) => (

  <Select
    placeholder="Please Select"
    optionFilterProp="children"
    defaultValue={props.bucketName}
    onChange={props.onChange}
    allowClear
    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
  >
    { 
      props.bucketNameData.map((data)=>{
        return(<Option key={data.id} value={data.id}>{data.bucket_title}</Option>)
      })
    }
  </Select>
);

export default Dropdown;