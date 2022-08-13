import { Fragment } from "react";

import "./module.menu-chat.css";
import { motion } from "framer-motion";

const Users = [
  {
    id: "1",
    userImg: "assets/img/friend1.jpg",
    userName: "User1",
    dotClass: "on-dot",
    message: "It is a long established fact that a reader will be distracted",
    date: "2 h",
  },
  {
    id: "2",
    userImg: "assets/img/friend2.jpg",
    userName: "User2",
    dotClass: "on-dot",
    message: "using Lorem Ipsum is that it has a more-or",
    date: "4 d",
  },
  {
    id: "3",
    userImg: "assets/img/friend3.jpg",
    userName: "User3",
    dotClass: "on-dot",
    message: "If you are going to use a passage of Lorem Ipsum",
    date: "1 w",
  },
  {
    id: "4",
    userImg: "assets/img/friend4.jpg",
    userName: "User4",
    dotClass: "off-dot",
    message: "Lorem Ipsum is therefore always free from repetition",
    date: "2 w",
  },
  {
    id: "5",
    userImg: "assets/img/friend5.jpg",
    userName: "User5",
    dotClass: "off-dot",
    message: "The standard chunk of Lorem Ipsum used since the 1500s",
    date: "2w",
  },
];

const Users2 = [
  {
    id: "1",
    userImg: "assets/img/friend1.jpg",
    userName: "User1",
    dotClass: "on-dot-chat",
    message: "It is a long established fact that a reader will be distracted",
    date: "2 h",
  },
  {
    id: "2",
    userImg: "assets/img/friend2.jpg",
    userName: "User2",
    dotClass: "on-dot-chat",
    message: "using Lorem Ipsum is that it has a more-or",
    date: "4 d",
  },
  {
    id: "3",
    userImg: "assets/img/friend3.jpg",
    userName: "User3",
    dotClass: "on-dot-chat",
    message: "If you are going to use a passage of Lorem Ipsum",
    date: "1 w",
  },
  {
    id: "4",
    userImg: "assets/img/friend4.jpg",
    userName: "User4",
    dotClass: "off-dot-chat",
    message: "Lorem Ipsum is therefore always free from repetition",
    date: "2 w",
  },
  {
    id: "5",
    userImg: "assets/img/friend5.jpg",
    userName: "User5",
    dotClass: "off-dot-chat",
    message: "The standard chunk of Lorem Ipsum used since the 1500s",
    date: "2w",
  },
];

const MenuChats = () => {
  return (
    <Fragment>
      <div className="chat-card mb--20">
        <h4>Online Friends</h4>
        <div className="online-chats-users">
          {Users.map(({ id, userImg, userName, dotClass }, i) => (
            <motion.div
              key={id}
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
                delay: i * 0.07,
              }}
              className="user-online"
              style={{
                transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
              }}
            >
              <img
                className="avatar-circle pointer"
                src={userImg}
                alt={userName}
              />
              <span className={dotClass}></span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="chat-card">
        <h4>Chats</h4>
        <div className="chats-users">
          {Users2.map(({ id, userImg, userName, dotClass, message, date }) => (
            <div key={id} className="chats pointer">
              <div className="user-chats" style={{ marginRight: "10px" }}>
                <img
                  className="avatar-circle pointer"
                  src={userImg}
                  alt={userName}
                />
                <span className={dotClass}></span>
              </div>
              <div className="user-message">
                <span className="username-chat">{userName}</span>
                <div className="text-chat">
                  <p className="chat-message">{message}</p>
                  <span className="chat-message bolder">{date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default MenuChats;
