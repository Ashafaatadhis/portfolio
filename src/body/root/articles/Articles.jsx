import React from "react";
import "./articles.css";
import Post from "./post/Post";

const Articles = () => {
  return (
    <>
      <div className="article-title">Recent Articles</div>
      <hr className="article-garis" />
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Articles;
