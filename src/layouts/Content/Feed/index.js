import "./Feed.css";
import React from "react";

import Sugg from "./Users/index";
import Online from "./Online/index";
import TopFeed from "./PremiumFeed/TopFeed";

const Feed = () => {
  return (
    <aside
      style={{
        position: "sticky",
        top: "0px",
        alignSelf: "flex-start",
      }}
    >
      <TopFeed />
      <Sugg />
      <Online />
    </aside>
  );
};

export default Feed;
