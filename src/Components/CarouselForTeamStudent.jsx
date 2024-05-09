import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "../assets/Css/carouselForTeamStudent.css";
import { useMediaQuery } from "@mui/material";

const Card = ({ index }) => (
  <div className="card">
    <h1>Card {index}</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <button>Read more</button>
  </div>
);

const CarouselForTeamStudent = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div className="container">
      <h3>React Carousel</h3>

      {isSmallScreen ? (
        <ReactCaroussel
          infinite={true}
          autoplay={true}
          speed={3} // 0.5s
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
  );
};
export default CarouselForTeamStudent;
