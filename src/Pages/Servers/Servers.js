import { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Modal from "../../components/posts/AddPost/Modal/Modal";

import "./module.servers.css";
import axios from "axios";

/**
 *
 * Sry, i can't to remake all this...
 *
 */

const Servers = () => {
  const [showAwp, setShowAwp] = useState(false);
  const [awpServer, setAwpServer] = useState([]);
  const [AwpPlayer, setAwpPlayers] = useState([]);

  const notify = () => {
    toast("Server address copied", {
      position: "top-center",
      icon: (
        <img src="assets/img/svg/servers/success-alert.svg" alt="success" />
      ),
      autoClose: 2000,
      closeButton: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const getAwpServer = () => {
    axios.get("http://localhost:5000/api/servers/awp/info").then((response) => {
      const awpServers = response.data;
      console.log(awpServers);
      setAwpServer(awpServers);
    });
  };
  const getAwpPlayers = () => {
    axios
      .get("http://localhost:5000/api/servers/awp/players")
      .then((response) => {
        const AwpPlayers = response.data;
        console.log(AwpPlayers);
        setAwpPlayers(AwpPlayers);
      });
  };

  const awpCountClass = () => {
    if (awpServer.players <= 10) {
      document.getElementById("awpProg").classList.add("green");
    } else if (awpServer.players <= 20) {
      document.getElementById("awpProg").classList.add("orange");
    } else if (awpServer.players <= 25) {
      document.getElementById("awpProg").classList.add("red");
    }
  };

  const awpHeight = Math.round(awpServer.players * 100) / awpServer.maxplayers;

  useEffect(() => {
    getAwpServer();
    getAwpPlayers();
  }, []);

  useEffect(() => awpCountClass());

  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Servers</title>
      </Helmet>
      <div className="servers--page">
        <div className="all__online">
          <p>
            <span style={{ color: "#64b44d", marginRight: "5px" }}>
              {awpServer.players}
            </span>
            players Online
          </p>
        </div>
        <div className="server-row" onClick={() => setShowAwp(true)}>
          <img
            className="server-row__bg"
            src={`assets/img/servers/${awpServer.map}.jpg`}
            alt="awp_lego_2"
          />
          <div className="server-row__name">
            <span>{awpServer.name}</span>
          </div>
          <div className="server-row__online">
            <div className="online">
              <div
                id="awpProg"
                className="players block-servers-players-status"
                style={{ height: awpHeight + "%" }}
              ></div>
            </div>
            {awpServer.players}/{awpServer.max_players}
          </div>
          <div className="server-row__ping">
            <img src="assets/img/svg/servers/chart_green.svg" alt="ping" />
            {awpServer.protocol}
          </div>
          <div className="server-row__map">
            <span className="limited-length">awp_lego_2</span>
          </div>
          <div className="server-row__btns">
            <div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`connect ${awpServer.connect}`);
                  notify();
                }}
              >
                <img
                  src="assets/img/svg/servers/copy-server.svg"
                  alt="server-copy"
                />
              </button>

              <button className="pointer" alt="Join">
                <a
                  className="pointer"
                  href={`steam://connect/${awpServer.connect}`}
                >
                  <img
                    className="pointer"
                    src="assets/img/svg/servers/play.svg"
                    alt="play-server"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
        <Modal
          title="Add post"
          onClose={() => setShowAwp(false)}
          show={showAwp}
        >
          <div id="serverInfoModal" className="arcticmodal">
            <div className="cover server-modal__bg">
              <img
                src={`assets/img/servers/${awpServer.map}.jpg`}
                alt="map-img"
              />
            </div>
            <div className="server-modal__table">
              <div className="table-grid-up">
                <table className="table">
                  <tbody className="table-players-server-header">
                    <tr>
                      <th className="press-left">Player</th>
                      <th>Score</th>
                      <th>In game</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-grig table-players-server-body blue-scroll">
                <table className="table">
                  <tbody className="data-one-server-info" id="table-scroller">
                    {AwpPlayer &&
                      AwpPlayer.map((Player, index) => (
                        <tr key={index}>
                          <th className="press-left server-modal__name">
                            {Player.name}
                          </th>
                          <th>{Player.score}</th>
                          <th>{Player.time}</th>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="server-modal__connect">
              <button
                className="server-modal__ip"
                onClick={() => {
                  navigator.clipboard.writeText(`connect ${awpServer.connect}`);
                  notify();
                }}
              >
                <img src="assets/img/svg/servers/copy.svg" alt="copy" />
                IP {awpServer.connect}
              </button>
              <a href={`steam://connect/${awpServer.connect}`}>
                <button>
                  <img src="assets/img/svg/servers/steam-logo.svg" alt="copy" />
                  Join the server
                </button>
              </a>
            </div>
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};

export default Servers;
