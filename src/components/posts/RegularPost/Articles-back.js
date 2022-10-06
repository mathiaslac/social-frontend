import React, { useState, useContext } from "react";
import DeleteArticle from "./DeleteArticle-back";
import LikeArticle from "./LikeArticle-back";
import { Link } from "react-router-dom";
import { Context } from "../../../index";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import useArticles from "../../../common/hooks/use-modal";
import Modal from "../AddPost/Modal/Modal";

import "./module.posts.css";

const Articles = () => {
  const { user } = useContext(Context);
  const { posts, select, selectedPost } = useArticles();
  return (
    <div>
      <LayoutGroup>
        {posts.map(
          ({
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
          }) => (
            <>
              <motion.div
                className={postClass + " post_pagedPost__4YXGK"}
                key={id}
                layoutId={`${id}`}
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
                          <span
                            className={"user-stub_name__1f6vV " + postColor}
                          >
                            {createdBy}
                          </span>
                        )}
                      </Link>
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
                    <Modal>
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
                                          <img
                                            onClick={() => select(id)}
                                            src={imageUrl}
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
                        {user && <LikeArticle id={id} likes={likes} />}
                        <Link
                          className="post_interactionIcon__hNIqh"
                          to={`/post/${id}`}
                        >
                          <img
                            src="assets/img/svg/feed/Comment.svg"
                            alt="share"
                          />
                        </Link>
                      </span>
                    </div>
                    {likes && likes.length > 0 && (
                      <div className="reaction-list_reactionListWrapper__2CiuZ">
                        <div className="reaction-list_andOthers__2qOLA">
                          Liked by {likes?.length} people
                        </div>
                      </div>
                    )}
                    {comments && comments.length > 0 && (
                      <Link to={`/post/${id}`}>
                        <div className="post_viewAllComments__1wTns">
                          <p> View all {comments?.length} comments</p>
                        </div>
                      </Link>
                    )}
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
              <AnimatePresence>
                {selectedPost && (
                  <motion.div
                    layoutId={`${selectedPost.id}`}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: "fixed",
                      inset: 64,
                      zIndex: 9999,
                      width: 1250,
                      marginLeft: "15%",
                      marginTop: "3%",
                    }}
                  >
                    <div className="ideas-modal-content">
                      <div className="ideas-modal-body" style={{ padding: 5 }}>
                        <img
                          onClick={() => select(null)}
                          alt="test-img"
                          height="24"
                          width="24"
                          className="modal__closeIcon"
                          src="https://d14eu5yur8w3te.cloudfront.net/cstatic/icons/CloseWithBackground.svg"
                        />
                        <div style={{ width: "100%", position: "relative" }}>
                          <div className="post-creator_postCreator__uploader__wrapper__2ELby">
                            <motion.img
                              src={selectedPost.imageUrl}
                              alt="post-img"
                              style={{ borderRadius: 8 }}
                            />
                            <a
                              href={selectedPost.imageUrl}
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                color: "#3b69b2",
                                fontWeight: "bold",
                                padding: 5,
                              }}
                            >
                              Open original
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )
        )}
      </LayoutGroup>
    </div>
  );
};

export default Articles;
