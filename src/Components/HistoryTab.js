import "./Stylesheets/HistoryTab.css";
import { Button,Table} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import { useState, useEffect } from 'react';
import VideoFrame from './VideoFrame';

const Tableview = (props) => {
  const[history,setHistory] = useState([])

  function GetSortOrder() {    
    return function(a, b) {   
        if (a.id > b.id) {    
            return -1;    
        } else if (a.id < b.id) {    
            return 1;    
        }    
        return 0;    
    }    
  }

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch("/history",{method: "GET"});
      const data = await response.json();
      setHistory(data.sort(GetSortOrder()));
    }
    fetchHistory()
  }, [props.active])
  
  const deleteHistory = async (id) => {
    await fetch(`/history/${id}`, {
      method: 'DELETE', mode: 'cors',credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
    });
    let response = await fetch("/history",{method: "GET"});
    response = await response.json();
    setHistory(response);
  }

  const playVideo = async (bucketID,bucketName,id,name,link) => {
    let date = new Date();
        let data = {
            "bucket_id": bucketID,
            "bucket_title": bucketName,
            "video_id": id,
            "video_name": name,
            "video_link":link,
            "last_played": date.toLocaleTimeString()+" "+date.toLocaleDateString() 
        }
        console.log(data);
        await fetch(`/history/`, {
            method: 'POST', mode: 'cors',credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        const response = await fetch("/history",{method: "GET"});
        data = await response.json();
        setHistory(data.sort(GetSortOrder()));
  }

  const columns = [
    {
      title: 'VIDEO NAME',
      dataIndex: 'video_name',
      key: 'video_name',
      width: "30vw",
    },
    {
      title: 'VIDEO LINK',
      dataIndex: 'video_link',
      key: 'video_link',
      width: "50vw",
    },
    {
      title: 'PLAY VIDEO',
      dataIndex: 'video_link',
      key: 'video_link_play',
      width: "10vw",
      render : (_, record) => <VideoFrame from="history" link = {record.video_link} onClick={playVideo} record={record}/>
    },
    {
      title: 'PLAY TIME',
      dataIndex: 'last_played',
      key: 'last_played',
      width: "20vw",
    },
    {
      title: 'DELETE',
      dataIndex: 'id',
      key: 'id',
      width: "10vw",
      render : (_, record) => <Button type="text" onClick={()=>{deleteHistory(record.id)}}><DeleteOutlined /></Button>
    },
  ];

  return(
    <div className="outer">
      <div className="inner">
        <Table
        size="small"
        columns={columns}
        dataSource={history}
        pagination={{ size:"default", pageSize: 10 }}
        />
    </div>
    </div>
  )
}


export default Tableview;