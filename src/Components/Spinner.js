import React from 'react'
import {Spin } from 'antd';
import "./Stylesheets/Spinner.css"

const Spinner = (props) => {
  return (
    <div className={props.loading ? 'spinner-mask' : 'spinner-mask-hidden'}>
        <Spin size="large" spinning={props.loading} className="spinner-spin"/>
    </div>
  )
}

export default Spinner
