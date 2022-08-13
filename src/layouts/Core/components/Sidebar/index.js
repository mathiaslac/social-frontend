import "./sidebar.css";
import React from "react";

import { NavLink, Link } from "react-router-dom";

import { EventsSvg, FeedSvg, GroupsSvg, RankingSvg } from "./Svg";

const sidebar = () => {
  return (
    <div className="sidebar_left" style={{ gridArea: "navbar" }}>
      <div className="sidebar_innr scroll">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `btn btn-mat valign ${isActive ? "active" : ""}`
          }
        >
          <FeedSvg />
          <span>News Feed</span>
        </NavLink>
        <NavLink
          to="/groups"
          className={({ isActive }) =>
            `btn btn-mat valign ${isActive ? "active" : ""}`
          }
        >
          <GroupsSvg />
          <span>Groups</span>
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            `btn btn-mat valign ${isActive ? "active" : ""}`
          }
        >
          <EventsSvg />
          <span>Events</span>
        </NavLink>
        <NavLink
          to="/ladder"
          className={({ isActive }) =>
            `btn btn-mat valign ${isActive ? "active" : ""}`
          }
        >
          <RankingSvg />
          <span>Ladder</span>
        </NavLink>
      </div>
      <Link to="/premium" className="prem pointer">
        <img src="assets/img/rocket.png" alt="premium" />
        <p>Upgrade to Premium</p>
        <button type="button" className="btn btn-mat pointer">
          Upgrade
        </button>
      </Link>
      <p className="app__version">v {process.env.REACT_APP_VERSION}</p>
    </div>
  );
};

export default sidebar;
