import React from "react";
import "./Aboutme.css";
import profile from "../../assets/photos/Sonu_About.png";

const Aboutme = () => {
  return (
    <>
      <div className="aboutme" id="aboutme">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <p>
            I'm a dedicated front-end developer driven by research and a
            relentless pursuit of perfection. My expertise lies in creating
            seamless user interfaces using the latest web technologies, ensuring
            both functionality and aesthetic appeal. I stay updated with
            industry trends to deliver high-quality work. My commitment to
            ethics, punctuality, and professionalism defines my approach, and
            honesty and loyalty are my greatest strengths. Clients and employers
            will benefit from my combination of technical expertise and a
            passion for excellence that ensures top-notch results. Additionally,
            I am a passionate dancer, which enhances my creativity and
            problem-solving skills. My love for cooking allows me to explore
            creativity in the kitchen, while my passion for reading and
            traveling provides a well-rounded perspective and innovative
            approach to every project I undertake.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
