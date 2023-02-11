import React from "react";
import "./articles.css";
import { BsSearch } from "react-icons/bs";
import Post from "../root/articles/post/Post";

const Articles = () => {
  return (
    <div className="articles">
      <div className="left">
        <form action="#">
          <div className="form-search">
            <label htmlFor="search" className="search">
              SEARCH
            </label>
            <div className="wrap-search">
              <input type="text" placeholder="PHP, WordPress, Freelancing.." />
              <button className="btn-search">
                <span>
                  <BsSearch />
                </span>
              </button>
            </div>
          </div>
        </form>
        <div className="search filter">FILTER BY</div>
        <div className="wrap-filter">
          <button className="post-category blue">ReactJS</button>
          <button className="post-category blue">Copywriting</button>
          <button className="post-category blue">Freelancing</button>
          <button className="post-category blue">Freelancing</button>
          <button className="post-category blue">Freelancing</button>
          <button className="post-category blue">Tips</button>
          <button className="post-category">Laravel</button>
        </div>
      </div>
      <div className="right">
        <h1 className="articles-title">Articles</h1>
        <p className="work-desc">
          My thoughts on web development and a look at my personal life.{" "}
        </p>
        <hr className="article-garis" />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Articles;
