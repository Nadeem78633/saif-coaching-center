import { useMediaQuery, Typography, Avatar } from "@mui/material";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";

import "../assets/Css/findUs.css";

const FindUs = () => {
  const icons = [
    { id: 1, icon: "WhatsApp", title: "WhatsApp" },
    { id: 2, icon: "Location", title: "Location" },
    { id: 3, icon: "Facebook", title: "Facebook" },
  ];

  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "30px" }}
    >
      <Typography variant="h6" className="find-us">
        <Avatar className="find-us-icon">
          <GroupIcon sytle={{ color: "white" }} />
        </Avatar>
        <span>Find Us</span>
      </Typography>
      <div className="find-us-icons-container">
        {icons.map((icon) => (
          <Avatar>
            <img src="asd" alt="icons" />
          </Avatar>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
