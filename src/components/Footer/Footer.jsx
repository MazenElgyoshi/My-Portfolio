import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import email from "../../assets/user_icon.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>I'm a front-end developer from Egypt with 1 year of experience.</p>
        </div>
        <div className="footer--top-right">
          <div className="footer-email">
            <img src={email} alt="" />
            <input type="email" placeholder="Enter Your E-mail" />
          </div>
          <div className="footer-subscribe">
            <p>Subscribe</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2025 Mazen Elgyoshi. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
