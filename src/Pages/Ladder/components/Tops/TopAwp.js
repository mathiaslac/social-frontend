import { Fragment, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import "../css/module.top.css";
import { motion } from "framer-motion";
import { Context } from "../../../../index";
import axios from "axios";
import SteamID from "steamid";

const TopAwp = () => {
  const [players, setPlayers] = useState([]);
  const { user } = useContext(Context);
  const [currentPlayer, setCurrentPlayer] = useState([]);
  const [avatar, setAvatar] = useState([]);

  const getPlayers = () => {
    axios
      .get("http://localhost:5000/api/servers/awp/ranks")
      .then((response) => {
        const players = response.data;
        setPlayers(players);
      });
  };
  const getCurrentPlayer = () => {
    if (user.isAuth) {
      axios
        .get(
          `http://localhost:5000/api/servers/awp/currentplayer/${user.user.steam_short}`
        )
        .then((response) => {
          const currentPlayer = response.data[0];
          setCurrentPlayer(currentPlayer);
        });
    }
  };
  const steam64 = (steam) => {
    let steamclass = new SteamID(steam);
    return steamclass.getSteamID64();
  };

  const getAvatar = () => {
    axios
      .get(`http://localhost:5000/api/avatar/${steam64("STEAM_0:0:546942335")}`)
      .then((response) => {
        const avatar = response.data;
        setAvatar(avatar);
      });
  };

  useEffect(() => {
    getPlayers();
    getCurrentPlayer();
    getAvatar();
  }, []);
  return (
    <Fragment>
      <div className="header__table-top">
        <span>Position</span>
        <span>Player</span>
        <span className="center">Kills</span>
        <span className="center">Deaths</span>
        <span className="center">K/D</span>
        <span style={{ width: "80px", justifyContent: "center" }}>Rank</span>
        <span>Points</span>
      </div>
      <div className="top__table">
        <table>
          <thead>
            <tr className="yourplace" style={{ marginBottom: 0 }}>
              <td></td>
              <td className="player-td">
                <span>You</span>
                <img src={user.user.avatar.medium} alt={currentPlayer.name} />
                {currentPlayer.name}
              </td>
              <td className="center">{currentPlayer.kills}</td>
              <td className="center">{currentPlayer.deaths}</td>
              <td className="center">
                {(
                  Math.round(
                    (currentPlayer.kills / currentPlayer.deaths) * 100
                  ) / 100
                )
                  .toFixed(2)
                  .replace(".", ",")}
              </td>
              <td className="img-ml pointer">
                <img
                  className="rank-img"
                  src={`../assets/img/ranks/${currentPlayer.rank}.svg`}
                  alt="rank-img"
                />
              </td>
              <td className="gold-text">
                <img
                  src="https://cloud.cybershoke.net/pages/leaderboard/icons/logo.svg"
                  alt="icon-img"
                />
                {currentPlayer.value}
              </td>
            </tr>
          </thead>
          <tbody className="grey-scroll shadow--top">
            {players &&
              players.map((player, index) => (
                <motion.tr
                  key={player.steam}
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
                    delay: index * 0.07,
                  }}
                  className="sub__card-top flex-card iourDk"
                  style={{
                    transition:
                      "opacity 400ms ease 0s, transform 400ms ease 0s",
                  }}
                >
                  <td
                    className="pos-mr top-color"
                    style={{ color: player.color }}
                  >
                    <div className="rankIcon">
                      <img
                        src={`../assets/img/svg/place/new/rank.svg`}
                        onError={(event) =>
                          (event.target.style.display = "none")
                        }
                        alt="pos-img"
                      />
                      <img
                        className="rankImg"
                        src={`../assets/img/svg/place/new/${index + 1}.svg`}
                        onError={(event) =>
                          (event.target.style.display = "none")
                        }
                        alt="pos-img"
                      />
                    </div>
                    <span className="rankIcon__rank">{index + 1}</span>
                  </td>
                  <td className="user-fix">
                    <Link to={`/profile/${steam64(player.steam)}`}>
                      <img src={avatar} alt="player-img" />
                      <span className="limited-length">{player.name}</span>
                    </Link>
                  </td>
                  <td className="center">{player.kills}</td>
                  <td className="center">{player.deaths}</td>
                  <td className="center">
                    {(Math.round((player.kills / player.deaths) * 100) / 100)
                      .toFixed(2)
                      .replace(".", ",")}
                  </td>
                  <td className="img-mlt pointer">
                    <img
                      className="rank-img"
                      src={`../assets/img/ranks/${player.rank}.svg`}
                      alt="rank-img"
                    />
                  </td>
                  <td className="gold-text">
                    <img
                      src="https://cloud.cybershoke.net/pages/leaderboard/icons/logo.svg"
                      alt="icon-img"
                    />
                    {player.value}
                  </td>
                </motion.tr>
              ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default TopAwp;
