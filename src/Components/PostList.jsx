import React, { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const togglePosts = () => {
    setShowPosts((prev) => !prev);
  };

  return (
    <div>
      <button onClick={togglePosts}>
        {showPosts ? "إخفاء البوستات" : "عرض البوستات"}
      </button>

      {showPosts && (
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
