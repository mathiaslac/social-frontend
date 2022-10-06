import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { db } from "../../../firebaseConfig";
import { v4 as uuidv4 } from "uuid";

import { Context } from "../../../index";

const Comment = ({ id }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { user } = useContext(Context);
  const commentRef = doc(db, "Articles", id);
  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setComments(snapshot.data().comments);
    });
  }, []);

  const handleChangeComment = (e) => {
    if (e.key === "Enter") {
      updateDoc(commentRef, {
        comments: arrayUnion({
          userId: user.user.steamid64,
          userName: user.user.name,
          avatar: user.user.avatar.medium,
          comment: comment,
          createdAt: new Date(),
          commentId: uuidv4(),
        }),
      }).then(() => {
        setComment("");
      });
    }
  };

  // delete comment function
  const handleDeleteComment = (comment) => {
    console.log(comment);
    updateDoc(commentRef, {
      comments: arrayRemove(comment),
    })
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {comments && comments.length > 0 && (
        <div className="post_viewAllComments__1wTns">
          <img
            height={16}
            width={16}
            src="../assets/img/svg/feed/Comment.svg"
            alt="comment-svg"
            style={{ marginRight: 4 }}
          />
          <p> View all {comments?.length} comments</p>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        {comments !== null &&
          comments.map(
            ({ commentId, userId, comment, userName, avatar, createdAt }) => (
              <div key={commentId} className="post_comment__ffAZa">
                <Link
                  to={`/profile/${userId}`}
                  className="post_commentAvatar__3J7-B"
                >
                  <span
                    className="ideas-avatar ideas-avatar-circle ideas-avatar-image"
                    style={{ height: 40, width: 40, fontSize: 40 }}
                  >
                    <img
                      src={avatar}
                      alt="user-avatar"
                      width={40}
                      height={40}
                    />
                  </span>
                </Link>
                <div className="post_commentContent__3eWc8">
                  <div className="post_commentAuthor__3nYuW">
                    <span className="post_commentName__1f3Q9">
                      <Link to={`/profile/${userId}`}>{userName}</Link>
                    </span>
                  </div>
                  <div className="post_commentMainContent__1iZQI">
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
                                    <span>{comment}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post_commentActionsWrapper__2Pb5r">
                    {user.isAuth && user.steamid64 === user.userId && (
                      <span
                        className="post_commentActionNotLike__2ZZ6l post_commentAction__3ryfa"
                        onClick={() =>
                          handleDeleteComment({
                            commentId,
                            user,
                            comment,
                            userName,
                            createdAt,
                          })
                        }
                      >
                        Delete
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
      </div>

      {user.isAuth && (
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
                  <input
                    type="text"
                    className="comment__imput public-DraftEditorPlaceholder-inner"
                    style={{ whiteSpace: "pre-wrap" }}
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                    placeholder="Post a comment..."
                    onKeyUp={(e) => {
                      handleChangeComment(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <button className="ideas-btn tenorCommentButton">
              <img src="../assets/img/svg/feed/GIF.svg" alt="gif" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Comment;
