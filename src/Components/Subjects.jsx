import { CardMedia, Grid } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

const Subjects = () => {
    const subjects = [
        { id: 1, name: "English" },
        { id: 2, name: "Physics" },
        { id: 3, name: "Chemsitery" },
        { id: 4, name: "Math" },
      
  ];
  return (
    <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <Grid container spacing={2}>
        {subjects.map(() => (
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <Card>
              <CardMedia
                component="img"
                  height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
                </Card>
                
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Subjects;
