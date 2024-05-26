import {
  Avatar,
  Typography,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import "../assets/Css/saifCoaching.css";
import BookIcon from "@mui/icons-material/Book";
import saif from "../assets/img/Teacher/saif.jpg";
import Login from "./Login";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const SaifCoaching = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
              fontFamily: "Lato",
            }}
          >
            Saif Coaching
          </Typography>
        </button>
        <Avatar
          variant="round"
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={handleOpen}
        >
          <img
            src={saif}
            alt="saif"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Avatar>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}

      >
        <DialogTitle>
          <IconButton
            onClick={handleClose}
            aria-label="close"
            style={{ position: "absolute", right: 10, top: 10 }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>
        <Divider style={{ marginTop: "20px", height: "4px" }} />
        <DialogContent style={{padding:'0px'}}>
          <Login />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SaifCoaching;
