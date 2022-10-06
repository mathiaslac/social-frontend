import React, { Fragment } from "react";

import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RightFeed from "./layout";
import { HeaderLadder, SeasonsSelect } from "./components";

import "./module.ladder.css";

const LeaderBoardLayout = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Leadboards</title>
      </Helmet>
      <div
        className="ladder_row"
        style={{ width: "100%", columnGap: 15, flexDirection: "row-reverse" }}
      >
        <RightFeed />
        <div>
          <HeaderLadder />
          <SeasonsSelect />
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default LeaderBoardLayout;
