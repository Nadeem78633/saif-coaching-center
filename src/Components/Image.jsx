import React from "react";
import { Card, CardContent} from "@mui/material";
// Css
import "../assets/Css/about.css";
import girl from '../assets/img/girl.svg'

const Image = () => {
  return (
    <div style={{ marginTop: "40px" }}>
  
    
          <img
            className="education"
            src={girl}
            alt="education"
           
          />

      
    </div>
  );
};

export default Image;
