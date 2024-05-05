import React from "react";
import "../assets/Css/bookALesson.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BookALesson = () => {
  return (
    <>
      <div className="book-a-lesson">
        <Typography className="saif-coaching-center">
          Saif <br />
          Coaching <br />
          Center
        </Typography>

        <Link to="/book-a-class"></Link>
      </div>
      <div className="container">
        <Typography variant="h6" className="dont-miss">
          Don't miss out while you are away from school
        </Typography>
        <Link to="/book-class" className="book-class">
          Book a class
        </Link>
      </div>
    </>
  );
};

export default BookALesson;
