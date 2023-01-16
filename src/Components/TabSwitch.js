import "./Stylesheets/TabSwitch.css";
import Bucket from "../Components/Bucket";
import Popup from "../Components/Popup";
import HistoryTab from "../Components/HistoryTab";
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";

const TabSwitch = () => {
  const [data, setData] = useState([]);
  const [active, setActiveTab] = useState(false);
  const numEachPage = 6; //default size of page
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(numEachPage);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("/buckets", { method: "GET" });
      let data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const handleChange = (page) => {
    // console.log(page)
    setMinValue((page-1) * numEachPage);
    setMaxValue(page * numEachPage);
  }

  return (
    <>
      <div className="header">
        <div className="header-title-container">
            <div className="title-header">VIDEO BUCKET LIST</div>
            <Popup setData={setData} />
        </div>
        <div className="header-container">
          <div
            type="button"
            className={
              !active
                ? "header-container-button header-container-button-active"
                : "header-container-button"
            }
            onClick={() => setActiveTab(false)}
          >
            Home
          </div>
          <div
            type="button"
            className={
              active
                ? "header-container-button header-container-button-active"
                : "header-container-button"
            }
            onClick={() => setActiveTab(true)}
          >
            History
          </div>
        </div>
      </div>
      {active
        ? <HistoryTab active={active} />
        : <div className="tab-body">
          <div className="buckets-container-main">
            {data.slice(minValue, maxValue).map(data => {
              return (
                <Bucket
                  key={data.id}
                  id={data.id}
                  title={data.bucket_title}
                  videos={data.videos}
                  setData={setData}
                />
              );
            })}
            </div>
            { data.length>0 &&
            <div className="buckets-container-pagination">
            <Pagination
          defaultCurrent={1}
          defaultPageSize={numEachPage}
          onChange={handleChange}
          total={data.length}
        />
            </div>}
          </div>}
    </>
  );
};
export default TabSwitch;
