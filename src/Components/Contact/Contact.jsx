import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk!</h1>
          <p>
            {" "}
            I am always open to new opportunities and collaborations. If you
            have an idea or project that you believe we can work on together,
            please don’t hesitate to get in touch. I am passionate about
            bringing creative visions to life and look forward to discussing how
            we can make amazing things happen together.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>sonalkasare.24@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
