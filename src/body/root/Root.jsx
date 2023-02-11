import React from "react";
import Articles from "./articles/Articles";
import Jumbotron from "./jumbotron/Jumbotron";
import "./root.css";

const Root = () => {
  return (
    <div className="main-root">
      <Jumbotron />
      <Articles />
    </div>
  );
};

export default Root;
