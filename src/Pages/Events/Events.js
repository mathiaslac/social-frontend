import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import HeaderEvents from "./components/HeaderEvents";

import "./module.events.css";

const Ladder = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Events</title>
      </Helmet>
      <div
        className="events"
        style={{ width: "100%", columnGap: 15, flexDirection: "row-reverse" }}
      >
        <div>
          <HeaderEvents />
        </div>
      </div>
    </Fragment>
  );
};

export default Ladder;
