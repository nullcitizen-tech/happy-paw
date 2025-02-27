import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:snaika030603@gmail.com">
          sanika030603@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="/">
          User Name: Sanika-Vaishnavi
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="/">
          Sanika-Vaishnavi
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="/">
          @Sanika-Vaishnavi
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="/">
          +91 9876543210
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
