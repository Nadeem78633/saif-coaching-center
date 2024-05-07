import {
  CardMedia,
  Grid,
  Card,
  useMediaQuery,
  Typography,
  CardContent,
} from "@mui/material";
import React from "react";
import physics from "../assets/img/subjects/physics.png";
import "../assets/Css/subjects.css";

const Subjects = () => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const subjects = [
    { id: 1, name: "Physics" },
    { id: 2, name: "Chemsitery" },
    { id: 3, name: "Math" },
    { id: 4, name: "English" },
  ];

  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "30px" }}
    >
      <Grid container spacing={2}>
        {isSmallScreen ? (
          <>
            <Grid item sm={6} xs={6}>
              <Card className="physics">
                <CardContent>
                  <CardMedia
                    component="img"
                    sx={{ height: 140, objectFit: "contain" }}
                    image={physics}
                    alt="dssd"
                  />
                  <Typography className="subject-name">Physics</Typography>
                </CardContent>
              </Card>

              <Card style={{ height: "200px" }}>2</Card>
            </Grid>
            <Grid item sm={6} xs={6}>
              <Card style={{ height: "200px" }}>3</Card>
              <Card style={{ height: "300px" }}>4</Card>
            </Grid>
          </>
        ) : (
          subjects.map((subject, index) => {
            return (
              <Grid item key={subject.id} sm={6} md={3} lg={3} xl={3}>
                <Card style={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                </Card>
              </Grid>
            );
          })
        )}
      </Grid>
    </div>
  );
};

export default Subjects;
