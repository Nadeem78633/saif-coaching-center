import { Avatar, Typography, Button } from "@mui/material";
import React from "react";
import "../assets/Css/saifCoaching.css";
import BookIcon from "@mui/icons-material/Book";

const SaifCoaching = () => {
  return (
    <div className="saif-container">
      <button className="saif-coaching">
        <Avatar
          style={{ backgroundColor: "white", height: "30px", width: "30px" }}
        >
          <BookIcon style={{ color: "black" }} />
        </Avatar>
        <Typography style={{fontSize:'20px',marginLeft:'5px',fontWeight:700,fontFamily:'lato'}}>Saif Coaching</Typography>
      </button>
      <Avatar variant="round">
        <img src="sm" alt="saif" />
      </Avatar>
    </div>
  );
};
export default SaifCoaching;
