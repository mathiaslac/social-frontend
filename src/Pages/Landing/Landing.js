import { Fragment } from "react";
import "./Landing.css";
import { Helmet } from "react-helmet";

const Landing = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas</title>
      </Helmet>
      <div className="shop">
        <div className="card"></div>
      </div>
    </Fragment>
  );
};

export default Landing;
