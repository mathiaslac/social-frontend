import React, { useContext } from "react";
import { db } from "../../../firebaseConfig";
import { Context } from "../../../index";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const LikeArticle = ({ id, likes }) => {
  const { user } = useContext(Context);

  const likesRef = doc(db, "Articles", id);

  const handleLike = () => {
    if (likes?.includes(user.user.steamid64)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.user.steamid64),
      }).catch((e) => {
        console.log(e);
      });
    } else {
      updateDoc(likesRef, {
        likes: arrayUnion(user.user.steamid64),
      }).catch((e) => {
        console.log(e);
      });
    }
  };
  return (
    <>
      <img
        src={`../assets/img/svg/feed/Like.svg${
          !likes?.includes(user.user.steamid64) ? "" : ""
        }`}
        style={{
          cursor: "pointer",
          color: likes?.includes(user.user.steamid64) ? "red" : null,
        }}
        onClick={handleLike}
        alt="like-icon"
      />
    </>
  );
};

export default LikeArticle;
