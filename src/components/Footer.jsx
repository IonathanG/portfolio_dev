import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="floating-email">
        <span className="floating-email__detail">
          <a href="mailto:ionathangusmini@gmail.com">
            ionathangusmini@gmail.com
          </a>
        </span>
        <span className="line-through"></span>
      </div>
      <div className="social-links">
        <span>GitHub</span>
        <span>LinkedIn</span>
        <span>Twitter</span>
        <span>Email</span>
      </div>
      <div className="designed-by">
        <a href="https://github.com/IonathanG" target="_blank" rel="noreferrer">
          Designed and Built by <span> Ionathan Gusmini</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
