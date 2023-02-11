import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <Link to={"/"}>
            <img
              className="my-img"
              src="images/fotosaya.jpeg"
              alt="Foto saya"
            />
          </Link>
        </div>
        <div className="nav-right">
          <div className="nav-right-top">
            <Link to={"/"} className="nav-name">
              ADHIS
            </Link>
          </div>

          <nav className="nav-link-pc">
            <Link className="link" to={"/work"}>
              WORK
            </Link>
            <Link className="link" to={"/projects"}>
              PROJECTS
            </Link>
            <Link className="link" to={"/articles"}>
              ARTICLES
            </Link>
            <Link className="link" to={"/contact"}>
              CONTACTS
            </Link>
          </nav>
        </div>
      </div>
      <nav className="nav-link-mb">
        <Link className="link" to={"/work"}>
          WORK
        </Link>
        <Link className="link" to={"/projects"}>
          PROJECTS
        </Link>
        <Link className="link" to={"/articles"}>
          ARTICLES
        </Link>
        <Link className="link" to={"/contact"}>
          CONTACTS
        </Link>{" "}
      </nav>
    </>
  );
};

export default Nav;
