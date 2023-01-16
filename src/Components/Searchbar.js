import { Input } from 'antd';
import React from 'react';
import "./Stylesheets/Searchbar.css";

const { Search } = Input;

const Searchbar = (props) => {
  const onChangeHandler = (event) => {
    if(event.target.value===""){
      props.onSearchClear("")
    }
  }
  return(
    <Search className="searchbar"
      placeholder="Search Video"
      allowClear
      enterButton
      size="small" 
      onChange={onChangeHandler}
      onSearch={(value)=>props.setSearch(value)}
      onClear={(value)=>props.onSearchClear(value)}
    />
  )
}

export default Searchbar;