import React, { Fragment } from "react";
import "./Home.css";

import Feed from "../../layouts/Content/Feed/index";

// import AddPost from "../../components/posts/AddPost/AddPost";
import Posts from "../../components/posts/RegularPost/RegularPost";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Feed</title>
      </Helmet>
      <div className="row" style={{ columnGap: 30, justifyContent: "center" }}>
        <Feed />
        <div className="posts" style={{ flex: 1, maxWidth: "47%", padding: 0 }}>
          <Posts />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
