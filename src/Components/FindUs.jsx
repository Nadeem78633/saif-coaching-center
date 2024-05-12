import { Typography, Avatar } from "@mui/material";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import facebook from "../assets/img/findUs/facebook.svg";
import whatsApp from "../assets/img/findUs/whatsapp.svg";
import location from "../assets/img/findUs/location.svg";
import "../assets/Css/findUs.css";

const FindUs = () => {
  const icons = [
    { id: 1, icon: whatsApp, title: "WhatsApp" },
    { id: 2, icon: location, title: "Location" },
    { id: 3, icon: facebook, title: "Facebook" },
  ];

  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "30px" }}
    >
      <Typography variant="h6" className="find-us">
        <Avatar className="find-us-icon">
          <GroupIcon style={{ color: "white" }} />
        </Avatar>
        <span>Find Us</span>
      </Typography>
      <div className="find-us-icons-container">
        {icons.map((icon) => (
          <div key={icon.id} className="icon-container">
            <Avatar className="find-us-avatar">
              <img
                src={icon.icon}
                alt="icons"
                style={{ display: "block", margin: "auto" }}
              />
            </Avatar>
            <Typography className="icons-title">{icon.title}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
