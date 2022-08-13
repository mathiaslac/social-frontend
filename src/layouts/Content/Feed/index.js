import "./Feed.css";
import React from "react";

import Sugg from "./Users/index";
import Online from "./Online/index";
import PremiumFeed from "./PremiumFeed/index";

const Feed = () => {
  return (
    <aside
      style={{
        position: "sticky",
        top: "0px",
        alignSelf: "flex-start",
      }}
    >
      <PremiumFeed />
      <Online />
      <Sugg />
    </aside>
  );
};

export default Feed;
