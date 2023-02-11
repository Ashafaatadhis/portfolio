import React from "react";
import "./post.css";

const Post = () => {
  return (
    <>
      <div className="post">
        <div className="post-title">
          Converting a Laravel Inertia App from Mix to Vite
        </div>
        <button className="post-category">Laravel</button>
        <div className="post-date">08 July 2022 / 2 minute read</div>
        <div className="post-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quis
          architecto dolore magni nesciunt. Eius cumque natus aliquid at ad
          quisquam mollitia repellendus corporis animi amet, ab expedita ullam
          unde aliquam repellat facere. Consequuntur, iure reiciendis,
          recusandae voluptas, quaerat omnis doloremque corporis aperiam
          laboriosam alias ducimus a dolor beatae! Voluptas.
        </div>
        <div className="post-read">
          <a href="#">Read Article →</a>
        </div>
      </div>
      <hr className="post-garis" />
    </>
  );
};

export default Post;
