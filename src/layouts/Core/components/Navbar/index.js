import "./navbar.css";
import "./module.modal-chat.css";

import { NavLink, Link } from "react-router-dom";

import { useState, useEffect, useContext, useMemo } from "react";

import axios from "axios";

import { motion } from "framer-motion";

import NoNotificationsSvg from "./Svg/NoNotificationsSvg";
import { Context } from "../../../..";
import { API_URL } from "../../../../util/consts";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import SearchBar from "./Components/SearchBar";

import "react-toastify/dist/ReactToastify.css";

window.onload = function () {};

const dropPush = () => {
  document.getElementById("Dropdown-Push").classList.toggle("show");
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

const Navbar = () => {
  const [credits, setCredits] = useState([]);
  const { user } = useContext(Context);

  const [, setMState] = useState(false);

  const toastHandle = (error) => {
    toast.error(error, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleLogin = () => {
    // Creating a window
    const popupWindow = window.open(
      API_URL + "/api/auth/login",
      "_blank",
      "width=800, height=600"
    );

    // Open the window with "Authorise in new window"
    setMState(true);

    // Focus on a new window
    if (window.focus) popupWindow.focus();

    // Interval for closing the login window
    let popupTick = setInterval(function () {
      if (popupWindow.closed) {
        clearInterval(popupTick);
        setMState(false);
      }
    }, 500);
  };

  const getCredits = () => {
    if (user.isAuth) {
      axios
        .get(`http://localhost:5000/api/shop/${user.user.steam_short}`)
        .then((response) => {
          const credits = response.data;
          setCredits(credits);
        });
    }
  };
  useMemo(() => {
    window.onmessage = (event) => {
      if (event.origin !== API_URL) return;
      const { token, ok, error } = event.data;
      if (ok && token) {
        try {
          let data = jwtDecode(token);
          console.log(data);
          toast("Auth success !", {
            position: "top-center",
            icon: (
              <img
                src="assets/img/svg/servers/success-alert.svg"
                alt="success"
              />
            ),
            autoClose: 2000,
            closeButton: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          user.setUser(data);
          user.setIsAuth(true);
          user.setGroup(data.group);
          localStorage.setItem("jwtToken", token);
        } catch (e) {
          toast("Somethings wrong :(", {
            position: "top-center",
            icon: (
              <img
                src="assets/img/svg/servers/success-alert.svg"
                alt="success"
              />
            ),
            autoClose: 2000,
            closeButton: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toastHandle(error);
      }
    };
  }, [user]);

  useEffect(() => getCredits(), []);
  return (
    <header style={{ gridArea: "header" }}>
      <div className="main-header">
        <div className="header__logoSearch">
          <div className="header__logo header__logo--desktop">
            <Link to="/home">
              <img
                src="assets/img/svg/logos/ideas-logo-both.svg"
                alt="logo"
                width="210"
              />
            </Link>
          </div>

          <div className="header__searchWrapper">
            <div className="ideas-select ideas-select-lg header__search ideas-select-single ideas-select-show-search">
              <div className="ideas-select-selector">
                <span className="ideas-select-selection-search">
                  <SearchBar className="ideas-select-selection-search-input" />
                </span>
                <span className="ideas-select-selection-placeholder">
                  <span>
                    <img
                      src="assets/img/svg/navbar/Search.svg"
                      alt="Search"
                      className="search_searchIcon__1aT8z"
                      height="20"
                      width="20"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <ul className="ideas-menu header__mainMenu ideas-menu-horizontal">
          <NavLink
            to="/home"
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            <li className="ideas-menu-item">
              <img
                src="assets/img/svg/navbar/Home.svg"
                alt="Home"
                height={"24px"}
                width={"24px"}
              />
              <span>Home</span>
            </li>
          </NavLink>
          <NavLink
            to="/servers"
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            <li className="ideas-menu-item">
              <img
                src="assets/img/svg/navbar/Play.svg"
                alt="Play"
                height={"24px"}
                width={"24px"}
              />
              <span>Play</span>
            </li>
          </NavLink>
          <NavLink
            to="/leadboards/awp"
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            <li className="ideas-menu-item">
              <img
                src="assets/img/svg/navbar/Leadboards.svg"
                alt="Leadboards"
                height={"24px"}
                width={"24px"}
              />
              <span>Leadboards</span>
            </li>
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            <li className="ideas-menu-item">
              <img
                src="assets/img/svg/navbar/Events.svg"
                alt="Events"
                height={"24px"}
                width={"24px"}
              />
              <span>Events</span>
            </li>
          </NavLink>
          <NavLink
            to="/donate"
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            <li className="ideas-menu-item">
              <img
                src="assets/img/svg/navbar/Donate.svg"
                alt="Donate"
                height={"24px"}
                width={"24px"}
              />
              <span>Donate</span>
            </li>
          </NavLink>
        </ul>
        <div className="header__userNotificationGroup">
          {user.isAuth ? (
            <div className="loggedin-flex-nav">
              <Link to={`/profile/${user.user.steamid64}`}>
                <div
                  className="header__userAvatarNameWrapper"
                  style={{ display: "flex" }}
                >
                  <span
                    className="ideas-avatar ideas-avatar-circle ideas-avatar-image"
                    style={{ height: "40px", width: "40px", fontSize: "40px" }}
                  >
                    <img
                      src={user.user.avatar.medium}
                      alt="Avatar"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </span>
                  <div>
                    <span className="ideas-typography ideas-typography-ellipsis ideas-typography-ellipsis-single-line header__userAvatarName">
                      {user.user.name}
                    </span>
                    <span className="userAvatarName__balance fade">
                      <img
                        src="assets/img/svg/navbar/Credits.svg"
                        alt="credits"
                        style={{
                          height: "16px",
                          width: "16px",
                          marginRight: "4px",
                          verticalAlign: "text-top",
                        }}
                      />
                      <span className="userAvatarName__balanceNumber">
                        <span className="userAvatarName__balanceDigit">
                          {String(credits.money).replace(
                            /(.)(?=(\d{3})+$)/g,
                            "$1,"
                          )}
                        </span>
                        <span className="userAvatarName__balanceCoins">
                          {" "}
                          credits
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
              <Link to="/chats">
                <svg
                  className="ideas-dropdown-trigger dropChats messages-menu pointer"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.37546 5.91957C2.66565 4.23488 4.00472 2.99648 5.69477 2.73932C7.31411 2.49293 9.53559 2.25 12 2.25C14.4644 2.25 16.6859 2.49293 18.3052 2.73932C19.9953 2.99648 21.3344 4.23488 21.6245 5.91957C21.8268 7.09372 22 8.58525 22 10.25C22 11.9147 21.8268 13.4063 21.6245 14.5804C21.3344 16.2651 19.9953 17.5035 18.3052 17.7607C16.8238 17.9861 14.8384 18.2086 12.6241 18.2449L6.50873 21.8585C5.84211 22.2524 5 21.7719 5 20.9976V17.594C3.64656 17.1439 2.62456 16.0266 2.37546 14.5804C2.17321 13.4063 2 11.9147 2 10.25C2 8.58525 2.17321 7.09372 2.37546 5.91957Z"
                    fill="#81869B"
                  />
                </svg>
              </Link>
              <div onClick={dropPush}>
                <div className="dropPush ideasBadge ideas-badge ideas-dropdown-trigger notification__badge notif pointer">
                  <svg
                    className="notif__icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#81869B"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.39999C10.0905 2.39999 8.25912 3.15856 6.90886 4.50882C5.55859 5.85909 4.80003 7.69043 4.80003 9.59999V13.9032L3.95163 14.7516C3.78385 14.9194 3.66961 15.1332 3.62332 15.366C3.57704 15.5987 3.60081 15.8399 3.69161 16.0592C3.78242 16.2784 3.93618 16.4658 4.13347 16.5977C4.33077 16.7295 4.56272 16.7999 4.80003 16.8H19.2C19.4373 16.7999 19.6693 16.7295 19.8666 16.5977C20.0639 16.4658 20.2176 16.2784 20.3084 16.0592C20.3992 15.8399 20.423 15.5987 20.3767 15.366C20.3304 15.1332 20.2162 14.9194 20.0484 14.7516L19.2 13.9032V9.59999C19.2 7.69043 18.4415 5.85909 17.0912 4.50882C15.7409 3.15856 13.9096 2.39999 12 2.39999ZM12 21.6C11.0452 21.6 10.1296 21.2207 9.45444 20.5456C8.77931 19.8704 8.40003 18.9548 8.40003 18H15.6C15.6 18.9548 15.2207 19.8704 14.5456 20.5456C13.8705 21.2207 12.9548 21.6 12 21.6Z"></path>
                  </svg>
                  <sup
                    className="notification-count"
                    style={{
                      animationName: "antZoomBadgeIn",
                      background: "#f71953",
                      right: 3,
                      marginTop: -2,
                    }}
                  >
                    <span>3</span>
                  </sup>
                </div>
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
                      transition:
                        "opacity 400ms ease 0s, transform 400ms ease 0s",
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
            </div>
          ) : (
            <div className="valign navbar_top_right">
              <div className="user-menu dropdown main_usr_ddmenu">
                <button className="login-button" onClick={handleLogin}>
                  <img
                    className="steam-icon-login"
                    src="assets/img/svg/servers/steam-logo.svg"
                    alt="steam-logo"
                    width={18}
                    height={18}
                  />
                  Login with Steam
                </button>
              </div>
            </div>
          )}
          {user.isAuth && user.user.group > 0 ? (
            <Link to="/dashboard/sourcebans/bans">
              <svg
                className="ideas-dropdown-trigger dropChats messages-menu pointer"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#81869B"
                  d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                />
              </svg>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
