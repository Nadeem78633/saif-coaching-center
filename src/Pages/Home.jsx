import "../assets/Css/home.css";
import {
  Image,
  BookALesson,
  OurTopPerformer,
  WhatDoITeach,
  ContactMe,
  MyTeam,
} from "../Components";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          className="background-color"
        >
          <BookALesson />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Image />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <OurTopPerformer />
        </Grid>
        <div className="container">
          <WhatDoITeach />
          <ContactMe />
        </div>
        <MyTeam />
      </Grid>
    </div>
  );
};

export default Home;
