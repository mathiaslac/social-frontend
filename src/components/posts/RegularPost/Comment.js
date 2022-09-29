import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
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
    <div>
      Comment
      <div className="container">
        {comments !== null &&
          comments.map(
            ({ commentId, userId, comment, userName, avatar, createdAt }) => (
              <div key={commentId}>
                <div className="border p-2 mt-2 row">
                  <div className="col-11">
                    <span
                      className={`badge ${
                        user === user.userId ? "bg-success" : "bg-primary"
                      }`}
                    >
                      {userName}
                    </span>
                    <img
                      src={avatar}
                      alt="user-avatar"
                      width={30}
                      height={30}
                    />
                    {comment}
                  </div>
                  <div className="col-1">
                    {user.steamid64 === user.userId && (
                      <img
                        src="assets/img/svg/servers/close-modal.svg"
                        alt="delete-icon"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          handleDeleteComment({
                            commentId,
                            user,
                            comment,
                            userName,
                            createdAt,
                          })
                        }
                      ></img>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        {user.isAuth && (
          <input
            type="text"
            className="form-control mt-4 mb-5"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder="Add a comment"
            onKeyUp={(e) => {
              handleChangeComment(e);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
