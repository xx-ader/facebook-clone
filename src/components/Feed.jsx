import React, { useState, useEffect } from "react";
import { Stories } from "./Stories";
import "../feed.css";
import { MessageSender } from "./MessageSender";
import Post from "./Post";
import { useStateValue } from "./ContextProv";
import db from "../Firebase/firebase";

export const Feed = () => {
  const [{ user }, dispatch] = useStateValue();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").orderBy('timeStamp','desc').onSnapshot((snapshot) => {
      const _posts = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setPosts(_posts);
    });
  }, []);

  return (
    <>
      <div className="feed">
        <Stories />
        <MessageSender />
        {posts.map((post) => (
          <Post
            key={post.id}
             {...post}
          />
        ))}
      </div>
    </>
  );
};
