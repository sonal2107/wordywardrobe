import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="skills" id="skills">
        <h1>Skills</h1>
        <div className="skills-container">
          <li>
            <h3>HTML</h3>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
          <li>
            <h3>CSS</h3>
            <span className="bar">
              <span className="css"></span>
            </span>
          </li>
          <li>
            <h3>TailwindCSS</h3>
            <span className="bar">
              <span className="tailwind"></span>
            </span>
          </li>
          <li>
            <h3>JavaScript</h3>
            <span className="bar">
              <span className="js"></span>
            </span>
          </li>
          <li>
            <h3>ReactJS</h3>
            <span className="bar">
              <span className="react"></span>
            </span>
          </li>
          <li>
            <h3>ThreeJS</h3>
            <span className="bar">
              <span className="three"></span>
            </span>
          </li>
          <li>
            <h3>Blender3D</h3>
            <span className="bar">
              <span className="blend"></span>
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
