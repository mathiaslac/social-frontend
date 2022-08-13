import React, { Fragment } from "react";
import "./Home.css";

import Feed from "../../layouts/Content/Feed/index";

import AddPost from "../../components/posts/AddPost/AddPost";
import Posts from "../../components/posts/RegularPost/RegularPost";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Feed</title>
      </Helmet>
      <div className="row" style={{ columnGap: 15 }}>
        <Feed />
        <div
          className="posts"
          style={{ flex: 1, maxWidth: "unset", padding: 0 }}
        >
          <AddPost />
          <Posts />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
