import "../assets/Css/home.css";
import {
  Subjects,
  CarouselForTeamStudent,
  ContactMe,
  MyTeam,
  SaifCoaching,
  TopPerformer,
  FindUs,
  Address,
  CopyRight
} from "../Components";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <SaifCoaching />
      <CarouselForTeamStudent />
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Subjects />
          <MyTeam />
        </Grid>

        <div className="container">
          <TopPerformer />
        </div>
      </Grid>

      <ContactMe />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FindUs />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Address />
        </Grid>
      </Grid>
      <CopyRight/>
    </div>
  );
};

export default Home;
