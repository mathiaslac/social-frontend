import "./navbar.css";
import "./module.modal-chat.css";

import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import LangSwitcher from "../../../../common/components/LangSwitcher/LangSwitcher";

// import LangSwitcher from "../../../../common/components/LangSwitcher/LangSwitcher";

import NoNotificationsSvg from "./Svg/NoNotificationsSvg";

window.onload = function () {};

const dropPush = () => {
  document.getElementById("Dropdown-Push").classList.toggle("show");
};
const dropLang = () => {
  document.getElementById("Dropdown-Lang").classList.toggle("showLang");
};

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropLang")) {
    var dropdowns = document.getElementsByClassName("dropdown-lang-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("showLang")) {
        openDropdown.classList.remove("showLang");
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
  const { t } = useTranslation();
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
                  <input
                    autoComplete="off"
                    type="search"
                    className="ideas-select-selection-search-input"
                    value=""
                    id="rc_select_0"
                  />
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
                    {t("navbar-search")}
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
              <span>{t("navbar-home")}</span>
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
              <span>{t("navbar-play")}</span>
            </li>
          </NavLink>
          <NavLink
            to="/leadboards"
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            <li className="ideas-menu-item">
              <img
                src="assets/img/svg/navbar/Leadboards.svg"
                alt="Leadboards"
                height={"24px"}
                width={"24px"}
              />
              <span>{t("navbar-leadboards")}</span>
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
              <span>{t("navbar-events")}</span>
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
              <span>{t("navbar-donate")}</span>
            </li>
          </NavLink>
        </ul>
        <div className="header__userNotificationGroup">
          <Link to="/76561198184313278">
            <div
              className="header__userAvatarNameWrapper"
              style={{ display: "flex" }}
            >
              <span
                className="ideas-avatar ideas-avatar-circle ideas-avatar-image"
                style={{ height: "40px", width: "40px", fontSize: "40px" }}
              >
                <img
                  src="assets/img/steamUser.png"
                  alt="Avatar"
                  style={{ height: "100%", width: "100%" }}
                />
              </span>
              <div>
                <span className="ideas-typography ideas-typography-ellipsis ideas-typography-ellipsis-single-line header__userAvatarName">
                  Snooze
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

          <div>
            <div
              onClick={dropPush}
              className="dropPush ideasBadge ideas-badge ideas-dropdown-trigger notification__badge notif pointer"
            >
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
          <div className="dropLang pointer" onClick={dropLang}>
            <img src="assets/img/svg/navbar/Lang.svg" alt="Lang" height="34" />
          </div>
          <div
            id="Dropdown-Lang"
            className="dropdown-lang-content langTranslateX"
          >
            <LangSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
