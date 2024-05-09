import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "../assets/Css/carouselForTeamStudent.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import owner from "../assets/img/Teacher/owner.jpeg";
import teacher1 from "../assets/img/Teacher/teacher1.jpeg";
const Cards = ({ index }) => (
  <>
    <Card className="team-cards">
      <div style={{ width: "50%" }}>
        <CardMedia
          component="img"
          sx={{
            height: "100%",
          }}
          image={teacher1}
          alt="owner"
          style={{ order: -1 }} // Move CardMedia to the start
        />
      </div>
      <CardContent className="team-content" style={{ width: "50%" }}>
        <Typography variant="subtitle1" className="team-name">Name : Suhel</Typography>
        <Typography className="team-name">Marks : 75</Typography>
        <Typography className="team-name">Subject : Chemistry</Typography>
      </CardContent>
    </Card>
  </>
);

const CarouselForTeamStudent = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div className="padding-20">
      <div className="carousel-container">
        {isSmallScreen ? (
          <ReactCaroussel
            infinite={true}
            autoplay={true}
            speed={3}
            display={{
              dots: true,
              arrows: false,
            }}
          >
            <Cards />
            <Cards />
            <Cards />
          </ReactCaroussel>
        ) : (
          <ReactCaroussel
            slidesToShow={3}
            slidesToScroll={1}
            infinite={true}
            autoplay={true}
            speed={3}
            style={{ color: "blue" }}
            display={{
              dots: true,
              arrows: true,
            }}
          >
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <Cards key={index} index={index} />
              ))}
          </ReactCaroussel>
        )}
      </div>
    </div>
  );
};
export default CarouselForTeamStudent;
