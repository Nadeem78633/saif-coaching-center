import React from "react";
import "../assets/Css/bookALesson.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import owner from '../assets/img/Teacher/owner.jpeg'
const BookALesson = () => {
  return (
    <>
      <div className="book-a-lesson">
        <Card className="book-card">
          <div className="img-container">
            <CardMedia
              component="img"
              height="150"
              image={owner}
              alt="green iguana"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="book-info">Good</div>
        </Card>

        <Link to="/book-a-class"></Link>
      </div>
      <div className="book-container">
        <Link to="/book-class" className="book-class">
          Book a class
        </Link>
      </div>
    </>
  );
};

export default BookALesson;
