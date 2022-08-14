import { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Modal from "../../components/posts/AddPost/Modal/Modal";

import "./module.servers.css";
import axios from "axios";

const Servers = () => {
  const [showAwp, setShowAwp] = useState(false);
  const [showRetake, setShowRetake] = useState(false);
  const [showBhop, setShowBhop] = useState(false);
  const [showHns, setShowHns] = useState(false);
  const [showDm, setShowDm] = useState(false);
  const [showComp, setShowComp] = useState(false);

  const [awpServer, setAwpServer] = useState([]);
  const [AwpRaw, setAwpRaw] = useState([]);
  const [AwpPlayer, setAwpPlayers] = useState([]);
  const [AwpBot, setAwpBots] = useState([]);

  const [retakeServer, setRetakeServer] = useState([]);
  const [RetakeRaw, setRetakeRaw] = useState([]);
  const [RetakePlayer, setRetakePlayers] = useState([]);
  const [RetakeBot, setRetakeBots] = useState([]);

  const [bhopServer, setBhopServer] = useState([]);
  const [BhopRaw, setBhopRaw] = useState([]);
  const [BhopPlayer, setBhopPlayers] = useState([]);
  const [BhopBot, setBhopBots] = useState([]);

  const [hnsServer, setHnsServer] = useState([]);
  const [HnsRaw, setHnsRaw] = useState([]);
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
    axios.get("http://localhost:5000/api/servers/awp").then((response) => {
      const awpServers = response.data.info;
      setAwpServer(awpServers);
      const AwpRaws = response.data.info.raw;
      setAwpRaw(AwpRaws);
      const AwpPlayers = response.data.info.players;
      setAwpPlayers(AwpPlayers);
      const AwpBots = response.data.info.bots;
      setAwpBots(AwpBots);
    });
  };
  const getRetakeServer = () => {
    axios.get("http://localhost:5000/api/servers/retake").then((response) => {
      const retakeServers = response.data.info;
      setRetakeServer(retakeServers);
      const RetakeRaws = response.data.info.raw;
      setRetakeRaw(RetakeRaws);
      const RetakePlayers = response.data.info.players;
      setRetakePlayers(RetakePlayers);
      const RetakeBots = response.data.info.bots;
      setRetakeBots(RetakeBots);
    });
  };
  const getBhopServer = () => {
    axios.get("http://localhost:5000/api/servers/bhop").then((response) => {
      const bhopServers = response.data.info;
      setBhopServer(bhopServers);
      const BhopRaws = response.data.info.raw;
      setBhopRaw(BhopRaws);
      const BhopPlayers = response.data.info.players;
      setBhopPlayers(BhopPlayers);
      const BhopBots = response.data.info.bots;
      setBhopBots(BhopBots);
    });
  };
  const getHnsServer = () => {
    axios.get("http://localhost:5000/api/servers/hns").then((response) => {
      const hnsServers = response.data.info;
      setHnsServer(hnsServers);
      const HnsRaws = response.data.info.raw;
      setHnsRaw(HnsRaws);
      const HnsPlayers = response.data.info.players;
      setHnsPlayers(HnsPlayers);
      const HnsBots = response.data.info.bots;
      setHnsBots(HnsBots);
    });
  };
  const getDmServer = () => {
    axios.get("http://localhost:5000/api/servers/dm").then((response) => {
      const dmServers = response.data.info;
      setDmServer(dmServers);
      const DmRaws = response.data.info.raw;
      setDmRaw(DmRaws);
      const DmPlayers = response.data.info.players;
      setDmPlayers(DmPlayers);
      const DmBots = response.data.info.bots;
      setDmBots(DmBots);
    });
  };
  const getCompServer = () => {
    axios.get("http://localhost:5000/api/servers/comp").then((response) => {
      const compServers = response.data.info;
      setCompServer(compServers);
      const CompRaws = response.data.info.raw;
      setCompRaw(CompRaws);
      const CompPlayers = response.data.info.players;
      setCompPlayers(CompPlayers);
      const CompBots = response.data.info.bots;
      setCompBots(CompBots);
    });
  };

  const awpCountClass = () => {
    if (AwpRaw.numplayers <= 10) {
      document.getElementById("awpProg").classList.add("green");
    } else if (AwpRaw.numplayers <= 20) {
      document.getElementById("awpProg").classList.add("orange");
    } else if (AwpRaw.numplayers <= 25) {
      document.getElementById("awpProg").classList.add("red");
    }
  };

  const awpHeight = Math.round(AwpRaw.numplayers * 100) / awpServer.maxplayers;
  const retakeHeight =
    Math.round(RetakeRaw.numplayers * 100) / retakeServer.maxplayers;
  const bhopHeight =
    Math.round(BhopRaw.numplayers * 100) / bhopServer.maxplayers;
  const hnsHeight = Math.round(HnsRaw.numplayers * 100) / hnsServer.maxplayers;
  const dmHeight = Math.round(DmRaw.numplayers * 100) / dmServer.maxplayers;
  const compHeight =
    Math.round(CompRaw.numplayers * 100) / compServer.maxplayers;

  const retakeCountClass = () => {
    if (RetakeRaw.numplayers <= 10) {
      document.getElementById("retakeProg").classList.add("green");
    } else if (RetakeRaw.numplayers <= 20) {
      document.getElementById("retakeProg").classList.add("orange");
    } else if (RetakeRaw.numplayers <= 25) {
      document.getElementById("retakeProg").classList.add("red");
    }
  };
  const bhopCountClass = () => {
    if (BhopRaw.numplayers <= 10) {
      document.getElementById("bhopProg").classList.add("green");
    } else if (BhopRaw.numplayers <= 20) {
      document.getElementById("bhopProg").classList.add("orange");
    } else if (BhopRaw.numplayers <= 25) {
      document.getElementById("bhopProg").classList.add("red");
    }
  };
  const hnsCountClass = () => {
    if (HnsRaw.numplayers <= 10) {
      document.getElementById("hnsProg").classList.add("green");
    } else if (HnsRaw.numplayers <= 20) {
      document.getElementById("hnsProg").classList.add("orange");
    } else if (HnsRaw.numplayers <= 25) {
      document.getElementById("hnsProg").classList.add("red");
    }
  };
  const dmCountClass = () => {
    if (DmRaw.numplayers <= 10) {
      document.getElementById("dmProg").classList.add("green");
    } else if (DmRaw.numplayers <= 20) {
      document.getElementById("dmProg").classList.add("orange");
    } else if (DmRaw.numplayers <= 25) {
      document.getElementById("dmProg").classList.add("red");
    }
  };
  const compCountClass = () => {
    if (CompRaw.numplayers <= 10) {
      document.getElementById("compProg").classList.add("green");
    } else if (CompRaw.numplayers <= 20) {
      document.getElementById("compProg").classList.add("orange");
    } else if (CompRaw.numplayers <= 25) {
      document.getElementById("compProg").classList.add("red");
    }
  };

  useEffect(() => getAwpServer(), []);
  useEffect(() => getRetakeServer(), []);
  useEffect(() => getBhopServer(), []);
  useEffect(() => getHnsServer(), []);
  useEffect(() => getDmServer(), []);
  useEffect(() => getCompServer(), []);

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
              {AwpRaw.numplayers +
                RetakeRaw.numplayers +
                BhopRaw.numplayers +
                HnsRaw.numplayers +
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
            {AwpRaw.numplayers}/{awpServer.maxplayers}
          </div>
          <div className="server-row__ping">
            <img src="assets/img/svg/servers/chart_green.svg" alt="ping" />
            {awpServer.ping}
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
                    {AwpBot &&
                      AwpBot.map((Bot, index) => (
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
            <div classname="online">
              <div
                id="retakeProg"
                className="players block-servers-players-status"
                style={{ height: retakeHeight + "%" }}
              ></div>
            </div>
            {RetakeRaw.numplayers}/ {retakeServer.maxplayers}
          </div>
          <div className="server-row__ping">
            <img src="assets/img/svg/servers/chart_green.svg" alt="ping" />
            {retakeServer.ping}
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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
            <div classname="online">
              <div
                id="bhopProg"
                className="players block-servers-players-status"
                style={{ height: bhopHeight + "%" }}
              ></div>
            </div>
            {BhopRaw.numplayers}/ {bhopServer.maxplayers}
          </div>
          <div className="server-row__ping">
            <img src="assets/img/svg/servers/chart_green.svg" alt="ping" />
            {bhopServer.ping}
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
            <div classname="online">
              <div
                id="hnsProg"
                className="players block-servers-players-status"
                style={{ height: hnsHeight + "%" }}
              ></div>
            </div>
            {HnsRaw.numplayers}/ {hnsServer.maxplayers}
          </div>
          <div className="server-row__ping">
            <img src="assets/img/svg/servers/chart_green.svg" alt="ping" />
            {hnsServer.ping}
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
            <div classname="online">
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
            {dmServer.ping}
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
            <div classname="online">
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
            {compServer.ping}
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
      </div>
    </Fragment>
  );
};

export default Servers;
