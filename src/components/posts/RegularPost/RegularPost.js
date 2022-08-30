import React from "react";
import { motion } from "framer-motion";
import "./module.posts.css";

const posts = [
  {
    id: "regular1",
    userImg: "assets/img/steamUser.png",
    userStatus: "assets/img/svg/feed/BlueVerified.svg",
    userPostImage: "assets/img/posts/regular1.png",
    postTitle: "What is Lorem Ipsum?",
    postText:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    viewsCount: 120,
    likesCount: 13,
    nickname: "Snooze",
  },
  {
    id: "regular2",
    userImg: "assets/img/friend1.jpg",
    userStatus: "assets/img/svg/feed/empty.svg",
    userPostImage: "assets/img/posts/regular2.jpeg",
    postTitle: "Why do we use it?",
    postText:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    viewsCount: 376,
    likesCount: 84,
    nickname: "User1",
  },
  {
    id: "regular3",
    userImg: "assets/img/friend2.jpg",
    userStatus: "assets/img/svg/feed/empty.svg",
    userPostImage: "assets/img/posts/regular3.jpeg",
    postTitle: "Where does it come from?",
    postText:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    viewsCount: 498,
    likesCount: 179,
    nickname: "User2",
  },
  {
    id: "regular4",
    userImg: "assets/img/friend3.jpg",
    userStatus: "assets/img/svg/feed/empty.svg",
    userPostImage: "assets/img/posts/regular4.png",
    postTitle: "Where can I get some?",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    viewsCount: 531,
    likesCount: 229,
    nickname: "User3",
  },
];

const RegularPost = () => {
  return (
    <div>
      {posts.map(
        (
          {
            id,
            userImg,
            nickname,
            userPostImage,
            viewsCount,
            likesCount,
            postTitle,
            postText,
            userStatus,
          },
          i
        ) => (
          <motion.div
            className="post_pagedPost__4YXGK"
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
                        src={userImg}
                        alt="user-img"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </span>
                    <span className="user-stub_name__1f6vV">{nickname}</span>
                  </a>
                  <img
                    src={userStatus}
                    alt="user-status"
                    style={{ marginLeft: 5 }}
                  />
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
              <div className="post_textHeader__1u2hk">
                <span className="post_textUsername__F1OVV">{postTitle}</span>
              </div>
              <div className="post_text__1DScl">
                <div className="displayer">
                  <div className="DraftEditor-root">
                    <div className="DraftEditor-editorContainer">
                      <div
                        className="public-DraftEditor-content"
                        style={{
                          outline: "none",
                          userSelect: "text",
                          whiteSpace: "pre-wrap",
                          overflowWrap: "break-word",
                        }}
                      >
                        <div>
                          <div>
                            <div className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr">
                              <span>
                                <span>{postText}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                                        justifyContent: "center",
                                        maxHeight: "100%",
                                        maxWidth: "100%",
                                        height: "100%",
                                        width: "100%",
                                        overflow: "hidden",
                                      }}
                                    >
                                      <img
                                        src={userPostImage}
                                        alt="user-post"
                                        style={{
                                          position: "relative",
                                          width: "100%",
                                          objectFit: "contain",
                                          zIndex: 15,
                                        }}
                                      />
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
              <div className="post_interactionWrapper__3NGnR">
                <div className="post_interactionButtons__1QW5O">
                  <span>
                    <img
                      className="blowUpSmall post_interactionIcon__hNIqh"
                      src="assets/img/svg/feed/Like.svg"
                      alt="like"
                    />
                    <img
                      className="post_interactionIcon__hNIqh"
                      src="assets/img/svg/feed/Comment.svg"
                      alt="comment"
                    />
                    <img
                      className="post_interactionIcon__hNIqh"
                      src="assets/img/svg/feed/Share.svg"
                      alt="share"
                    />
                  </span>
                  <div className="post_viewCount__1I6M5">
                    {viewsCount}
                    <span
                      className="post_lightBlue__1HfXm"
                      style={{ marginLeft: 5 }}
                    >
                      Views
                    </span>
                  </div>
                </div>
                <div className="reaction-list_reactionListWrapper__2CiuZ">
                  <div className="reaction-list_andOthers__2qOLA">
                    Liked by {likesCount} people
                  </div>
                </div>
              </div>
              <div className="post_upload__1QPiP">
                <span
                  className="post_uploadAvatar__2tpgD ideas-avatar ideas-avatar-circle ideas-avatar-image"
                  style={{ height: "40px", width: "40px", fontSize: "40px" }}
                >
                  <img
                    src="assets/img/steamUser.png"
                    alt="user-img"
                    style={{ height: "100%", width: "100%" }}
                  />
                </span>
                <div className="post_uploadWrapper__1Mc1a">
                  <div className="editor post_uploadInput__2K--2">
                    <div className="DraftEditor-root">
                      <div className="public-DraftEditorPlaceholder-root">
                        <div
                          className="public-DraftEditorPlaceholder-inner"
                          style={{ whiteSpace: "pre-wrap" }}
                        >
                          Post a comment...
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="ideas-btn tenorCommentButton">
                    <img src="assets/img/svg/feed/GIF.svg" alt="gif" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default RegularPost;
