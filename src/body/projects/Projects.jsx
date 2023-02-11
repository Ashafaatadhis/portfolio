import React from "react";
import SubWork from "../work/subwork/SubWork";

const Projects = () => {
  return (
    <>
      <div className="work">
        <h1 className="work-title">Projects</h1>
        <p className="work-desc">Some of my spare time tinkering.</p>
      </div>
      <SubWork />
      <SubWork />
      <SubWork />
    </>
  );
};

export default Projects;
