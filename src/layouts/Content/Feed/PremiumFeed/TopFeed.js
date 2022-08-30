import "./module.top-feed.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const TopFeed = () => {
  return (
    <Fragment>
      <div
        className="ideas-radio-group ideas-radio-group-outline newsFeedFilters-full-width"
        style={{ marginBottom: "5px" }}
      >
        <div
          className="ideas-space ideas-space-vertical"
          style={{ width: "100%" }}
        >
          <div className="ideas-space-item" style={{ marginBottom: "8px" }}>
            <span className="ideas-badge new-badge-full-width">
              <label
                className="ideas-radio-button-wrapper ideas-radio-button-wrapper-checked"
                style={{ width: "100%", height: "44px" }}
              >
                <span>
                  <img
                    src="assets/img/svg/feed/BlueHome.svg"
                    alt="home"
                    className="filter__icon"
                  />
                  <article
                    className="ideas-typography"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      marginLeft: "10px",
                    }}
                  >
                    For You
                  </article>
                </span>
              </label>
            </span>
          </div>
          <div className="ideas-space-item">
            <span className="ideas-badge new-badge-full-width">
              <label
                className="ideas-radio-button-wrapper"
                style={{ width: "100%", height: "44px" }}
              >
                <span>
                  <img
                    src="assets/img/svg/feed/Users.svg"
                    alt="home"
                    className="filter__icon"
                  />
                  <article
                    className="ideas-typography"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      marginLeft: "10px",
                    }}
                  >
                    Following
                  </article>
                </span>
              </label>
            </span>
          </div>
        </div>
      </div>
      <button
        className="ideas-btn ideas-btn-primary postUploader__btn"
        style={{ width: "100%" }}
      >
        <img
          src="assets/img/svg/feed/WhitePlus.svg"
          alt="white-plus"
          height="14"
          width="14"
        />
        <span>Create a Post</span>
      </button>
      <div className="ideas-divider ideas-divider-horizontal divider-bg-secondary"></div>
    </Fragment>
  );
};

export default TopFeed;
