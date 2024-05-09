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
import english from "../assets/img/subjects/english.svg";
import "../assets/Css/subjects.css";

const Subjects = () => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const subjects = [
    { id: 1, name: "Physics", img: physics1 },
    { id: 2, name: "Chemsitery", img: chemistry },
    { id: 3, name: "Math", img: math, marginTop: "20px" },
    { id: 4, name: "English", img: english, marginTop: "20px" },
  ];

  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "30px" }}
    >
      <Typography variant="h6" className="teach">
        <Avatar className="menu-book">
          <MenuBookIcon sytle={{ color: "white" }} />
        </Avatar>
        <span>What Do I Teach?</span>
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
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Avatar className="math-avatar">
                    <CardMedia
                      component="img"
                      sx={{
                        height: 140,
                        objectFit: "contain",
                        marginTop: "10px",
                      }}
                      image={math}
                      alt="dssd"
                    />
                  </Avatar>
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
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Avatar className="english-avatar">
                    <CardMedia
                      component="img"
                      sx={{
                        height: 140,
                        objectFit: "contain",
                        marginTop: "20px",
                      }}
                      image={english}
                      alt="dssd"
                    />
                  </Avatar>
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
                  <Card style={{ width: "100%" }} className="xl-card">
                    <CardContent>
                      <Avatar className="avatar-lg">
                        <CardMedia
                          component="img"
                          sx={{
                            height: 140,
                            objectFit: "contain",
                            marginTop: subject.marginTop,
                          }}
                          image={subject.img}
                          alt="dssd"
                        />
                      </Avatar>
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
