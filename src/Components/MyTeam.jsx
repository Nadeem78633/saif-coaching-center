import "../assets/Css/myTeam.css";
import { motion } from "framer-motion";
import { Grid, Typography } from "@mui/material";
import teacher1 from "../assets/img/Teacher/teacher1.jpeg";
import teacher2 from "../assets/img/Teacher/teacher2.jpeg";
import teacher3 from "../assets/img/Teacher/teacher3.jpeg";

const cardVariants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Cards({ teacher }) {
  return (
    <motion.div
      className="team-card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      layout="position"
    >
      <motion.div className="team-card" variants={cardVariants}>
        <div style={{ padding: "20px", width: "100%" }}>
          <img src={teacher.img} alt="Img" className="team-card-image" />
        </div>
      </motion.div>
    </motion.div>
  );
}

const teachers = [
  { id: 1, img: teacher1 },
  { id: 2, img: teacher2 },
  { id: 3, img: teacher3 },
];

const MyTeam = () => {
  return (
    <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <Typography variant="h2" className="my-team" gutterBottom={false}>
        My Team
      </Typography>
      <Grid
        container
        spacing={4}
        style={{
          marginBottom: "60px",
        }}
      >
        {teachers.map((teacher) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Cards teacher={teacher} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default MyTeam;
