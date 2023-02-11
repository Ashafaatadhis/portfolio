import React from "react";
import "./work.css";
import SubWork from "./subwork/SubWork";

const Work = () => {
  return (
    <>
      <div className="work">
        <h1 className="work-title">Work</h1>
        <p className="work-desc">
          Client projects and other professional work.
        </p>
      </div>
      <SubWork />
    </>
  );
};

export default Work;
