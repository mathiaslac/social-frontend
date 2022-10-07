import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../../../index";
import axios from "axios";

const UserCard = () => {
  const [credits, setCredits] = useState([]);
  const { user } = useContext(Context);

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

  useEffect(() => getCredits(), []);

  return (
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
                {String(credits.money).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
              </span>
              <span className="userAvatarName__balanceCoins"> credits</span>
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
