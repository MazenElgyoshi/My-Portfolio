import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../Data/mywork_data";

function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-tittle">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a
            href={work.w_link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={work.w_img} alt={work.w_name} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default MyWork;

