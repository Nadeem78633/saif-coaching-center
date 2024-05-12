import { Avatar, Typography } from "@mui/material";
import React from "react";
import "../assets/Css/saifCoaching.css";
import BookIcon from "@mui/icons-material/Book";
import saif from "../assets/img/Teacher/saif.jpg";
const SaifCoaching = () => {
  return (
    <div className="saif-container">
      <button className="saif-coaching">
        <Avatar
          style={{ backgroundColor: "white", height: "30px", width: "30px" }}
        >
          <BookIcon style={{ color: "black" }} />
        </Avatar>
        <Typography
          style={{
            fontSize: "20px",
            marginLeft: "5px",
            fontWeight: 700,
            fontFamily: "lato",
          }}
        >
          Saif Coaching
        </Typography>
      </button>
      <Avatar variant="round" style={{width:'50px',height:'50px'}}>
        <img
          src={saif}
          alt="saif"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Avatar>
    </div>
  );
};
export default SaifCoaching;
