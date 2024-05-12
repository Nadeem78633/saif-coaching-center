import { Typography, Avatar } from "@mui/material";
import React from "react";
import '../assets/Css/address.css'
import GroupIcon from "@mui/icons-material/Group";
const Address = () => {
  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "30px" }}
    >
      <Typography variant="h6" className="address">
        <Avatar className="address-icon">
          <GroupIcon style={{ color: "white" }} />
        </Avatar>
        <span>Address</span>
          </Typography>
          <Typography variant="body1" className="gray-text">Village name</Typography>
    </div>
  );
};

export default Address;
