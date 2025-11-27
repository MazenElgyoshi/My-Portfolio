import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import experience from "../../Data/experience.js";

function Experience() {
  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <h1>My Experience</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="experience-container">
        {experience.map((item, index) => (
          <div key={index} className="experience-card">
            <h3>{item.s_no}</h3>
            <h2>{item.s_name}</h2>
            <h4>{item.s_location}</h4>
            <p className="duration">{item.s_duration}</p>
            <p>{item.s_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
