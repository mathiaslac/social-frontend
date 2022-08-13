import "./navbar.css";
import "./module.modal-chat.css";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import MenuChats from "./Components/MenuChats";

import MenuSvg from "./Svg/MenuSvg";
import SearchSvg from "./Svg/SearchSvg";
import MessagesSvg from "./Svg/MessagesSvg";
import NotificationsSvg from "./Svg/NotificationsSvg";
import NoNotificationsSvg from "./Svg/NoNotificationsSvg";
import LoopSvg from "./Svg/LoopSvg";

window.onload = function () {};

const dropChats = () => {
  document.getElementById("Dropdown-Chats").classList.toggle("showChats");
};
const dropPush = () => {
  document.getElementById("Dropdown-Push").classList.toggle("show");
};

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropFriends")) {
    var dropdowns = document.getElementsByClassName("dropdown-friends-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

window.onclick = function (event) {
  if (!event.target.matches(".dropChats")) {
    var dropdowns = document.getElementsByClassName("dropdown-chats-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("showChats")) {
        openDropdown.classList.remove("showChats");
      }
    }
  }
};

window.onclick = function (event) {
  if (!event.target.matches(".dropPush")) {
    var dropdowns = document.getElementsByClassName("dropdown-push-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const Navbar = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/", {
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((b) => {
        if (b.success) {
          setUser(b.user);
        }
      });
  }, []);
  return user ? (
    <header style={{ gridArea: "header" }}>
      <div className="main-header">
        <div className="navbar nvabar_top">
          <div className="container-fluid">
            <div className="valign header">
              <button className="toggle_sidebar">
                <MenuSvg />
              </button>
              <Link className="logo-wrapper" to="/home">
                <img className="logo_pc md-block" src="" alt="logo" />
              </Link>
              <div className="search-wrapper">
                <button type="button" className="toggle_search">
                  <SearchSvg />
                </button>
                <form>
                  <input
                    id="search-input"
                    className="form-control"
                    type="search"
                    placeholder="Find someone..."
                    autoComplete="off"
                  />
                  <LoopSvg />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="valign navbar_top_right">
          <div className="dropdown js_live-messages">
            <span className="counter x-hidden">0</span>
            <div onClick={dropChats} className="dropChats hdr_droptoggle">
              <MessagesSvg />
            </div>
          </div>

          <div id="Dropdown-Chats" className="dropdown-chats-content">
            <MenuChats />
          </div>
          <div className="dropdown js_live-notifications">
            <span className="counter x-hidden">0</span>
            <button onClick={dropPush} className="dropPush hdr_droptoggle">
              <NotificationsSvg />
            </button>
            <div
              id="Dropdown-Push"
              className="dropdown-friends-content notifs__spacing dropdown-menu dropdown-menu-right dropdown-widget js_dropdown-keepopen scroll"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  transform: "translateY(20px)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateY(0px)",
                }}
                transition={{
                  duration: 0.07,
                }}
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                }}
                className="valign dropdown-widget-header"
              >
                <span className="title">Notifications</span>
              </motion.div>
              <div className="dropdown-widget-body custom-scrollbar">
                <div className="js_scroller">
                  <p className="text-center text-muted empty_state">
                    <NoNotificationsSvg />
                    No notifications
                  </p>
                </div>
              </div>
              <p className="dropdown-widget-footer pointer">See All</p>
            </div>
          </div>

          <div className="user-menu dropdown main_usr_ddmenu" user={user}>
            <Link to="/76561198184313278">
              <button
                onClick={() =>
                  (window.location.href = "http://localhost:5000/logout")
                }
                className="hdr_droptoggle hdr_user_droptoggle"
              >
                <img src={props.user.avatar.large} alt="Avatar" />
                <span>{props.user.username}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  ) : (
    <header style={{ gridArea: "header" }}>
      <div className="main-header">
        <div className="navbar nvabar_top">
          <div className="container-fluid">
            <div className="valign header">
              <button className="toggle_sidebar">
                <MenuSvg />
              </button>
              <Link className="logo-wrapper" to="/home">
                <img className="logo_pc md-block" src="" alt="logo" />
              </Link>
              <div className="search-wrapper">
                <button type="button" className="toggle_search">
                  <SearchSvg />
                </button>
                <form>
                  <input
                    id="search-input"
                    className="form-control"
                    type="search"
                    placeholder="Find someone..."
                    autoComplete="off"
                  />
                  <LoopSvg />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="valign navbar_top_right">
          <div className="user-menu dropdown main_usr_ddmenu">
            <button
              onClick={() =>
                (window.location.href = "http://localhost:5000/api/auth/steam")
              }
            >
              Login with Steam
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
