import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import "../assets/Css/whatDoITeach.css";
import { Book } from "@mui/icons-material";

const subjects = [
  {
    id: 1,
    subject: "English",
    icon: <Book />,
    color: "red",
    backgroundColor: "#fff1e0",
  },
  { id: 2, subject: "Science", color: "blue", backgroundColor: "#dcdef7" },
  { id: 3, subject: "History", color: "blue", backgroundColor: "#ebedfc" },
  { id: 4, subject: "Math", color: "blue", backgroundColor: "#ffe0d6" },
];

const WhatDoITeach = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={4} xl={4}>
        <Typography className="what">What Do I Teach</Typography>
        <Typography className="para">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </Typography>
        <button className="about">About Me</button>
      </Grid>
      <Grid item xs={12} md={4} lg={4} xl={4}>
        {subjects.slice(0, 2).map((subject) => (
          <>
            <Typography variant="h5" className="subject-title">
              {subject.subject}
            </Typography>
            <Card key={subject.id} className="cards">
              <CardContent
                sx={{
                  color: subject.color,
                  backgroundColor: subject.backgroundColor,
                }}
              ></CardContent>
            </Card>
          </>
        ))}
      </Grid>

      {/* Third Row */}
      <Grid item xs={12} md={4} lg={4} xl={4}>
        {subjects.slice(2, 4).map((subject) => (
          <>
            <Typography variant="h5" className="subject-title">
              {subject.subject}
            </Typography>
            <Card key={subject.id} className="cards">
              <CardContent
                sx={{
                  color: subject.color,
                  backgroundColor: subject.backgroundColor,
                }}
              ></CardContent>
            </Card>
          </>
        ))}
      </Grid>
    </Grid>
  );
};

export default WhatDoITeach;
