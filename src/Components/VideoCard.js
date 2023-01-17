import "./Stylesheets/VideoCard.css";
import { Checkbox } from "antd";
import Modalbox from "../Components/Modalbox";
import React from "react";
import VideoFrame from "./VideoFrame";

const VideoCard = props => {
  const onChange = e => {
    if (e.target.checked) {
      props.addElementsToDelete(props.id);
    } else {
      props.removeElementsToDelete(props.id);
    }
  };

  const saveHistory = async () => {
    let date = new Date();
    let data = {
      bucket_id: props.bucketID,
      bucket_title: props.bucketName,
      video_id: props.id,
      video_name: props.name,
      video_link: props.link,
      last_played: date.toLocaleTimeString() + " " + date.toLocaleDateString()
    };
    await fetch(`/api/history/`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
    });
  };

  return (
    <div className="card-outer">
        <Checkbox className="checkbox-mobile" onChange={onChange} />
    <div className="card">
      <div className="card-container">
        <Checkbox className="checkbox-desktop" onChange={onChange} />
        <p className="video-name">
          {props.name}
        </p>
      </div>
      <div className="card-container">
        <VideoFrame link={props.link} onClick={saveHistory} />
        <Modalbox
          btnName="EDIT"
          setData={props.setData}
          videoId={props.id}
          bucketName={props.bucketName}
          bucketID={props.bucketID}
          videoName={props.name}
          videoLink={props.link}
          deleteElementsToDelete={props.deleteElementsToDelete}
        />
      </div>
    </div>
    </div>
  );
};

export default VideoCard;
