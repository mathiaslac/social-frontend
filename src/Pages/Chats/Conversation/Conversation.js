import { Fragment } from "react";
import { motion } from "framer-motion";
import "./module.conversation.css";

const Convs = [
  {
    id: "1",
    userImg: "assets/img/friend1.jpg",
    message: "Hello !",
    side: "flex-start",
    bgColor: "#232633",
  },
  {
    id: "2",
    userImg: "assets/img/friend1.jpg",
    message: "How are you today ?",
    side: "flex-start",
    bgColor: "#232633",
  },
  {
    id: "3",
    userImg: "assets/img/steamUser.png",
    message: "Not bad, you ? ",
    side: "flex-end",
    bgColor: "#3b69b2a1",
  },
  {
    id: "4",
    userImg: "assets/img/friend1.jpg",
    message: "Yeah !",
    side: "flex-start",
    bgColor: "#232633",
  },
  {
    id: "5",
    userImg: "assets/img/steamUser.png",
    message: "Good",
    side: "flex-end",
    bgColor: "#3b69b2a1",
  },
];

const Conversation = () => {
  return (
    <Fragment>
      {Convs.map(({ id, userImg, message, side, bgColor }) => (
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
            delay: id * 0.07,
          }}
          className="messages"
          style={{
            transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
            justifyContent: side,
            marginBottom: 15,
          }}
        >
          <img
            src={userImg}
            alt="user-avatar"
            height={25}
            width={25}
            style={{ borderRadius: "50%", marginRight: 10 }}
          />
          <div className="text-message" style={{ background: bgColor }}>
            <p className="body-message">{message}</p>
          </div>
        </motion.div>
      ))}
    </Fragment>
  );
};

export default Conversation;
