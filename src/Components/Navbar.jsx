import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#mywork">My Work</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
