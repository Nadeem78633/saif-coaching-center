import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "../assets/Css/topPerformer.css";
import {
  Card,
  CardContent,
  Avatar,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

import teacher1 from "../assets/img/Teacher/teacher1.jpeg";
const Cards = ({ index }) => (
  <>
    <Card className="performer-cards">
      <CardMedia
        component="img"
        sx={{
          height: "200px",
          objectFit: "fill",
        }}
        image={teacher1}
        alt="owner"
      />
      <CardContent>
        <div>
          <Typography className="name">Name : Suhel</Typography>
        </div>
        <div>
          <Typography>Marks</Typography>
          <Typography>89</Typography>
        </div>
        <div>
          <Typography>Subject</Typography>
          <Typography>Math</Typography>
        </div>
      </CardContent>
    </Card>
  </>
);

const CarouselForTeamStudent = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div className="performer-20">
      <Typography variant="h6" className="top-performer">
        <Avatar className="top-performer-icon">
          <GroupIcon sytle={{ color: "white" }} />
        </Avatar>
        <span>Our Top Performer</span>
      </Typography>
      <Typography
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        Year
      </Typography>
      <div className="performer-container">
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
