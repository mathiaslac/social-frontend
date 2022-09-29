import { Fragment, useEffect, useState } from "react";

import "../module.top.css";
import { motion } from "framer-motion";

import axios from "axios";

const YourPlace = [
  {
    id: "snooze",
    nickname: "Snooze",
    posNum: "1784",
    kdr: "2,00",
    userImg: "../assets/img/steamUser.png",
    rankImg: "../assets/img/ranks/1.svg",
    points: 35,
    kills: 2,
    deaths: 0,
  },
];
const TopRetake = () => {
  const [players, setPlayers] = useState([]);

  const getPlayers = () => {
    axios
      .get("http://localhost:5000/api/servers/retake/ranks")
      .then((response) => {
        const players = response.data;
        setPlayers(players);
      });
  };

  useEffect(() => getPlayers(), []);

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
          {YourPlace.map(
            ({
              id,
              nickname,
              userImg,
              posNum,
              kdr,
              rankImg,
              points,
              kills,
              deaths,
            }) => (
              <tr key={id} className="yourplace">
                <td>{posNum}</td>
                <td className="player-td">
                  <span>You</span>
                  <img src={userImg} alt={nickname} />
                  {nickname}
                </td>
                <td className="center">{kills}</td>
                <td className="center">{deaths}</td>
                <td className="center">{kdr}</td>
                <td className="img-ml pointer">
                  <img className="rank-img" src={rankImg} alt="rank-img" />
                </td>
                <td className="gold-text">
                  <img
                    src="https://cloud.cybershoke.net/pages/leaderboard/icons/logo.svg"
                    alt="icon-img"
                  />
                  {points}
                </td>
              </tr>
            )
          )}
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
                    <div>
                      <img
                        src={`../assets/img/svg/place/${index + 1}.svg`}
                        onError={(event) =>
                          (event.target.style.display = "none")
                        }
                        alt="pos-img"
                      />
                    </div>
                    {index + 1}
                  </td>
                  <td className="user-fix">
                    <a href={`profile/${player.steam}`}>
                      <span className="limited-length">{player.name}</span>
                    </a>
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

export default TopRetake;
