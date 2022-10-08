import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../../../firebaseConfig";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const DeleteArticle = ({ id, imageUrl }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "Articles", id));
      toast("Article deleted successfully", { type: "success" });
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
      navigate("/home", { replace: true });
    } catch (error) {
      toast("Error deleting article", { type: "error" });
      console.log(error);
    }
  };
  return (
    <span className="delete__post" onClick={handleDelete}>
      Delete
    </span>
  );
};

export default DeleteArticle;
