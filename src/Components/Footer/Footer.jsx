import React from "react";
import "./Footer.css";
import github from "../../assets/logo/github.png";
import linkedin from "../../assets/logo/linkedin.png";
import insta from "../../assets/logo/instagram.png";

const Footer = () => {
  return (
    <div>
      <div className="main-footer">
        <div className="sub-container">
          <h1>Sonal Kasare</h1>
          <p>
            " Thank you for visiting my portfolio. I hope you enjoyed exploring
            my work as much as I enjoyed creating it. If you have any questions,
            feedback, or would like to discuss a potential project, please don't
            hesitate to reach out. Let's create something amazing together.
            Looking forward to connecting with you ! "
          </p>
          <div className="logo-container">
            <a href="https://github.com/sonal2107">
              <img src={github} />{" "}
            </a>
            <a href="https://www.linkedin.com/in/sonal-kasare-0427a9169/">
              <img src={linkedin} />{" "}
            </a>
            <a href="https://www.instagram.com/sonuritaa_">
              <img src={insta} />{" "}
            </a>
          </div>
        </div>
        <div className="copyright-container">
          Copyright ©2024 Design & Development by Sonal Kasare 🌹🌙
        </div>
      </div>
    </div>
  );
};

export default Footer;
