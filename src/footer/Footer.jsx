import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="work">
        <hr className="article-garis" />
      </div>
      <footer>
        <p className="copyright">&copy; 2022 Adhis.</p>
        <p className="info-build">
          Built with <span>React</span>.
        </p>
      </footer>
    </>
  );
};

export default Footer;
