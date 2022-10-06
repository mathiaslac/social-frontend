import "./Home.css";

import Feed from "../../layouts/Content/Feed/index";

import Articles from "../../components/posts/RegularPost/Articles";

import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ideas - Feed</title>
      </Helmet>
      <div className="row" style={{ columnGap: 30, justifyContent: "center" }}>
        <Feed />
        <div className="posts" style={{ flex: 1, padding: 0 }}>
          <Articles />
        </div>
      </div>
    </>
  );
};

export default Home;
