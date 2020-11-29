 import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"


function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPBOGDiM79AZj3BREOgD6oMTqI03eBbtpU1A&usqp=CAU"
        channel="clever programmer"
        verified
        subs="660k"
        noOfVideos={382}
        description="build something that can solve real world problems with effective time and effective cost."
      />
      
      <hr/>

      <VideoRow
      views="1.4M"
      subs="659K"
description="this is description"
timestamp="2 days ago"
channel="clever programmer"
title="this is title"
 image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPBOGDiM79AZj3BREOgD6oMTqI03eBbtpU1A&usqp=CAU"
       />

<VideoRow
      views="1.4M"
      subs="659K"
description="this is description"
timestamp="2 days ago"
channel="clever programmer"
title="this is title"
 image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPBOGDiM79AZj3BREOgD6oMTqI03eBbtpU1A&usqp=CAU"
       />

<VideoRow
      views="1.4M"
      subs="659K"
description="this is description"
timestamp="2 days ago"
channel="clever programmer"
title="this is title"
 image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPBOGDiM79AZj3BREOgD6oMTqI03eBbtpU1A&usqp=CAU"
       />


    </div>
  );
}

export default SearchPage;
