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
import GroupIcon from "@mui/icons-material/Group";


import owner from "../assets/img/Teacher/owner.jpeg";
import teacher1 from "../assets/img/Teacher/teacher1.jpeg";
import teacher2 from "../assets/img/Teacher/teacher2.jpeg";
import "../assets/Css/myTeam.css";

const Subjects = () => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const subjects = [
    { name: "Owner", img: owner, bg_color: "#8cf2dd" },
    { name: "Teacher 1", img: teacher1, bg_color: "#ffec90" },
    { name: "Teacher 2", img: teacher2, bg_color: "#74e6ff" },
  ];

  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "30px" }}
    >
      <Typography variant="h6" className="my-team">
        <Avatar className="group">
          <GroupIcon sytle={{ color: "white" }} />
        </Avatar>
        <span>My Team?</span>
      </Typography>
      <Grid container spacing={2}>
        {isSmallScreen ? (
          <>
            <Grid item sm={6} xs={6}>
              <Card className="person1">
                <CardMedia
                  component="img"
                  sx={{
                    height: 115,

                    objectFit: "contain",
                  }}
                  image={owner}
                  alt="owner"
                />
                <CardContent>
                  <Typography className="team-name">Owner</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6} xs={6}>
              <Card className="person2">
                <CardMedia
                  component="img"
                  sx={{ height: 115, objectFit: "contain" }}
                  image={teacher1}
                  alt="teacher1"
                />
                <CardContent>
                  <Typography className="team-name">Teacher 1</Typography>
                </CardContent>
              </Card>
              <Card className="person3">
                <CardMedia
                  component="img"
                  sx={{ height: 115, objectFit: "contain" }}
                  image={teacher2}
                  alt="teacher2"
                />
                <CardContent>
                  <Typography className="team-name">Teacher 2</Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        ) : (
          <>
            {subjects.map((subject, index) => {
              return (
                <Grid item key={subject.id} sm={6} md={4} lg={4} xl={4}>
                  <Card
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    className="my-team-xl-card"
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <CardMedia
                        component="img"
                        sx={{ height: 100, objectFit: "contain" }}
                        image={subject.img}
                        alt="dssd"
                      />
                      <CardContent>
                        <Typography className="team-name">
                          {subject.name}
                        </Typography>
                      </CardContent>
                    </div>
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
