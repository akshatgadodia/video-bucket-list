import "./Stylesheets/TabSwitch.css";
import Bucket from "../Components/Bucket";
import Popup from "../Components/Popup";
import HistoryTab from "../Components/HistoryTab";
import React, { useEffect, useState } from "react";

const TabSwitch = () => {
  const [data, setData] = useState([]);
  const [active, setActiveTab] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("/buckets", { method: "GET" });
      let data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

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
            {data.map(data => {
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
          </div>}
    </>
  );
};
export default TabSwitch;
