import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import LikeArticle from "./LikeArticle";
import DeleteArticle from "./DeleteArticle";
import Comment from "./Comment";
import { motion } from "framer-motion";
import SkeletonPost from "../../../Skeleton/Home/Skeleton-Post";
import "./module.posts.css";

import { Context } from "../../../index";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(Context);

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      <div>
        {isLoading && <SkeletonPost cards={3} />}
        {article && (
          <motion.div
            className={article.postClass + " post_pagedPost__4YXGK"}
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
            }}
            style={{
              transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
            }}
          >
            <div className="post_post__h5utz">
              <div className="post_header__1v7-G">
                <div className="user-stub_stub___zdSR post_us__2vs5M">
                  <Link
                    to={`/profile/${article.userId}`}
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
                        src={article.avatar}
                        alt="user-img"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </span>
                    {article.createdBy && (
                      <span
                        className={"user-stub_name__1f6vV " + article.postColor}
                      >
                        {article.createdBy}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
              <div className="post_textHeader__1u2hk">
                <span
                  className={"post_textUsername__F1OVV " + article.postColor}
                >
                  {article.title}
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
                                  {article.description}
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
                                      <img
                                        src={article.imageUrl}
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
                    {user && (
                      <LikeArticle
                        className="post_interactionIcon__hNIqh"
                        id={id}
                        likes={article.likes}
                      />
                    )}
                    <Link
                      to={`/post/${id}`}
                      style={{ marginTop: -1, marginLeft: 7 }}
                    >
                      <img
                        className="post_interactionIcon__hNIqh"
                        src="../assets/img/svg/feed/Comment.svg"
                        alt="comment-svg"
                      />
                    </Link>
                  </span>
                </div>
                <div
                  className="reaction-list_reactionListWrapper__2CiuZ"
                  style={{ marginBottom: 12 }}
                >
                  <div className="reaction-list_andOthers__2qOLA">
                    Liked by {article.likes.length} people
                  </div>
                </div>
                <Comment id={article.id} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Article;
