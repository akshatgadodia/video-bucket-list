import { Input } from 'antd';
import React from 'react';
import "./Stylesheets/Searchbar.css";

const { Search } = Input;

const Searchbar = (props) => {

  return(
    <Search className="searchbar"
      placeholder="Search Video"
      allowClear
      enterButton
      size="small" 
      onSearch={(value)=>props.setSearch(value)}
      onClear={(value)=>props.onSearchClear(value)}
    />
  )
}

export default Searchbar;