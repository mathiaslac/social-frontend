import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import { db } from "../../../firebaseConfig";
import DeleteArticle from "./DeleteArticle";
import LikeArticle from "./LikeArticle";
import { Link } from "react-router-dom";
import { Context } from "../../../index";
import { motion } from "framer-motion";
import Modal from "../AddPost/Modal/Modal";
import SkeletonPost from "../../../Skeleton/Home/Skeleton-Post";
import "./module.posts.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(Context);
  const [showDropPosts, setShowDropPosts] = useState(false);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      {isLoading && <SkeletonPost cards={3} />}
      {articles.length === 0 ? (
        <p>No posts found!</p>
      ) : (
        articles.map(
          (
            {
              id,
              title,
              description,
              imageUrl,
              createdBy,
              postClass,
              postColor,
              avatar,
              userId,
              likes,
              comments,
            },
            i
          ) => (
            <motion.div
              className={postClass + " post_pagedPost__4YXGK"}
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
                    <Link
                      to={`/profile/${userId}`}
                      className="user-stub_link__12FXh"
                    >
                      <span
                        className="user-stub_avatar__d56DR ideas-avatar ideas-avatar-circle ideas-avatar-image"
                        style={{
                          height: "40px",
                          width: "40px",
                          fontSize: "40px",
                        }}
                      >
                        <img
                          src={avatar}
                          alt="user-img"
                          style={{ height: "100%", width: "100%" }}
                        />
                      </span>
                      {createdBy && (
                        <span className={"user-stub_name__1f6vV " + postColor}>
                          {createdBy}
                        </span>
                      )}
                    </Link>
                  </div>
                  <span
                    className="post_topRight__3Ggmc"
                    onClick={() => setShowDropPosts(true)}
                  >
                    <span>
                      <img
                        src="assets/img/svg/feed/Dots.svg"
                        alt="tree-dots"
                        className="ideas-dropdown-trigger post__optionsDots post_postOptionsDropdown__1tWIp"
                      />
                    </span>
                  </span>
                  <Modal
                    onClose={() => setShowDropPosts(false)}
                    id={id}
                    show={showDropPosts}
                  >
                    {user && user.user.steamid64 === userId && (
                      <DeleteArticle id={id} imageUrl={imageUrl} />
                    )}
                  </Modal>
                </div>
                <div className="post_textHeader__1u2hk">
                  <span className={"post_textUsername__F1OVV " + postColor}>
                    {title}
                  </span>
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
                                  <span style={{ fontSize: "small" }}>
                                    {description}
                                  </span>
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
                                        <Link to={`/post/${id}`}>
                                          <img
                                            src={imageUrl}
                                            alt="user-post"
                                            style={{
                                              position: "relative",
                                              width: "100%",
                                              objectFit: "contain",
                                              zIndex: 15,
                                            }}
                                          />
                                        </Link>
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
                      {user && <LikeArticle id={id} likes={likes} />}
                      {comments && comments.length > 0 && (
                        <div className="pe-2">
                          <p>{comments?.length} comments</p>
                        </div>
                      )}
                      <img
                        className="post_interactionIcon__hNIqh"
                        src="assets/img/svg/feed/Share.svg"
                        alt="share"
                      />
                    </span>
                  </div>
                  <div className="reaction-list_reactionListWrapper__2CiuZ">
                    <div className="reaction-list_andOthers__2qOLA">
                      Liked by {likes?.length} people
                    </div>
                  </div>
                </div>
                {user.isAuth ? (
                  <div className="post_upload__1QPiP">
                    <span
                      className="post_uploadAvatar__2tpgD ideas-avatar ideas-avatar-circle ideas-avatar-image"
                      style={{
                        height: "40px",
                        width: "40px",
                        fontSize: "40px",
                      }}
                    >
                      <img
                        src={user.user.avatar.medium}
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
                ) : (
                  <span></span>
                )}
              </div>
            </motion.div>
          )
        )
      )}
    </div>
  );
};

export default Articles;
