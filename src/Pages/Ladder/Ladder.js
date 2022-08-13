import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import { Top } from "./components/index";
import RightFeed from "./layout";
import SeasonsSelect from "./components/SeasonsSelect";
import HeaderLadder from "./components/HeaderLadder";

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
