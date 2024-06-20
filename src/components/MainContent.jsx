import React from "react";
import { VideoCard } from "./VideoCard";
import { useState } from "react";

export const MainContent = () => {
  const [videoDetails, setVideoDetails] = useState([
    {
      "id":1,
      "video":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYsviRv2XHdAXRCNnNknNl8K69vmw9hqhPQ&s",
      "name":"Video 1",
      "channel":"c1",
      "views":"2 M",
      "time": "2 yearss ago"
    },
    {
      "id":2,
      "video":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYsviRv2XHdAXRCNnNknNl8K69vmw9hqhPQ&s",
      "name":"Video 2",
      "channel":"c2",
      "views":"1 M",
      "time": "2 yearss ago"
    },
    {
      "id":3,
      "video":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYsviRv2XHdAXRCNnNknNl8K69vmw9hqhPQ&s",
      "name":"Video 3",
      "channel":"c3",
      "views":"7 M",
      "time": "2 years ago"
    },
    {
      "id":4,
      "video":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYsviRv2XHdAXRCNnNknNl8K69vmw9hqhPQ&s",
      "name":"Video 4",
      "channel":"c4",
      "views":"7 M",
      "time": "2 years ago"
    },
    {
      "id":5,
      "video":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYsviRv2XHdAXRCNnNknNl8K69vmw9hqhPQ&s",
      "name":"Video 5",
      "channel":"c5",
      "views":"7 M",
      "time": "2 years ago"
    },

  ])
// d-flex flex-row
  return (
    <>
      <div className="container m-3 ms-5 ">
        <div className="grid grid-col-3">
          {videoDetails.map((v)=> 
            <VideoCard key={v.id} 
            video={v.video}
            name={v.name}
            channel={v.channel}
            views={v.views}
            time={v.time} />
          )}
        </div>
      </div>
    </>
  );
};
