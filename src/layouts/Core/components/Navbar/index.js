import "./navbar.css";
import "./module.modal-chat.css";

import { useContext } from "react";
import { Context } from "../../../..";
import {
  SearchBar,
  Nav,
  Logo,
  Chat,
  Dash,
  Notifs,
  UserCard,
  LoginButton,
} from "./Components/index";

import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user } = useContext(Context);
  return (
    <header style={{ gridArea: "header" }}>
      <div className="main-header">
        <div className="header__logoSearch">
          <div className="header__logo header__logo--desktop">
            <Logo />
          </div>
          <SearchBar />
        </div>
        <Nav />
        <div className="header__userNotificationGroup">
          {user.isAuth ? (
            <div className="loggedin-flex-nav">
              <UserCard />
              <Chat />
              <Notifs />
            </div>
          ) : (
            <LoginButton />
          )}
          {user.isAuth && user.user.group > 0 ? <Dash /> : <div></div>}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
