import React, { Fragment } from "react";
import "./Home.css";

import Feed from "../../layouts/Content/Feed/index";

import Articles from "../../components/posts/RegularPost/Articles";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Feed</title>
      </Helmet>
      <div className="row" style={{ columnGap: 30, justifyContent: "center" }}>
        <Feed />
        <div className="posts" style={{ flex: 1, padding: 0 }}>
          <Articles />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
