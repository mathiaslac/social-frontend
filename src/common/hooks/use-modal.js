import { useState, useEffect, useMemo } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig.js";

const useArticles = () => {
  const [selectedId, select] = useState(null);
  const [posts, setPosts] = useState([]);

  const selectedPost = useMemo(
    () => posts.find((post) => post.id === selectedId),
    [selectedId, posts]
  );

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(articles);
    });
  }, []);

  return { posts, select, selectedPost };
};

export default useArticles;
