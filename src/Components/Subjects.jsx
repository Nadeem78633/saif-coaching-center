import {
  CardMedia,
  Grid,
  Card,
  useMediaQuery,
  Typography,
  CardContent,
  Avatar,

} from "@mui/material";
import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import physics1 from "../assets/img/subjects/physics-1.svg";
import math from "../assets/img/subjects/math.svg";
import chemistry from "../assets/img/subjects/chemistry.svg";
import english from "../assets/img/subjects/english.png";
import "../assets/Css/subjects.css";

const Subjects = () => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const subjects = [
    { id: 1, name: "Physics", img: physics1, bg_color: "#dcdef7" },
    { id: 2, name: "Chemsitery", img: chemistry, bg_color: "#fff1e0" },
    { id: 3, name: "Math", img: math, bg_color: "#ebedfc" },
    { id: 4, name: "English", img: english, bg_color: "#ffe0d6" },
  ];

  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "30px" }}
    >
      <Typography variant="h6" className="teach">
        <Avatar className="menu-book"><MenuBookIcon sytle={{color:'white'}} /></Avatar>
        <span>What Subjects Do We Teach?</span>
      </Typography>
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
                    image={english}
                    alt="dssd"
                  />
                  <Typography className="subject-name">English</Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        ) : (
          <>
            {subjects.map((subject, index) => {
              return (
                <Grid item key={subject.id} sm={6} md={3} lg={3} xl={3}>
                  <Card
                    style={{ width: "100%", background: subject.bg_color }}
                    className="xl-card"
                  >
                    <CardContent>
                      <CardMedia
                        component="img"
                        sx={{ height: 100, objectFit: "contain" }}
                        image={subject.img}
                        alt="dssd"
                      />
                      <Typography className="subject-name">
                        {subject.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </div>
  );
};

export default Subjects;
