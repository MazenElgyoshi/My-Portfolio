import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1-UFIogqamzQ6_IpkIGCCM0zXVzarptDO";
    link.download = "Mazen-Egyoshi-CV.pdf";
    link.click();
  };
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Mazen Elgyoshi,</span> Frontend Developer Based in Egypt.
      </h1>
      <p>
        I'm a front-end developer from Damietta-Egypt, and I have 1 year of
        experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleDownload}>
          Download CV
        </div>
      </div>
    </div>
  );
}

export default Hero;
