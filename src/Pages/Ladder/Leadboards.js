import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import HeaderLeads from "./common/HeaderLeads";
import ModsGrid from "./common/ModsGrid";

import "./module.leadboards.css";

const Ladder = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Leadboards</title>
      </Helmet>
      <div
        className="leadboards"
        style={{ width: "100%", columnGap: 15, flexDirection: "row-reverse" }}
      >
        <div>
          <HeaderLeads />
          <ModsGrid />
        </div>
      </div>
    </Fragment>
  );
};

export default Ladder;
