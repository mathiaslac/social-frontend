import { Fragment } from "react";
import "./module.opened-chat.css";
import { motion } from "framer-motion";
import Conversation from "../Conversation/Conversation";

const OpenedChats = () => {
  return (
    <Fragment>
      <motion.div
        className="post_pagedPost__4YXGK"
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
        <div className="post_post__h5utz">
          <div className="post_header__1v7-G">
            <div className="user-stub_stub___zdSR post_us__2vs5M">
              <a href="/#" className="user-stub_link__12FXh">
                <span
                  className="user-stub_avatar__d56DR ideas-avatar ideas-avatar-circle ideas-avatar-image"
                  style={{
                    height: "40px",
                    width: "40px",
                    fontSize: "40px",
                  }}
                >
                  <img
                    src="assets/img/friend1.jpg"
                    alt="user-img"
                    style={{ height: "100%", width: "100%" }}
                  />
                  <span className="dotBack on__dot"></span>
                </span>
                <div className="flex-opeend">
                  <span className="user-stub_name__1f6vV">User1</span>
                  <span
                    className="online"
                    style={{ fontSize: "smaller", fontWeight: 700 }}
                  >
                    Online
                  </span>
                </div>
              </a>
            </div>
            <span className="post_topRight__3Ggmc">
              <span>
                <img
                  src="assets/img/svg/feed/Dots.svg"
                  alt="tree-dots"
                  className="ideas-dropdown-trigger post__optionsDots post_postOptionsDropdown__1tWIp"
                />
              </span>
            </span>
          </div>
          <div>
            <div className="post_media__16phk">
              <div className="carousel__media">
                <div className="ideas-carousel">
                  <div className="slick-slider slick-initialized">
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          transform: "translate3d(0px, 0px, 0px)",
                          width: "922px",
                        }}
                      >
                        <div
                          className="slick-slide slick-active slick-current"
                          style={{ outline: "none", width: "922px" }}
                        >
                          <div>
                            <div
                              className="carousel__mediaWrapper"
                              style={{
                                width: "100%",
                                display: "inline-block",
                              }}
                            >
                              <div className="arImage undefined">
                                <div
                                  style={{
                                    position: "absolute",
                                    display: "flex",
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    height: "100%",
                                    width: "100%",
                                    overflow: "hidden",
                                    alignContent: "space-between",
                                    flexDirection: "column",
                                    padding: 20,
                                  }}
                                >
                                  <Conversation />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post_upload__1QPiP">
            <div className="post_uploadWrapper__1Mc1a flex-simple">
              <div className="editor post_uploadInput__2K--2">
                <div className="DraftEditor-root">
                  <div className="public-DraftEditorPlaceholder-root">
                    <div
                      className="public-DraftEditorPlaceholder-inner"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      <img
                        className="pointer margin-r__svg"
                        src="assets/img/svg/chats/Add.svg"
                        alt="dd"
                      />
                      <img
                        className="pointer margin-r__svg"
                        src="assets/img/svg/feed/GIF.svg"
                        alt="gif"
                      />
                      Message...
                    </div>
                  </div>
                </div>
              </div>
              <button className="ideas-btn tenorCommentButton">
                <img src="assets/img/svg/chats/Emoji.svg" alt="emojis" />
              </button>
            </div>
            <div className="send-btn">
              <img src="assets/img/svg/chats/Send.svg" alt="send" />
            </div>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default OpenedChats;
