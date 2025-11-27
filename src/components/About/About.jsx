import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/about_profile.jpg";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I’m Mazen Elgyoshi, a passionate Front-End Developer with one
              year of professional experience building responsive and
              user-friendly web applications. I have a background in Electronics
              and Communication Engineering, which strengthens my
              problem-solving and analytical skills.
            </p>
            <p>
              I specialize in creating clean, modern interfaces using React,
              JavaScript, and CSS, and I enjoy transforming creative ideas into
              smooth, functional user experiences. I’m currently expanding my
              skills through hands-on projects and continuous learning, always
              striving to write efficient code and deliver high-quality results.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "60%" }} /> 
            </div>
            <div className="about-skill">
              <p>React.JS</p> <hr style={{ width: "75%" }}  /> 
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "70%" }}  /> 
            </div>
            <div className="about-skill">
              <p>Next.JS</p> <hr style={{ width: "60%" }} /> 
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achevement"><h1>+1</h1> <p>YEARS OF EXPERIENCE</p></div><hr/>
        <div className="about-achevement"><h1>+10</h1> <p>PROJECTS COMPLETED</p></div><hr/>
        <div className="about-achevement"><h1>Many</h1> <p>HAPPY CLIENTS</p></div>
      </div>
    </div>
  );
}

export default About;
