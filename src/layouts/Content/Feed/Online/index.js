import React from "react";
import { motion } from "framer-motion";

import "../Feed.css";

const OnlineUser = [
  {
    id: "user1",
    nickname: "User1",
    userImg: "assets/img/friend1.jpg",
    dotClass: "on__dot",
    status: "Online",
    statusClass: "online",
  },
  {
    id: "user2",
    nickname: "User2",
    userImg: "assets/img/friend2.jpg",
    dotClass: "on__dot",
    status: "Online",
    statusClass: "online",
  },
  {
    id: "user3",
    nickname: "User3",
    userImg: "assets/img/friend3.jpg",
    dotClass: "off__dot",
    status: "Offline",
    statusClass: "offline",
  },
  {
    id: "user4",
    nickname: "User4",
    userImg: "assets/img/friend4.jpg",
    dotClass: "off__dot",
    status: "Offline",
    statusClass: "offline",
  },
  {
    id: "user5",
    nickname: "User5",
    userImg: "assets/img/friend5.jpg",
    dotClass: "off__dot",
    status: "Offline",
    statusClass: "offline",
  },
];

const Online = () => {
  return (
    <motion.div
      className="card"
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
    >
      <h3 className="card__title">2 Friends Online</h3>
      <div className="sub__card">
        {OnlineUser.map(
          ({ id, nickname, userImg, dotClass, status, statusClass }) => (
            <div key={id} className="sugg__friends">
              <img className="avatar-circle" src={userImg} alt={id} />
              <div className="infos__friends">
                <p className="nick">{nickname}</p>
                <p className="count__friends">
                  <span className={dotClass}></span>
                  <span className={statusClass}>{status}</span>
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Online;
