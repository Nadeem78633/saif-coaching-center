import "../assets/Css/myTeam.css";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

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

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="team-card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      layout="position"
    >
      <div className="splash" style={{ background }} />
      <motion.div className="team-card" variants={cardVariants}>
        <img src="" alt="Img" className="team-card-image" />
      </motion.div>
    </motion.div>
  );
}

const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
];

const MyTeam = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        marginBottom: "60px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {food.map(([emoji, hueA, hueB]) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
        </Grid>
      ))}
    </Grid>
  );
};
export default MyTeam;
