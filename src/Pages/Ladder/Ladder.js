import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import RightFeed from "./layout";
import { Top, HeaderLadder, SeasonsSelect } from "./components";

import "./module.ladder.css";

const Ladder = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Ladder</title>
      </Helmet>
      <div
        className="ladder_row"
        style={{ width: "100%", columnGap: 15, flexDirection: "row-reverse" }}
      >
        <RightFeed />
        <div>
          <HeaderLadder />
          <SeasonsSelect />
          <Top />
        </div>
      </div>
    </Fragment>
  );
};

export default Ladder;
