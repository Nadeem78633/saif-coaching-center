import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "../assets/Css/carouselForTeamStudent.css";
import { Typography, useMediaQuery } from "@mui/material";
import owner from "../assets/img/Teacher/owner.jpeg";

const Card = ({ index }) => (
  <div className="card">
    <div style={{ padding: "15px" }}>
      <img src={owner} alt="owner" />
    </div>
    <div className="card-text">
      <Typography>SFDFs</Typography>
    </div>
  </div>
);

const CarouselForTeamStudent = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div className="padding-20">
      <div className="carousel-container">
        <h3>React Carousel</h3>
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
            <Card />
            <Card />
            <Card />
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
                <Card key={index} index={index} />
              ))}
          </ReactCaroussel>
        )}
      </div>
    </div>
  );
};
export default CarouselForTeamStudent;
