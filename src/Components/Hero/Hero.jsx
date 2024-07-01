import React from "react";
import "./Hero.css";
import profile from "../../assets/photos/Sonu_Home.png";
import resume from "../../assets/Sonal-Kasare.pdf";
const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="div-left">
        <h1>
          I'm{" "}
          <span className="sonu">
            <a href="https://www.linkedin.com/in/sonal-kasare-0427a9169/">
              Sonal Kasare
            </a>
          </span>{" "}
          A Frontend Developer based in Mumbai.
        </h1>
        <p>
          I'm not just goal oriented; I am goal obsessed. As someone who sticks
          to her word and strives for perfection, I turn aspirations into
          reality.
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <a href="https://www.linkedin.com/in/sonal-kasare-0427a9169/">
              Connect with me
            </a>
          </div>
          <div className="hero-resume">
            <a href="" download={resume}>
              My Resume
            </a>
          </div>
        </div>
      </div>
      <div className="div-right">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Hero;
