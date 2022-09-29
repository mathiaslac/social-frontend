import { Fragment } from "react";
import { Link } from "react-router-dom";

import "../../../layouts/Content/Feed/PremiumFeed/module.top-feed.css";

const Justice = () => {
  return (
    <Fragment>
      <div className="ideas-space-item" style={{ marginBottom: 8 }}>
        <Link to="/dashboard/sourcebans/bans">
          <span className="ideas-badge new-badge-full-width">
            <label
              className="ideas-radio-button-wrapper ideas-radio-button-wrapper-checked"
              style={{ width: "100%", height: 44 }}
            >
              <span>
                <img
                  src="../../assets/img/svg/dashboard/justice.svg"
                  alt="home"
                  className="filter__icon"
                />
                <article
                  className="ideas-typography"
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    marginLeft: 10,
                  }}
                >
                  Sourcebans
                </article>
              </span>
            </label>
          </span>
        </Link>
      </div>
      <div className="ideas-space-item">
        <Link to="/dashboard/databases">
          <span className="ideas-badge new-badge-full-width">
            <label
              className="ideas-radio-button-wrapper"
              style={{ width: "100%", height: 44 }}
            >
              <span>
                <img
                  src="../../assets/img/svg/dashboard/database.svg"
                  alt="home"
                  className="filter__icon"
                />
                <article
                  className="ideas-typography"
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    marginLeft: 10,
                  }}
                >
                  Databases
                </article>
              </span>
            </label>
          </span>
        </Link>
      </div>
    </Fragment>
  );
};

export default Justice;
