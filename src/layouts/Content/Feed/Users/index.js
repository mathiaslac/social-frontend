import React from "react";
import { motion } from "framer-motion";

import "../Feed.css";

const UsersSugg = [
  {
    id: "user1",
    nickname: "User1",
    userImg: "assets/img/friend1.jpg",
    mutualFriends: 4,
  },
  {
    id: "user2",
    nickname: "User2",
    userImg: "assets/img/friend2.jpg",
    mutualFriends: 13,
  },
  {
    id: "user3",
    nickname: "User3",
    userImg: "assets/img/friend3.jpg",
    mutualFriends: 17,
  },
];

const Sugg = () => {
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
      <h3 className="card__title">Friend's suggestions</h3>
      <div className="sub__card">
        {UsersSugg.map(({ id, nickname, userImg, mutualFriends }) => (
          <div key={id} className="sugg__friends">
            <img className="avatar-circle" src={userImg} alt={id} />
            <div className="infos__friends">
              <p className="nick">{nickname}</p>
              <p className="count__friends">{mutualFriends} mutual friends</p>
            </div>
            <div className="action__friends">
              <div className="add__friends">Add</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sugg;
