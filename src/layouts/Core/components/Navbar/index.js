import "./navbar.css";
import "./module.modal-chat.css";

import { NavLink, Link } from "react-router-dom";

import { motion } from "framer-motion";
import MenuChats from "./Components/MenuChats";
import LangSwitcher from "../../../../common/components/LangSwitcher/LangSwitcher";

// import LangSwitcher from "../../../../common/components/LangSwitcher/LangSwitcher";

import NoNotificationsSvg from "./Svg/NoNotificationsSvg";

window.onload = function () {};

const dropChats = () => {
  document.getElementById("Dropdown-Chats").classList.toggle("showChats");
};
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
                    autocomplete="off"
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
                    Search
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
            to="/Donate"
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
          <svg
            className="ideas-dropdown-trigger dropChats messages-menu pointer"
            onClick={dropChats}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#81869B"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.0374 15.4473C13.2096 14.1903 14.1903 13.2096 15.4473 13.0374C16.1683 12.9387 16.9514 12.8571 17.5714 12.8571C18.1914 12.8571 18.9746 12.9387 19.6955 13.0374C20.9526 13.2096 21.9333 14.1903 22.1054 15.4473C22.2042 16.1683 22.2857 16.9514 22.2857 17.5714C22.2857 18.1915 22.2042 18.9746 22.1054 19.6955C21.9333 20.9526 20.9526 21.9333 19.6955 22.1054C18.9746 22.2042 18.1914 22.2857 17.5714 22.2857C16.9514 22.2857 16.1683 22.2042 15.4473 22.1054C14.1903 21.9333 13.2096 20.9526 13.0374 19.6955C12.9387 18.9746 12.8571 18.1915 12.8571 17.5714C12.8571 16.9514 12.9387 16.1683 13.0374 15.4473Z"></path>
            <path d="M1.89457 15.4473C2.06673 14.1903 3.04742 13.2096 4.30446 13.0374C5.02544 12.9387 5.80855 12.8571 6.42857 12.8571C7.04859 12.8571 7.8317 12.9387 8.55269 13.0374C9.80973 13.2096 10.7904 14.1903 10.9626 15.4473C11.0613 16.1683 11.1429 16.9514 11.1429 17.5714C11.1429 18.1915 11.0613 18.9746 10.9626 19.6955C10.7904 20.9526 9.80973 21.9333 8.55269 22.1054C7.8317 22.2042 7.04859 22.2857 6.42857 22.2857C5.80855 22.2857 5.02544 22.2042 4.30446 22.1054C3.04742 21.9333 2.06673 20.9526 1.89457 19.6955C1.79583 18.9746 1.71429 18.1915 1.71429 17.5714C1.71429 16.9514 1.79583 16.1683 1.89457 15.4473Z"></path>
            <path d="M13.0374 4.30445C13.2096 3.04741 14.1903 2.06672 15.4473 1.89457C16.1683 1.79582 16.9514 1.71428 17.5714 1.71428C18.1914 1.71428 18.9746 1.79582 19.6955 1.89457C20.9526 2.06672 21.9333 3.04741 22.1054 4.30445C22.2042 5.02543 22.2857 5.80854 22.2857 6.42856C22.2857 7.04859 22.2042 7.8317 22.1054 8.55268C21.9333 9.80972 20.9526 10.7904 19.6955 10.9626C18.9746 11.0613 18.1914 11.1428 17.5714 11.1428C16.9514 11.1428 16.1683 11.0613 15.4473 10.9626C14.1903 10.7904 13.2096 9.80972 13.0374 8.55268C12.9387 7.8317 12.8571 7.04859 12.8571 6.42856C12.8571 5.80854 12.9387 5.02543 13.0374 4.30445Z"></path>
            <path d="M1.89457 4.30445C2.06673 3.04741 3.04742 2.06672 4.30446 1.89457C5.02544 1.79582 5.80855 1.71428 6.42857 1.71428C7.04859 1.71428 7.8317 1.79582 8.55269 1.89457C9.80973 2.06672 10.7904 3.04741 10.9626 4.30445C11.0613 5.02543 11.1429 5.80854 11.1429 6.42856C11.1429 7.04859 11.0613 7.8317 10.9626 8.55268C10.7904 9.80972 9.80973 10.7904 8.55269 10.9626C7.8317 11.0613 7.04859 11.1428 6.42857 11.1428C5.80855 11.1428 5.02544 11.0613 4.30446 10.9626C3.04742 10.7904 2.06673 9.80972 1.89457 8.55268C1.79583 7.8317 1.71429 7.04859 1.71429 6.42856C1.71429 5.80854 1.79583 5.02543 1.89457 4.30445Z"></path>
          </svg>
          <div id="Dropdown-Chats" className="dropdown-chats-content">
            <MenuChats />
          </div>
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
