import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import "./Saved.css";

import SavedSvg from "./Svg/SavedSvg";
import Feed from "../../layouts/Content/Feed/index";
import RegularPost from "../../components/posts/RegularPost/RegularPost";

const Saved = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Saved Posts</title>
      </Helmet>
      <div className="row">
        <div className="posts">
          <h2 className="page_title">
            <SavedSvg />
            Saved Posts
          </h2>
          <RegularPost />
        </div>
        <Feed />
      </div>
    </Fragment>
  );
};

export default Saved;
