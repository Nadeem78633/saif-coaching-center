import "../assets/Css/home.css";
import {
  Subjects,
  BookALesson,
  OurTopPerformer,
  WhatDoITeach,
  ContactMe,
  MyTeam,
  SaifCoaching,
} from "../Components";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <SaifCoaching />
      <Grid container >
        
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Subjects />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <OurTopPerformer />
        </Grid>
        <div className="container">
          <WhatDoITeach />
        </div>
      </Grid>
      <MyTeam />
      <ContactMe />
    </div>
  );
};

export default Home;
