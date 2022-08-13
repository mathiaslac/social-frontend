import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
            <div className="error--page">
              <div className="qaq">404</div>
              <div className="not--found">Page not found</div>
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
