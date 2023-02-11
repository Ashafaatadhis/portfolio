import React from "react";
import "./subwork.css";
import { BsChevronRight } from "react-icons/bs";

const SubWork = () => {
  return (
    <div className="subwork">
      <div className="left">
        <img src="images/work.jpg" alt="work me" />
      </div>
      <div className="right">
        <h1 className="right-title">Cazz Photography</h1>
        <p className="right-desc">
          A simple portfolio showcasing the idfferent aspects of Cazz as a
          photographer.
        </p>

        <p className="right-info">
          <span>
            <BsChevronRight />
          </span>
          Logo Design
        </p>
        <p className="right-info">
          <span>
            <BsChevronRight />
          </span>
          Logo Design
        </p>
        <p className="right-info">
          <span>
            <BsChevronRight />
          </span>
          Logo Design
        </p>

        <button className="right-details">View Details</button>
      </div>
    </div>
  );
};

export default SubWork;
