import { Fragment } from "react";
import { Helmet } from "react-helmet";

import LeftUsers from "./Left/LeftUsers";
import OpenedChats from "./Right/OpenedChat";

import "./module.chats.css";
import "../../components/posts/RegularPost/module.posts.css";

const Chats = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Chats</title>
      </Helmet>
      <div className="row" style={{ columnGap: 30, justifyContent: "center" }}>
        <LeftUsers />
        <div
          className="posts"
          style={{ flex: 1, padding: 0, maxWidth: "100%" }}
        >
          <OpenedChats />
        </div>
      </div>
    </Fragment>
  );
};

export default Chats;
