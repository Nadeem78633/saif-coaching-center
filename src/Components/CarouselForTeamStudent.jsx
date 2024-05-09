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
      <div style={{ position: "relative", width: "100%" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "35px",
            backgroundColor: "rgba(25, 42, 136, .8)",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "20px",
              fontFamily: "Poppins",

              fontWeight: "500",
              textAlign: "center",
              color: "white",
            }}
          >
            Name
          </Typography>
        </div>
        <CardMedia
          component="img"
          sx={{
            height: "100%",
          }}
          image={teacher1}
          alt="owner"
          style={{ zIndex: 0 }} // Ensure the image appears behind the overlay
        />
      </div>
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
