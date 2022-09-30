import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import "../../components/posts/RegularPost/module.posts.css";

const SkeletonPost = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <motion.div
        key={i}
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
              <div className="user-stub_link__12FXh">
                <span
                  className="user-stub_avatar__d56DR ideas-avatar ideas-avatar-circle ideas-avatar-image"
                  style={{
                    height: "40px",
                    width: "40px",
                    fontSize: "40px",
                  }}
                >
                  <Skeleton circle width={40} height={40} />
                </span>
                <span className="user-stub_name__1f6vV ">
                  <Skeleton count={1} />
                </span>
              </div>
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
            <span className="post_textUsername__F1OVV ">
              <Skeleton count={1} />
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
                              <Skeleton count={1} />
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
                                    src=""
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
                <Skeleton circle width={24} height={24} />
              </span>
              <span>
                <Skeleton circle width={24} height={24} />
              </span>
              <span>
                <Skeleton circle width={24} height={24} />
              </span>
            </div>
            <div className="reaction-list_reactionListWrapper__2CiuZ">
              <div className="reaction-list_andOthers__2qOLA">
                <Skeleton count={1} />
              </div>
            </div>
          </div>
          <div className="post_upload__1QPiP">
            <span
              className="post_uploadAvatar__2tpgD ideas-avatar ideas-avatar-circle ideas-avatar-image"
              style={{
                height: "40px",
                width: "40px",
                fontSize: "40px",
              }}
            >
              <Skeleton circle width={40} height={40} />
            </span>
            <div className="post_uploadWrapper__1Mc1a">
              <div className="editor post_uploadInput__2K--2">
                <div className="DraftEditor-root">
                  <div className="public-DraftEditorPlaceholder-root">
                    <div
                      className="public-DraftEditorPlaceholder-inner"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      <Skeleton count={1} />
                    </div>
                  </div>
                </div>
              </div>
              <button className="ideas-btn tenorCommentButton">
                <Skeleton circle width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    ));
};

export default SkeletonPost;
