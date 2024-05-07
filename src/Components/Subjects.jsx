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
import physics1 from '../assets/img/subjects/physics-1.svg'
import math from "../assets/img/subjects/math.svg";
import chemistry from "../assets/img/subjects/chemistry.svg";
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
                    image={physics1}
                    alt="dssd"
                  />
                  <Typography className="subject-name">Physics</Typography>
                </CardContent>
              </Card>

              <Card className="math">
                <CardContent>
                  <CardMedia
                    component="img"
                    sx={{ height: 100, objectFit: "contain" }}
                    image={math}
                    alt="dssd"
                  />
                  <Typography className="subject-name">Math</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6} xs={6}>
              <Card className="chemistry">
                <CardContent>
                  <CardMedia
                    component="img"
                    sx={{ height: 100, objectFit: "contain" }}
                    image={chemistry}
                    alt="dssd"
                  />
                  <Typography className="subject-name">Chemsitry</Typography>
                </CardContent>
              </Card>
              <Card className="english">
                <CardContent>
                  <CardMedia
                    component="img"
                    sx={{ height: 140, objectFit: "contain" }}
                    image={physics}
                    alt="dssd"
                  />
                  <Typography className="subject-name">English</Typography>
                </CardContent>
              </Card>
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
