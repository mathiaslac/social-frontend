import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
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
  );
};

export default Nav;
