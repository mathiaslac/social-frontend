import { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Modal from "../../components/posts/AddPost/Modal/Modal";

import Discord from "./Discord";

import "./module.servers.css";
import axios from "axios";

/**
 * 
 * Sry, i can't to remake all this...
 * 
 */

const Servers = () => {
  const [showAwp, setShowAwp] = useState(false);
  const [showRetake, setShowRetake] = useState(false);
  const [showBhop, setShowBhop] = useState(false);
  const [showHns, setShowHns] = useState(false);
  const [showDm, setShowDm] = useState(false);
  const [showComp, setShowComp] = useState(false);

  const [awpServer, setAwpServer] = useState([]);
  const [AwpPlayer, setAwpPlayers] = useState([]);

  const [retakeServer, setRetakeServer] = useState([]);
  const [RetakePlayer, setRetakePlayers] = useState([]);
  const [RetakeBot, setRetakeBots] = useState([]);

  const [bhopServer, setBhopServer] = useState([]);
  const [BhopPlayer, setBhopPlayers] = useState([]);
  const [BhopBot, setBhopBots] = useState([]);

  const [hnsServer, setHnsServer] = useState([]);
  const [HnsPlayer, setHnsPlayers] = useState([]);
  const [HnsBot, setHnsBots] = useState([]);

  const [dmServer, setDmServer] = useState([]);
  const [DmRaw, setDmRaw] = useState([]);
  const [DmPlayer, setDmPlayers] = useState([]);
  const [DmBot, setDmBots] = useState([]);

  const [compServer, setCompServer] = useState([]);
  const [CompRaw, setCompRaw] = useState([]);
  const [CompPlayer, setCompPlayers] = useState([]);
  const [CompBot, setCompBots] = useState([]);

  const notify = () =>
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

  const getAwpServer = () => {
    axios.get("http://localhost:5000/api/servers/awp/info").then((response) => {
      const awpServers = response.data;
      setAwpServer(awpServers);
    });
  };
  const getAwpPlayers = () => {
    axios
      .get("http://localhost:5000/api/servers/awp/players")
      .then((response) => {
        const AwpPlayers = response.data;
        setAwpPlayers(AwpPlayers);
      });
  };

  const getRetakeServer = () => {
    axios
      .get("http://localhost:5000/api/servers/retake/info")
      .then((response) => {
        const retakeServers = response;
        setRetakeServer(retakeServers);
        const RetakePlayers = response.players;
        setRetakePlayers(RetakePlayers);
        const RetakeBots = response.bots;
        setRetakeBots(RetakeBots);
      });
  };
  const getBhopServer = () => {
    axios
      .get("http://localhost:5000/api/servers/bhop/info")
      .then((response) => {
        const bhopServers = response;
        setBhopServer(bhopServers);
        const BhopPlayers = response.players;
        setBhopPlayers(BhopPlayers);
        const BhopBots = response.bots;
        setBhopBots(BhopBots);
      });
  };
  const getHnsServer = () => {
    axios.get("http://localhost:5000/api/servers/hns/info").then((response) => {
      const hnsServers = response;
      setHnsServer(hnsServers);
      const HnsPlayers = response.players;
      setHnsPlayers(HnsPlayers);
      const HnsBots = response.bots;
      setHnsBots(HnsBots);
    });
  };
  const getDmServer = () => {
    axios.get("http://localhost:5000/api/servers/dm/info").then((response) => {
      const dmServers = response;
      setDmServer(dmServers);
      const DmRaws = response.raw;
      setDmRaw(DmRaws);
      const DmPlayers = response.players;
      setDmPlayers(DmPlayers);
      const DmBots = response.bots;
      setDmBots(DmBots);
    });
  };
  const getCompServer = () => {
    axios
      .get("http://localhost:5000/api/servers/comp/info")
      .then((response) => {
        const compServers = response;
        setCompServer(compServers);
        const CompRaws = response.raw;
        setCompRaw(CompRaws);
        const CompPlayers = response.players;
        setCompPlayers(CompPlayers);
        const CompBots = response.bots;
        setCompBots(CompBots);
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
  const retakeHeight =
    Math.round(retakeServer.numplayers * 100) / retakeServer.maxplayers;
  const bhopHeight =
    Math.round(bhopServer.numplayers * 100) / bhopServer.maxplayers;
  const hnsHeight = Math.round(hnsServer.numplayers * 100) / hnsServer.maxplayers;
  const dmHeight = Math.round(DmRaw.numplayers * 100) / dmServer.maxplayers;
  const compHeight =
    Math.round(CompRaw.numplayers * 100) / compServer.maxplayers;

  const retakeCountClass = () => {
    if (retakeServer.numplayers <= 4) {
      document.getElementById("retakeProg").classList.add("green");
    } else if (retakeServer.numplayers <= 7) {
      document.getElementById("retakeProg").classList.add("orange");
    } else if (retakeServer.numplayers <= 10) {
      document.getElementById("retakeProg").classList.add("red");
    }
  };
  const bhopCountClass = () => {
    if (bhopServer.numplayers <= 6) {
      document.getElementById("bhopProg").classList.add("green");
    } else if (bhopServer.numplayers <= 14) {
      document.getElementById("bhopProg").classList.add("orange");
    } else if (bhopServer.numplayers <= 18) {
      document.getElementById("bhopProg").classList.add("red");
    }
  };
  const hnsCountClass = () => {
    if (hnsServer.numplayers <= 6) {
      document.getElementById("hnsProg").classList.add("green");
    } else if (hnsServer.numplayers <= 12) {
      document.getElementById("hnsProg").classList.add("orange");
    } else if (hnsServer.numplayers <= 16) {
      document.getElementById("hnsProg").classList.add("red");
    }
  };
  const dmCountClass = () => {
    if (DmRaw.numplayers <= 6) {
      document.getElementById("dmProg").classList.add("green");
    } else if (DmRaw.numplayers <= 12) {
      document.getElementById("dmProg").classList.add("orange");
    } else if (DmRaw.numplayers <= 16) {
      document.getElementById("dmProg").classList.add("red");
    }
  };
  const compCountClass = () => {
    if (CompRaw.numplayers <= 5) {
      document.getElementById("compProg").classList.add("green");
    } else if (CompRaw.numplayers <= 9) {
      document.getElementById("compProg").classList.add("orange");
    } else if (CompRaw.numplayers <= 13) {
      document.getElementById("compProg").classList.add("red");
    }
  };

  useEffect(() => {
    getAwpServer();
    getAwpPlayers();
    getRetakeServer();
    getBhopServer();
    getHnsServer();
    getDmServer();
    getCompServer();
  }, []);

  useEffect(() => awpCountClass());
  useEffect(() => retakeCountClass());
  useEffect(() => bhopCountClass());
  useEffect(() => hnsCountClass());
  useEffect(() => dmCountClass());
  useEffect(() => compCountClass());

  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Servers</title>
      </Helmet>
      <div className="servers--page">
        <div className="all__online">
          <p>
            <span style={{ color: "#64b44d", marginRight: "5px" }}>
              {awpServer.players +
                retakeServer.numplayers +
                bhopServer.numplayers +
                hnsServer.numplayers +
                DmRaw.numplayers +
                CompRaw.numplayers}
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
            {awpServer.players}/{awpServer.maxplayers}
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
                          <th>
                            {new Date(Player.time * 1000)
                              .toISOString()
                              .substring(11, 19)}
                          </th>
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
        <div className="server-row" onClick={() => setShowRetake(true)}>
          <img
            className="server-row__bg"
            src={`assets/img/servers/${retakeServer.map}.jpg`}
            alt="awp_lego_2"
          />
          <div className="server-row__name">
            <span>{retakeServer.name}</span>
          </div>
          <div className="server-row__online">
            <div className="online">
              <div
                id="retakeProg"
                className="players block-servers-players-status"
                style={{ height: retakeHeight + "%" }}
              ></div>
            </div>
            {retakeServer.numplayers}/ {retakeServer.maxplayers}
          </div>
          <div className="server-row__ping">
            <img src="assets/img/svg/servers/chart_green.svg" alt="ping" />
            {retakeServer.protocol}
          </div>
          <div className="server-row__map">
            <span className="limited-length">{retakeServer.map}</span>
          </div>
          <div className="server-row__btns">
            <div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `connect ${retakeServer.connect}`
                  );
                  notify();
                }}
              >
                <img
                  src="assets/img/svg/servers/copy-server.svg"
                  alt="server-copy"
                />
              </button>

              <button alt="Join">
                <a href={`steam://connect/${retakeServer.connect}`}>
                  <img
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
          onClose={() => setShowRetake(false)}
          show={showRetake}
        >
          <div id="serverInfoModal" className="arcticmodal">
            <div className="cover server-modal__bg">
              <img
                src={`assets/img/servers/${retakeServer.map}.jpg`}
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
                    {RetakePlayer &&
                      RetakePlayer.map((Player, index) => (
                        <tr key={index}>
                          <th className="press-left server-modal__name">
                            {Player.name}
                          </th>
                          <th>{Player.score}</th>
                          <th>
                            {new Date(Player.time * 1000)
                              .toISOString()
                              .substring(11, 19)}
                          </th>
                        </tr>
                      ))}
                    {RetakeBot &&
                      RetakeBot.map((Bot, index) => (
                        <tr key={index}>
                          <th className="press-left server-modal__name">
                            {Bot.name}
                          </th>
                          <th>{Bot.score}</th>
                          <th>
                            {new Date(Bot.time * 1000)
                              .toISOString()
                              .substring(11, 19)}
                          </th>
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
                  navigator.clipboard.writeText(
                    `connect ${retakeServer.connect}`
                  );
                  notify();
                }}
              >
                <img src="assets/img/svg/servers/copy.svg" alt="copy" />
                IP {retakeServer.connect}
              </button>
              <a href={`steam://connect/${retakeServer.connect}`}>
                <button>
                  <img src="assets/img/svg/servers/steam-logo.svg" alt="copy" />
                  Join the server
                </button>
              </a>
            </div>
          </div>
        </Modal>
        <div className="server-row" onClick={() => setShowBhop(true)}>
          <img
            className="server-row__bg"
            src={`assets/img/servers/${bhopServer.map}.jpg`}
            alt="awp_lego_2"
          />
          <div className="server-row__name">
            <span>{bhopServer.name}</span>
          </div>
          <div className="server-row__online">
            <div className="online">
              <div
                id="bhopProg"
                className="players block-servers-players-status"
                style={{ height: bhopHeight + "%" }}
              ></div>
            </div>
            {bhopServer.numplayers}/ {bhopServer.maxplayers}
          </div>
          <div className="server-row__ping">
            <img src="assets/img/svg/servers/chart_green.svg" alt="ping" />
            {bhopServer.protocol}
          </div>
          <div className="server-row__map">
            <span className="limited-length">{bhopServer.map}</span>
          </div>
          <div className="server-row__btns">
            <div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `connect ${bhopServer.connect}`
                  );
                  notify();
                }}
              >
                <img
                  src="assets/img/svg/servers/copy-server.svg"
                  alt="server-copy"
                />
              </button>

              <button alt="Join">
                <a href={`steam://connect/${bhopServer.connect}`}>
                  <img
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
          onClose={() => setShowBhop(false)}
          show={showBhop}
        >
          <div id="serverInfoModal" className="arcticmodal">
            <div className="cover server-modal__bg">
              <img
                src={`assets/img/servers/${bhopServer.map}.jpg`}
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
                    {BhopPlayer &&
                      BhopPlayer.map((Player, index) => (
                        <tr key={index}>
                          <th className="press-left server-modal__name">
                            {Player.name}
                          </th>
                          <th>{Player.score}</th>
                          <th>
                            {new Date(Player.time * 1000)
                              .toISOString()
                              .substring(11, 19)}
                          </th>
                        </tr>
                      ))}
                    {BhopBot &&
                      BhopBot.map((Bot, index) => (
                        <tr key={index}>
                          <th className="press-left server-modal__name">
                            {Bot.name}
                          </th>
                          <th>{Bot.score}</th>
                          <th>
                            {new Date(Bot.time * 1000)
                              .toISOString()
                              .substring(11, 19)}
                          </th>
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
                  navigator.clipboard.writeText(
                    `connect ${bhopServer.connect}`
                  );
                  notify();
                }}
              >
                <img src="assets/img/svg/servers/copy.svg" alt="copy" />
                IP {bhopServer.connect}
              </button>
              <a href={`steam://connect/${bhopServer.connect}`}>
                <button>
                  <img src="assets/img/svg/servers/steam-logo.svg" alt="copy" />
                  Join the server
                </button>
              </a>
            </div>
          </div>
        </Modal>
        <div className="server-row" onClick={() => setShowHns(true)}>
          <img
            className="server-row__bg"
            src={`assets/img/servers/${hnsServer.map}.jpg`}
            alt="awp_lego_2"
          />
          <div className="server-row__name">
            <span>{hnsServer.name}</span>
          </div>
          <div className="server-row__online">
            <div className="online">
              <div
                id="hnsProg"
                className="players block-servers-players-status"
                style={{ height: hnsHeight + "%" }}
              ></div>
            </div>
            {hnsServer.numplayers}/ {hnsServer.maxplayers}
          </div>
          <div className="server-row__ping">
            <img src="assets/img/svg/servers/chart_green.svg" alt="ping" />
            {hnsServer.protocol}
          </div>
          <div className="server-row__map">
            <span className="limited-length">{hnsServer.map}</span>
          </div>
          <div className="server-row__btns">
            <div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`connect ${hnsServer.connect}`);
                  notify();
                }}
              >
                <img
                  src="assets/img/svg/servers/copy-server.svg"
                  alt="server-copy"
                />
              </button>

              <button alt="Join">
                <a href={`steam://connect/${hnsServer.connect}`}>
                  <img
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
          onClose={() => setShowHns(false)}
          show={showHns}
        >
          <div id="serverInfoModal" className="arcticmodal">
            <div className="cover server-modal__bg">
              <img
                src={`assets/img/servers/${hnsServer.map}.jpg`}
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
                    {HnsPlayer &&
                      HnsPlayer.map((Player, index) => (
                        <tr key={index}>
                          <th className="press-left server-modal__name">
                            {Player.name}
                          </th>
                          <th>{Player.score}</th>
                          <th>
                            {new Date(Player.time * 1000)
                              .toISOString()
                              .substring(11, 19)}
                          </th>
                        </tr>
                      ))}
                    {HnsBot &&
                      HnsBot.map((Bot, index) => (
                        <tr key={index}>
                          <th className="press-left server-modal__name">
                            {Bot.name}
                          </th>
                          <th>{Bot.score}</th>
                          <th>
                            {new Date(Bot.time * 1000)
                              .toISOString()
                              .substring(11, 19)}
                          </th>
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
                  navigator.clipboard.writeText(`connect ${hnsServer.connect}`);
                  notify();
                }}
              >
                <img src="assets/img/svg/servers/copy.svg" alt="copy" />
                IP {hnsServer.connect}
              </button>
              <a href={`steam://connect/${hnsServer.connect}`}>
                <button>
                  <img src="assets/img/svg/servers/steam-logo.svg" alt="copy" />
                  Join the server
                </button>
              </a>
            </div>
          </div>
        </Modal>
        <div className="server-row" onClick={() => setShowDm(true)}>
          <img
            className="server-row__bg"
            src={`assets/img/servers/${dmServer.map}.jpg`}
            alt="awp_lego_2"
          />
          <div className="server-row__name">
            <span>{dmServer.name}</span>
          </div>
          <div className="server-row__online">
            <div className="online">
              <div
                id="dmProg"
                className="players block-servers-players-status"
                style={{ height: dmHeight + "%" }}
              ></div>
            </div>
            {DmRaw.numplayers}/ {dmServer.maxplayers}
          </div>
          <div className="server-row__ping">
            <img src="assets/img/svg/servers/chart_green.svg" alt="ping" />
            {dmServer.protocol}
          </div>
          <div className="server-row__map">
            <span className="limited-length">{dmServer.map}</span>
          </div>
          <div className="server-row__btns">
            <div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`connect ${dmServer.connect}`);
                  notify();
                }}
              >
                <img
                  src="assets/img/svg/servers/copy-server.svg"
                  alt="server-copy"
                />
              </button>

              <button alt="Join">
                <a href={`steam://connect/${dmServer.connect}`}>
                  <img
                    src="assets/img/svg/servers/play.svg"
                    alt="play-server"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
        <Modal title="Add post" onClose={() => setShowDm(false)} show={showDm}>
          <div id="serverInfoModal" className="arcticmodal">
            <div className="cover server-modal__bg">
              <img
                src={`assets/img/servers/${dmServer.map}.jpg`}
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
                    {DmPlayer &&
                      DmPlayer.map((Player, index) => (
                        <tr key={index}>
                          <th className="press-left server-modal__name">
                            {Player.name}
                          </th>
                          <th>{Player.score}</th>
                          <th>
                            {new Date(Player.time * 1000)
                              .toISOString()
                              .substring(11, 19)}
                          </th>
                        </tr>
                      ))}
                    {DmBot &&
                      DmBot.map((Bot, index) => (
                        <tr key={index}>
                          <th className="press-left server-modal__name">
                            {Bot.name}
                          </th>
                          <th>{Bot.score}</th>
                          <th>
                            {new Date(Bot.time * 1000)
                              .toISOString()
                              .substring(11, 19)}
                          </th>
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
                  navigator.clipboard.writeText(`connect ${dmServer.connect}`);
                  notify();
                }}
              >
                <img src="assets/img/svg/servers/copy.svg" alt="copy" />
                IP {dmServer.connect}
              </button>
              <a href={`steam://connect/${dmServer.connect}`}>
                <button>
                  <img src="assets/img/svg/servers/steam-logo.svg" alt="copy" />
                  Join the server
                </button>
              </a>
            </div>
          </div>
        </Modal>
        <div className="server-row" onClick={() => setShowComp(true)}>
          <img
            className="server-row__bg"
            src={`assets/img/servers/${compServer.map}.jpg`}
            alt="awp_lego_2"
          />
          <div className="server-row__name">
            <span>{compServer.name}</span>
          </div>
          <div className="server-row__online">
            <div className="online">
              <div
                id="compProg"
                className="players block-servers-players-status"
                style={{ height: compHeight + "%" }}
              ></div>
            </div>
            {CompRaw.numplayers}/ {compServer.maxplayers}
          </div>
          <div className="server-row__ping">
            <img src="assets/img/svg/servers/chart_green.svg" alt="ping" />
            {compServer.protocol}
          </div>
          <div className="server-row__map">
            <span className="limited-length">{compServer.map}</span>
          </div>
          <div className="server-row__btns">
            <div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `connect ${compServer.connect}`
                  );
                  notify();
                }}
              >
                <img
                  src="assets/img/svg/servers/copy-server.svg"
                  alt="server-copy"
                />
              </button>

              <button alt="Join">
                <a href={`steam://connect/${compServer.connect}`}>
                  <img
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
          onClose={() => setShowComp(false)}
          show={showComp}
        >
          <div id="serverInfoModal" className="arcticmodal">
            <div className="cover server-modal__bg">
              <img
                src={`assets/img/servers/${compServer.map}.jpg`}
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
                    {CompPlayer &&
                      CompPlayer.map((Player, index) => (
                        <tr key={index}>
                          <th className="press-left server-modal__name">
                            {Player.name}
                          </th>
                          <th>{Player.score}</th>
                          <th>
                            {new Date(Player.time * 1000)
                              .toISOString()
                              .substring(11, 19)}
                          </th>
                        </tr>
                      ))}
                    {CompBot &&
                      CompBot.map((Bot, index) => (
                        <tr key={index}>
                          <th className="press-left server-modal__name">
                            {Bot.name}
                          </th>
                          <th>{Bot.score}</th>
                          <th>
                            {new Date(Bot.time * 1000)
                              .toISOString()
                              .substring(11, 19)}
                          </th>
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
                  navigator.clipboard.writeText(
                    `connect ${compServer.connect}`
                  );
                  notify();
                }}
              >
                <img src="assets/img/svg/servers/copy.svg" alt="copy" />
                IP {compServer.connect}
              </button>
              <a href={`steam://connect/${compServer.connect}`}>
                <button>
                  <img src="assets/img/svg/servers/steam-logo.svg" alt="copy" />
                  Join the server
                </button>
              </a>
            </div>
          </div>
        </Modal>
        <Discord />
      </div>
    </Fragment>
  );
};

export default Servers;
