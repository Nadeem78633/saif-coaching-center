import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "../assets/Css/topPerformer.css";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { StudentsContext } from "../context/StudentsProvider";

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
const Cards = ({ student }) => {
  console.log(student);
  return (
    <Card className="performer-cards">
      <div style={{ height: "300px" }}>
        <CardMedia
          component="img"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          image={student.imageUrl}
          alt="owner"
        />
      </div>
    </Card>
  );
};

const CarouselForTeamStudent = () => {
  const { students } = useContext(StudentsContext);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div className="performer-20">
      <Typography variant="h6" className="top-performer">
        <Avatar className="top-performer-icon">
          <GroupIcon style={{ color: "white" }} />
        </Avatar>
        <span>Our Top Performer</span>
      </Typography>
      {Object.keys(students).map((year) => (
        <div key={year}>
          <Typography
            style={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: 600,
              marginTop: "30px",
            }}
          >
<<<<<<< HEAD
            {year}
          </Typography>
          <div className="performer-container">
            {isSmallScreen ? (
              <ReactCaroussel
                infinite={true}
                autoplay={true}
                speed={3}
                display={{
                  dots: true,
                  arrows: true,
                }}
              >
                {students[year].map((student, index) => (
                  <Cards key={student.id} student={student} />
                ))}
              </ReactCaroussel>
            ) : (
              <ReactCaroussel
                slidesToShow={3}
                slidesToScroll={1}
                infinite={true}
                autoplay={true}
                speed={3}
                display={{
                  dots: true,
                  arrows: true,
                }}
              >
                {students[year].map((student, index) => (
                  <Cards key={student.id} student={student} />
                ))}
              </ReactCaroussel>
            )}
          </div>
        </div>
      ))}
=======
            <Cards />
            <Cards />
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
>>>>>>> a070bfb4db565aff3124210b8c7b0b03b8b87552
    </div>
  );
};
export default CarouselForTeamStudent;
