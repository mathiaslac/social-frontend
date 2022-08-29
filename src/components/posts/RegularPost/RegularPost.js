import React from "react";
import { motion } from "framer-motion";
import "./RegularPost.css";

import axios from "axios";

const posts = [
  {
    id: "regular1",
    userImg: "assets/img/steamUser.png",
    className: "card__post",
    nickname: "Snooze",
    p1: "Test Post",
  },
  {
    id: "regular2",
    userImg: "assets/img/steamUser.png",
    className: "card__post",
    nickname: "Snooze",
    p1: "Test Post 2",
  },
  {
    id: "regular2",
    userImg: "assets/img/steamUser.png",
    className: "card__post",
    nickname: "Snooze",
    p1: "Test Post 3",
  },
];

const RegularPost = () => {
  return (
    <div>
      {posts.map(({ id, userImg, className, nickname, p1 }, i) => (
        <motion.div
          className={className}
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
          style={{
            transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
          }}
        >
          <div className="top__post">
            <div className="avatar__post">
              <img className="avatar-circle" src={userImg} alt="avatar" />
            </div>
            <div className="left__top-post">
              <div className="up__top-post">
                <div className="nick__post">{nickname}</div>
                <div className="reason__post">added a photo</div>
              </div>
              <div className="bottom__top-post">
                <div className="date__post">10 miutes ago - </div>
                <div className="conf__post">
                  <i className="fa fa-globe"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="text__post">
            <p>{p1}</p>
          </div>
          <img
            className="media__post"
            src="assets/img/media1.png"
            alt="media-post"
          />
          <div className="like__post">
            <div className="left__like">
              <img src="assets/img/likes.png" alt="likes" />
              <p className="likes__count">21</p>
            </div>
            <div className="right__like">
              <i className="fa fa-comments"></i>
              <p className="comms__count">4 Comments</p>
            </div>
          </div>
          <div className="bottom__post">
            <div className="like__bot">
              <i className="far fa-thumbs-up"></i>
              <p className="fat__post">Like</p>
            </div>
            <div className="like__bot">
              <i className="far fa-comment-alt"></i>
              <p className="fat__post">Comment</p>
            </div>
            <div className="like__bot">
              <i className="fas fa-share"></i>
              <p className="fat__post">Share</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RegularPost;
