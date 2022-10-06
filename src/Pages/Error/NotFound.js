import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import Spline from "@splinetool/react-spline";

import "./NotFound.css";

const NotFound = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - NotFound</title>
      </Helmet>
      <div className="wrap">
        <div id="routerpages">
          <div className="error-page">
            <div className="error--page" style={{ marginTop: -200 }}>
              {/* <Spline scene="https://prod.spline.design/Kr3Xh60xvGU7OKxx/scene.splinecode" /> */}
              <div className="not--found" style={{ marginTop: -200 }}>
                Page not found
              </div>
              <div className="notfound--text">
                You are trying to access a page that has been deleted or didn't
                even exist
              </div>
              <Link to="/home" className="notfound--btn">
                Go back to the main page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
