import React from "react";

// Css
import "../assets/Css/about.css";
import girl from "../assets/img/girl.svg";

const Image = () => {
  return (
    <div className="image-container">
      <img className="education" src={girl} alt="education" />
    </div>
  );
};

export default Image;
