import { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Modal from "../../components/posts/AddPost/Modal/Modal";

import "./module.servers.css";
import axios from "axios";

const Discord = () => {
  const [showDiscord, setShowDiscord] = useState(false);

  const [discordServer, setDiscordServer] = useState([]);
  const [discordCount, setDiscordCount] = useState([]);

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

  const getDiscordServer = () => {
    axios
      .get("https://discord.com/api/guilds/552939950094680084/widget.json")
      .then((response) => {
        const discordServers = response.data.members;
        setDiscordServer(discordServers);
        const discordCount = response.data;
        setDiscordCount(discordCount);
      });
  };

  useEffect(() => getDiscordServer(), []);

  return (
    <Fragment>
      <div className="server-row" onClick={() => setShowDiscord(true)}>
        <img
          className="server-row__bg"
          src="assets/img/svg/servers/discord/discord.jpg"
          alt="awp_lego_2"
        />
        <div className="server-row__name">
          <span>DISCORD #{discordCount.name}</span>
        </div>
        <div className="server-row__online">
          <div className="online">
            <div
              id="awpProg"
              className="players block-servers-players-status green"
              style={{ height: "100%" }}
            ></div>
          </div>
          {discordCount.presence_count}
        </div>
        <div className="server-row__ping"></div>
        <div className="server-row__map">
          <span className="limited-length">Discord</span>
        </div>
        <div className="server-row__btns">
          <div>
            <button
              onClick={() => {
                navigator.clipboard.writeText("https://discord.gg/ideas");
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
                href="https://discord.gg/ideas"
                target="_blank"
                rel="noreferrer noopener"
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
        onClose={() => setShowDiscord(false)}
        show={showDiscord}
      >
        <div id="serverInfoModal" className="arcticmodal">
          <div className="cover server-modal__bg">
            <img
              src="assets/img/svg/servers/discord/discord.jpg"
              alt="map-img"
            />
          </div>
          <div className="server-modal__table">
            <div className="table-grid-up">
              <table className="table">
                <tbody className="table-players-server-header">
                  <tr style={{ gridTemplateColumns: "0px 1fr 1fr" }}>
                    <th></th>
                    <th className="press-left">User</th>
                    <th className="press-left">Status</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-grig table-players-server-body blue-scroll">
              <table className="table">
                <tbody className="data-one-server-info" id="table-scroller">
                  {discordServer &&
                    discordServer.map((Discord) => (
                      <tr
                        style={{ gridTemplateColumns: "0px 1fr 1fr" }}
                        key={Discord.id}
                      >
                        <th className="press-left"></th>
                        <th className="press-left server-modal__name">
                          <img
                            src={Discord.avatar_url}
                            className="avatar"
                            alt="discord-user-avatar"
                            style={{ marginRight: "10px" }}
                          />
                          {Discord.username}
                        </th>
                        <th className="press-left">
                          <img
                            src={`assets/img/svg/servers/discord/${Discord.status}.svg`}
                            className="discord-status"
                            alt="discord-status"
                          />
                          <span className="status-js">{Discord.status}</span>
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
                navigator.clipboard.writeText("https://discord.gg/ideas");
                notify();
              }}
            >
              <img src="assets/img/svg/servers/copy.svg" alt="copy" />
              Link https://discord.gg/ideas
            </button>
            <a
              className="pointer"
              href="https://discord.gg/ideas"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button>
                <img
                  src="assets/img/svg/servers/discord/discord.svg"
                  alt="copy"
                  style={{ height: "15px", width: "15px" }}
                />
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
    </Fragment>
  );
};

export default Discord;
